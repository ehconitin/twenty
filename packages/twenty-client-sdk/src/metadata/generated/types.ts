export default {
    "scalars": [
        1,
        2,
        4,
        8,
        9,
        12,
        14,
        16,
        19,
        26,
        28,
        29,
        36,
        40,
        42,
        49,
        65,
        73,
        83,
        89,
        102,
        106,
        107,
        109,
        114,
        120,
        126,
        131,
        137,
        140,
        141,
        142,
        143,
        151,
        153,
        167,
        171,
        173,
        175,
        224,
        225,
        252,
        256,
        257,
        259,
        270,
        276,
        280,
        284,
        287,
        294,
        311,
        313,
        319,
        321,
        334,
        341,
        342,
        343,
        355,
        357,
        374,
        375,
        376,
        377,
        378,
        379,
        381,
        382,
        383,
        386,
        387,
        389,
        392,
        397,
        401,
        410,
        417,
        419,
        422,
        429,
        433,
        434,
        439,
        443,
        466,
        468,
        469,
        477,
        489,
        491,
        497,
        502,
        523,
        536,
        537,
        539,
        566,
        568,
        570,
        635,
        655,
        662,
        664,
        668,
        679,
        685,
        686,
        688,
        689,
        691,
        692,
        693,
        696,
        697,
        698,
        703,
        705,
        708,
        713,
        714,
        715,
        718,
        719
    ],
    "types": {
        "AccessGroupPropagationProgress": {
            "isInProgress": [
                1
            ],
            "remainingRecordCount": [
                2
            ],
            "totalRecordCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "Boolean": {},
        "Int": {},
        "ActivateWorkspaceInput": {
            "displayName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "AddQuerySubscriptionInput": {
            "eventStreamId": [
                4
            ],
            "operationSignature": [
                341
            ],
            "queryId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Agent": {
            "applicationId": [
                566
            ],
            "avatarColor": [
                4
            ],
            "avatarShape": [
                4
            ],
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isCustom": [
                1
            ],
            "isSystem": [
                1
            ],
            "label": [
                4
            ],
            "modelConfiguration": [
                341
            ],
            "modelId": [
                4
            ],
            "name": [
                4
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                341
            ],
            "roleId": [
                566
            ],
            "triggers": [
                341
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannel": {
            "applicationId": [
                566
            ],
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isAccessible": [
                1
            ],
            "isCustom": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "roleIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "Float": {},
        "AgentChatChannelAssignmentFilter": {},
        "AgentChatChannelRole": {
            "canAccessAllAgentChatChannels": [
                1
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannelSummary": {
            "assignedCount": [
                2
            ],
            "assignedToMeCount": [
                2
            ],
            "channelId": [
                566
            ],
            "doneCount": [
                2
            ],
            "hasUnreadAssignedToMe": [
                1
            ],
            "hasUnreadOpen": [
                1
            ],
            "mentionedCount": [
                2
            ],
            "needsInputCount": [
                2
            ],
            "openCount": [
                2
            ],
            "snoozedCount": [
                2
            ],
            "unassignedCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannelThreadFilter": {},
        "AgentChatChannelThreadIds": {
            "endCursor": [
                4
            ],
            "hasNextPage": [
                1
            ],
            "threadIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannelThreadStatus": {},
        "AgentChatEvent": {
            "event": [
                341
            ],
            "threadId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatInboxAction": {},
        "AgentChatOpenThreadsSummary": {
            "assignedThreadCount": [
                2
            ],
            "assignedToMeThreadCount": [
                2
            ],
            "hasUnreadAssignedThread": [
                1
            ],
            "hasUnreadMentionThread": [
                1
            ],
            "hasUnreadOpenThread": [
                1
            ],
            "mentionThreadCount": [
                2
            ],
            "needsInputThreadCount": [
                2
            ],
            "openThreadCount": [
                2
            ],
            "unassignedThreadCount": [
                2
            ],
            "unreadOpenThreadCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatThread": {
            "contextWindowTokens": [
                2
            ],
            "conversationSize": [
                2
            ],
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "id": [
                19
            ],
            "isAssistantParticipant": [
                1
            ],
            "title": [
                4
            ],
            "totalCacheReadTokens": [
                2
            ],
            "totalInputCredits": [
                8
            ],
            "totalInputTokens": [
                2
            ],
            "totalOutputCredits": [
                8
            ],
            "totalOutputTokens": [
                2
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "ID": {},
        "AgentChatThreadParticipant": {
            "archivedAt": [
                225
            ],
            "id": [
                566
            ],
            "isSubscribed": [
                1
            ],
            "lastMentionedAt": [
                225
            ],
            "lastReadAt": [
                225
            ],
            "mentionsResolvedAt": [
                225
            ],
            "snoozedUntil": [
                225
            ],
            "threadId": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "AgentIdInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "AgentMessage": {
            "agentId": [
                566
            ],
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "isBuiltInAssistant": [
                1
            ],
            "parts": [
                23
            ],
            "processedAt": [
                225
            ],
            "reactions": [
                24
            ],
            "role": [
                4
            ],
            "senderApplicationId": [
                566
            ],
            "senderUserWorkspaceId": [
                566
            ],
            "senderWorkspaceMemberId": [
                566
            ],
            "status": [
                4
            ],
            "threadId": [
                566
            ],
            "turnId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "AgentMessagePart": {
            "createdAt": [
                225
            ],
            "errorMessage": [
                4
            ],
            "fileFilename": [
                4
            ],
            "fileId": [
                566
            ],
            "fileMediaType": [
                4
            ],
            "fileUrl": [
                4
            ],
            "id": [
                566
            ],
            "messageId": [
                566
            ],
            "orderIndex": [
                2
            ],
            "providerExecuted": [
                1
            ],
            "providerMetadata": [
                341
            ],
            "reasoningContent": [
                4
            ],
            "sourceDocumentFilename": [
                4
            ],
            "sourceDocumentMediaType": [
                4
            ],
            "sourceDocumentSourceId": [
                4
            ],
            "sourceDocumentTitle": [
                4
            ],
            "sourceUrlSourceId": [
                4
            ],
            "sourceUrlTitle": [
                4
            ],
            "sourceUrlUrl": [
                4
            ],
            "state": [
                4
            ],
            "textContent": [
                4
            ],
            "toolCallId": [
                4
            ],
            "toolInput": [
                341
            ],
            "toolName": [
                4
            ],
            "toolOutput": [
                341
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentMessageReactionSummary": {
            "agentIds": [
                566
            ],
            "emoji": [
                4
            ],
            "hasAssistantReacted": [
                1
            ],
            "workspaceMemberIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "AgentRun": {
            "canReadThread": [
                1
            ],
            "createdAt": [
                225
            ],
            "creatorName": [
                4
            ],
            "creatorSource": [
                4
            ],
            "credits": [
                8
            ],
            "endedAt": [
                225
            ],
            "errorMessage": [
                4
            ],
            "id": [
                566
            ],
            "input": [
                4
            ],
            "inputTokens": [
                2
            ],
            "modelId": [
                4
            ],
            "outputTokens": [
                2
            ],
            "reply": [
                4
            ],
            "startedAt": [
                225
            ],
            "status": [
                26
            ],
            "threadId": [
                566
            ],
            "threadTitle": [
                4
            ],
            "toolNames": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentTurnStatus": {},
        "AggregateChartConfiguration": {
            "aggregateFieldMetadataId": [
                566
            ],
            "aggregateOperation": [
                28
            ],
            "configurationType": [
                696
            ],
            "dashboardFilterBindings": [
                222
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "filter": [
                341
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "label": [
                4
            ],
            "numberFormat": [
                153
            ],
            "prefix": [
                4
            ],
            "ratioAggregateConfig": [
                461
            ],
            "suffix": [
                4
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AggregateOperations": {},
        "AiChatAssistantMode": {},
        "AiChatAssistantProfile": {
            "avatarColor": [
                4
            ],
            "avatarFace": [
                4
            ],
            "avatarShape": [
                4
            ],
            "displayName": [
                4
            ],
            "isAvatarAnimated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AiChatAssistantProfileInput": {
            "avatarColor": [
                4
            ],
            "avatarFace": [
                4
            ],
            "avatarShape": [
                4
            ],
            "displayName": [
                4
            ],
            "isAvatarAnimated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AiChatUsage": {
            "consumedValue": [
                109
            ],
            "kind": [
                4
            ],
            "limitValue": [
                109
            ],
            "periodEnd": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "AiChatUserCreditsUsage": {
            "consumedValue": [
                109
            ],
            "limitValue": [
                109
            ],
            "periodEnd": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "AiDataPolicy": {
            "isProductImprovementDataSharingEnabled": [
                1
            ],
            "isZeroDataRetentionRequired": [
                1
            ],
            "requiredDataResidencyRegion": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AiDataPolicyInput": {
            "isProductImprovementDataSharingEnabled": [
                1
            ],
            "isZeroDataRetentionRequired": [
                1
            ],
            "requiredDataResidencyRegion": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AiModelTier": {},
        "AiRunUsage": {
            "inputTokens": [
                2
            ],
            "outputTokens": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "AiSystemPromptPreview": {
            "estimatedTokenCount": [
                2
            ],
            "sections": [
                39
            ],
            "__typename": [
                4
            ]
        },
        "AiSystemPromptSection": {
            "content": [
                4
            ],
            "estimatedTokenCount": [
                2
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AllMetadataName": {},
        "Analytics": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AnalyticsType": {},
        "ApiConfig": {
            "mutationMaximumAffectedRecords": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "ApiKey": {
            "createdAt": [
                225
            ],
            "expiresAt": [
                225
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "revokedAt": [
                225
            ],
            "role": [
                483
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "ApiKeyForRole": {
            "expiresAt": [
                225
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "revokedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "ApiKeyToken": {
            "token": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppConnection": {
            "accessToken": [
                4
            ],
            "authFailedAt": [
                4
            ],
            "authFailedReason": [
                4
            ],
            "externalAccountId": [
                4
            ],
            "handle": [
                4
            ],
            "id": [
                19
            ],
            "name": [
                4
            ],
            "providerName": [
                4
            ],
            "providerType": [
                4
            ],
            "scope": [
                171
            ],
            "scopes": [
                4
            ],
            "userWorkspaceId": [
                4
            ],
            "visibility": [
                4
            ],
            "workspaceMemberId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppKeyValue": {
            "key": [
                4
            ],
            "scope": [
                49
            ],
            "value": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "AppKeyValueScope": {},
        "AppMessageAttachmentInput": {
            "fileId": [
                566
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppMessageFolderInput": {
            "externalId": [
                4
            ],
            "isSynced": [
                1
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppMessageInput": {
            "attachments": [
                50
            ],
            "externalId": [
                4
            ],
            "folderExternalIds": [
                4
            ],
            "participants": [
                53
            ],
            "receivedAt": [
                225
            ],
            "subject": [
                4
            ],
            "text": [
                4
            ],
            "threadExternalId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppMessageParticipantInput": {
            "displayName": [
                4
            ],
            "handle": [
                4
            ],
            "personId": [
                566
            ],
            "role": [
                383
            ],
            "workspaceMemberId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "Application": {
            "agents": [
                6
            ],
            "applicationRegistration": [
                85
            ],
            "applicationRegistrationId": [
                566
            ],
            "applicationVariables": [
                88
            ],
            "autoUpgrade": [
                1
            ],
            "availablePackages": [
                341
            ],
            "canBeUninstalled": [
                1
            ],
            "commandMenuItems": [
                166
            ],
            "content": [
                60
            ],
            "createdAt": [
                225
            ],
            "defaultLogicFunctionRole": [
                483
            ],
            "defaultRoleId": [
                4
            ],
            "description": [
                4
            ],
            "frontComponents": [
                301
            ],
            "grantRoleId": [
                566
            ],
            "grantedIframeMediaPermissions": [
                323
            ],
            "healthCheckLogicFunctionId": [
                566
            ],
            "id": [
                566
            ],
            "isUninstallBlockedByOtherWorkspaceInstallations": [
                1
            ],
            "logicFunctions": [
                354
            ],
            "logoFileId": [
                566
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "objects": [
                403
            ],
            "packageJsonChecksum": [
                4
            ],
            "packageJsonFileId": [
                566
            ],
            "requestedIframeMediaPermissions": [
                323
            ],
            "runOnUserPreferences": [
                1
            ],
            "settingsCustomTabFrontComponentId": [
                566
            ],
            "settingsMenuItems": [
                522
            ],
            "universalIdentifier": [
                4
            ],
            "version": [
                4
            ],
            "yarnLockChecksum": [
                4
            ],
            "yarnLockFileId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationAuthorization": {
            "applicationId": [
                566
            ],
            "applicationName": [
                4
            ],
            "applicationUniversalIdentifier": [
                4
            ],
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "lastAuthorizedAt": [
                225
            ],
            "lastUsedAt": [
                225
            ],
            "scopes": [
                4
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationCapabilityGrant": {
            "grantedCapabilities": [
                4
            ],
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationConnectedAccountDTO": {
            "applicationId": [
                566
            ],
            "archivedAt": [
                225
            ],
            "authFailedAt": [
                225
            ],
            "authFailedReason": [
                4
            ],
            "connectionParameters": [
                457
            ],
            "connectionProviderId": [
                566
            ],
            "createdAt": [
                225
            ],
            "handle": [
                4
            ],
            "handleAliases": [
                4
            ],
            "id": [
                566
            ],
            "isOwnedByCurrentUser": [
                1
            ],
            "lastCredentialsRefreshedAt": [
                225
            ],
            "lastSignedInAt": [
                225
            ],
            "name": [
                4
            ],
            "provider": [
                4
            ],
            "scope": [
                171
            ],
            "scopes": [
                4
            ],
            "updatedAt": [
                225
            ],
            "userWorkspaceId": [
                566
            ],
            "visibility": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationConnectionProvider": {
            "applicationId": [
                4
            ],
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "oauth": [
                59
            ],
            "scope": [
                175
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationConnectionProviderOAuthConfig": {
            "isClientCredentialsConfigured": [
                1
            ],
            "scopes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationContent": {
            "agents": [
                61
            ],
            "commandMenuItems": [
                61
            ],
            "connectionProviders": [
                61
            ],
            "fields": [
                61
            ],
            "frontComponents": [
                61
            ],
            "indexes": [
                61
            ],
            "logicFunctions": [
                61
            ],
            "navigationMenuItems": [
                61
            ],
            "objects": [
                61
            ],
            "pageLayoutTabs": [
                61
            ],
            "pageLayouts": [
                61
            ],
            "permissionFlags": [
                61
            ],
            "publicAssets": [
                61
            ],
            "roles": [
                61
            ],
            "skills": [
                61
            ],
            "translations": [
                61
            ],
            "viewFields": [
                61
            ],
            "views": [
                61
            ],
            "workflows": [
                61
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationContentItem": {
            "color": [
                4
            ],
            "count": [
                2
            ],
            "description": [
                4
            ],
            "fieldUniversalIdentifier": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                4
            ],
            "label": [
                4
            ],
            "objectUniversalIdentifier": [
                4
            ],
            "parentLabel": [
                4
            ],
            "parentUniversalIdentifier": [
                4
            ],
            "position": [
                8
            ],
            "tag": [
                4
            ],
            "timeoutSeconds": [
                2
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExport": {
            "application": [
                63
            ],
            "coverage": [
                64
            ],
            "files": [
                66
            ],
            "manifest": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExportApplication": {
            "displayName": [
                4
            ],
            "sourceType": [
                83
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExportCoverageEntry": {
            "metadataName": [
                4
            ],
            "reason": [
                4
            ],
            "status": [
                65
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExportCoverageStatus": {},
        "ApplicationExportFile": {
            "content": [
                4
            ],
            "folder": [
                4
            ],
            "path": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileCompletionError": {
            "fileId": [
                566
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileUploadError": {
            "fileFolder": [
                294
            ],
            "filePath": [
                4
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                294
            ],
            "filePath": [
                4
            ],
            "size": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileUploadTarget": {
            "contentType": [
                4
            ],
            "expiresAt": [
                225
            ],
            "fileFolder": [
                294
            ],
            "fileId": [
                566
            ],
            "filePath": [
                4
            ],
            "uploadUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationHealthCheckAction": {
            "label": [
                4
            ],
            "location": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationHealthCheckResult": {
            "action": [
                71
            ],
            "description": [
                4
            ],
            "status": [
                73
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationHealthStatus": {},
        "ApplicationMonitoring": {
            "activity": [
                75
            ],
            "bucketSizeInSeconds": [
                2
            ],
            "creditUsage": [
                76
            ],
            "creditsUsed": [
                8
            ],
            "failedRunCount": [
                2
            ],
            "functions": [
                77
            ],
            "issues": [
                78
            ],
            "lifecycle": [
                79
            ],
            "lifecycleFailureCount": [
                2
            ],
            "lookbackInHours": [
                2
            ],
            "periodEnd": [
                225
            ],
            "periodStart": [
                225
            ],
            "rateLimitEventCount": [
                2
            ],
            "runCount": [
                2
            ],
            "versions": [
                80
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringActivityBucket": {
            "bucketStart": [
                225
            ],
            "errorCount": [
                2
            ],
            "rateLimitedJobCount": [
                2
            ],
            "rateLimitedRequestCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringCreditBucket": {
            "bucketStart": [
                225
            ],
            "creditsUsed": [
                8
            ],
            "operationLabel": [
                4
            ],
            "operationType": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringFunction": {
            "failedRunCount": [
                2
            ],
            "logicFunctionName": [
                4
            ],
            "p95DurationMs": [
                8
            ],
            "runCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringIssue": {
            "affectedInstallCount": [
                2
            ],
            "errorCode": [
                4
            ],
            "eventCount": [
                2
            ],
            "lastSeenAt": [
                225
            ],
            "level": [
                4
            ],
            "logicFunctionName": [
                4
            ],
            "source": [
                4
            ],
            "versions": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringLifecycleBucket": {
            "bucketStart": [
                225
            ],
            "failedCount": [
                2
            ],
            "installCount": [
                2
            ],
            "uninstallCount": [
                2
            ],
            "upgradeCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringVersion": {
            "activeInstallCount": [
                2
            ],
            "failedRunCount": [
                2
            ],
            "runCount": [
                2
            ],
            "version": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationPreferences": {
            "applicationId": [
                566
            ],
            "connectionProviders": [
                58
            ],
            "hasUserHealthCheck": [
                1
            ],
            "settingsMenuItems": [
                522
            ],
            "variables": [
                667
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistration": {
            "createdAt": [
                225
            ],
            "galleryImagesUrls": [
                4
            ],
            "id": [
                566
            ],
            "isConfigured": [
                1
            ],
            "isListed": [
                1
            ],
            "isPreInstalled": [
                1
            ],
            "latestAvailableVersion": [
                4
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "oAuthClientId": [
                4
            ],
            "oAuthRedirectUris": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "ownerWorkspaceId": [
                566
            ],
            "sourcePackage": [
                4
            ],
            "sourceType": [
                83
            ],
            "universalIdentifier": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "ApplicationRegistrationStats": {
            "activeInstalls": [
                2
            ],
            "autoUpdateEnabled": [
                2
            ],
            "creditsUsedBreakdown": [
                220
            ],
            "mostInstalledVersion": [
                4
            ],
            "suspendedInstalls": [
                2
            ],
            "totalCreditsUsed": [
                8
            ],
            "versionDistribution": [
                677
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistrationSummary": {
            "id": [
                566
            ],
            "latestAvailableVersion": [
                4
            ],
            "logoUrl": [
                4
            ],
            "sourceType": [
                83
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistrationVariable": {
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "id": [
                566
            ],
            "isDeprecated": [
                1
            ],
            "isFilled": [
                1
            ],
            "isRequired": [
                1
            ],
            "isSecret": [
                1
            ],
            "key": [
                4
            ],
            "options": [
                341
            ],
            "type": [
                4
            ],
            "updatedAt": [
                225
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationTokenPair": {
            "applicationAccessToken": [
                94
            ],
            "applicationRefreshToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationVariable": {
            "description": [
                4
            ],
            "id": [
                566
            ],
            "isDeprecated": [
                1
            ],
            "isRequired": [
                1
            ],
            "isSecret": [
                1
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "options": [
                341
            ],
            "scope": [
                89
            ],
            "type": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationVariableScope": {},
        "ApprovedAccessDomain": {
            "createdAt": [
                225
            ],
            "domain": [
                4
            ],
            "id": [
                566
            ],
            "isValidated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ArchiveInboxThreadInput": {
            "threadId": [
                566
            ],
            "workspaceMemberIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "AuthBypassProviders": {
            "google": [
                1
            ],
            "microsoft": [
                1
            ],
            "password": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AuthProviders": {
            "google": [
                1
            ],
            "magicLink": [
                1
            ],
            "microsoft": [
                1
            ],
            "password": [
                1
            ],
            "sso": [
                501
            ],
            "__typename": [
                4
            ]
        },
        "AuthToken": {
            "expiresAt": [
                225
            ],
            "token": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AuthTokenPair": {
            "accessOrWorkspaceAgnosticToken": [
                94
            ],
            "refreshToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "AuthTokens": {
            "tokens": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "AuthorizeApp": {
            "redirectUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AutocompleteResult": {
            "placeId": [
                4
            ],
            "text": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AvailableWorkspace": {
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "inviteHash": [
                4
            ],
            "loginToken": [
                4
            ],
            "logo": [
                4
            ],
            "personalInviteToken": [
                4
            ],
            "sso": [
                500
            ],
            "workspaceUrls": [
                720
            ],
            "__typename": [
                4
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                99
            ],
            "availableWorkspacesForSignUp": [
                99
            ],
            "__typename": [
                4
            ]
        },
        "AvailableWorkspacesAndAccessTokens": {
            "availableWorkspaces": [
                100
            ],
            "tokens": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "AxisNameDisplay": {},
        "BarChartConfiguration": {
            "aggregateFieldMetadataId": [
                566
            ],
            "aggregateOperation": [
                28
            ],
            "axisNameDisplay": [
                102
            ],
            "color": [
                4
            ],
            "configurationType": [
                696
            ],
            "dashboardFilterBindings": [
                222
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "displayLegend": [
                1
            ],
            "filter": [
                341
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "groupMode": [
                106
            ],
            "isCumulative": [
                1
            ],
            "layout": [
                107
            ],
            "numberFormat": [
                153
            ],
            "omitNullValues": [
                1
            ],
            "primaryAxisDateGranularity": [
                417
            ],
            "primaryAxisGroupByFieldMetadataId": [
                566
            ],
            "primaryAxisGroupBySubFieldName": [
                4
            ],
            "primaryAxisManualSortOrder": [
                4
            ],
            "primaryAxisOrderBy": [
                319
            ],
            "rangeMax": [
                8
            ],
            "rangeMin": [
                8
            ],
            "secondaryAxisGroupByDateGranularity": [
                417
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                566
            ],
            "secondaryAxisGroupBySubFieldName": [
                4
            ],
            "secondaryAxisManualSortOrder": [
                4
            ],
            "secondaryAxisOrderBy": [
                319
            ],
            "splitMultiValueFields": [
                1
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BarChartData": {
            "data": [
                341
            ],
            "formattedToRawLookup": [
                341
            ],
            "groupMode": [
                106
            ],
            "hasTooManyGroups": [
                1
            ],
            "indexBy": [
                4
            ],
            "keys": [
                4
            ],
            "layout": [
                107
            ],
            "series": [
                108
            ],
            "showDataLabels": [
                1
            ],
            "showLegend": [
                1
            ],
            "xAxisLabel": [
                4
            ],
            "yAxisLabel": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BarChartDataInput": {
            "configuration": [
                341
            ],
            "dashboardFilterValues": [
                223
            ],
            "objectMetadataId": [
                566
            ],
            "viewerTimeZone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "BarChartSeries": {
            "key": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BigInt": {},
        "Billing": {
            "billingUrl": [
                4
            ],
            "isBillingEnabled": [
                1
            ],
            "stripePublishableKey": [
                4
            ],
            "trialPeriods": [
                135
            ],
            "__typename": [
                4
            ]
        },
        "BillingCustomer": {
            "hasPaymentMethod": [
                1
            ],
            "id": [
                566
            ],
            "userCreditsFallback": [
                668
            ],
            "__typename": [
                4
            ]
        },
        "BillingEndTrialPeriod": {
            "billingPortalUrl": [
                4
            ],
            "billingSubscriptions": [
                130
            ],
            "currentBillingSubscription": [
                130
            ],
            "hasPaymentMethod": [
                1
            ],
            "status": [
                537
            ],
            "__typename": [
                4
            ]
        },
        "BillingEntitlement": {
            "key": [
                114
            ],
            "value": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "BillingEntitlementKey": {},
        "BillingLicensedProduct": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "prices": [
                121
            ],
            "__typename": [
                4
            ]
        },
        "BillingMeteredProduct": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "prices": [
                122
            ],
            "__typename": [
                4
            ]
        },
        "BillingPartnerCode": {
            "isEditable": [
                1
            ],
            "partnerCode": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingPaymentIntent": {
            "clientSecret": [
                4
            ],
            "paymentIntentType": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingPlan": {
            "baseProducts": [
                115
            ],
            "downgradePlanKeys": [
                120
            ],
            "isCheckoutDefault": [
                1
            ],
            "isSellable": [
                1
            ],
            "meteredProducts": [
                116
            ],
            "planKey": [
                120
            ],
            "resourceCreditProducts": [
                115
            ],
            "upgradePlanKeys": [
                120
            ],
            "__typename": [
                4
            ]
        },
        "BillingPlanKey": {},
        "BillingPriceLicensed": {
            "creditAmount": [
                8
            ],
            "isSellable": [
                1
            ],
            "priceUsageType": [
                137
            ],
            "recurringInterval": [
                536
            ],
            "stripePriceId": [
                4
            ],
            "unitAmount": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingPriceMetered": {
            "priceUsageType": [
                137
            ],
            "recurringInterval": [
                536
            ],
            "stripePriceId": [
                4
            ],
            "tiers": [
                123
            ],
            "__typename": [
                4
            ]
        },
        "BillingPriceTier": {
            "flatAmount": [
                8
            ],
            "unitAmount": [
                8
            ],
            "upTo": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingProduct": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingProductDTO": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "on_BillingLicensedProduct": [
                115
            ],
            "on_BillingMeteredProduct": [
                116
            ],
            "__typename": [
                4
            ]
        },
        "BillingProductKey": {},
        "BillingProductMetadata": {
            "isLegacy": [
                4
            ],
            "planKey": [
                120
            ],
            "priceUsageBased": [
                137
            ],
            "productKey": [
                126
            ],
            "__typename": [
                4
            ]
        },
        "BillingResourceCreditUsage": {
            "periodEnd": [
                225
            ],
            "periodStart": [
                225
            ],
            "productKey": [
                126
            ],
            "unitPriceCents": [
                8
            ],
            "userCreditsUsed": [
                8
            ],
            "workspaceCreditsExtraGranted": [
                8
            ],
            "workspaceCreditsGranted": [
                8
            ],
            "workspaceCreditsGrantedForSeats": [
                8
            ],
            "workspaceCreditsSeats": [
                2
            ],
            "workspaceCreditsTotalGranted": [
                8
            ],
            "workspaceCreditsUsed": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingSession": {
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscription": {
            "billingSubscriptionItems": [
                132
            ],
            "cancelAt": [
                225
            ],
            "collectionMethod": [
                131
            ],
            "currentPeriodEnd": [
                225
            ],
            "hasUserCredits": [
                1
            ],
            "id": [
                566
            ],
            "interval": [
                536
            ],
            "metadata": [
                341
            ],
            "phases": [
                133
            ],
            "status": [
                537
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscriptionCollectionMethod": {},
        "BillingSubscriptionItem": {
            "billingProduct": [
                125
            ],
            "creditAmount": [
                8
            ],
            "hasReachedCurrentPeriodCap": [
                1
            ],
            "id": [
                566
            ],
            "quantity": [
                8
            ],
            "stripePriceId": [
                4
            ],
            "unitAmount": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscriptionSchedulePhase": {
            "end_date": [
                8
            ],
            "items": [
                134
            ],
            "start_date": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscriptionSchedulePhaseItem": {
            "price": [
                4
            ],
            "quantity": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingTrialPeriod": {
            "duration": [
                8
            ],
            "isCreditCardRequired": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "BillingUpdate": {
            "billingSubscriptions": [
                130
            ],
            "currentBillingSubscription": [
                130
            ],
            "__typename": [
                4
            ]
        },
        "BillingUsageType": {},
        "BooleanFieldComparison": {
            "is": [
                1
            ],
            "isNot": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "CalendarChannel": {
            "connectedAccountId": [
                566
            ],
            "contactAutoCreationPolicy": [
                140
            ],
            "createdAt": [
                225
            ],
            "excludePrivateEvents": [
                1
            ],
            "handle": [
                4
            ],
            "id": [
                566
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "syncStage": [
                141
            ],
            "syncStageStartedAt": [
                225
            ],
            "syncStatus": [
                142
            ],
            "syncedAt": [
                225
            ],
            "throttleFailureCount": [
                8
            ],
            "updatedAt": [
                225
            ],
            "visibility": [
                143
            ],
            "__typename": [
                4
            ]
        },
        "CalendarChannelContactAutoCreationPolicy": {},
        "CalendarChannelSyncStage": {},
        "CalendarChannelSyncStatus": {},
        "CalendarChannelVisibility": {},
        "CalendarConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "CampaignAudiencePreviewDTO": {
            "duplicateEmails": [
                2
            ],
            "globallyUnsubscribed": [
                2
            ],
            "hardSuppressed": [
                2
            ],
            "sendable": [
                2
            ],
            "topicUnsubscribed": [
                2
            ],
            "totalMembers": [
                2
            ],
            "trackingRefused": [
                2
            ],
            "withoutEmail": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "CancelMessageCampaignInput": {
            "campaignId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CancelMessageCampaignOutputDTO": {
            "campaignId": [
                4
            ],
            "canceledMessageCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "Captcha": {
            "provider": [
                151
            ],
            "siteKey": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CaptchaDriverType": {},
        "ChannelSyncSuccess": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ChartNumberFormat": {},
        "ChatConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "ChatStreamCatchupChunks": {
            "chunks": [
                341
            ],
            "error": [
                156
            ],
            "maxSeq": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ChatStreamError": {
            "code": [
                4
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ChatThreadsConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "CheckUserExist": {
            "availableWorkspacesCount": [
                8
            ],
            "exists": [
                1
            ],
            "isEmailVerified": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ClaimableApplicationRegistration": {
            "author": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                4
            ],
            "isOwned": [
                1
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "sourcePackage": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClientAiEvaluationModelConfig": {
            "description": [
                4
            ],
            "inputCostPerMillionTokens": [
                8
            ],
            "isAvailable": [
                1
            ],
            "isDeprecated": [
                1
            ],
            "label": [
                4
            ],
            "maxCriteriaPerQuestion": [
                8
            ],
            "maxScoreLevels": [
                8
            ],
            "medianLatencyMs": [
                8
            ],
            "modelId": [
                4
            ],
            "outputCostPerMillionTokens": [
                8
            ],
            "providerLabel": [
                4
            ],
            "supportedQuestionTypes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClientAiModelConfig": {
            "contextWindowTokens": [
                8
            ],
            "costPerTask": [
                8
            ],
            "dataResidency": [
                4
            ],
            "effort": [
                4
            ],
            "efforts": [
                4
            ],
            "inputCostPerMillionTokens": [
                8
            ],
            "intelligenceIndex": [
                8
            ],
            "isBenchmarkInherited": [
                1
            ],
            "isDeprecated": [
                1
            ],
            "label": [
                4
            ],
            "maxOutputTokens": [
                8
            ],
            "modelFamily": [
                397
            ],
            "modelFamilyLabel": [
                4
            ],
            "modelId": [
                4
            ],
            "nativeCapabilities": [
                399
            ],
            "outputCostPerMillionTokens": [
                8
            ],
            "outputTokensPerSecond": [
                8
            ],
            "providerLabel": [
                4
            ],
            "providerName": [
                4
            ],
            "sdkPackage": [
                4
            ],
            "zeroDataRetention": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ClientAiModelTierConfig": {
            "isZeroDataRetentionRequired": [
                1
            ],
            "modelId": [
                4
            ],
            "requiredDataResidencyRegion": [
                4
            ],
            "tier": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "ClientConfig": {
            "aiEvaluationModels": [
                160
            ],
            "aiModelTiers": [
                162
            ],
            "aiModels": [
                161
            ],
            "allowRequestsToTwentyIcons": [
                1
            ],
            "analyticsEnabled": [
                1
            ],
            "api": [
                43
            ],
            "appVersion": [
                4
            ],
            "authProviders": [
                93
            ],
            "billing": [
                110
            ],
            "calendarBookingPageId": [
                4
            ],
            "canManageFeatureFlags": [
                1
            ],
            "captcha": [
                150
            ],
            "defaultSubdomain": [
                4
            ],
            "enterpriseInstanceType": [
                4
            ],
            "frontDomain": [
                4
            ],
            "isAttachmentPreviewEnabled": [
                1
            ],
            "isBookCallOnboardingStepEnabled": [
                1
            ],
            "isClickHouseConfigured": [
                1
            ],
            "isCloudflareIntegrationEnabled": [
                1
            ],
            "isCompanyEnrichmentEnabled": [
                1
            ],
            "isConfigVariablesInDbEnabled": [
                1
            ],
            "isCookieSessionEnabled": [
                1
            ],
            "isEmailVerificationRequired": [
                1
            ],
            "isEmailingDomainInDemoMode": [
                1
            ],
            "isGoogleCalendarEnabled": [
                1
            ],
            "isGoogleMessagingEnabled": [
                1
            ],
            "isImapSmtpCaldavEnabled": [
                1
            ],
            "isMicrosoftCalendarEnabled": [
                1
            ],
            "isMicrosoftMessagingEnabled": [
                1
            ],
            "isMultiWorkspaceEnabled": [
                1
            ],
            "isOnboardingAiChatEnabled": [
                1
            ],
            "isWorkspaceSchemaDDLLocked": [
                1
            ],
            "maintenance": [
                164
            ],
            "publicFeatureFlags": [
                455
            ],
            "publicFunctionDomain": [
                4
            ],
            "sentry": [
                520
            ],
            "serverUrl": [
                4
            ],
            "signInPrefilled": [
                1
            ],
            "support": [
                538
            ],
            "__typename": [
                4
            ]
        },
        "ClientConfigMaintenanceMode": {
            "endAt": [
                225
            ],
            "link": [
                4
            ],
            "startAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "CollectionHash": {
            "collectionName": [
                40
            ],
            "hash": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CommandMenuItem": {
            "applicationId": [
                566
            ],
            "availabilityCoreObjectName": [
                4
            ],
            "availabilityObjectMetadataId": [
                566
            ],
            "availabilityType": [
                167
            ],
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalPinnedExpression": [
                4
            ],
            "coreWorkflowVersionId": [
                566
            ],
            "createdAt": [
                225
            ],
            "engineComponentKey": [
                259
            ],
            "frontComponent": [
                301
            ],
            "frontComponentId": [
                566
            ],
            "hotKeys": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isPinned": [
                1
            ],
            "label": [
                4
            ],
            "navigationTargetObjectMetadataId": [
                566
            ],
            "pageLayoutId": [
                566
            ],
            "payload": [
                168
            ],
            "position": [
                8
            ],
            "shortLabel": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "workflowVersionId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CommandMenuItemAvailabilityType": {},
        "CommandMenuItemPayload": {
            "on_ObjectMetadataCommandMenuItemPayload": [
                409
            ],
            "on_PathCommandMenuItemPayload": [
                441
            ],
            "__typename": [
                4
            ]
        },
        "CompleteApplicationFileUploadsResult": {
            "errors": [
                67
            ],
            "files": [
                292
            ],
            "__typename": [
                4
            ]
        },
        "ConnectedAccountPublicDTO": {
            "applicationId": [
                566
            ],
            "archivedAt": [
                225
            ],
            "authFailedAt": [
                225
            ],
            "authFailedReason": [
                4
            ],
            "connectionParameters": [
                457
            ],
            "connectionProviderId": [
                566
            ],
            "createdAt": [
                225
            ],
            "handle": [
                4
            ],
            "handleAliases": [
                4
            ],
            "id": [
                566
            ],
            "lastCredentialsRefreshedAt": [
                225
            ],
            "lastSignedInAt": [
                225
            ],
            "name": [
                4
            ],
            "provider": [
                4
            ],
            "scope": [
                171
            ],
            "scopes": [
                4
            ],
            "updatedAt": [
                225
            ],
            "userWorkspaceId": [
                566
            ],
            "visibility": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ConnectedAccountScope": {},
        "ConnectedImapSmtpCaldavAccount": {
            "connectionParameters": [
                326
            ],
            "handle": [
                4
            ],
            "id": [
                566
            ],
            "provider": [
                4
            ],
            "userWorkspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ConnectionCursor": {},
        "ConnectionParametersInput": {
            "connectionSecurity": [
                252
            ],
            "host": [
                4
            ],
            "password": [
                4
            ],
            "port": [
                8
            ],
            "username": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ConnectionProviderScope": {},
        "CreateAgentChatChannelInput": {
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "name": [
                4
            ],
            "roleIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateAgentInput": {
            "avatarColor": [
                4
            ],
            "avatarShape": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "modelConfiguration": [
                341
            ],
            "modelId": [
                4
            ],
            "name": [
                4
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                341
            ],
            "roleId": [
                566
            ],
            "triggers": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "CreateApiKeyInput": {
            "expiresAt": [
                4
            ],
            "name": [
                4
            ],
            "revokedAt": [
                4
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateAppMessageChannelInput": {
            "connectedAccountId": [
                566
            ],
            "displayName": [
                4
            ],
            "handle": [
                4
            ],
            "messagingProviderUniversalIdentifier": [
                566
            ],
            "participantHandleFieldUniversalIdentifier": [
                566
            ],
            "visibility": [
                379
            ],
            "__typename": [
                4
            ]
        },
        "CreateApplicationFileUploadsResult": {
            "errors": [
                68
            ],
            "targets": [
                70
            ],
            "__typename": [
                4
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                82
            ],
            "clientSecret": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateApplicationRegistrationInput": {
            "name": [
                4
            ],
            "oAuthRedirectUris": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateApprovedAccessDomainInput": {
            "domain": [
                4
            ],
            "email": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateCalendarEventInput": {
            "addConferencing": [
                1
            ],
            "attendees": [
                4
            ],
            "connectedAccountId": [
                4
            ],
            "description": [
                4
            ],
            "endsAt": [
                4
            ],
            "isFullDay": [
                1
            ],
            "location": [
                4
            ],
            "sendInvitations": [
                1
            ],
            "startsAt": [
                4
            ],
            "timeZone": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateCalendarEventOutput": {
            "calendarEventId": [
                4
            ],
            "conferenceLink": [
                4
            ],
            "error": [
                4
            ],
            "iCalUid": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "CreateCommandMenuItemInput": {
            "availabilityCoreObjectName": [
                4
            ],
            "availabilityObjectMetadataId": [
                566
            ],
            "availabilityType": [
                167
            ],
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalPinnedExpression": [
                4
            ],
            "coreWorkflowVersionId": [
                566
            ],
            "engineComponentKey": [
                259
            ],
            "frontComponentId": [
                566
            ],
            "hotKeys": [
                4
            ],
            "icon": [
                4
            ],
            "isPinned": [
                1
            ],
            "label": [
                4
            ],
            "navigationTargetObjectMetadataId": [
                566
            ],
            "pageLayoutId": [
                566
            ],
            "payload": [
                341
            ],
            "position": [
                8
            ],
            "shortLabel": [
                4
            ],
            "workflowVersionId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateEmailGroupChannelInput": {
            "displayName": [
                4
            ],
            "handle": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateEmailGroupChannelOutput": {
            "forwardingAddress": [
                4
            ],
            "messageChannel": [
                373
            ],
            "__typename": [
                4
            ]
        },
        "CreateEmailingDomainInput": {
            "domain": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateFieldInput": {
            "defaultValue": [
                341
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isNullable": [
                1
            ],
            "isRemoteCreation": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "isUnique": [
                1
            ],
            "label": [
                4
            ],
            "morphRelationsCreationPayload": [
                341
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "options": [
                341
            ],
            "relationCreationPayload": [
                341
            ],
            "settings": [
                341
            ],
            "type": [
                287
            ],
            "__typename": [
                4
            ]
        },
        "CreateFrontComponentInput": {
            "builtComponentChecksum": [
                4
            ],
            "builtComponentPath": [
                4
            ],
            "componentName": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "sourceComponentPath": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateIndexFieldInput": {
            "fieldMetadataId": [
                566
            ],
            "subFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateIndexInput": {
            "fields": [
                192
            ],
            "indexType": [
                334
            ],
            "objectMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateLogicFunctionFromSourceInput": {
            "cronTriggerSettings": [
                341
            ],
            "databaseEventTriggerSettings": [
                341
            ],
            "description": [
                4
            ],
            "httpRouteTriggerSettings": [
                341
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "serverRouteTriggerSettings": [
                341
            ],
            "source": [
                341
            ],
            "timeoutSeconds": [
                8
            ],
            "toolTriggerSettings": [
                341
            ],
            "universalIdentifier": [
                566
            ],
            "workflowActionTriggerSettings": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "CreateMcpServerInput": {
            "connectionProviderId": [
                566
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateMessageSuppressionInput": {
            "emailAddress": [
                4
            ],
            "unsubscribeTopicId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateNavigationMenuItemInput": {
            "agentChatChannelId": [
                566
            ],
            "agentId": [
                566
            ],
            "color": [
                4
            ],
            "folderId": [
                566
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "link": [
                4
            ],
            "name": [
                4
            ],
            "nativePageKey": [
                4
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "targetObjectMetadataId": [
                566
            ],
            "targetRecordId": [
                566
            ],
            "type": [
                401
            ],
            "userWorkspaceId": [
                566
            ],
            "viewId": [
                566
            ],
            "workflowId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateObjectInput": {
            "color": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isRemote": [
                1
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "primaryKeyColumnType": [
                4
            ],
            "primaryKeyFieldMetadataSettings": [
                341
            ],
            "shortcut": [
                4
            ],
            "skipNameField": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                190
            ],
            "__typename": [
                4
            ]
        },
        "CreateOneIndexInput": {
            "index": [
                193
            ],
            "__typename": [
                4
            ]
        },
        "CreateOneObjectInput": {
            "object": [
                198
            ],
            "__typename": [
                4
            ]
        },
        "CreatePageLayoutInput": {
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "type": [
                434
            ],
            "__typename": [
                4
            ]
        },
        "CreatePageLayoutTabInput": {
            "layoutMode": [
                433
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreatePageLayoutWidgetInput": {
            "configuration": [
                341
            ],
            "objectMetadataId": [
                566
            ],
            "pageLayoutTabId": [
                566
            ],
            "position": [
                341
            ],
            "title": [
                4
            ],
            "type": [
                697
            ],
            "__typename": [
                4
            ]
        },
        "CreateRecordExportInput": {
            "fieldMetadataIds": [
                566
            ],
            "filter": [
                341
            ],
            "objectMetadataId": [
                566
            ],
            "orderBy": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "CreateRelatedRecordPathInput": {
            "firstFieldMetadataId": [
                566
            ],
            "isInherent": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "secondFieldMetadataId": [
                566
            ],
            "thirdFieldMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateRoleInput": {
            "canAccessAllAgentChatChannels": [
                1
            ],
            "canAccessAllTools": [
                1
            ],
            "canBeAssignedToAgents": [
                1
            ],
            "canBeAssignedToApiKeys": [
                1
            ],
            "canBeAssignedToUsers": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateSkillInput": {
            "content": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateUnsubscribeTopicInput": {
            "description": [
                4
            ],
            "name": [
                4
            ],
            "visibility": [
                570
            ],
            "__typename": [
                4
            ]
        },
        "CreateUsageLimitInput": {
            "burstValue": [
                109
            ],
            "limitKind": [
                4
            ],
            "limitValue": [
                109
            ],
            "operationType": [
                655
            ],
            "periodCount": [
                2
            ],
            "periodUnit": [
                4
            ],
            "resourceType": [
                662
            ],
            "spenderId": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                664
            ],
            "__typename": [
                4
            ]
        },
        "CreateValidationRuleInput": {
            "description": [
                4
            ],
            "errorFieldMetadataId": [
                566
            ],
            "expression": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "message": [
                4
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFieldGroupInput": {
            "id": [
                566
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFieldInput": {
            "aggregateOperation": [
                28
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "viewFieldGroupId": [
                566
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFilterGroupInput": {
            "id": [
                566
            ],
            "logicalOperator": [
                685
            ],
            "parentViewFilterGroupId": [
                566
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFilterInput": {
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "operand": [
                686
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                566
            ],
            "subFieldName": [
                4
            ],
            "value": [
                341
            ],
            "viewFilterGroupId": [
                566
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewGroupInput": {
            "fieldValue": [
                4
            ],
            "id": [
                566
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewInput": {
            "anyFieldFilterValue": [
                4
            ],
            "calendarEndFieldMetadataId": [
                566
            ],
            "calendarFieldMetadataId": [
                566
            ],
            "calendarLayout": [
                679
            ],
            "groupLoadLimit": [
                2
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isCompact": [
                1
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                566
            ],
            "kanbanColumnWidth": [
                2
            ],
            "key": [
                688
            ],
            "mainGroupByFieldMetadataId": [
                566
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "openRecordIn": [
                689
            ],
            "position": [
                8
            ],
            "shouldDisplayGroupsAsTabs": [
                1
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "type": [
                692
            ],
            "visibility": [
                693
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewSortInput": {
            "direction": [
                691
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "subFieldName": [
                4
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "CreateWebhookInput": {
            "description": [
                4
            ],
            "id": [
                566
            ],
            "operations": [
                4
            ],
            "roleId": [
                566
            ],
            "secret": [
                4
            ],
            "targetUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreditUsedItem": {
            "creditsUsed": [
                8
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "operation": [
                655
            ],
            "resource": [
                662
            ],
            "__typename": [
                4
            ]
        },
        "CursorPaging": {
            "after": [
                173
            ],
            "before": [
                173
            ],
            "first": [
                2
            ],
            "last": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "DashboardFilterBinding": {
            "fieldMetadataId": [
                566
            ],
            "pageLayoutFilterId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DashboardFilterValueInput": {
            "conditions": [
                427
            ],
            "pageLayoutFilterId": [
                566
            ],
            "type": [
                429
            ],
            "__typename": [
                4
            ]
        },
        "DatabaseEventAction": {},
        "DateTime": {},
        "DeleteApprovedAccessDomainInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteOneFieldInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteOneIndexInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteOneObjectInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteSso": {
            "identityProviderId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteSsoInput": {
            "identityProviderId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteTwoFactorAuthenticationMethod": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewFieldGroupInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewFieldInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewFilterInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewGroupInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewSortInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DeletedWorkspaceMember": {
            "avatarUrl": [
                4
            ],
            "id": [
                566
            ],
            "name": [
                304
            ],
            "userEmail": [
                4
            ],
            "userWorkspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewFieldGroupInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewFieldInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewFilterInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewGroupInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewSortInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "DevelopmentApplication": {
            "id": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DomainRecord": {
            "key": [
                4
            ],
            "status": [
                4
            ],
            "type": [
                4
            ],
            "validationType": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DomainValidRecords": {
            "domain": [
                4
            ],
            "id": [
                566
            ],
            "isCustomDomainEnabled": [
                1
            ],
            "records": [
                245
            ],
            "__typename": [
                4
            ]
        },
        "DuplicatedDashboard": {
            "createdAt": [
                4
            ],
            "id": [
                566
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "updatedAt": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DuplicatedMessageList": {
            "createdAt": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                566
            ],
            "memberCount": [
                8
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "updatedAt": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EditSso": {
            "id": [
                566
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                502
            ],
            "type": [
                321
            ],
            "__typename": [
                4
            ]
        },
        "EditSsoInput": {
            "id": [
                566
            ],
            "status": [
                502
            ],
            "__typename": [
                4
            ]
        },
        "EmailAccountConnectionParameters": {
            "CALDAV": [
                174
            ],
            "IMAP": [
                174
            ],
            "SMTP": [
                174
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EmailConnectionSecurity": {},
        "EmailPasswordResetLink": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "EmailingDomain": {
            "createdAt": [
                225
            ],
            "domain": [
                4
            ],
            "id": [
                566
            ],
            "status": [
                256
            ],
            "tenantStatus": [
                257
            ],
            "unsubscribeHostnameStatus": [
                568
            ],
            "updatedAt": [
                225
            ],
            "verificationRecords": [
                674
            ],
            "verifiedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "EmailingDomainStatus": {},
        "EmailingDomainTenantStatus": {},
        "EmailsConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "EngineComponentKey": {},
        "EnqueueJobInput": {
            "delayMs": [
                2
            ],
            "jobId": [
                4
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "payload": [
                341
            ],
            "retryLimit": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobItemInput": {
            "jobId": [
                4
            ],
            "payload": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobResult": {
            "enqueued": [
                1
            ],
            "jobId": [
                4
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobsInput": {
            "delayMs": [
                2
            ],
            "jobs": [
                261
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "payloads": [
                341
            ],
            "retryLimit": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobsResult": {
            "availableBytes": [
                8
            ],
            "enqueued": [
                1
            ],
            "enqueuedJobsCount": [
                2
            ],
            "jobIds": [
                4
            ],
            "jobs": [
                265
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnqueuedJob": {
            "jobId": [
                4
            ],
            "sizeBytes": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EnterpriseLicenseInfoDTO": {
            "expiresAt": [
                225
            ],
            "isValid": [
                1
            ],
            "licensee": [
                4
            ],
            "subscriptionId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnterpriseSubscriptionStatusDTO": {
            "cancelAt": [
                225
            ],
            "currentPeriodEnd": [
                225
            ],
            "expiresAt": [
                225
            ],
            "isCancellationScheduled": [
                1
            ],
            "licensee": [
                4
            ],
            "status": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogDateRangeInput": {
            "end": [
                225
            ],
            "start": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "EventLogFieldFilterInput": {
            "field": [
                4
            ],
            "operand": [
                270
            ],
            "values": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogFilterOperand": {},
        "EventLogFiltersInput": {
            "dateRange": [
                268
            ],
            "eventType": [
                4
            ],
            "fieldFilters": [
                269
            ],
            "objectMetadataId": [
                4
            ],
            "recordId": [
                4
            ],
            "userWorkspaceId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogPageInfo": {
            "endCursor": [
                4
            ],
            "hasNextPage": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "EventLogQueryInput": {
            "after": [
                4
            ],
            "filters": [
                271
            ],
            "first": [
                2
            ],
            "table": [
                276
            ],
            "__typename": [
                4
            ]
        },
        "EventLogQueryResult": {
            "pageInfo": [
                272
            ],
            "records": [
                275
            ],
            "totalCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EventLogRecord": {
            "event": [
                4
            ],
            "isCustom": [
                1
            ],
            "objectMetadataId": [
                4
            ],
            "properties": [
                341
            ],
            "recordId": [
                4
            ],
            "timestamp": [
                225
            ],
            "userId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogTable": {},
        "EventSubscription": {
            "eventStreamId": [
                4
            ],
            "metadataEvents": [
                388
            ],
            "objectRecordEventsWithQueryIds": [
                416
            ],
            "queueJobEvents": [
                344
            ],
            "__typename": [
                4
            ]
        },
        "ExecuteOneLogicFunctionInput": {
            "id": [
                566
            ],
            "payload": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "FeatureFlag": {
            "key": [
                280
            ],
            "value": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "FeatureFlagKey": {},
        "Field": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "defaultValue": [
                341
            ],
            "description": [
                4
            ],
            "disabledFieldPermissionActions": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isNullable": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "isUnique": [
                1
            ],
            "label": [
                4
            ],
            "morphId": [
                566
            ],
            "morphRelations": [
                476
            ],
            "name": [
                4
            ],
            "object": [
                403
            ],
            "objectMetadataId": [
                566
            ],
            "options": [
                341
            ],
            "relation": [
                476
            ],
            "settings": [
                341
            ],
            "type": [
                287
            ],
            "universalIdentifier": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                696
            ],
            "fieldDisplayMode": [
                284
            ],
            "fieldMetadataId": [
                4
            ],
            "isUIEditable": [
                1
            ],
            "nestedRelationFieldMetadataId": [
                4
            ],
            "viewId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FieldConnection": {
            "edges": [
                285
            ],
            "pageInfo": [
                423
            ],
            "__typename": [
                4
            ]
        },
        "FieldDisplayMode": {},
        "FieldEdge": {
            "cursor": [
                173
            ],
            "node": [
                281
            ],
            "__typename": [
                4
            ]
        },
        "FieldFilter": {
            "and": [
                286
            ],
            "id": [
                567
            ],
            "isActive": [
                138
            ],
            "isSystem": [
                138
            ],
            "isUIEditable": [
                138
            ],
            "isUIReadOnly": [
                138
            ],
            "objectMetadataId": [
                567
            ],
            "or": [
                286
            ],
            "__typename": [
                4
            ]
        },
        "FieldMetadataType": {},
        "FieldPermission": {
            "canReadFieldValue": [
                1
            ],
            "canUpdateFieldValue": [
                1
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "objectMetadataId": [
                566
            ],
            "roleId": [
                566
            ],
            "rowLevelPermissionPredicateGroupId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "FieldPermissionInput": {
            "canReadFieldValue": [
                1
            ],
            "canUpdateFieldValue": [
                1
            ],
            "fieldMetadataId": [
                566
            ],
            "objectMetadataId": [
                566
            ],
            "rowLevelPermissionPredicateGroupId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "FieldRichTextConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                696
            ],
            "newFieldDefaultVisibility": [
                1
            ],
            "shouldAllowUserToSeeHiddenFields": [
                1
            ],
            "viewId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "File": {
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "path": [
                4
            ],
            "size": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "FileAttachmentInput": {
            "filename": [
                4
            ],
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "FileFolder": {},
        "FileUploadTarget": {
            "contentType": [
                4
            ],
            "expiresAt": [
                225
            ],
            "fileId": [
                566
            ],
            "uploadUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FileWithSignedUrl": {
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "path": [
                4
            ],
            "size": [
                8
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FilesConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "FindAvailableSSOIDP": {
            "id": [
                566
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                502
            ],
            "type": [
                321
            ],
            "workspace": [
                717
            ],
            "__typename": [
                4
            ]
        },
        "FindMessageSuppressionsInput": {
            "limit": [
                2
            ],
            "offset": [
                2
            ],
            "reason": [
                386
            ],
            "searchTerm": [
                4
            ],
            "unsubscribeTopicId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                696
            ],
            "fieldMetadataId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FrontComponent": {
            "applicationGrantedCapabilities": [
                4
            ],
            "applicationGrantedIframeMediaPermissions": [
                323
            ],
            "applicationId": [
                566
            ],
            "applicationName": [
                4
            ],
            "applicationTokenPair": [
                87
            ],
            "applicationVariables": [
                341
            ],
            "builtComponentChecksum": [
                4
            ],
            "builtComponentPath": [
                4
            ],
            "componentName": [
                4
            ],
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "frontComponentSharedDependenciesChecksum": [
                4
            ],
            "id": [
                566
            ],
            "isHeadless": [
                1
            ],
            "name": [
                4
            ],
            "sourceComponentPath": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "usesSdkClient": [
                1
            ],
            "widgetAvailability": [
                303
            ],
            "__typename": [
                4
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                696
            ],
            "frontComponentId": [
                566
            ],
            "headerCommandMenuItemUniversalIdentifiers": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "FrontComponentWidgetAvailability": {
            "objectMetadataId": [
                566
            ],
            "pageLayoutType": [
                434
            ],
            "__typename": [
                4
            ]
        },
        "FullName": {
            "firstName": [
                4
            ],
            "lastName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GenerateInput": {
            "input": [
                496
            ],
            "instructions": [
                4
            ],
            "modelId": [
                4
            ],
            "responseFormat": [
                341
            ],
            "runId": [
                566
            ],
            "scope": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "GenerateResult": {
            "error": [
                4
            ],
            "object": [
                341
            ],
            "runId": [
                566
            ],
            "success": [
                1
            ],
            "text": [
                4
            ],
            "usage": [
                37
            ],
            "__typename": [
                4
            ]
        },
        "GetApiKeyInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "GetAuthorizationUrlForSSO": {
            "authorizationURL": [
                4
            ],
            "id": [
                566
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GetAuthorizationUrlForSSOInput": {
            "identityProviderId": [
                566
            ],
            "workspaceInviteHash": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedProgress": {
            "completedStepActionKeys": [
                311
            ],
            "isHidden": [
                1
            ],
            "selectedStepActionKey": [
                311
            ],
            "snoozedUntil": [
                4
            ],
            "steps": [
                312
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedStepActionKey": {},
        "GettingStartedStepDefinition": {
            "actionKey": [
                311
            ],
            "description": [
                4
            ],
            "doneChatThreadId": [
                4
            ],
            "doneDescription": [
                4
            ],
            "doneTitle": [
                4
            ],
            "doneWorkflowId": [
                4
            ],
            "icon": [
                4
            ],
            "iconColor": [
                4
            ],
            "kind": [
                313
            ],
            "prompt": [
                4
            ],
            "promptLabel": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedStepKind": {},
        "GettingStartedWorkflow": {
            "versionId": [
                4
            ],
            "workflowId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedWorkflowPreview": {
            "actions": [
                316
            ],
            "stepActionKey": [
                311
            ],
            "trigger": [
                317
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedWorkflowPreviewAction": {
            "title": [
                4
            ],
            "type": [
                698
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedWorkflowPreviewTrigger": {
            "databaseEventAction": [
                4
            ],
            "title": [
                4
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GrantApplicationCapabilitiesInput": {
            "applicationId": [
                566
            ],
            "capabilities": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GraphOrderBy": {},
        "GridPosition": {
            "column": [
                8
            ],
            "columnSpan": [
                8
            ],
            "row": [
                8
            ],
            "rowSpan": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "IdentityProviderType": {},
        "IframeConfiguration": {
            "configurationType": [
                696
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "IframeMediaPermission": {
            "camera": [
                1
            ],
            "microphone": [
                1
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "IframeMediaPermissionInput": {
            "camera": [
                1
            ],
            "microphone": [
                1
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "connectedAccountId": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ImapSmtpCaldavPublicConnectionParameters": {
            "CALDAV": [
                327
            ],
            "IMAP": [
                327
            ],
            "SMTP": [
                327
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ImapSmtpCaldavPublicConnectionParams": {
            "connectionSecurity": [
                252
            ],
            "host": [
                4
            ],
            "port": [
                8
            ],
            "username": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Impersonate": {
            "loginToken": [
                94
            ],
            "workspace": [
                721
            ],
            "__typename": [
                4
            ]
        },
        "InboxThreadRecordInput": {
            "objectNameSingular": [
                4
            ],
            "recordId": [
                566
            ],
            "threadId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "Index": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "indexFieldMetadataList": [
                332
            ],
            "indexType": [
                334
            ],
            "indexWhereClause": [
                4
            ],
            "isCustom": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "isUnique": [
                1
            ],
            "name": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "IndexEdge": {
            "cursor": [
                173
            ],
            "node": [
                330
            ],
            "__typename": [
                4
            ]
        },
        "IndexField": {
            "createdAt": [
                225
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "order": [
                8
            ],
            "subFieldName": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "IndexFilter": {
            "and": [
                333
            ],
            "id": [
                567
            ],
            "isCustom": [
                138
            ],
            "or": [
                333
            ],
            "__typename": [
                4
            ]
        },
        "IndexType": {},
        "IngestAppMessagesInput": {
            "messageChannelId": [
                566
            ],
            "messages": [
                52
            ],
            "__typename": [
                4
            ]
        },
        "IngestAppMessagesOutput": {
            "messages": [
                337
            ],
            "__typename": [
                4
            ]
        },
        "IngestedAppMessage": {
            "externalId": [
                4
            ],
            "hasAttachments": [
                1
            ],
            "messageId": [
                566
            ],
            "messageThreadId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "InitiateTwoFactorAuthenticationProvisioning": {
            "uri": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "InvalidatePassword": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "InviteSuggestion": {
            "displayName": [
                4
            ],
            "email": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "JSON": {},
        "JSONObject": {},
        "JobState": {},
        "JobStatus": {
            "attemptsMade": [
                2
            ],
            "enqueuedAt": [
                8
            ],
            "failedReason": [
                4
            ],
            "finishedAt": [
                8
            ],
            "jobId": [
                4
            ],
            "progress": [
                2
            ],
            "startedAt": [
                8
            ],
            "state": [
                343
            ],
            "__typename": [
                4
            ]
        },
        "LineChartConfiguration": {
            "aggregateFieldMetadataId": [
                566
            ],
            "aggregateOperation": [
                28
            ],
            "axisNameDisplay": [
                102
            ],
            "color": [
                4
            ],
            "configurationType": [
                696
            ],
            "dashboardFilterBindings": [
                222
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "displayLegend": [
                1
            ],
            "filter": [
                341
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "isCumulative": [
                1
            ],
            "isStacked": [
                1
            ],
            "numberFormat": [
                153
            ],
            "omitNullValues": [
                1
            ],
            "primaryAxisDateGranularity": [
                417
            ],
            "primaryAxisGroupByFieldMetadataId": [
                566
            ],
            "primaryAxisGroupBySubFieldName": [
                4
            ],
            "primaryAxisManualSortOrder": [
                4
            ],
            "primaryAxisOrderBy": [
                319
            ],
            "rangeMax": [
                8
            ],
            "rangeMin": [
                8
            ],
            "secondaryAxisGroupByDateGranularity": [
                417
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                566
            ],
            "secondaryAxisGroupBySubFieldName": [
                4
            ],
            "secondaryAxisManualSortOrder": [
                4
            ],
            "secondaryAxisOrderBy": [
                319
            ],
            "splitMultiValueFields": [
                1
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "LineChartData": {
            "formattedToRawLookup": [
                341
            ],
            "hasTooManyGroups": [
                1
            ],
            "series": [
                349
            ],
            "showDataLabels": [
                1
            ],
            "showLegend": [
                1
            ],
            "xAxisLabel": [
                4
            ],
            "yAxisLabel": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "LineChartDataInput": {
            "configuration": [
                341
            ],
            "dashboardFilterValues": [
                223
            ],
            "objectMetadataId": [
                566
            ],
            "viewerTimeZone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "LineChartDataPoint": {
            "x": [
                4
            ],
            "y": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "LineChartSeries": {
            "data": [
                348
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ListAppConnectionsInput": {
            "providerName": [
                4
            ],
            "scope": [
                171
            ],
            "userWorkspaceId": [
                4
            ],
            "visibility": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ListAppMessageChannelsInput": {
            "connectedAccountId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ListAppMessageFoldersInput": {
            "messageChannelId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "Location": {
            "lat": [
                8
            ],
            "lng": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunction": {
            "applicationId": [
                566
            ],
            "canRunOnDemand": [
                1
            ],
            "createdAt": [
                225
            ],
            "cronTriggerSettings": [
                341
            ],
            "databaseEventTriggerSettings": [
                341
            ],
            "description": [
                4
            ],
            "executionMode": [
                355
            ],
            "handlerName": [
                4
            ],
            "httpRouteTriggerSettings": [
                341
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "runtime": [
                4
            ],
            "sourceHandlerPath": [
                4
            ],
            "timeoutSeconds": [
                8
            ],
            "toolTriggerSettings": [
                341
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "workflowActionTriggerSettings": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionExecutionMode": {},
        "LogicFunctionExecutionResult": {
            "data": [
                341
            ],
            "duration": [
                8
            ],
            "error": [
                341
            ],
            "logs": [
                4
            ],
            "status": [
                357
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionExecutionStatus": {},
        "LogicFunctionIdInput": {
            "id": [
                19
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionLogs": {
            "logs": [
                4
            ],
            "name": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionLogsInput": {
            "applicationId": [
                566
            ],
            "applicationUniversalIdentifier": [
                566
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "LoginToken": {
            "loginToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceApp": {
            "author": [
                4
            ],
            "category": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                4
            ],
            "isListed": [
                1
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "sourcePackage": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppDetail": {
            "aboutDescription": [
                4
            ],
            "author": [
                4
            ],
            "billsCredits": [
                1
            ],
            "category": [
                4
            ],
            "content": [
                60
            ],
            "defaultRoleUniversalIdentifier": [
                4
            ],
            "description": [
                4
            ],
            "emailSupport": [
                4
            ],
            "galleryImages": [
                4
            ],
            "id": [
                4
            ],
            "installCount": [
                2
            ],
            "isListed": [
                1
            ],
            "issueReportUrl": [
                4
            ],
            "latestAvailableVersion": [
                4
            ],
            "logoUrl": [
                4
            ],
            "manifest": [
                341
            ],
            "name": [
                4
            ],
            "objects": [
                364
            ],
            "pricingDescription": [
                4
            ],
            "requestedCapabilities": [
                4
            ],
            "requestedIframeMediaPermissions": [
                323
            ],
            "roles": [
                365
            ],
            "screenshots": [
                4
            ],
            "sourcePackage": [
                4
            ],
            "sourceType": [
                83
            ],
            "termsUrl": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "websiteUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppObject": {
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppRole": {
            "canAccessAllTools": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "fieldPermissions": [
                366
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "objectPermissions": [
                367
            ],
            "permissionFlagUniversalIdentifiers": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppRoleFieldPermission": {
            "canReadFieldValue": [
                1
            ],
            "canUpdateFieldValue": [
                1
            ],
            "fieldUniversalIdentifier": [
                4
            ],
            "objectUniversalIdentifier": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppRoleObjectPermission": {
            "canDestroyObjectRecords": [
                1
            ],
            "canReadObjectRecords": [
                1
            ],
            "canSoftDeleteObjectRecords": [
                1
            ],
            "canUpdateObjectRecords": [
                1
            ],
            "objectUniversalIdentifier": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "McpServer": {
            "applicationId": [
                566
            ],
            "connectionProviderId": [
                566
            ],
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "tools": [
                369
            ],
            "toolsSyncError": [
                4
            ],
            "toolsSyncedAt": [
                225
            ],
            "updatedAt": [
                225
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "McpServerTool": {
            "annotations": [
                341
            ],
            "description": [
                4
            ],
            "inputSchema": [
                341
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "MessageCampaignSendBlockerDTO": {
            "code": [
                4
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MessageChannel": {
            "connectedAccount": [
                170
            ],
            "connectedAccountId": [
                566
            ],
            "contactAutoCreationPolicy": [
                374
            ],
            "createdAt": [
                225
            ],
            "displayName": [
                4
            ],
            "excludeGroupEmails": [
                1
            ],
            "excludeNonProfessionalEmails": [
                1
            ],
            "handle": [
                4
            ],
            "id": [
                566
            ],
            "importProgress": [
                2
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "messageFolderImportPolicy": [
                381
            ],
            "messagingProviderUniversalIdentifier": [
                566
            ],
            "participantHandleFieldUniversalIdentifier": [
                566
            ],
            "pendingGroupEmailsAction": [
                375
            ],
            "syncStage": [
                376
            ],
            "syncStageStartedAt": [
                225
            ],
            "syncStatus": [
                377
            ],
            "syncedAt": [
                225
            ],
            "throttleFailureCount": [
                8
            ],
            "throttleRetryAfter": [
                225
            ],
            "type": [
                378
            ],
            "updatedAt": [
                225
            ],
            "visibility": [
                379
            ],
            "__typename": [
                4
            ]
        },
        "MessageChannelContactAutoCreationPolicy": {},
        "MessageChannelPendingGroupEmailsAction": {},
        "MessageChannelSyncStage": {},
        "MessageChannelSyncStatus": {},
        "MessageChannelType": {},
        "MessageChannelVisibility": {},
        "MessageFolder": {
            "createdAt": [
                225
            ],
            "externalId": [
                4
            ],
            "id": [
                566
            ],
            "isSentFolder": [
                1
            ],
            "isSynced": [
                1
            ],
            "messageChannelId": [
                566
            ],
            "name": [
                4
            ],
            "parentFolderId": [
                4
            ],
            "pendingSyncAction": [
                382
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "MessageFolderImportPolicy": {},
        "MessageFolderPendingSyncAction": {},
        "MessageParticipantRole": {},
        "MessageSuppression": {
            "createdAt": [
                225
            ],
            "emailAddress": [
                4
            ],
            "id": [
                566
            ],
            "reason": [
                386
            ],
            "source": [
                387
            ],
            "unsubscribeTopicId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "MessageSuppressionList": {
            "records": [
                384
            ],
            "totalCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "MessageSuppressionReason": {},
        "MessageSuppressionSource": {},
        "MetadataEvent": {
            "metadataName": [
                4
            ],
            "properties": [
                415
            ],
            "recordId": [
                4
            ],
            "type": [
                389
            ],
            "updatedCollectionHash": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MetadataEventAction": {},
        "MetadataTranslation": {
            "canonicalValue": [
                4
            ],
            "locale": [
                4
            ],
            "metadataName": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "property": [
                4
            ],
            "provenance": [
                392
            ],
            "recordId": [
                566
            ],
            "sourceValue": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MetadataTranslationOverrideInput": {
            "locale": [
                4
            ],
            "property": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MetadataTranslationProvenance": {},
        "MetadataTranslationsInput": {
            "fieldMetadataId": [
                566
            ],
            "locale": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "MinimalMetadata": {
            "collectionHashes": [
                165
            ],
            "objectMetadataItems": [
                395
            ],
            "views": [
                396
            ],
            "__typename": [
                4
            ]
        },
        "MinimalObjectMetadata": {
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isRemote": [
                1
            ],
            "isSystem": [
                1
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MinimalView": {
            "id": [
                566
            ],
            "key": [
                688
            ],
            "objectMetadataId": [
                566
            ],
            "type": [
                692
            ],
            "__typename": [
                4
            ]
        },
        "ModelFamily": {},
        "Mutation": {
            "activateSkill": [
                529,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "activateWorkspace": [
                702,
                {
                    "data": [
                        3,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "addAgentChatMessageReaction": [
                24,
                {
                    "emoji": [
                        4,
                        "String!"
                    ],
                    "messageId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "addQueryToEventStream": [
                1,
                {
                    "input": [
                        5,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "approveApplicationIframeMediaPermissions": [
                54,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ],
                    "approvedIframeMediaPermissions": [
                        324,
                        "[IframeMediaPermissionInput!]!"
                    ]
                }
            ],
            "archiveInboxThread": [
                1,
                {
                    "input": [
                        91,
                        "ArchiveInboxThreadInput!"
                    ]
                }
            ],
            "assignAgentChatThread": [
                1,
                {
                    "assigneeWorkspaceMemberId": [
                        566
                    ],
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                1,
                {
                    "agentId": [
                        566,
                        "UUID!"
                    ],
                    "roleId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                1,
                {
                    "apiKeyId": [
                        566,
                        "UUID!"
                    ],
                    "roleId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "attachRecordToInboxThread": [
                1,
                {
                    "input": [
                        329,
                        "InboxThreadRecordInput!"
                    ]
                }
            ],
            "authorizeApp": [
                97,
                {
                    "clientId": [
                        4,
                        "String!"
                    ],
                    "codeChallenge": [
                        4
                    ],
                    "issuer": [
                        4
                    ],
                    "redirectUrl": [
                        4,
                        "String!"
                    ],
                    "resource": [
                        4
                    ],
                    "scope": [
                        4
                    ],
                    "state": [
                        4
                    ]
                }
            ],
            "cancelMessageCampaign": [
                149,
                {
                    "input": [
                        148,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "cancelSwitchBillingInterval": [
                136
            ],
            "cancelSwitchBillingPlan": [
                136
            ],
            "cancelSwitchResourceCreditPrice": [
                136
            ],
            "checkCustomDomainValidRecords": [
                246
            ],
            "checkPublicDomainValidRecords": [
                246,
                {
                    "domain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checkoutSession": [
                129,
                {
                    "plan": [
                        120,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        536,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        1,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        4
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                82,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeAppTarballUpload": [
                82,
                {
                    "fileId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                169,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "fileIds": [
                        566,
                        "[UUID!]!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                421,
                {
                    "hasBookedCall": [
                        1,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        1,
                        "Boolean!"
                    ]
                }
            ],
            "completeFileUpload": [
                296,
                {
                    "fileId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeNewWorkspaceLogoUpload": [
                296,
                {
                    "fileId": [
                        4,
                        "String!"
                    ],
                    "workspaceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceLogoUpload": [
                296,
                {
                    "fileId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceMemberProfilePictureUpload": [
                296,
                {
                    "fileId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createAgentChatChannel": [
                7,
                {
                    "input": [
                        176,
                        "CreateAgentChatChannelInput!"
                    ]
                }
            ],
            "createApiKey": [
                44,
                {
                    "input": [
                        178,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "createAppMessageChannel": [
                373,
                {
                    "input": [
                        179,
                        "CreateAppMessageChannelInput!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                180,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "files": [
                        69,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "createApplicationRegistration": [
                181,
                {
                    "input": [
                        182,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                90,
                {
                    "input": [
                        183,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createBillingPaymentMethodSetupIntent": [
                118
            ],
            "createCalendarEvent": [
                185,
                {
                    "input": [
                        184,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "createChatThread": [
                18,
                {
                    "channelId": [
                        566
                    ]
                }
            ],
            "createCommandMenuItem": [
                166,
                {
                    "input": [
                        186,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                244,
                {
                    "name": [
                        4,
                        "String!"
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                188,
                {
                    "input": [
                        187,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "createEmailingDomain": [
                255,
                {
                    "input": [
                        189,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "createFileUpload": [
                295,
                {
                    "fieldMetadataId": [
                        4
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        4
                    ],
                    "fileFolder": [
                        294,
                        "FileFolder!"
                    ],
                    "filename": [
                        4,
                        "String!"
                    ],
                    "size": [
                        8,
                        "Float!"
                    ]
                }
            ],
            "createFrontComponent": [
                301,
                {
                    "input": [
                        191,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                400,
                {
                    "inputs": [
                        197,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                682,
                {
                    "inputs": [
                        212,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "createManyViewFields": [
                681,
                {
                    "inputs": [
                        213,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "createManyViewGroups": [
                687,
                {
                    "inputs": [
                        216,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "createMcpServer": [
                368,
                {
                    "input": [
                        195,
                        "CreateMcpServerInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                384,
                {
                    "input": [
                        196,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                400,
                {
                    "input": [
                        197,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "createNewWorkspaceLogoUpload": [
                295,
                {
                    "filename": [
                        4,
                        "String!"
                    ],
                    "size": [
                        8,
                        "Float!"
                    ],
                    "workspaceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                526,
                {
                    "input": [
                        524,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createObjectEvent": [
                41,
                {
                    "event": [
                        4,
                        "String!"
                    ],
                    "objectMetadataId": [
                        566,
                        "UUID!"
                    ],
                    "properties": [
                        341
                    ],
                    "recordId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "createOneAgent": [
                6,
                {
                    "input": [
                        177,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "createOneField": [
                281,
                {
                    "input": [
                        199,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "createOneIndex": [
                330,
                {
                    "input": [
                        200,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                354,
                {
                    "input": [
                        194,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createOneObject": [
                403,
                {
                    "input": [
                        201,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "createOneRole": [
                483,
                {
                    "createRoleInput": [
                        207,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "createPageLayout": [
                424,
                {
                    "input": [
                        202,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                432,
                {
                    "input": [
                        203,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                435,
                {
                    "input": [
                        204,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                454,
                {
                    "applicationId": [
                        4,
                        "String!"
                    ],
                    "domain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createRelatedRecordPath": [
                475,
                {
                    "input": [
                        206,
                        "CreateRelatedRecordPathInput!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                526,
                {
                    "input": [
                        525,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "createSkill": [
                529,
                {
                    "input": [
                        208,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "createSubscriptionPaymentIntent": [
                118,
                {
                    "idempotencyKey": [
                        4,
                        "String!"
                    ],
                    "plan": [
                        120,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        536,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        1,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        4
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                569,
                {
                    "input": [
                        209,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "createUsageLimit": [
                653,
                {
                    "input": [
                        210,
                        "CreateUsageLimitInput!"
                    ]
                }
            ],
            "createValidationRule": [
                673,
                {
                    "input": [
                        211,
                        "CreateValidationRuleInput!"
                    ]
                }
            ],
            "createView": [
                678,
                {
                    "input": [
                        217,
                        "CreateViewInput!"
                    ]
                }
            ],
            "createViewField": [
                681,
                {
                    "input": [
                        213,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                682,
                {
                    "input": [
                        212,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFilter": [
                683,
                {
                    "input": [
                        215,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "createViewFilterGroup": [
                684,
                {
                    "input": [
                        214,
                        "CreateViewFilterGroupInput!"
                    ]
                }
            ],
            "createViewGroup": [
                687,
                {
                    "input": [
                        216,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createViewSort": [
                690,
                {
                    "input": [
                        218,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "createWebhook": [
                694,
                {
                    "input": [
                        219,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "deactivateSkill": [
                529,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteAgentChatChannel": [
                1,
                {
                    "channelId": [
                        566,
                        "UUID!"
                    ],
                    "destinationChannelId": [
                        566
                    ]
                }
            ],
            "deleteAppKeyValue": [
                1,
                {
                    "key": [
                        4,
                        "String!"
                    ],
                    "scope": [
                        49
                    ]
                }
            ],
            "deleteAppMessageChannel": [
                373,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                1,
                {
                    "input": [
                        226,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteCommandMenuItem": [
                166,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteConnectedAccount": [
                170,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                702
            ],
            "deleteEmailGroupChannel": [
                373,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteFrontComponent": [
                301,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                400,
                {
                    "ids": [
                        566,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteMcpServer": [
                368,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                1,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                400,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteOneAgent": [
                6,
                {
                    "input": [
                        21,
                        "AgentIdInput!"
                    ]
                }
            ],
            "deleteOneField": [
                281,
                {
                    "input": [
                        227,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                330,
                {
                    "input": [
                        228,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                354,
                {
                    "input": [
                        358,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                403,
                {
                    "input": [
                        229,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "deleteOneRole": [
                4,
                {
                    "roleId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deletePublicDomain": [
                1,
                {
                    "domain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                1,
                {
                    "messageId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteRelatedRecordPath": [
                475,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                230,
                {
                    "input": [
                        231,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "deleteSkill": [
                529,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteTwoFactorAuthenticationMethod": [
                232,
                {
                    "twoFactorAuthenticationMethodId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                1,
                {
                    "usageLimitId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteUser": [
                666
            ],
            "deleteUserFromWorkspace": [
                670,
                {
                    "workspaceMemberIdToDelete": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteValidationRule": [
                673,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteView": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteViewField": [
                681,
                {
                    "input": [
                        234,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                682,
                {
                    "input": [
                        233,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                683,
                {
                    "input": [
                        235,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteViewGroup": [
                687,
                {
                    "input": [
                        236,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                1,
                {
                    "input": [
                        237,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                694,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "deleteWorkspaceInvitation": [
                4,
                {
                    "appTokenId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayout": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyViewField": [
                681,
                {
                    "input": [
                        240,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                682,
                {
                    "input": [
                        239,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                683,
                {
                    "input": [
                        241,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyViewGroup": [
                687,
                {
                    "input": [
                        242,
                        "DestroyViewGroupInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                1,
                {
                    "input": [
                        243,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "detachRecordFromInboxThread": [
                1,
                {
                    "input": [
                        329,
                        "InboxThreadRecordInput!"
                    ]
                }
            ],
            "disconnectConnectedAccount": [
                170,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "duplicateDashboard": [
                247,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "duplicateMessageList": [
                248,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                249,
                {
                    "input": [
                        250,
                        "EditSsoInput!"
                    ]
                }
            ],
            "emailPasswordResetLink": [
                253,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "workspaceId": [
                        566
                    ]
                }
            ],
            "endSubscriptionTrialPeriod": [
                112
            ],
            "enqueueJob": [
                262,
                {
                    "input": [
                        260,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                264,
                {
                    "input": [
                        263,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "enrichWorkspaceCompany": [
                706
            ],
            "executeOneLogicFunction": [
                356,
                {
                    "input": [
                        278,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "generate": [
                306,
                {
                    "input": [
                        305,
                        "GenerateInput!"
                    ]
                }
            ],
            "generateApiKeyToken": [
                46,
                {
                    "apiKeyId": [
                        566,
                        "UUID!"
                    ],
                    "expiresAt": [
                        4,
                        "String!"
                    ]
                }
            ],
            "generateFrontComponentApplicationTokenPair": [
                87,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "generatePlaygroundToken": [
                94
            ],
            "generateTransientToken": [
                547
            ],
            "generateTwoFactorAuthenticationBackupCodes": [
                561,
                {
                    "otp": [
                        4
                    ]
                }
            ],
            "generateTwoFactorAuthenticationRecoveryCode": [
                563,
                {
                    "otp": [
                        4
                    ],
                    "userId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "getAuthTokensFromLoginToken": [
                96,
                {
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromOTP": [
                96,
                {
                    "captchaToken": [
                        4
                    ],
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ],
                    "otp": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromSSOExchangeToken": [
                96,
                {
                    "ssoExchangeToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromTwoFactorAuthenticationRecoveryCode": [
                564,
                {
                    "captchaToken": [
                        4
                    ],
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ],
                    "recoveryCode": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                308,
                {
                    "input": [
                        309,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                361,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "origin": [
                        4,
                        "String!"
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                420
            ],
            "grantApplicationCapabilities": [
                56,
                {
                    "input": [
                        318,
                        "GrantApplicationCapabilitiesInput!"
                    ]
                }
            ],
            "impersonate": [
                328,
                {
                    "userId": [
                        566,
                        "UUID!"
                    ],
                    "workspaceId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "ingestAppMessages": [
                336,
                {
                    "input": [
                        335,
                        "IngestAppMessagesInput!"
                    ]
                }
            ],
            "initiateOTPProvisioning": [
                338,
                {
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioningForAuthenticatedUser": [
                338
            ],
            "installApplication": [
                54,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ],
                    "version": [
                        4
                    ]
                }
            ],
            "installMarketplaceApp": [
                1,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ],
                    "version": [
                        4
                    ]
                }
            ],
            "markAgentChatThreadAsDoneInChannel": [
                1,
                {
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "moveAgentChatThreadToChannel": [
                1,
                {
                    "channelId": [
                        566
                    ],
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "openDirectMessage": [
                566,
                {
                    "workspaceMemberId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "prepareGettingStartedWorkflow": [
                314,
                {
                    "stepActionKey": [
                        311,
                        "GettingStartedStepActionKey!"
                    ]
                }
            ],
            "refreshEnterpriseValidityToken": [
                1
            ],
            "releaseEnterpriseServerBinding": [
                266
            ],
            "removeAgentChatMessageReaction": [
                24,
                {
                    "emoji": [
                        4,
                        "String!"
                    ],
                    "messageId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                1,
                {
                    "input": [
                        478,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "removeRecordShare": [
                470,
                {
                    "principal": [
                        467,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        474,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "removeRoleFromAgent": [
                1,
                {
                    "agentId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "renewApplicationToken": [
                87,
                {
                    "applicationRefreshToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "renewToken": [
                96,
                {
                    "appToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "reopenAgentChatThreadInChannel": [
                1,
                {
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "reportAppConnectionAuthFailure": [
                1,
                {
                    "input": [
                        479,
                        "ReportAppConnectionAuthFailureInput!"
                    ]
                }
            ],
            "resendEmailVerificationToken": [
                480,
                {
                    "affiliatePartnerName": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resendWorkspaceInvitation": [
                516,
                {
                    "appTokenId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetAiChatAssistantProfile": [
                30
            ],
            "resetCommandMenuItem": [
                166,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                432,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                424,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                435,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                542,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "retryChatMessage": [
                508,
                {
                    "modelId": [
                        4
                    ],
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "revokeAllOtherUserSessions": [
                2
            ],
            "revokeApiKey": [
                44,
                {
                    "input": [
                        481,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "revokeApplicationAuthorization": [
                1,
                {
                    "applicationAuthorizationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "revokeTwoFactorAuthenticationRecoveryCode": [
                1,
                {
                    "userId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "revokeUserSession": [
                1,
                {
                    "userSessionId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                485,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                498,
                {
                    "input": [
                        494,
                        "RunAgentInput!"
                    ]
                }
            ],
            "runApplicationHealthCheck": [
                72,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "runMyApplicationHealthCheck": [
                72,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                325,
                {
                    "connectionParameters": [
                        251,
                        "EmailAccountConnectionParameters!"
                    ],
                    "handle": [
                        4,
                        "String!"
                    ],
                    "id": [
                        566
                    ]
                }
            ],
            "sendAppChannelMessage": [
                507,
                {
                    "input": [
                        506,
                        "SendAppChannelMessageInput!"
                    ]
                }
            ],
            "sendChatMessage": [
                508,
                {
                    "browsingContext": [
                        341
                    ],
                    "channelId": [
                        566
                    ],
                    "fileAttachments": [
                        293,
                        "[FileAttachmentInput!]"
                    ],
                    "isAssistantMentioned": [
                        1
                    ],
                    "isAssistantParticipant": [
                        1
                    ],
                    "mentionedWorkspaceMemberIds": [
                        566,
                        "[UUID!]"
                    ],
                    "messageId": [
                        566,
                        "UUID!"
                    ],
                    "modelId": [
                        4
                    ],
                    "recipientWorkspaceMemberIds": [
                        566,
                        "[UUID!]"
                    ],
                    "shouldAssistantReply": [
                        1
                    ],
                    "text": [
                        4,
                        "String!"
                    ],
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "sendEmail": [
                511,
                {
                    "input": [
                        510,
                        "SendEmailInput!"
                    ]
                }
            ],
            "sendInboxMessage": [
                515,
                {
                    "input": [
                        514,
                        "SendInboxMessageInput!"
                    ]
                }
            ],
            "sendInvitations": [
                516,
                {
                    "emails": [
                        4,
                        "[String!]!"
                    ],
                    "roleId": [
                        566
                    ]
                }
            ],
            "sendMessageCampaign": [
                518,
                {
                    "input": [
                        517,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                513,
                {
                    "input": [
                        519,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                48,
                {
                    "input": [
                        521,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "setBillingPartnerCode": [
                117,
                {
                    "partnerCode": [
                        4,
                        "String!"
                    ]
                }
            ],
            "setEnterpriseKey": [
                266,
                {
                    "enterpriseKey": [
                        4,
                        "String!"
                    ]
                }
            ],
            "setRecordPrivate": [
                470,
                {
                    "isPrivate": [
                        1,
                        "Boolean!"
                    ],
                    "target": [
                        474,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setRecordShare": [
                470,
                {
                    "accessLevel": [
                        466,
                        "RecordShareAccessLevel!"
                    ],
                    "principal": [
                        467,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        474,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setResourceCreditSubscriptionPrice": [
                136,
                {
                    "priceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                101,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "signOut": [
                1,
                {
                    "refreshToken": [
                        4
                    ]
                }
            ],
            "signUp": [
                101,
                {
                    "affiliatePartnerName": [
                        4
                    ],
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "signUpInNewWorkspace": [
                527,
                {
                    "input": [
                        528
                    ]
                }
            ],
            "signUpInWorkspace": [
                527,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ],
                    "workspaceId": [
                        566
                    ],
                    "workspaceInviteHash": [
                        4
                    ],
                    "workspacePersonalInviteToken": [
                        4
                    ]
                }
            ],
            "skipSyncEmailOnboardingStep": [
                421,
                {
                    "isAutoSkipped": [
                        1,
                        "Boolean!"
                    ]
                }
            ],
            "snoozeAgentChatThreadInChannel": [
                1,
                {
                    "snoozedUntil": [
                        225,
                        "DateTime!"
                    ],
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "startChannelSync": [
                152,
                {
                    "connectedAccountId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                531,
                {
                    "companyContext": [
                        341
                    ],
                    "personContext": [
                        341
                    ]
                }
            ],
            "stopAgentChatStream": [
                1,
                {
                    "threadId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "stopGenerate": [
                1,
                {
                    "input": [
                        532,
                        "StopGenerateInput!"
                    ]
                }
            ],
            "stopImpersonation": [
                533
            ],
            "switchBillingPlan": [
                136,
                {
                    "plan": [
                        120
                    ]
                }
            ],
            "switchSubscriptionInterval": [
                136
            ],
            "syncAppMessageFolders": [
                380,
                {
                    "input": [
                        540,
                        "SyncAppMessageFoldersInput!"
                    ]
                }
            ],
            "syncApplication": [
                716,
                {
                    "dryRun": [
                        1
                    ],
                    "inferDeletionFromMissingEntities": [
                        1
                    ],
                    "manifest": [
                        341,
                        "JSON!"
                    ]
                }
            ],
            "syncMarketplaceCatalog": [
                1
            ],
            "syncMcpServerTools": [
                368,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "trackAnalytics": [
                41,
                {
                    "event": [
                        4
                    ],
                    "name": [
                        4
                    ],
                    "properties": [
                        341
                    ],
                    "type": [
                        42,
                        "AnalyticsType!"
                    ]
                }
            ],
            "transferApplicationRegistrationOwnership": [
                82,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ],
                    "targetWorkspaceSubdomain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "triggerAddPeopleToMessageListJob": [
                549,
                {
                    "input": [
                        548,
                        "TriggerAddPeopleToMessageListJobInput!"
                    ]
                }
            ],
            "triggerInstallApplication": [
                553,
                {
                    "input": [
                        550,
                        "TriggerInstallApplicationInput!"
                    ]
                }
            ],
            "triggerInstallApplicationJob": [
                552,
                {
                    "input": [
                        551,
                        "TriggerInstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUninstallApplication": [
                557,
                {
                    "input": [
                        554,
                        "TriggerUninstallApplicationInput!"
                    ]
                }
            ],
            "triggerUninstallApplicationJob": [
                556,
                {
                    "input": [
                        555,
                        "TriggerUninstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUpgradeApplication": [
                559,
                {
                    "input": [
                        558,
                        "TriggerUpgradeApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                1,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateAgentChatChannel": [
                7,
                {
                    "channelId": [
                        566,
                        "UUID!"
                    ],
                    "input": [
                        571,
                        "UpdateAgentChatChannelInput!"
                    ]
                }
            ],
            "updateAgentChatThreadInboxState": [
                20,
                {
                    "action": [
                        16,
                        "AgentChatInboxAction!"
                    ],
                    "snoozedUntil": [
                        225
                    ],
                    "threadIds": [
                        566,
                        "[UUID!]!"
                    ]
                }
            ],
            "updateApiKey": [
                44,
                {
                    "input": [
                        573,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "updateAppMessageChannel": [
                373,
                {
                    "input": [
                        574,
                        "UpdateAppMessageChannelInput!"
                    ]
                }
            ],
            "updateApplication": [
                54,
                {
                    "id": [
                        566,
                        "UUID!"
                    ],
                    "input": [
                        575,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                82,
                {
                    "input": [
                        576,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                86,
                {
                    "input": [
                        578,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                139,
                {
                    "input": [
                        580,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                166,
                {
                    "input": [
                        582,
                        "UpdateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                373,
                {
                    "input": [
                        583,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                301,
                {
                    "input": [
                        585,
                        "UpdateFrontComponentInput!"
                    ]
                }
            ],
            "updateGettingStarted": [
                310,
                {
                    "input": [
                        587,
                        "UpdateGettingStartedInput!"
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                279,
                {
                    "input": [
                        588,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                400,
                {
                    "inputs": [
                        601,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateManyObjects": [
                403,
                {
                    "inputs": [
                        602,
                        "[UpdateOneObjectInput!]!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                687,
                {
                    "inputs": [
                        624,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "updateMcpServer": [
                368,
                {
                    "input": [
                        591,
                        "UpdateMcpServerInput!"
                    ]
                }
            ],
            "updateMessageChannel": [
                373,
                {
                    "input": [
                        593,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "updateMessageFolder": [
                380,
                {
                    "input": [
                        595,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                380,
                {
                    "input": [
                        597,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateMyUserApplicationVariable": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "key": [
                        4,
                        "String!"
                    ],
                    "value": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                400,
                {
                    "input": [
                        601,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                6,
                {
                    "input": [
                        572,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                1,
                {
                    "applicationId": [
                        566
                    ],
                    "key": [
                        4,
                        "String!"
                    ],
                    "value": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateOneField": [
                281,
                {
                    "input": [
                        600,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                1,
                {
                    "input": [
                        589,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "updateOneObject": [
                403,
                {
                    "input": [
                        602,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "updateOneRole": [
                483,
                {
                    "updateRoleInput": [
                        609,
                        "UpdateRoleInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                424,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        603,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                432,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        604,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                435,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        606,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                424,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        608,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "updatePasswordViaResetToken": [
                339,
                {
                    "newPassword": [
                        4,
                        "String!"
                    ],
                    "passwordResetToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateSkill": [
                529,
                {
                    "input": [
                        611,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "updateTimelineActivityType": [
                542,
                {
                    "input": [
                        612,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                569,
                {
                    "input": [
                        613,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUsageLimit": [
                653,
                {
                    "input": [
                        614,
                        "UpdateUsageLimitInput!"
                    ]
                }
            ],
            "updateUserCreditsFallback": [
                111,
                {
                    "userCreditsFallback": [
                        668,
                        "UserCreditsFallback!"
                    ]
                }
            ],
            "updateUserEmail": [
                1,
                {
                    "newEmail": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "updateValidationRule": [
                673,
                {
                    "input": [
                        615,
                        "UpdateValidationRuleInput!"
                    ]
                }
            ],
            "updateView": [
                678,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        626,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "updateViewField": [
                681,
                {
                    "input": [
                        619,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                682,
                {
                    "input": [
                        617,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                683,
                {
                    "input": [
                        622,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilterGroup": [
                684,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        621,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "updateViewGroup": [
                687,
                {
                    "input": [
                        624,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateViewSort": [
                690,
                {
                    "input": [
                        627,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "updateWebhook": [
                694,
                {
                    "input": [
                        629,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                702,
                {
                    "data": [
                        633,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspaceAllowedEmbeddingOrigins": [
                702,
                {
                    "data": [
                        631,
                        "UpdateWorkspaceAllowedEmbeddingOriginsInput!"
                    ]
                }
            ],
            "updateWorkspaceIframeMediaPermissions": [
                702,
                {
                    "data": [
                        632,
                        "UpdateWorkspaceIframeMediaPermissionsInput!"
                    ]
                }
            ],
            "updateWorkspaceMemberRole": [
                711,
                {
                    "roleId": [
                        566,
                        "UUID!"
                    ],
                    "workspaceMemberId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "updateWorkspaceMemberSettings": [
                1,
                {
                    "input": [
                        634,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "upgradeApplication": [
                1,
                {
                    "appRegistrationId": [
                        4,
                        "String!"
                    ],
                    "targetVersion": [
                        4,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                82,
                {
                    "file": [
                        635,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        4
                    ]
                }
            ],
            "uploadApplicationFile": [
                292,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "file": [
                        635,
                        "Upload!"
                    ],
                    "fileFolder": [
                        294,
                        "FileFolder!"
                    ],
                    "filePath": [
                        4,
                        "String!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                296,
                {
                    "fieldMetadataUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "file": [
                        635,
                        "Upload!"
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                296,
                {
                    "file": [
                        635,
                        "Upload!"
                    ],
                    "workspaceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                296,
                {
                    "file": [
                        635,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                296,
                {
                    "file": [
                        635,
                        "Upload!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                288,
                {
                    "upsertFieldPermissionsInput": [
                        636,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                678,
                {
                    "input": [
                        639,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "upsertObjectPermissions": [
                411,
                {
                    "upsertObjectPermissionsInput": [
                        640,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                484,
                {
                    "upsertPermissionFlagsInput": [
                        641,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                643,
                {
                    "input": [
                        642,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "upsertViewWidget": [
                678,
                {
                    "input": [
                        644,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                90,
                {
                    "input": [
                        671,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "verifyEmailAndGetLoginToken": [
                675,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "verifyEmailAndGetWorkspaceAgnosticToken": [
                101,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                255,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                676,
                {
                    "otp": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "NativeModelCapabilities": {
            "twitterSearch": [
                1
            ],
            "webSearch": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "NavigationMenuItem": {
            "agentChatChannelId": [
                566
            ],
            "agentId": [
                566
            ],
            "applicationId": [
                566
            ],
            "color": [
                4
            ],
            "createdAt": [
                225
            ],
            "folderId": [
                566
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "link": [
                4
            ],
            "name": [
                4
            ],
            "nativePageKey": [
                4
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "targetObjectMetadataId": [
                566
            ],
            "targetRecordId": [
                566
            ],
            "targetRecordIdentifier": [
                463
            ],
            "type": [
                401
            ],
            "updatedAt": [
                225
            ],
            "userWorkspaceId": [
                566
            ],
            "viewId": [
                566
            ],
            "workflowId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "NavigationMenuItemType": {},
        "NotesConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "Object": {
            "applicationId": [
                566
            ],
            "color": [
                4
            ],
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "disabledObjectPermissionActions": [
                4
            ],
            "duplicateCriteria": [
                4
            ],
            "fields": [
                406,
                {
                    "filter": [
                        286,
                        "FieldFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "fieldsList": [
                281
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "imageIdentifierFieldMetadataId": [
                566
            ],
            "indexMetadataList": [
                330
            ],
            "indexMetadatas": [
                408,
                {
                    "filter": [
                        333,
                        "IndexFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isRemote": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isUICreatable": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "labelIdentifierFieldMetadataId": [
                566
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "openRecordIn": [
                410
            ],
            "searchFieldMetadataList": [
                504
            ],
            "shortcut": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "ObjectConnection": {
            "edges": [
                405
            ],
            "pageInfo": [
                423
            ],
            "__typename": [
                4
            ]
        },
        "ObjectEdge": {
            "cursor": [
                173
            ],
            "node": [
                403
            ],
            "__typename": [
                4
            ]
        },
        "ObjectFieldsConnection": {
            "edges": [
                285
            ],
            "pageInfo": [
                423
            ],
            "__typename": [
                4
            ]
        },
        "ObjectFilter": {
            "and": [
                407
            ],
            "id": [
                567
            ],
            "isActive": [
                138
            ],
            "isRemote": [
                138
            ],
            "isSearchable": [
                138
            ],
            "isSystem": [
                138
            ],
            "isUICreatable": [
                138
            ],
            "isUIEditable": [
                138
            ],
            "isUIReadOnly": [
                138
            ],
            "or": [
                407
            ],
            "universalIdentifier": [
                567
            ],
            "__typename": [
                4
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "edges": [
                331
            ],
            "pageInfo": [
                423
            ],
            "__typename": [
                4
            ]
        },
        "ObjectMetadataCommandMenuItemPayload": {
            "objectMetadataItemId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ObjectOpenRecordIn": {},
        "ObjectPermission": {
            "canDestroyObjectRecords": [
                1
            ],
            "canReadObjectRecords": [
                1
            ],
            "canSoftDeleteObjectRecords": [
                1
            ],
            "canUpdateObjectRecords": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "restrictedFields": [
                341
            ],
            "rowLevelPermissionPredicateGroups": [
                487
            ],
            "rowLevelPermissionPredicates": [
                486
            ],
            "uneditableFields": [
                566
            ],
            "unreadableFields": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ObjectPermissionInput": {
            "canDestroyObjectRecords": [
                1
            ],
            "canReadObjectRecords": [
                1
            ],
            "canSoftDeleteObjectRecords": [
                1
            ],
            "canUpdateObjectRecords": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordCount": {
            "objectNamePlural": [
                4
            ],
            "totalCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordEvent": {
            "action": [
                224
            ],
            "objectNameSingular": [
                4
            ],
            "properties": [
                415
            ],
            "recordId": [
                4
            ],
            "userId": [
                4
            ],
            "workspaceMemberId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordEventProperties": {
            "after": [
                341
            ],
            "before": [
                341
            ],
            "diff": [
                341
            ],
            "updatedFields": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordEventWithQueryIds": {
            "objectRecordEvent": [
                414
            ],
            "queryIds": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordGroupByDateGranularity": {},
        "ObjectRecordsPermissions": {
            "canCreateAllRecords": [
                1
            ],
            "canDestroyAllRecords": [
                1
            ],
            "canReadAllRecords": [
                1
            ],
            "canSoftDeleteAllRecords": [
                1
            ],
            "canUpdateAllRecords": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "restrictedFields": [
                341
            ],
            "rowLevelRecordsPermissions": [
                493
            ],
            "uneditableFields": [
                566
            ],
            "unreadableFields": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "OnboardingStatus": {},
        "OnboardingStepNavigation": {
            "onboardingStatus": [
                419
            ],
            "previousOnboardingStatus": [
                419
            ],
            "__typename": [
                4
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "OpenRecordIn": {},
        "PageInfo": {
            "endCursor": [
                173
            ],
            "hasNextPage": [
                1
            ],
            "hasPreviousPage": [
                1
            ],
            "startCursor": [
                173
            ],
            "__typename": [
                4
            ]
        },
        "PageLayout": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "defaultTabToFocusOnMobileAndSidePanelId": [
                566
            ],
            "deletedAt": [
                225
            ],
            "filters": [
                425
            ],
            "id": [
                566
            ],
            "isFirstTabPinned": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "tabs": [
                432
            ],
            "type": [
                434
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutFilter": {
            "defaultValue": [
                430
            ],
            "id": [
                566
            ],
            "label": [
                4
            ],
            "position": [
                8
            ],
            "type": [
                429
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutFilterCondition": {
            "operand": [
                686
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutFilterConditionInput": {
            "operand": [
                686
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutFilterInput": {
            "defaultValue": [
                431
            ],
            "id": [
                566
            ],
            "label": [
                4
            ],
            "position": [
                8
            ],
            "type": [
                429
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutFilterType": {},
        "PageLayoutFilterValue": {
            "conditions": [
                426
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutFilterValueInput": {
            "conditions": [
                427
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutTab": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "layoutMode": [
                433
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "widgets": [
                435
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutTabLayoutMode": {},
        "PageLayoutType": {},
        "PageLayoutWidget": {
            "applicationGrantedIframeMediaPermissions": [
                323
            ],
            "applicationId": [
                566
            ],
            "applicationName": [
                4
            ],
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalDisplay": [
                341
            ],
            "configuration": [
                695
            ],
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "gridPosition": [
                320
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "pageLayoutTabId": [
                566
            ],
            "position": [
                438
            ],
            "title": [
                4
            ],
            "type": [
                697
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetCanvasPosition": {
            "layoutMode": [
                433
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "column": [
                2
            ],
            "columnSpan": [
                2
            ],
            "layoutMode": [
                433
            ],
            "row": [
                2
            ],
            "rowSpan": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetCanvasPosition": [
                436
            ],
            "on_PageLayoutWidgetGridPosition": [
                437
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                440
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetVerticalListHeightBehavior": {},
        "PageLayoutWidgetVerticalListPosition": {
            "heightBehavior": [
                439
            ],
            "index": [
                2
            ],
            "layoutMode": [
                433
            ],
            "__typename": [
                4
            ]
        },
        "PathCommandMenuItemPayload": {
            "path": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PermissionFlag": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "permissionType": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "PermissionFlagType": {},
        "PieChartConfiguration": {
            "aggregateFieldMetadataId": [
                566
            ],
            "aggregateOperation": [
                28
            ],
            "color": [
                4
            ],
            "configurationType": [
                696
            ],
            "dashboardFilterBindings": [
                222
            ],
            "dateGranularity": [
                417
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "displayLegend": [
                1
            ],
            "filter": [
                341
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "groupByFieldMetadataId": [
                566
            ],
            "groupBySubFieldName": [
                4
            ],
            "hideEmptyCategory": [
                1
            ],
            "manualSortOrder": [
                4
            ],
            "numberFormat": [
                153
            ],
            "orderBy": [
                319
            ],
            "showCenterMetric": [
                1
            ],
            "splitMultiValueFields": [
                1
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PieChartData": {
            "data": [
                447
            ],
            "formattedToRawLookup": [
                341
            ],
            "hasTooManyGroups": [
                1
            ],
            "showCenterMetric": [
                1
            ],
            "showDataLabels": [
                1
            ],
            "showLegend": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "PieChartDataInput": {
            "configuration": [
                341
            ],
            "dashboardFilterValues": [
                223
            ],
            "objectMetadataId": [
                566
            ],
            "viewerTimeZone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PieChartDataItem": {
            "key": [
                4
            ],
            "value": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "PlaceDetailsResult": {
            "city": [
                4
            ],
            "country": [
                4
            ],
            "location": [
                353
            ],
            "postcode": [
                4
            ],
            "state": [
                4
            ],
            "street": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PreviewMessageCampaignAudienceInput": {
            "listId": [
                4
            ],
            "unsubscribeTopicId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PreviewMessageCampaignSendInput": {
            "campaignId": [
                4
            ],
            "scheduledAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "PreviewMessageCampaignSendOutputDTO": {
            "audience": [
                147
            ],
            "blockers": [
                372
            ],
            "__typename": [
                4
            ]
        },
        "PublicApplicationRegistration": {
            "id": [
                566
            ],
            "isClaimingVerifiedClientName": [
                1
            ],
            "isVerified": [
                1
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "websiteUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublicConnectionParametersOutput": {
            "connectionSecurity": [
                252
            ],
            "host": [
                4
            ],
            "port": [
                8
            ],
            "username": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublicDomain": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "domain": [
                4
            ],
            "id": [
                566
            ],
            "isValidated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "PublicFeatureFlag": {
            "key": [
                280
            ],
            "metadata": [
                456
            ],
            "__typename": [
                4
            ]
        },
        "PublicFeatureFlagMetadata": {
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "imagePath": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublicImapSmtpCaldavConnectionParameters": {
            "CALDAV": [
                453
            ],
            "IMAP": [
                453
            ],
            "SMTP": [
                453
            ],
            "__typename": [
                4
            ]
        },
        "PublicWorkspaceData": {
            "authBypassProviders": [
                92
            ],
            "authProviders": [
                93
            ],
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "logo": [
                4
            ],
            "workspaceUrls": [
                720
            ],
            "__typename": [
                4
            ]
        },
        "PublicWorkspaceDataSummary": {
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "logo": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "accessGroupPropagationProgress": [
                0
            ],
            "agentChatChannelRoles": [
                10
            ],
            "agentChatChannelSummaries": [
                11
            ],
            "agentChatChannelThreadIds": [
                13,
                {
                    "after": [
                        4
                    ],
                    "assignment": [
                        9
                    ],
                    "channelId": [
                        566,
                        "UUID!"
                    ],
                    "filter": [
                        12
                    ],
                    "first": [
                        2
                    ],
                    "status": [
                        14
                    ]
                }
            ],
            "agentChatChannels": [
                7
            ],
            "agentChatOpenThreadsSummary": [
                17
            ],
            "agentRuns": [
                25,
                {
                    "agentId": [
                        566,
                        "UUID!"
                    ],
                    "limit": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "aiChatUsage": [
                32
            ],
            "aiChatUserCreditsUsage": [
                33
            ],
            "apiKey": [
                44,
                {
                    "input": [
                        307,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "apiKeys": [
                44
            ],
            "appConnection": [
                47,
                {
                    "id": [
                        19,
                        "ID!"
                    ]
                }
            ],
            "appConnections": [
                47,
                {
                    "filter": [
                        350
                    ]
                }
            ],
            "appKeyValue": [
                48,
                {
                    "key": [
                        4,
                        "String!"
                    ],
                    "scope": [
                        49
                    ]
                }
            ],
            "appMessageChannels": [
                373,
                {
                    "filter": [
                        351
                    ]
                }
            ],
            "appMessageFolders": [
                380,
                {
                    "filter": [
                        352
                    ]
                }
            ],
            "applicationConnectedAccounts": [
                57,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "applicationConnectionProviders": [
                58,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "applicationCoreGraphqlSchema": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "applicationRegistrationTarballUrl": [
                4,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                503,
                {
                    "applicationId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "barChartData": [
                104,
                {
                    "input": [
                        105,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "billingPartnerCode": [
                117
            ],
            "billingPlans": [
                119
            ],
            "billingPortalSession": [
                129,
                {
                    "forPaymentMethodUpdate": [
                        1
                    ],
                    "returnUrlPath": [
                        4
                    ]
                }
            ],
            "callRecordingIdForCalendarEvent": [
                566,
                {
                    "calendarEventId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                22,
                {
                    "agentUniversalIdentifier": [
                        566
                    ],
                    "threadId": [
                        566
                    ],
                    "threadKey": [
                        4
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                155,
                {
                    "agentUniversalIdentifier": [
                        566
                    ],
                    "threadId": [
                        566
                    ],
                    "threadKey": [
                        4
                    ]
                }
            ],
            "chatThread": [
                18,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "checkUserExists": [
                158,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceInviteHashIsValid": [
                710,
                {
                    "inviteHash": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceSubdomainAvailability": [
                534,
                {
                    "subdomain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "commandMenuItem": [
                166,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "commandMenuItems": [
                166
            ],
            "currentUser": [
                666
            ],
            "currentUserApplicationAuthorizations": [
                55
            ],
            "currentUserSessions": [
                669
            ],
            "currentWorkspace": [
                702
            ],
            "enterpriseCheckoutSession": [
                4,
                {
                    "billingInterval": [
                        4
                    ]
                }
            ],
            "enterprisePortalSession": [
                4,
                {
                    "returnUrlPath": [
                        4
                    ]
                }
            ],
            "enterpriseSubscriptionStatus": [
                267
            ],
            "eventLogs": [
                274,
                {
                    "input": [
                        273,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "exportApplication": [
                62,
                {
                    "shouldIncludeDependencies": [
                        1
                    ],
                    "shouldIncludeSourceFiles": [
                        1
                    ],
                    "universalIdentifier": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "field": [
                281,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "fields": [
                283,
                {
                    "filter": [
                        286,
                        "FieldFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                452,
                {
                    "clientId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                82,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationMonitoring": [
                74,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "periodEnd": [
                        225
                    ],
                    "periodStart": [
                        225
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                84,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "periodEnd": [
                        225
                    ],
                    "periodStart": [
                        225
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                86,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findClaimableApplicationRegistration": [
                159,
                {
                    "sourcePackage": [
                        4
                    ],
                    "universalIdentifier": [
                        4
                    ]
                }
            ],
            "findInstallApplicationJobStatus": [
                344,
                {
                    "jobId": [
                        4
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findManyAgents": [
                6
            ],
            "findManyApplicationRegistrations": [
                82
            ],
            "findManyApplications": [
                54
            ],
            "findManyLogicFunctions": [
                354
            ],
            "findManyMarketplaceApps": [
                362,
                {
                    "universalIdentifiers": [
                        4,
                        "[String!]"
                    ]
                }
            ],
            "findManyPublicDomains": [
                454
            ],
            "findMarketplaceAppDetail": [
                363,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findOneAgent": [
                6,
                {
                    "input": [
                        21,
                        "AgentIdInput!"
                    ]
                }
            ],
            "findOneApplication": [
                54,
                {
                    "id": [
                        566
                    ],
                    "universalIdentifier": [
                        566
                    ]
                }
            ],
            "findOneApplicationRegistration": [
                82,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findOneLogicFunction": [
                354,
                {
                    "input": [
                        358,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findUninstallApplicationJobStatus": [
                344,
                {
                    "jobId": [
                        4
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findUpgradeApplicationJobStatus": [
                344,
                {
                    "jobId": [
                        4
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                704
            ],
            "findWorkspaceFromInviteHash": [
                702,
                {
                    "inviteHash": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceInvitations": [
                709
            ],
            "frontComponent": [
                301,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "frontComponents": [
                301
            ],
            "getAddressDetails": [
                448,
                {
                    "placeId": [
                        4,
                        "String!"
                    ],
                    "token": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                38
            ],
            "getApiKeyRoles": [
                483
            ],
            "getApprovedAccessDomains": [
                90
            ],
            "getAutoCompleteAddress": [
                98,
                {
                    "address": [
                        4,
                        "String!"
                    ],
                    "country": [
                        4
                    ],
                    "isFieldCity": [
                        1
                    ],
                    "token": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAvailablePackages": [
                341,
                {
                    "input": [
                        358,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getConnectedImapSmtpCaldavAccount": [
                172,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "getEmailingDomains": [
                255
            ],
            "getInviteSuggestions": [
                340
            ],
            "getJobs": [
                344,
                {
                    "jobIds": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                4,
                {
                    "input": [
                        358,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getPageLayout": [
                424,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                432,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTabs": [
                432,
                {
                    "pageLayoutId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                435,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                435,
                {
                    "pageLayoutTabId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                424,
                {
                    "objectMetadataId": [
                        4
                    ],
                    "pageLayoutType": [
                        434
                    ]
                }
            ],
            "getPermissionFlags": [
                442
            ],
            "getPublicWorkspaceDataByDomain": [
                458,
                {
                    "origin": [
                        4
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                459,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "getResourceCreditUsage": [
                128
            ],
            "getRole": [
                483,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "getRoles": [
                483
            ],
            "getSSOIdentityProviders": [
                298
            ],
            "getToolIndex": [
                546
            ],
            "getToolInputSchema": [
                341,
                {
                    "toolName": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getUsageAnalytics": [
                650,
                {
                    "input": [
                        651
                    ]
                }
            ],
            "getView": [
                678,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewField": [
                681,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroup": [
                682,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroups": [
                682,
                {
                    "viewId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFields": [
                681,
                {
                    "viewId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFilter": [
                683,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroup": [
                684,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroups": [
                684,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViewFilters": [
                683,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViewGroup": [
                687,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewGroups": [
                687,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViewSort": [
                690,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewSorts": [
                690,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViews": [
                678,
                {
                    "objectMetadataId": [
                        4
                    ],
                    "viewTypes": [
                        692,
                        "[ViewType!]"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                707
            ],
            "gettingStartedProgress": [
                310
            ],
            "gettingStartedWorkflowPreviews": [
                315
            ],
            "githubClaimAuthorizationUrl": [
                4,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "isApplicationStopped": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "lineChartData": [
                346,
                {
                    "input": [
                        347,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "listPlans": [
                119
            ],
            "mcpServer": [
                368,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "mcpServers": [
                368
            ],
            "messageSuppressions": [
                385,
                {
                    "input": [
                        299,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "metadataTranslations": [
                390,
                {
                    "input": [
                        393,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "minimalMetadata": [
                394
            ],
            "mostlyEmptyFieldMetadataIds": [
                566,
                {
                    "objectMetadataId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "myApplicationPreferences": [
                81
            ],
            "myCalendarChannels": [
                139,
                {
                    "connectedAccountId": [
                        566
                    ]
                }
            ],
            "myConnectedAccounts": [
                170
            ],
            "myMessageChannels": [
                373,
                {
                    "connectedAccountId": [
                        566
                    ]
                }
            ],
            "myMessageFolders": [
                380,
                {
                    "messageChannelId": [
                        566
                    ]
                }
            ],
            "myUserApplicationVariables": [
                712
            ],
            "navigationMenuItem": [
                400,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "navigationMenuItems": [
                400
            ],
            "object": [
                403,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "objectRecordCounts": [
                413
            ],
            "objects": [
                404,
                {
                    "filter": [
                        407,
                        "ObjectFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "pieChartData": [
                445,
                {
                    "input": [
                        446,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "previewMessageCampaignAudience": [
                147,
                {
                    "input": [
                        449,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "previewMessageCampaignSend": [
                451,
                {
                    "input": [
                        450,
                        "PreviewMessageCampaignSendInput!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                363,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                362
            ],
            "recordPermissions": [
                465,
                {
                    "targets": [
                        474,
                        "[RecordTargetInput!]!"
                    ]
                }
            ],
            "recordSharing": [
                470,
                {
                    "target": [
                        474,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "relatedRecordPaths": [
                475
            ],
            "skill": [
                529,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "skills": [
                529
            ],
            "timelineActivityTypes": [
                542
            ],
            "twoFactorAuthenticationBackupCodeStatus": [
                560
            ],
            "twoFactorAuthenticationRecoveryStatus": [
                565,
                {
                    "userId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                569
            ],
            "usageLimits": [
                653
            ],
            "usageQuotaDefinitions": [
                657
            ],
            "usageQuotaScopeConsumption": [
                659,
                {
                    "input": [
                        660,
                        "UsageQuotaScopeInput!"
                    ]
                }
            ],
            "usageQuotasWithConsumption": [
                661
            ],
            "validatePasswordResetToken": [
                672,
                {
                    "passwordResetToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "validationRules": [
                673,
                {
                    "objectMetadataId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "validationRulesReadingField": [
                673,
                {
                    "fieldMetadataId": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "webhook": [
                694,
                {
                    "id": [
                        566,
                        "UUID!"
                    ]
                }
            ],
            "webhooks": [
                694
            ],
            "__typename": [
                4
            ]
        },
        "RatioAggregateConfig": {
            "fieldMetadataId": [
                566
            ],
            "optionValue": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordExport": {
            "downloadPath": [
                4
            ],
            "errorMessage": [
                4
            ],
            "filename": [
                4
            ],
            "id": [
                566
            ],
            "progress": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "RecordIdentifier": {
            "id": [
                566
            ],
            "imageIdentifier": [
                4
            ],
            "labelIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordPermissionsDTO": {
            "canDelete": [
                1
            ],
            "canRead": [
                1
            ],
            "canSoftDelete": [
                1
            ],
            "canUpdate": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "RecordPermissionsResult": {
            "objectMetadataId": [
                566
            ],
            "permissions": [
                464
            ],
            "recordId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RecordShareAccessLevel": {},
        "RecordSharePrincipalInput": {
            "roleId": [
                566
            ],
            "workspaceMemberId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RecordSharePrincipalType": {},
        "RecordShareRowCause": {},
        "RecordSharingDTO": {
            "canManageSharing": [
                1
            ],
            "hasManagedGeneralAccess": [
                1
            ],
            "isPrivate": [
                1
            ],
            "isShareable": [
                1
            ],
            "permissions": [
                464
            ],
            "roles": [
                472
            ],
            "shares": [
                471
            ],
            "__typename": [
                4
            ]
        },
        "RecordSharingGrantDTO": {
            "accessLevel": [
                466
            ],
            "id": [
                19
            ],
            "principalId": [
                566
            ],
            "principalRoleId": [
                566
            ],
            "principalType": [
                468
            ],
            "rowCause": [
                469
            ],
            "__typename": [
                4
            ]
        },
        "RecordSharingRoleDTO": {
            "canRead": [
                1
            ],
            "canUpdate": [
                1
            ],
            "id": [
                566
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                696
            ],
            "dashboardFilterBindings": [
                222
            ],
            "isUIEditable": [
                1
            ],
            "recordLimit": [
                2
            ],
            "viewId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordTargetInput": {
            "objectMetadataId": [
                566
            ],
            "recordId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RelatedRecordPath": {
            "firstFieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "isInherent": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "secondFieldMetadataId": [
                566
            ],
            "thirdFieldMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "Relation": {
            "sourceFieldMetadata": [
                281
            ],
            "sourceObjectMetadata": [
                403
            ],
            "targetFieldMetadata": [
                281
            ],
            "targetObjectMetadata": [
                403
            ],
            "type": [
                477
            ],
            "__typename": [
                4
            ]
        },
        "RelationType": {},
        "RemoveQueryFromEventStreamInput": {
            "eventStreamId": [
                4
            ],
            "queryId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ReportAppConnectionAuthFailureInput": {
            "id": [
                19
            ],
            "reason": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ResendEmailVerificationToken": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "RevokeApiKeyInput": {
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RichTextBody": {
            "blocknote": [
                4
            ],
            "markdown": [
                4
            ],
            "tiptap": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Role": {
            "agents": [
                6
            ],
            "apiKeys": [
                45
            ],
            "applicationId": [
                566
            ],
            "canAccessAllAgentChatChannels": [
                1
            ],
            "canAccessAllTools": [
                1
            ],
            "canBeAssignedToAgents": [
                1
            ],
            "canBeAssignedToApiKeys": [
                1
            ],
            "canBeAssignedToUsers": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "fieldPermissions": [
                288
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isEditable": [
                1
            ],
            "label": [
                4
            ],
            "objectPermissions": [
                411
            ],
            "permissionFlags": [
                484
            ],
            "rowLevelPermissionFieldPermissions": [
                288
            ],
            "rowLevelPermissionPredicateGroups": [
                487
            ],
            "rowLevelPermissionPredicates": [
                486
            ],
            "rowLevelPermissionRules": [
                492
            ],
            "universalIdentifier": [
                566
            ],
            "workspaceMembers": [
                711
            ],
            "__typename": [
                4
            ]
        },
        "RolePermissionFlag": {
            "flag": [
                4
            ],
            "id": [
                566
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RotateClientSecret": {
            "clientSecret": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicate": {
            "fieldMetadataId": [
                4
            ],
            "id": [
                4
            ],
            "objectMetadataId": [
                4
            ],
            "operand": [
                491
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "relationFieldMetadataId": [
                4
            ],
            "roleId": [
                4
            ],
            "rowLevelPermissionPredicateGroupId": [
                4
            ],
            "subFieldName": [
                4
            ],
            "value": [
                341
            ],
            "workspaceMemberFieldMetadataId": [
                4
            ],
            "workspaceMemberSubFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateGroup": {
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "id": [
                4
            ],
            "logicalOperator": [
                489
            ],
            "objectMetadataId": [
                4
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                4
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "roleId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateGroupInput": {
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "id": [
                566
            ],
            "logicalOperator": [
                489
            ],
            "objectMetadataId": [
                566
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                566
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateGroupLogicalOperator": {},
        "RowLevelPermissionPredicateInput": {
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "operand": [
                491
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "relationFieldMetadataId": [
                566
            ],
            "rowLevelPermissionPredicateGroupId": [
                566
            ],
            "subFieldName": [
                4
            ],
            "value": [
                341
            ],
            "workspaceMemberFieldMetadataId": [
                4
            ],
            "workspaceMemberSubFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateOperand": {},
        "RowLevelPermissionRule": {
            "canCreateRecords": [
                1
            ],
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "id": [
                566
            ],
            "objectMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelRecordsPermissions": {
            "canCreateRecords": [
                1
            ],
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "predicateGroups": [
                487
            ],
            "predicates": [
                486
            ],
            "ruleId": [
                566
            ],
            "uneditableFields": [
                566
            ],
            "unreadableFields": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentInput": {
            "additionalInstructions": [
                4
            ],
            "agentUniversalIdentifier": [
                4
            ],
            "input": [
                496
            ],
            "messages": [
                496
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                341
            ],
            "runAsWorkspaceMemberId": [
                566
            ],
            "thread": [
                499
            ],
            "waitForCompletion": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentMessageAttachmentInput": {
            "fileId": [
                566
            ],
            "filename": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentMessageInput": {
            "attachments": [
                495
            ],
            "content": [
                4
            ],
            "role": [
                497
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentMessageRole": {},
        "RunAgentResult": {
            "error": [
                4
            ],
            "result": [
                341
            ],
            "runId": [
                566
            ],
            "status": [
                4
            ],
            "success": [
                1
            ],
            "threadId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentThreadInput": {
            "key": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SSOConnection": {
            "id": [
                566
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                502
            ],
            "type": [
                321
            ],
            "__typename": [
                4
            ]
        },
        "SSOIdentityProvider": {
            "id": [
                566
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                502
            ],
            "type": [
                321
            ],
            "__typename": [
                4
            ]
        },
        "SSOIdentityProviderStatus": {},
        "SdkClientChecksums": {
            "core": [
                4
            ],
            "metadata": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SearchField": {
            "createdAt": [
                225
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "position": [
                8
            ],
            "tsVectorFieldMetadataId": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "SendAppChannelMessageEmailInput": {
            "bcc": [
                4
            ],
            "body": [
                4
            ],
            "cc": [
                4
            ],
            "inReplyTo": [
                4
            ],
            "subject": [
                4
            ],
            "to": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendAppChannelMessageInput": {
            "email": [
                505
            ],
            "idempotencyKey": [
                566
            ],
            "messageChannelId": [
                566
            ],
            "messageThreadId": [
                566
            ],
            "text": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendAppChannelMessageOutput": {
            "messageId": [
                566
            ],
            "messageThreadId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "SendChatMessageResult": {
            "mentionedParticipantWorkspaceMemberIds": [
                566
            ],
            "messageId": [
                4
            ],
            "queued": [
                1
            ],
            "recipientParticipantWorkspaceMemberIds": [
                566
            ],
            "streamId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailAttachmentInput": {
            "id": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailInput": {
            "bcc": [
                4
            ],
            "body": [
                4
            ],
            "cc": [
                4
            ],
            "connectedAccountId": [
                4
            ],
            "draftMessageId": [
                4
            ],
            "files": [
                509
            ],
            "fromHandle": [
                4
            ],
            "inReplyTo": [
                4
            ],
            "subject": [
                4
            ],
            "targetRecord": [
                512
            ],
            "to": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailOutput": {
            "error": [
                4
            ],
            "messageThreadId": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailTargetRecordInput": {
            "objectNameSingular": [
                4
            ],
            "recordId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailViaDomainOutput": {
            "messageId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendInboxMessageInput": {
            "idempotencyKey": [
                4
            ],
            "text": [
                4
            ],
            "threadKey": [
                4
            ],
            "title": [
                4
            ],
            "toolCall": [
                341
            ],
            "workspaceMemberIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "SendInboxMessageResult": {
            "threadId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "SendInvitations": {
            "errors": [
                4
            ],
            "result": [
                709
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "SendMessageCampaignInput": {
            "campaignId": [
                4
            ],
            "scheduledAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "SendMessageCampaignOutputDTO": {
            "audience": [
                147
            ],
            "campaignId": [
                4
            ],
            "queuedCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "SendMessageCampaignTestInput": {
            "body": [
                4
            ],
            "fromAddress": [
                4
            ],
            "subject": [
                4
            ],
            "toAddress": [
                4
            ],
            "unsubscribeTopicId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Sentry": {
            "dsn": [
                4
            ],
            "environment": [
                4
            ],
            "release": [
                4
            ],
            "tracesSampleRate": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "SetAppKeyValueInput": {
            "key": [
                4
            ],
            "scope": [
                49
            ],
            "value": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "SettingsMenuItem": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "frontComponentId": [
                566
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "position": [
                8
            ],
            "scope": [
                523
            ],
            "slug": [
                4
            ],
            "title": [
                4
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "SettingsMenuItemScope": {},
        "SetupOIDCSsoInput": {
            "clientID": [
                4
            ],
            "clientSecret": [
                4
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SetupSAMLSsoInput": {
            "certificate": [
                4
            ],
            "fingerprint": [
                4
            ],
            "id": [
                566
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "ssoURL": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SetupSso": {
            "id": [
                566
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                502
            ],
            "type": [
                321
            ],
            "__typename": [
                4
            ]
        },
        "SignUp": {
            "loginToken": [
                94
            ],
            "workspace": [
                721
            ],
            "__typename": [
                4
            ]
        },
        "SignUpInNewWorkspaceInput": {
            "affiliatePartnerName": [
                4
            ],
            "captchaToken": [
                4
            ],
            "displayName": [
                4
            ],
            "subdomain": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Skill": {
            "applicationId": [
                566
            ],
            "content": [
                4
            ],
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isCustom": [
                1
            ],
            "isSystem": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "StandaloneRichTextConfiguration": {
            "body": [
                482
            ],
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                719
            ],
            "thread": [
                18
            ],
            "__typename": [
                4
            ]
        },
        "StopGenerateInput": {
            "runId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "StopImpersonation": {
            "canRestoreImpersonatorSession": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "SubdomainAvailabilityDTO": {
            "available": [
                1
            ],
            "isValid": [
                1
            ],
            "suggestedSubdomain": [
                4
            ],
            "suggestedSubdomains": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "eventLogsLive": [
                275,
                {
                    "fieldFilters": [
                        269,
                        "[EventLogFieldFilterInput!]"
                    ],
                    "table": [
                        276,
                        "EventLogTable!"
                    ]
                }
            ],
            "exportRecords": [
                462,
                {
                    "input": [
                        205,
                        "CreateRecordExportInput!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                359,
                {
                    "input": [
                        360,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                15,
                {
                    "agentUniversalIdentifier": [
                        566
                    ],
                    "runId": [
                        566
                    ],
                    "threadId": [
                        566
                    ],
                    "threadKey": [
                        4
                    ]
                }
            ],
            "onEventSubscription": [
                277,
                {
                    "eventStreamId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "SubscriptionInterval": {},
        "SubscriptionStatus": {},
        "Support": {
            "supportDriver": [
                539
            ],
            "supportFrontChatId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SupportDriver": {},
        "SyncAppMessageFoldersInput": {
            "folders": [
                51
            ],
            "messageChannelId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "TasksConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "TimelineActivityType": {
            "action": [
                4
            ],
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "emit": [
                543
            ],
            "frontComponentUniversalIdentifier": [
                566
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "objectUniversalIdentifier": [
                566
            ],
            "replacesTimelineActivityTypeUniversalIdentifier": [
                566
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "TimelineActivityTypeEmit": {
            "objectUniversalIdentifier": [
                566
            ],
            "on": [
                4
            ],
            "through": [
                544
            ],
            "__typename": [
                4
            ]
        },
        "TimelineActivityTypeEmitThrough": {
            "happensAtFieldUniversalIdentifier": [
                566
            ],
            "relationFieldUniversalIdentifier": [
                566
            ],
            "triggerFieldUniversalIdentifiers": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "ToolIndexEntry": {
            "category": [
                4
            ],
            "description": [
                4
            ],
            "frontComponentId": [
                4
            ],
            "icon": [
                4
            ],
            "inputSchema": [
                341
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "objectName": [
                4
            ],
            "widgetName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TransientToken": {
            "transientToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "TriggerAddPeopleToMessageListJobInput": {
            "messageListId": [
                566
            ],
            "personFilter": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "TriggerAddPeopleToMessageListJobResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationJobInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationJobResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationJobInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationJobResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUpgradeApplicationInput": {
            "targetVersion": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUpgradeApplicationResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationBackupCodeStatus": {
            "remainingBackupCodeCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationBackupCodes": {
            "backupCodes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationMethodSummary": {
            "status": [
                4
            ],
            "strategy": [
                4
            ],
            "twoFactorAuthenticationMethodId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationRecoveryCode": {
            "expiresAt": [
                225
            ],
            "recoveryCode": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationRecoveryCodeRedemption": {
            "isTwoFactorAuthenticationReset": [
                1
            ],
            "provisioningUri": [
                4
            ],
            "tokens": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationRecoveryStatus": {
            "hasVerifiedTwoFactorAuthenticationMethod": [
                1
            ],
            "isAwaitingRecoveryEnrollment": [
                1
            ],
            "pendingRecoveryCodeExpiresAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "UUID": {},
        "UUIDFilterComparison": {
            "eq": [
                566
            ],
            "gt": [
                566
            ],
            "gte": [
                566
            ],
            "iLike": [
                566
            ],
            "in": [
                566
            ],
            "is": [
                1
            ],
            "isNot": [
                1
            ],
            "like": [
                566
            ],
            "lt": [
                566
            ],
            "lte": [
                566
            ],
            "neq": [
                566
            ],
            "notILike": [
                566
            ],
            "notIn": [
                566
            ],
            "notLike": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UnsubscribeHostnameStatus": {},
        "UnsubscribeTopic": {
            "createdAt": [
                225
            ],
            "description": [
                4
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "updatedAt": [
                225
            ],
            "visibility": [
                570
            ],
            "__typename": [
                4
            ]
        },
        "UnsubscribeTopicVisibility": {},
        "UpdateAgentChatChannelInput": {
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "roleIds": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpdateAgentInput": {
            "avatarColor": [
                4
            ],
            "avatarShape": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "modelConfiguration": [
                341
            ],
            "modelId": [
                4
            ],
            "name": [
                4
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                341
            ],
            "roleId": [
                566
            ],
            "triggers": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApiKeyInput": {
            "expiresAt": [
                4
            ],
            "id": [
                566
            ],
            "name": [
                4
            ],
            "revokedAt": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateAppMessageChannelInput": {
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "isSyncEnabled": [
                1
            ],
            "messagingProviderUniversalIdentifier": [
                566
            ],
            "visibility": [
                379
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationInput": {
            "autoUpgrade": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationInput": {
            "id": [
                4
            ],
            "update": [
                577
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationPayload": {
            "name": [
                4
            ],
            "oAuthRedirectUris": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationVariableInput": {
            "id": [
                4
            ],
            "update": [
                579
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationVariablePayload": {
            "description": [
                4
            ],
            "resetValue": [
                1
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateCalendarChannelInput": {
            "id": [
                566
            ],
            "update": [
                581
            ],
            "__typename": [
                4
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                140
            ],
            "excludePrivateEvents": [
                1
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "visibility": [
                143
            ],
            "__typename": [
                4
            ]
        },
        "UpdateCommandMenuItemInput": {
            "availabilityCoreObjectName": [
                4
            ],
            "availabilityObjectMetadataId": [
                566
            ],
            "availabilityType": [
                167
            ],
            "engineComponentKey": [
                259
            ],
            "hotKeys": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isPinned": [
                1
            ],
            "label": [
                4
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "shortLabel": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateEmailGroupChannelInput": {
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpdateFieldInput": {
            "defaultValue": [
                341
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isNullable": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "isUnique": [
                1
            ],
            "label": [
                4
            ],
            "morphRelationsUpdatePayload": [
                341
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "options": [
                341
            ],
            "settings": [
                341
            ],
            "translations": [
                391
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateFrontComponentInput": {
            "id": [
                566
            ],
            "update": [
                586
            ],
            "__typename": [
                4
            ]
        },
        "UpdateFrontComponentInputUpdates": {
            "description": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateGettingStartedInput": {
            "completedStepActionKey": [
                311
            ],
            "completedStepChatThreadId": [
                4
            ],
            "isHidden": [
                1
            ],
            "selectedStepActionKey": [
                311
            ],
            "snoozedUntil": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateLabPublicFeatureFlagInput": {
            "publicFeatureFlag": [
                4
            ],
            "value": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UpdateLogicFunctionFromSourceInput": {
            "id": [
                566
            ],
            "update": [
                590
            ],
            "__typename": [
                4
            ]
        },
        "UpdateLogicFunctionFromSourceInputUpdates": {
            "cronTriggerSettings": [
                341
            ],
            "databaseEventTriggerSettings": [
                341
            ],
            "description": [
                4
            ],
            "handlerName": [
                4
            ],
            "httpRouteTriggerSettings": [
                341
            ],
            "name": [
                4
            ],
            "sourceHandlerCode": [
                4
            ],
            "sourceHandlerPath": [
                4
            ],
            "timeoutSeconds": [
                8
            ],
            "toolTriggerSettings": [
                341
            ],
            "workflowActionTriggerSettings": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMcpServerInput": {
            "id": [
                566
            ],
            "update": [
                592
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMcpServerInputUpdates": {
            "connectionProviderId": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageChannelInput": {
            "id": [
                566
            ],
            "update": [
                594
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                374
            ],
            "excludeGroupEmails": [
                1
            ],
            "excludeNonProfessionalEmails": [
                1
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "messageFolderImportPolicy": [
                381
            ],
            "visibility": [
                379
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageFolderInput": {
            "id": [
                566
            ],
            "update": [
                596
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageFoldersInput": {
            "ids": [
                566
            ],
            "update": [
                596
            ],
            "__typename": [
                4
            ]
        },
        "UpdateNavigationMenuItemInput": {
            "color": [
                4
            ],
            "folderId": [
                566
            ],
            "icon": [
                4
            ],
            "link": [
                4
            ],
            "name": [
                4
            ],
            "pageLayoutId": [
                566
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpdateObjectPayload": {
            "color": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "imageIdentifierFieldMetadataId": [
                566
            ],
            "isActive": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isSearchable": [
                1
            ],
            "labelIdentifierFieldMetadataId": [
                566
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "openRecordIn": [
                410
            ],
            "shortcut": [
                4
            ],
            "translations": [
                391
            ],
            "__typename": [
                4
            ]
        },
        "UpdateOneFieldMetadataInput": {
            "id": [
                566
            ],
            "update": [
                584
            ],
            "__typename": [
                4
            ]
        },
        "UpdateOneNavigationMenuItemInput": {
            "id": [
                566
            ],
            "update": [
                598
            ],
            "__typename": [
                4
            ]
        },
        "UpdateOneObjectInput": {
            "id": [
                566
            ],
            "update": [
                599
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutInput": {
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "type": [
                434
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutTabInput": {
            "icon": [
                4
            ],
            "layoutMode": [
                433
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutTabWithWidgetsInput": {
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "layoutMode": [
                433
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "widgets": [
                607
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutWidgetInput": {
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalDisplay": [
                341
            ],
            "configuration": [
                341
            ],
            "isActive": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "pageLayoutTabId": [
                566
            ],
            "position": [
                341
            ],
            "title": [
                4
            ],
            "type": [
                697
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutWidgetWithIdInput": {
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalDisplay": [
                341
            ],
            "configuration": [
                341
            ],
            "id": [
                566
            ],
            "objectMetadataId": [
                566
            ],
            "pageLayoutTabId": [
                566
            ],
            "position": [
                341
            ],
            "title": [
                4
            ],
            "type": [
                697
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutWithTabsInput": {
            "filters": [
                428
            ],
            "isFirstTabPinned": [
                1
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "tabs": [
                605
            ],
            "type": [
                434
            ],
            "__typename": [
                4
            ]
        },
        "UpdateRoleInput": {
            "id": [
                566
            ],
            "update": [
                610
            ],
            "__typename": [
                4
            ]
        },
        "UpdateRolePayload": {
            "canAccessAllAgentChatChannels": [
                1
            ],
            "canAccessAllTools": [
                1
            ],
            "canBeAssignedToAgents": [
                1
            ],
            "canBeAssignedToApiKeys": [
                1
            ],
            "canBeAssignedToUsers": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateSkillInput": {
            "content": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateTimelineActivityTypeInput": {
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "translations": [
                391
            ],
            "__typename": [
                4
            ]
        },
        "UpdateUnsubscribeTopicInput": {
            "description": [
                4
            ],
            "id": [
                4
            ],
            "name": [
                4
            ],
            "visibility": [
                570
            ],
            "__typename": [
                4
            ]
        },
        "UpdateUsageLimitInput": {
            "id": [
                566
            ],
            "payload": [
                210
            ],
            "__typename": [
                4
            ]
        },
        "UpdateValidationRuleInput": {
            "id": [
                566
            ],
            "update": [
                616
            ],
            "__typename": [
                4
            ]
        },
        "UpdateValidationRuleInputUpdates": {
            "description": [
                4
            ],
            "errorFieldMetadataId": [
                566
            ],
            "expression": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "message": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldGroupInput": {
            "id": [
                566
            ],
            "update": [
                618
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldGroupInputUpdates": {
            "deletedAt": [
                4
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldInput": {
            "id": [
                566
            ],
            "update": [
                620
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "aggregateOperation": [
                28
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "viewFieldGroupId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFilterGroupInput": {
            "id": [
                566
            ],
            "logicalOperator": [
                685
            ],
            "parentViewFilterGroupId": [
                566
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "viewId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFilterInput": {
            "id": [
                566
            ],
            "update": [
                623
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFilterInputUpdates": {
            "fieldMetadataId": [
                566
            ],
            "operand": [
                686
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                566
            ],
            "subFieldName": [
                4
            ],
            "value": [
                341
            ],
            "viewFilterGroupId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewGroupInput": {
            "id": [
                566
            ],
            "update": [
                625
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewGroupInputUpdates": {
            "fieldMetadataId": [
                566
            ],
            "fieldValue": [
                4
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewInput": {
            "anyFieldFilterValue": [
                4
            ],
            "calendarEndFieldMetadataId": [
                566
            ],
            "calendarFieldMetadataId": [
                566
            ],
            "calendarLayout": [
                679
            ],
            "groupLoadLimit": [
                2
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isCompact": [
                1
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                566
            ],
            "kanbanColumnWidth": [
                2
            ],
            "mainGroupByFieldMetadataId": [
                566
            ],
            "name": [
                4
            ],
            "openRecordIn": [
                689
            ],
            "position": [
                8
            ],
            "shouldDisplayGroupsAsTabs": [
                1
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "translations": [
                391
            ],
            "type": [
                692
            ],
            "visibility": [
                693
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewSortInput": {
            "id": [
                566
            ],
            "update": [
                628
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewSortInputUpdates": {
            "direction": [
                691
            ],
            "subFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWebhookInput": {
            "id": [
                566
            ],
            "update": [
                630
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWebhookInputUpdates": {
            "description": [
                4
            ],
            "operations": [
                4
            ],
            "roleId": [
                566
            ],
            "secret": [
                4
            ],
            "targetUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceAllowedEmbeddingOriginsInput": {
            "operation": [
                4
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceIframeMediaPermissionsInput": {
            "camera": [
                1
            ],
            "microphone": [
                1
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceInput": {
            "aiAdditionalInstructions": [
                4
            ],
            "aiAgentModelTier": [
                36
            ],
            "aiChatAssistantProfile": [
                31
            ],
            "aiChatDirectMessageAssistantMode": [
                29
            ],
            "aiChatInboxAssistantMode": [
                29
            ],
            "aiChatModelTier": [
                36
            ],
            "aiDataPolicy": [
                35
            ],
            "aiEvaluationModelId": [
                4
            ],
            "aiModelIdByTier": [
                341
            ],
            "allowImpersonation": [
                1
            ],
            "customDomain": [
                4
            ],
            "defaultRoleId": [
                566
            ],
            "displayName": [
                4
            ],
            "editableProfileFields": [
                4
            ],
            "eventLogRetentionDays": [
                8
            ],
            "inviteHash": [
                4
            ],
            "isAutoModelSelectionEnabled": [
                1
            ],
            "isCampaignClickTrackingEnabled": [
                1
            ],
            "isCampaignOpenTrackingEnabled": [
                1
            ],
            "isGoogleAuthBypassEnabled": [
                1
            ],
            "isGoogleAuthEnabled": [
                1
            ],
            "isInternalMessagesImportEnabled": [
                1
            ],
            "isMicrosoftAuthBypassEnabled": [
                1
            ],
            "isMicrosoftAuthEnabled": [
                1
            ],
            "isPasswordAuthBypassEnabled": [
                1
            ],
            "isPasswordAuthEnabled": [
                1
            ],
            "isPublicInviteLinkEnabled": [
                1
            ],
            "isTwoFactorAuthenticationEnforced": [
                1
            ],
            "logo": [
                4
            ],
            "subdomain": [
                4
            ],
            "trashRetentionDays": [
                8
            ],
            "workspaceDiscoverability": [
                708
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "update": [
                341
            ],
            "workspaceMemberId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "Upload": {},
        "UpsertFieldPermissionsInput": {
            "fieldPermissions": [
                289
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertFieldsWidgetFieldInput": {
            "fieldMetadataId": [
                566
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "viewFieldId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertFieldsWidgetGroupInput": {
            "fields": [
                637
            ],
            "id": [
                566
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpsertFieldsWidgetInput": {
            "fields": [
                637
            ],
            "groups": [
                638
            ],
            "widgetId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertObjectPermissionsInput": {
            "objectPermissions": [
                412
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPermissionFlagsInput": {
            "permissionFlagKeys": [
                4
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertRowLevelPermissionPredicatesInput": {
            "canCreateRecords": [
                1
            ],
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "objectMetadataId": [
                566
            ],
            "predicateGroups": [
                488
            ],
            "predicates": [
                490
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertRowLevelPermissionPredicatesResult": {
            "predicateGroups": [
                487
            ],
            "predicates": [
                486
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetInput": {
            "view": [
                648
            ],
            "viewFields": [
                645
            ],
            "viewFilterGroups": [
                646
            ],
            "viewFilters": [
                647
            ],
            "viewSorts": [
                649
            ],
            "widgetId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewFieldInput": {
            "aggregateOperation": [
                28
            ],
            "fieldMetadataId": [
                566
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "viewFieldId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewFilterGroupInput": {
            "id": [
                566
            ],
            "logicalOperator": [
                685
            ],
            "parentViewFilterGroupId": [
                566
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewFilterInput": {
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "operand": [
                686
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                566
            ],
            "subFieldName": [
                4
            ],
            "value": [
                341
            ],
            "viewFilterGroupId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewSettingsInput": {
            "calendarEndFieldMetadataId": [
                566
            ],
            "calendarFieldMetadataId": [
                566
            ],
            "calendarLayout": [
                679
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                566
            ],
            "kanbanColumnWidth": [
                2
            ],
            "mainGroupByFieldMetadataId": [
                566
            ],
            "openRecordIn": [
                689
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "type": [
                692
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewSortInput": {
            "direction": [
                691
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UsageAnalytics": {
            "periodEnd": [
                225
            ],
            "periodStart": [
                225
            ],
            "timeSeries": [
                663
            ],
            "usageByApplication": [
                652
            ],
            "usageByModel": [
                652
            ],
            "usageByOperationType": [
                652
            ],
            "usageByUser": [
                652
            ],
            "userDailyUsage": [
                665
            ],
            "__typename": [
                4
            ]
        },
        "UsageAnalyticsInput": {
            "operationTypes": [
                655
            ],
            "periodEnd": [
                225
            ],
            "periodStart": [
                225
            ],
            "userWorkspaceId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UsageBreakdownItem": {
            "creditsUsed": [
                8
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "userCreditsUsed": [
                8
            ],
            "workspaceCreditsUsed": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UsageLimit": {
            "burstValue": [
                109
            ],
            "createdAt": [
                225
            ],
            "id": [
                566
            ],
            "limitKind": [
                4
            ],
            "limitValue": [
                109
            ],
            "operationType": [
                655
            ],
            "periodCount": [
                2
            ],
            "periodUnit": [
                4
            ],
            "resourceType": [
                662
            ],
            "spenderId": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                664
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "UsageLimitOperationDefinition": {
            "allowedUnits": [
                664
            ],
            "operationType": [
                655
            ],
            "__typename": [
                4
            ]
        },
        "UsageOperationType": {},
        "UsageQuotaDefinition": {
            "allowedOperations": [
                654
            ],
            "allowedSpenderTypes": [
                4
            ],
            "limitKind": [
                4
            ],
            "operatorOnlyScopes": [
                658
            ],
            "resourceType": [
                662
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaDefinitions": {
            "definitions": [
                656
            ],
            "hasAllowancePeriod": [
                1
            ],
            "isIntraWorkspaceLimitEntitled": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaOperatorOnlyScope": {
            "operationType": [
                655
            ],
            "periodUnit": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                664
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaScopeConsumption": {
            "consumedValue": [
                109
            ],
            "periodEnd": [
                225
            ],
            "periodStart": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaScopeInput": {
            "operationType": [
                655
            ],
            "periodUnit": [
                4
            ],
            "resourceType": [
                662
            ],
            "spenderId": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                664
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaWithConsumption": {
            "consumedValue": [
                109
            ],
            "id": [
                566
            ],
            "isEnforced": [
                1
            ],
            "limitValue": [
                109
            ],
            "operationType": [
                655
            ],
            "periodEnd": [
                225
            ],
            "periodStart": [
                225
            ],
            "periodUnit": [
                4
            ],
            "remainingValue": [
                109
            ],
            "resourceType": [
                662
            ],
            "spenderId": [
                4
            ],
            "spenderLabel": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                664
            ],
            "__typename": [
                4
            ]
        },
        "UsageResourceType": {},
        "UsageTimeSeries": {
            "creditsUsed": [
                8
            ],
            "date": [
                4
            ],
            "workspaceCreditsUsed": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UsageUnit": {},
        "UsageUserDaily": {
            "dailyUsage": [
                663
            ],
            "userWorkspaceId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "User": {
            "availableWorkspaces": [
                100
            ],
            "canAccessFullAdminPanel": [
                1
            ],
            "canImpersonate": [
                1
            ],
            "createdAt": [
                225
            ],
            "currentUserWorkspace": [
                670
            ],
            "currentWorkspace": [
                702
            ],
            "deletedAt": [
                225
            ],
            "deletedWorkspaceMembers": [
                238
            ],
            "disabled": [
                1
            ],
            "email": [
                4
            ],
            "firstName": [
                4
            ],
            "hasPassword": [
                1
            ],
            "id": [
                566
            ],
            "isEmailVerified": [
                1
            ],
            "isWorkspaceCreator": [
                1
            ],
            "lastName": [
                4
            ],
            "locale": [
                4
            ],
            "onboardingStatus": [
                419
            ],
            "previousOnboardingStatus": [
                419
            ],
            "supportUserHash": [
                4
            ],
            "updatedAt": [
                225
            ],
            "userVars": [
                342
            ],
            "userWorkspaces": [
                670
            ],
            "workspaceMember": [
                711
            ],
            "workspaceMembers": [
                711
            ],
            "workspaces": [
                670
            ],
            "__typename": [
                4
            ]
        },
        "UserApplicationVariableValue": {
            "description": [
                4
            ],
            "isDeprecated": [
                1
            ],
            "isRequired": [
                1
            ],
            "isSecret": [
                1
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "options": [
                341
            ],
            "type": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UserCreditsFallback": {},
        "UserSession": {
            "authProvider": [
                4
            ],
            "city": [
                4
            ],
            "country": [
                4
            ],
            "createdAt": [
                225
            ],
            "expiresAt": [
                225
            ],
            "id": [
                566
            ],
            "ipAddress": [
                4
            ],
            "isCurrent": [
                1
            ],
            "isImpersonating": [
                1
            ],
            "lastActiveAt": [
                225
            ],
            "region": [
                4
            ],
            "userAgent": [
                4
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "UserWorkspace": {
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "id": [
                566
            ],
            "isImpersonating": [
                1
            ],
            "locale": [
                4
            ],
            "objectRecordsPermissions": [
                418
            ],
            "permissionFlags": [
                443
            ],
            "twoFactorAuthenticationMethodSummary": [
                562
            ],
            "updatedAt": [
                225
            ],
            "user": [
                666
            ],
            "userId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ValidateApprovedAccessDomainInput": {
            "approvedAccessDomainId": [
                566
            ],
            "validationToken": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ValidatePasswordResetToken": {
            "email": [
                4
            ],
            "hasPassword": [
                1
            ],
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ValidationRule": {
            "description": [
                4
            ],
            "errorFieldMetadataId": [
                566
            ],
            "expression": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "message": [
                4
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "VerificationRecord": {
            "key": [
                4
            ],
            "priority": [
                8
            ],
            "status": [
                4
            ],
            "type": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "VerifyEmailAndGetLoginToken": {
            "loginToken": [
                94
            ],
            "workspaceUrls": [
                720
            ],
            "__typename": [
                4
            ]
        },
        "VerifyTwoFactorAuthenticationMethod": {
            "backupCodes": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "VersionDistributionEntry": {
            "count": [
                2
            ],
            "version": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "View": {
            "anyFieldFilterValue": [
                4
            ],
            "applicationId": [
                566
            ],
            "calendarEndFieldMetadataId": [
                566
            ],
            "calendarFieldMetadataId": [
                566
            ],
            "calendarLayout": [
                679
            ],
            "createdAt": [
                225
            ],
            "createdByUserWorkspaceId": [
                566
            ],
            "deletedAt": [
                225
            ],
            "groupLoadLimit": [
                2
            ],
            "icon": [
                4
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isCompact": [
                1
            ],
            "isCustom": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                566
            ],
            "kanbanColumnWidth": [
                2
            ],
            "key": [
                688
            ],
            "mainGroupByFieldMetadataId": [
                566
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                566
            ],
            "openRecordIn": [
                689
            ],
            "position": [
                8
            ],
            "shouldDisplayGroupsAsTabs": [
                1
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "type": [
                692
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "viewFieldGroups": [
                682
            ],
            "viewFields": [
                681
            ],
            "viewFilterGroups": [
                684
            ],
            "viewFilters": [
                683
            ],
            "viewGroups": [
                687
            ],
            "viewSorts": [
                690
            ],
            "visibility": [
                693
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewCalendarLayout": {},
        "ViewConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "ViewField": {
            "aggregateOperation": [
                28
            ],
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "universalIdentifier": [
                566
            ],
            "updatedAt": [
                225
            ],
            "viewFieldGroupId": [
                566
            ],
            "viewId": [
                566
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewFieldGroup": {
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "id": [
                566
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "updatedAt": [
                225
            ],
            "viewFields": [
                681
            ],
            "viewId": [
                566
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewFilter": {
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "operand": [
                686
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                566
            ],
            "subFieldName": [
                4
            ],
            "updatedAt": [
                225
            ],
            "value": [
                341
            ],
            "viewFilterGroupId": [
                566
            ],
            "viewId": [
                566
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewFilterGroup": {
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "id": [
                566
            ],
            "logicalOperator": [
                685
            ],
            "parentViewFilterGroupId": [
                566
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "updatedAt": [
                225
            ],
            "viewId": [
                566
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewFilterGroupLogicalOperator": {},
        "ViewFilterOperand": {},
        "ViewGroup": {
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "fieldValue": [
                4
            ],
            "id": [
                566
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "updatedAt": [
                225
            ],
            "viewId": [
                566
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewKey": {},
        "ViewOpenRecordIn": {},
        "ViewSort": {
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "direction": [
                691
            ],
            "fieldMetadataId": [
                566
            ],
            "id": [
                566
            ],
            "subFieldName": [
                4
            ],
            "updatedAt": [
                225
            ],
            "viewId": [
                566
            ],
            "workspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "ViewSortDirection": {},
        "ViewType": {},
        "ViewVisibility": {},
        "Webhook": {
            "applicationId": [
                566
            ],
            "createdAt": [
                225
            ],
            "deletedAt": [
                225
            ],
            "description": [
                4
            ],
            "id": [
                566
            ],
            "operations": [
                4
            ],
            "role": [
                483
            ],
            "secret": [
                4
            ],
            "targetUrl": [
                4
            ],
            "updatedAt": [
                225
            ],
            "__typename": [
                4
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                27
            ],
            "on_BarChartConfiguration": [
                103
            ],
            "on_CalendarConfiguration": [
                144
            ],
            "on_CallRecordingSummaryConfiguration": [
                145
            ],
            "on_CallRecordingTranscriptConfiguration": [
                146
            ],
            "on_ChatConfiguration": [
                154
            ],
            "on_ChatThreadsConfiguration": [
                157
            ],
            "on_EmailThreadConfiguration": [
                254
            ],
            "on_EmailsConfiguration": [
                258
            ],
            "on_FieldConfiguration": [
                282
            ],
            "on_FieldRichTextConfiguration": [
                290
            ],
            "on_FieldsConfiguration": [
                291
            ],
            "on_FilesConfiguration": [
                297
            ],
            "on_FormFieldConfiguration": [
                300
            ],
            "on_FrontComponentConfiguration": [
                302
            ],
            "on_IframeConfiguration": [
                322
            ],
            "on_LineChartConfiguration": [
                345
            ],
            "on_MessageCampaignBodyConfiguration": [
                370
            ],
            "on_MessageCampaignDetailsConfiguration": [
                371
            ],
            "on_NotesConfiguration": [
                402
            ],
            "on_PieChartConfiguration": [
                444
            ],
            "on_RecordTableConfiguration": [
                473
            ],
            "on_StandaloneRichTextConfiguration": [
                530
            ],
            "on_TasksConfiguration": [
                541
            ],
            "on_TimelineConfiguration": [
                545
            ],
            "on_ViewConfiguration": [
                680
            ],
            "on_WorkflowConfiguration": [
                699
            ],
            "on_WorkflowRunConfiguration": [
                700
            ],
            "on_WorkflowVersionConfiguration": [
                701
            ],
            "__typename": [
                4
            ]
        },
        "WidgetConfigurationType": {},
        "WidgetType": {},
        "WorkflowActionType": {},
        "WorkflowConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                696
            ],
            "__typename": [
                4
            ]
        },
        "Workspace": {
            "activationStatus": [
                703
            ],
            "aiAdditionalInstructions": [
                4
            ],
            "aiAgentModelTier": [
                36
            ],
            "aiChatAssistantProfile": [
                30
            ],
            "aiChatDirectMessageAssistantMode": [
                29
            ],
            "aiChatInboxAssistantMode": [
                29
            ],
            "aiChatModelTier": [
                36
            ],
            "aiDataPolicy": [
                34
            ],
            "aiEvaluationModelId": [
                4
            ],
            "aiModelIdByTier": [
                341
            ],
            "allowImpersonation": [
                1
            ],
            "allowedEmbeddingOrigins": [
                4
            ],
            "billingCustomer": [
                111
            ],
            "billingEntitlements": [
                113
            ],
            "billingSubscriptions": [
                130
            ],
            "createdAt": [
                225
            ],
            "currentBillingSubscription": [
                130
            ],
            "customDomain": [
                4
            ],
            "databaseSchema": [
                4
            ],
            "defaultRole": [
                483
            ],
            "deletedAt": [
                225
            ],
            "displayName": [
                4
            ],
            "editableProfileFields": [
                4
            ],
            "eventLogRetentionDays": [
                8
            ],
            "featureFlags": [
                279
            ],
            "hasValidEnterpriseValidityToken": [
                1
            ],
            "hasValidSignedEnterpriseKey": [
                1
            ],
            "id": [
                566
            ],
            "iframeMediaPermissions": [
                323
            ],
            "installedApplications": [
                54
            ],
            "inviteHash": [
                4
            ],
            "isAutoModelSelectionEnabled": [
                1
            ],
            "isCampaignClickTrackingEnabled": [
                1
            ],
            "isCampaignOpenTrackingEnabled": [
                1
            ],
            "isCustomDomainEnabled": [
                1
            ],
            "isGoogleAuthBypassEnabled": [
                1
            ],
            "isGoogleAuthEnabled": [
                1
            ],
            "isInternalMessagesImportEnabled": [
                1
            ],
            "isMicrosoftAuthBypassEnabled": [
                1
            ],
            "isMicrosoftAuthEnabled": [
                1
            ],
            "isPasswordAuthBypassEnabled": [
                1
            ],
            "isPasswordAuthEnabled": [
                1
            ],
            "isPublicInviteLinkEnabled": [
                1
            ],
            "isTrialAvailable": [
                1
            ],
            "isTwoFactorAuthenticationEnforced": [
                1
            ],
            "logo": [
                4
            ],
            "logoFileId": [
                566
            ],
            "metadataVersion": [
                8
            ],
            "subdomain": [
                4
            ],
            "trashRetentionDays": [
                8
            ],
            "updatedAt": [
                225
            ],
            "viewFields": [
                681
            ],
            "viewFilterGroups": [
                684
            ],
            "viewFilters": [
                683
            ],
            "viewGroups": [
                687
            ],
            "viewSorts": [
                690
            ],
            "views": [
                678
            ],
            "workspaceCustomApplication": [
                54
            ],
            "workspaceCustomApplicationId": [
                4
            ],
            "workspaceDiscoverability": [
                708
            ],
            "workspaceMembersCount": [
                8
            ],
            "workspaceUrls": [
                720
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceActivationStatus": {},
        "WorkspaceAiStats": {
            "conversationsCount": [
                2
            ],
            "skillsCount": [
                2
            ],
            "toolsCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceCompanyEnrichmentOutcome": {},
        "WorkspaceCompanyEnrichmentResult": {
            "enrichment": [
                341
            ],
            "isBookCallOnboardingStepPending": [
                1
            ],
            "outcome": [
                705
            ],
            "personEnrichment": [
                341
            ],
            "personOutcome": [
                718
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
                4
            ],
            "subdomain": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceDiscoverability": {},
        "WorkspaceInvitation": {
            "email": [
                4
            ],
            "expiresAt": [
                225
            ],
            "id": [
                566
            ],
            "roleId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceMember": {
            "avatarUrl": [
                4
            ],
            "calendarStartDay": [
                2
            ],
            "colorScheme": [
                4
            ],
            "dateFormat": [
                713
            ],
            "id": [
                566
            ],
            "locale": [
                4
            ],
            "name": [
                304
            ],
            "numberFormat": [
                714
            ],
            "openRecordIn": [
                422
            ],
            "roles": [
                483
            ],
            "timeFormat": [
                715
            ],
            "timeZone": [
                4
            ],
            "uiScale": [
                4
            ],
            "userEmail": [
                4
            ],
            "userId": [
                566
            ],
            "userWorkspaceId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceMemberApplicationVariables": {
            "userWorkspaceId": [
                566
            ],
            "variables": [
                667
            ],
            "workspaceMemberId": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceMemberDateFormatEnum": {},
        "WorkspaceMemberNumberFormatEnum": {},
        "WorkspaceMemberTimeFormatEnum": {},
        "WorkspaceMigration": {
            "actions": [
                341
            ],
            "applicationUniversalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceNameAndId": {
            "displayName": [
                4
            ],
            "id": [
                566
            ],
            "__typename": [
                4
            ]
        },
        "WorkspacePersonEnrichmentOutcome": {},
        "WorkspaceSetupChatOutcome": {},
        "WorkspaceUrls": {
            "customUrl": [
                4
            ],
            "subdomainUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceUrlsAndId": {
            "id": [
                566
            ],
            "workspaceUrls": [
                720
            ],
            "__typename": [
                4
            ]
        }
    }
}