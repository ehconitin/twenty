import { Module } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { ActorModule } from 'src/engine/core-modules/actor/actor.module';
import { AdminPanelModule } from 'src/engine/core-modules/admin-panel/admin-panel.module';
import { AiModule } from 'src/engine/core-modules/ai/ai.module';
import { aiModuleFactory } from 'src/engine/core-modules/ai/ai.module-factory';
import { AppTokenModule } from 'src/engine/core-modules/app-token/app-token.module';
import { ApprovedAccessDomainModule } from 'src/engine/core-modules/approved-access-domain/approved-access-domain.module';
import { AuthModule } from 'src/engine/core-modules/auth/auth.module';
import { BillingWebhookModule } from 'src/engine/core-modules/billing-webhook/billing-webhook.module';
import { BillingModule } from 'src/engine/core-modules/billing/billing.module';
import { CacheStorageModule } from 'src/engine/core-modules/cache-storage/cache-storage.module';
import { CaptchaModule } from 'src/engine/core-modules/captcha/captcha.module';
import { captchaModuleFactory } from 'src/engine/core-modules/captcha/captcha.module-factory';
import { EmailModule } from 'src/engine/core-modules/email/email.module';
import { ExceptionHandlerModule } from 'src/engine/core-modules/exception-handler/exception-handler.module';
import { exceptionHandlerModuleFactory } from 'src/engine/core-modules/exception-handler/exception-handler.module-factory';
import { FeatureFlagModule } from 'src/engine/core-modules/feature-flag/feature-flag.module';
import { FileStorageModule } from 'src/engine/core-modules/file-storage/file-storage.module';
import { FileStorageService } from 'src/engine/core-modules/file-storage/file-storage.service';
import { HealthModule } from 'src/engine/core-modules/health/health.module';
import { LabModule } from 'src/engine/core-modules/lab/lab.module';
import { LoggerModule } from 'src/engine/core-modules/logger/logger.module';
import { loggerModuleFactory } from 'src/engine/core-modules/logger/logger.module-factory';
import { MessageQueueModule } from 'src/engine/core-modules/message-queue/message-queue.module';
import { messageQueueModuleFactory } from 'src/engine/core-modules/message-queue/message-queue.module-factory';
import { OpenApiModule } from 'src/engine/core-modules/open-api/open-api.module';
import { PostgresCredentialsModule } from 'src/engine/core-modules/postgres-credentials/postgres-credentials.module';
import { RedisClientModule } from 'src/engine/core-modules/redis-client/redis-client.module';
import { RedisClientService } from 'src/engine/core-modules/redis-client/redis-client.service';
import { SearchModule } from 'src/engine/core-modules/search/search.module';
import { serverlessModuleFactory } from 'src/engine/core-modules/serverless/serverless-module.factory';
import { ServerlessModule } from 'src/engine/core-modules/serverless/serverless.module';
import { WorkspaceSSOModule } from 'src/engine/core-modules/sso/sso.module';
import { TelemetryModule } from 'src/engine/core-modules/telemetry/telemetry.module';
import { TwentyConfigModule } from 'src/engine/core-modules/twenty-config/twenty-config.module';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { WorkspaceInvitationModule } from 'src/engine/core-modules/workspace-invitation/workspace-invitation.module';
import { WorkspaceModule } from 'src/engine/core-modules/workspace/workspace.module';
import { RoleModule } from 'src/engine/metadata-modules/role/role.module';
import { SubscriptionsModule } from 'src/engine/subscriptions/subscriptions.module';
import { WorkspaceEventEmitterModule } from 'src/engine/workspace-event-emitter/workspace-event-emitter.module';

import { AuditModule } from './audit/audit.module';
import { ClientConfigModule } from './client-config/client-config.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    // Core infrastructure
    TwentyConfigModule.forRoot(),
    HealthModule,
    FeatureFlagModule,
    RedisClientModule,
    WorkspaceEventEmitterModule,
    ActorModule,
    TelemetryModule,
    SubscriptionsModule,

    // File and storage
    FileStorageModule.forRoot(),
    FileModule,

    // Logging and error handling
    LoggerModule.forRootAsync({
      useFactory: loggerModuleFactory,
      inject: [TwentyConfigService],
    }),
    ExceptionHandlerModule.forRootAsync({
      useFactory: exceptionHandlerModuleFactory,
      inject: [TwentyConfigService, HttpAdapterHost],
    }),

    // Message queue and caching
    MessageQueueModule.registerAsync({
      useFactory: messageQueueModuleFactory,
      inject: [TwentyConfigService, RedisClientService],
    }),
    CacheStorageModule,

    // External integrations
    EmailModule.forRoot(),
    CaptchaModule.forRoot({
      useFactory: captchaModuleFactory,
      inject: [TwentyConfigService],
    }),
    AiModule.forRoot({
      useFactory: aiModuleFactory,
      inject: [TwentyConfigService],
    }),
    ServerlessModule.forRootAsync({
      useFactory: serverlessModuleFactory,
      inject: [TwentyConfigService, FileStorageService],
    }),

    // Event handling
    EventEmitterModule.forRoot({
      wildcard: true,
    }),

    // System-level operations (auth, billing, etc.)
    AuditModule,
    AuthModule,
    BillingModule,
    BillingWebhookModule,
    ClientConfigModule,
    OpenApiModule,
    AppTokenModule,
    WorkspaceModule,
    WorkspaceInvitationModule,
    WorkspaceSSOModule,
    ApprovedAccessDomainModule,
    PostgresCredentialsModule,
    AdminPanelModule,
    LabModule,
    RoleModule,
    SearchModule,
  ],
  exports: [
    // Export system modules that other modules might need
    AuditModule,
    AuthModule,
    FeatureFlagModule,
    WorkspaceModule,
    WorkspaceInvitationModule,
    WorkspaceSSOModule,
  ],
})
export class SystemEngineModule {}
