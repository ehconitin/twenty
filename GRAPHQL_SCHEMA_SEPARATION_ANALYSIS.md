# GraphQL Schema Separation Analysis

**Project**: Migrate webhooks and API keys from workspace-level to core-level  
**Issue**: Core entities leak into both `/graphql` and `/metadata` endpoints  
**Goal**: Clean separation of system vs workspace GraphQL schemas  

---

## 🚨 Problem Statement

### Current Architecture Issue

Twenty currently has a "leak" where core system entities (webhooks, API keys) appear in **both** GraphQL schemas:

- **`/graphql`** endpoint: Should only contain workspace entities (Companies, People, etc.)
- **`/metadata`** endpoint: Should only contain system entities (Auth, Billing, Core entities, etc.)

**Root Cause**: `CoreEngineModule` contains both system AND workspace modules, and is included in the `/graphql` endpoint configuration.

### Impact

1. **Naming Conflicts**: Required "Core" prefixes (`CoreWebhook`, `CoreApiKey`) to avoid GraphQL type conflicts
2. **API Confusion**: Clients see both `webhooks` and `coreWebhooks` in different schemas
3. **Architecture Violation**: System concerns leaking into workspace schema
4. **Future Debt**: Would require another breaking change to remove "Core" prefixes later

---

## 📊 Current State Analysis

### Frontend GraphQL Codegen Configuration

**Main `/graphql` codegen** (`codegen.cjs`):
```typescript
{
  schema: 'http://localhost:3000/graphql',
  documents: [
    '!./src/modules/databases/**',           // ← Excluded (goes to /metadata)
    '!./src/modules/object-metadata/**',     // ← Excluded (goes to /metadata)  
    '!./src/modules/object-record/**',       // ← Excluded (goes to /metadata)
    '!./src/modules/settings/serverless-functions/**', // ← Excluded (goes to /metadata)
    './src/modules/**/*.tsx',                // ← Everything else included
    './src/modules/**/*.ts',
  ],
  generates: { './src/generated/graphql.tsx': { /* config */ } }
}
```

**Metadata `/metadata` codegen** (`codegen-metadata.cjs`):
```typescript
{
  schema: 'http://localhost:3000/metadata',
  documents: [
    './src/modules/databases/graphql/**/*.ts',              // ← Only these 5 modules
    './src/modules/object-metadata/graphql/*.ts',
    './src/modules/settings/serverless-functions/graphql/**/*.ts',
    './src/modules/object-record/graphql/*.tsx',
    './src/modules/metadata/graphql/*.ts',
  ],
  generates: { './src/generated-metadata/': { /* config */ } }
}
```

### Frontend Modules with GraphQL Operations Analysis

**Total modules with GraphQL directories: 28**

#### Currently Going to `/graphql` (Should be System - THE LEAK)

| Module | Type | Current | Should Go To | Purpose |
|--------|------|---------|--------------|---------|
| **🚨 SYSTEM MODULES LEAKING INTO /graphql** |
| `auth/graphql` | System | `/graphql` | `/metadata` | Authentication (signIn, signUp, checkUserExists) |
| `billing/graphql` | System | `/graphql` | `/metadata` | Billing operations (checkoutSession, plans) |
| `client-config/graphql` | System | `/graphql` | `/metadata` | Client configuration |
| `onboarding/graphql` | System | `/graphql` | `/metadata` | User onboarding flow |
| `subscription/graphql` | System | `/graphql` | `/metadata` | Subscription management |
| `users/graphql` | System | `/graphql` | `/metadata` | User management |
| `workspace/graphql` | System | `/graphql` | `/metadata` | Workspace management |
| `workspace-invitation/graphql` | System | `/graphql` | `/metadata` | Workspace invitations |
| `workspace-member/graphql` | System | `/graphql` | `/metadata` | Workspace member management |
| `analytics/graphql` | System | `/graphql` | `/metadata` | Analytics tracking |
| **🚨 SETTINGS MODULES LEAKING INTO /graphql** |
| `settings/admin-panel/*/graphql` | System | `/graphql` | `/metadata` | Admin panel operations |
| `settings/security/graphql` | System | `/graphql` | `/metadata` | Security settings |
| `settings/lab/graphql` | System | `/graphql` | `/metadata` | Lab features |
| `settings/roles/graphql` | System | `/graphql` | `/metadata` | Role management |
| `settings/developers/graphql` | System | `/graphql` | `/metadata` | **🎯 Webhooks & API Keys** |

#### Currently Going to `/metadata` (Correct)

| Module | Type | Current | Purpose |
|--------|------|---------|---------|
| `databases/graphql` | System | `/metadata` | ✅ Database connections |
| `object-metadata/graphql` | System | `/metadata` | ✅ Object metadata management |
| `settings/serverless-functions/graphql` | System | `/metadata` | ✅ Serverless functions |
| `object-record/graphql` | System | `/metadata` | ✅ Record operations framework |

#### Workspace Operations (Should stay in `/graphql`)

| Module | Type | Current | Purpose |
|--------|------|---------|---------|
| `activities/*/graphql` | Workspace | `/graphql` | ✅ Activities, calendar, emails |
| `attachments/graphql` | Workspace | `/graphql` | ✅ File attachments |
| `command-menu/graphql` | Workspace | `/graphql` | ✅ Search functionality |
| `prefetch/graphql` | Workspace | `/graphql` | ✅ Data prefetching |
| `workflow/graphql` | Workspace | `/graphql` | ✅ Workflow operations |

### The Scale of the Problem

**15+ system modules** are currently leaking into the `/graphql` workspace endpoint that should be in `/metadata`

---

## 🎯 Target Architecture

### Proposed Module Structure

```typescript
// Base infrastructure shared by both endpoints
@Module({
  imports: [
    TwentyConfigModule.forRoot(),
    HealthModule,
    FeatureFlagModule,
    RedisClientModule,
    CacheStorageModule,
    MessageQueueModule,
    LoggerModule,
    ExceptionHandlerModule,
    EmailModule,
    FileStorageModule,
    WorkspaceEventEmitterModule,
    ActorModule,
    TelemetryModule,
    // ... other infrastructure modules
  ]
})
export class BaseEngineModule {}

// System-level entities for /metadata endpoint
@Module({
  imports: [
    BaseEngineModule,
    // System modules with GraphQL resolvers
    AuthModule,
    BillingModule,
    UserModule,
    WorkspaceModule,
    WorkspaceInvitationModule,
    WorkspaceSSOModule,
    ApprovedAccessDomainModule,
    PostgresCredentialsModule,
    AdminPanelModule,
    LabModule,
    AuditModule,
    ClientConfigModule,
    FileModule,
    SearchModule,
    SubscriptionsModule,
    // 🎯 Migrated core entities
    WebhookModule,
    ApiKeyModule,
  ]
})
export class SystemEngineModule {} // NEW

// Workspace-level entities for /graphql endpoint
@Module({
  imports: [
    BaseEngineModule,
    // Only workspace-related modules
    TimelineMessagingModule,
    TimelineCalendarEventModule,
    WorkflowApiModule,
    // Note: Company, Person, etc. are generated dynamically
    // through workspace metadata system
  ]
})
export class WorkspaceEngineModule {} // Refactored CoreEngineModule
```

### New Endpoint Configuration

```typescript
// /graphql endpoint - workspace entities only
const workspaceConfig: YogaDriverConfig = {
  autoSchemaFile: true,
  include: [WorkspaceEngineModule], // ← Clean separation
  conditionalSchema: // ... dynamic workspace schema (Company, Person, etc.)
};

// /metadata endpoint - system entities only
const metadataConfig: YogaDriverConfig = {
  autoSchemaFile: true,
  include: [SystemEngineModule, MetadataEngineModule], // ← Clean separation
};
```

### Expected Schema Separation

After implementation:

```graphql
# /graphql schema - workspace entities
type Query {
  companies: [Company!]!
  people: [Person!]!
  opportunities: [Opportunity!]!
  # ... other workspace entities
  
  # Timeline/messaging for workspace
  timelineThreadsFromCompanyId: [TimelineThread!]!
  timelineCalendarEventsFromCompanyId: [TimelineCalendarEvent!]!
  
  # Workflow operations
  workflows: [Workflow!]!
}

type Mutation {
  createCompany: Company!
  updatePerson: Person!
  # ... workspace mutations
}
```

```graphql
# /metadata schema - system entities  
type Query {
  # Clean names - no "Core" prefix!
  webhooks: [Webhook!]!
  apiKeys: [ApiKey!]!
  
  # Auth operations
  checkUserExists: CheckUserExistOutput!
  
  # Workspace management
  workspaces: [Workspace!]!
  
  # Billing operations
  plans: [BillingPlan!]!
  
  # Metadata operations
  objectMetadataItems: [ObjectMetadata!]!
  fieldMetadataItems: [FieldMetadata!]!
}

type Mutation {
  # Clean names - no "Core" prefix!
  createWebhook: Webhook!
  createApiKey: ApiKey!
  
  # Auth mutations
  signIn: AuthTokens!
  signUp: AuthTokens!
  
  # Billing mutations  
  checkoutSession: BillingSession!
}
```

---

## 📋 Implementation Plan

### Phase 1: Frontend Codegen Separation (Felix's "Inversion" Strategy)

#### Step 1.1: Implement Default-to-Metadata Approach
Update `packages/twenty-front/codegen.cjs` to use "inversion" - default to `/metadata`, explicitly include workspace operations:

```typescript
// NEW: Default to /metadata endpoint
{
  schema: 'http://localhost:3000/metadata',
  documents: [
    './src/modules/**/*.tsx',
    './src/modules/**/*.ts',
    // Exclude workspace operations (shorter list)
    '!./src/modules/activities/**',
    '!./src/modules/attachments/**', 
    '!./src/modules/command-menu/**',
    '!./src/modules/prefetch/**',
    '!./src/modules/workflow/**',
    // Exclude tests
    '!./src/**/*.test.tsx',
    '!./src/**/*.stories.tsx',
    '!./src/**/__mocks__/*.ts',
  ],
  generates: { './src/generated-metadata/graphql.ts': { /* config */ } }
}
```

Update `packages/twenty-front/codegen-metadata.cjs` to be workspace-only:
```typescript
// NEW: Only workspace operations
{
  schema: 'http://localhost:3000/graphql',
  documents: [
    './src/modules/activities/**/*.ts',
    './src/modules/attachments/graphql/**/*.ts',
    './src/modules/command-menu/graphql/**/*.ts', 
    './src/modules/prefetch/graphql/**/*.ts',
    './src/modules/workflow/graphql/**/*.ts',
  ],
  generates: { './src/generated/graphql.tsx': { /* config */ } }
}
```

#### Step 1.2: Update Frontend Import Statements
- [ ] Update all system modules to import from `~/generated-metadata/graphql`
- [ ] Update all workspace modules to import from `~/generated/graphql`
- [ ] Test that all imports resolve correctly

### Phase 2: Backend Schema Separation  

#### Step 2.1: Backend Module Restructuring
Based on our analysis, restructure backend modules:

```typescript
// NEW: System-only module for /metadata endpoint
@Module({
  imports: [
    // Infrastructure (shared)
    BaseEngineModule,
    
    // System modules (15+ modules currently leaking)
    AuthModule,
    BillingModule, 
    ClientConfigModule,
    OnboardingModule,
    SubscriptionModule,
    UserModule,
    WorkspaceModule,
    WorkspaceInvitationModule,
    WorkspaceMemberModule,
    AnalyticsModule,
    AdminPanelModule,
    SecurityModule,
    LabModule,
    RoleModule,
    DeveloperModule, // 🎯 Contains WebhookModule, ApiKeyModule
    
    // Metadata modules (already correct)
    DatabaseModule,
    ObjectMetadataModule,
    ServerlessFunctionModule,
    ObjectRecordModule,
  ]
})
export class SystemEngineModule {}

// NEW: Workspace-only module for /graphql endpoint  
@Module({
  imports: [
    // Infrastructure (shared)
    BaseEngineModule,
    
    // Only workspace operations
    ActivitiesModule,
    AttachmentsModule,
    CommandMenuModule,
    PrefetchModule,
    WorkflowModule,
    // Note: Companies, People, etc. are dynamically generated
  ]
})
export class WorkspaceEngineModule {}
```

#### Step 2.2: Update Endpoint Configurations
- [ ] Update `/graphql` endpoint to use `WorkspaceEngineModule`
- [ ] Update `/metadata` endpoint to use `SystemEngineModule + MetadataEngineModule`
- [ ] Test schema separation

### Phase 3: Clean Up & Naming

#### Step 3.1: Remove "Core" Prefixes (After Separation)
Once schemas are separated, we can use clean names:
- [ ] Change `@ObjectType('CoreWebhook')` to `@ObjectType('Webhook')`
- [ ] Change `@ObjectType('CoreApiKey')` to `@ObjectType('ApiKey')`
- [ ] Update resolver method names: `coreWebhooks` → `webhooks`
- [ ] Update mutation names: `createCoreWebhook` → `createWebhook`

#### Step 3.2: Update Frontend to Use Clean Names
- [ ] Update webhook queries/mutations to use clean names
- [ ] Update API key queries/mutations to use clean names
- [ ] Update TypeScript types
- [ ] Test all functionality

### Phase 4: Validation & Testing

#### Step 4.1: Schema Validation
- [ ] Verify `/graphql` contains only workspace entities
- [ ] Verify `/metadata` contains only system entities
- [ ] Confirm no "Core" prefixes needed
- [ ] Test all GraphQL operations work

#### Step 4.2: Frontend Integration Testing
- [ ] Test all auth flows work with `/metadata` endpoint
- [ ] Test all billing operations work with `/metadata` endpoint
- [ ] Test all workspace operations work with `/graphql` endpoint
- [ ] Test webhook/API key operations work with clean names

---

## 🔍 Risk Assessment & Mitigation

### High Risk Items

1. **Circular Dependencies**: System and workspace modules may have circular imports
   - **Mitigation**: Careful dependency analysis before refactoring
   - **Detection**: Run build after each module move

2. **Frontend Breaking Changes**: API endpoint changes affect all frontend calls
   - **Mitigation**: Implement changes incrementally with feature flags
   - **Testing**: Comprehensive E2E testing

3. **Third-party Integrations**: Zapier and other integrations rely on current webhook schema
   - **Mitigation**: Maintain backward compatibility during transition
   - **Communication**: Update external integration docs

### Medium Risk Items

1. **Build/Import Errors**: Module restructuring may break imports
   - **Mitigation**: Update all imports systematically
   - **Testing**: Run full build after each change

2. **Authentication Flow**: Auth calls moving to `/metadata` may affect auth flow
   - **Mitigation**: Test all auth scenarios thoroughly
   - **Rollback**: Keep old auth flow as backup

### Low Risk Items

1. **GraphQL Schema Changes**: Schema updates are backward compatible
2. **Database Changes**: No database schema changes required
3. **API Documentation**: Can be updated post-implementation

---

## ✅ Success Criteria

### Technical Success Criteria

- [ ] No "Core" prefixes required in GraphQL types
- [ ] `/graphql` endpoint contains only workspace entities
- [ ] `/metadata` endpoint contains only system entities  
- [ ] All existing functionality works unchanged
- [ ] No circular dependencies
- [ ] Clean module separation

### Business Success Criteria

- [ ] No breaking changes for end users
- [ ] API is more intuitive (webhooks vs coreWebhooks)
- [ ] Easier to maintain and extend
- [ ] Better separation of concerns
- [ ] Foundation for future system/workspace entity additions

---

## 📚 References

### Key Files to Modify

- `packages/twenty-server/src/engine/core-modules/core-engine.module.ts`
- `packages/twenty-server/src/engine/api/graphql/graphql-config/graphql-config.service.ts`
- `packages/twenty-server/src/engine/api/graphql/metadata.module-factory.ts`
- `packages/twenty-server/src/engine/core-modules/webhook/webhook.entity.ts`
- `packages/twenty-server/src/engine/core-modules/api-key/api-key.entity.ts`
- `packages/twenty-front/codegen.cjs`
- Frontend GraphQL operation files

### Related Documentation

- [Twenty Architecture Overview](link-to-docs)
- [GraphQL API Documentation](link-to-docs)
- [Webhook Migration PR](link-to-current-pr)

---

## 🔍 Key Findings Summary

### What We Discovered

1. **Massive System Module Leak**: 15+ system modules with GraphQL operations are incorrectly going to the `/graphql` workspace endpoint instead of `/metadata`

2. **Felix's "Inversion" Strategy Makes Sense**: Currently everything defaults to `/graphql` and we manually exclude 4 modules. Better to default to `/metadata` and manually include ~5 workspace modules.

3. **Workspace Operations Are Actually Finite**: Only 5 modules have workspace-specific GraphQL operations:
   - `activities/**` (calendar, emails, timeline)
   - `attachments` (file operations)
   - `command-menu` (search)
   - `prefetch` (data loading)
   - `workflow` (workflow operations)

4. **The "Core" Prefix Problem**: Your webhooks/API keys need "Core" prefixes only because system operations are leaking into the workspace schema where workspace-level webhooks already exist.

5. **Root Cause**: The current codegen configuration is backwards - it should default to system (`/metadata`) and explicitly include workspace operations (`/graphql`).

### The Solution Path

**Phase 1** (Frontend): Implement Felix's inversion strategy in codegen configs
**Phase 2** (Backend): Restructure modules to match the separation  
**Phase 3** (Cleanup): Remove "Core" prefixes once schemas are properly separated
**Phase 4** (Testing): Validate the clean separation works

### Next Steps

1. **Start with Phase 1** - it's the safest and will immediately solve the manual maintenance problem
2. **Test the inversion** - verify all system operations go to `/metadata` and workspace operations go to `/graphql`
3. **Then tackle backend separation** - once frontend is working, fix the backend module structure
4. **Finally clean up naming** - remove "Core" prefixes when there are no more conflicts

---

**Created**: December 2024  
**Author**: Architecture Analysis  
**Status**: Analysis Complete - Ready for Implementation Review 