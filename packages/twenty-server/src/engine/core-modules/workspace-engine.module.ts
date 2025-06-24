import { Module } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { WorkspaceQueryRunnerModule } from 'src/engine/api/graphql/workspace-query-runner/workspace-query-runner.module';
import { ActorModule } from 'src/engine/core-modules/actor/actor.module';
import { AiModule } from 'src/engine/core-modules/ai/ai.module';
import { aiModuleFactory } from 'src/engine/core-modules/ai/ai.module-factory';
import { CacheStorageModule } from 'src/engine/core-modules/cache-storage/cache-storage.module';
import { TimelineCalendarEventModule } from 'src/engine/core-modules/calendar/timeline-calendar-event.module';
import { CaptchaModule } from 'src/engine/core-modules/captcha/captcha.module';
import { captchaModuleFactory } from 'src/engine/core-modules/captcha/captcha.module-factory';
import { EmailModule } from 'src/engine/core-modules/email/email.module';
import { ExceptionHandlerModule } from 'src/engine/core-modules/exception-handler/exception-handler.module';
import { exceptionHandlerModuleFactory } from 'src/engine/core-modules/exception-handler/exception-handler.module-factory';
import { FeatureFlagModule } from 'src/engine/core-modules/feature-flag/feature-flag.module';
import { FileStorageModule } from 'src/engine/core-modules/file-storage/file-storage.module';
import { FileStorageService } from 'src/engine/core-modules/file-storage/file-storage.service';
import { HealthModule } from 'src/engine/core-modules/health/health.module';
import { LoggerModule } from 'src/engine/core-modules/logger/logger.module';
import { loggerModuleFactory } from 'src/engine/core-modules/logger/logger.module-factory';
import { MessageQueueModule } from 'src/engine/core-modules/message-queue/message-queue.module';
import { messageQueueModuleFactory } from 'src/engine/core-modules/message-queue/message-queue.module-factory';
import { TimelineMessagingModule } from 'src/engine/core-modules/messaging/timeline-messaging.module';
import { RedisClientModule } from 'src/engine/core-modules/redis-client/redis-client.module';
import { RedisClientService } from 'src/engine/core-modules/redis-client/redis-client.service';
import { SearchModule } from 'src/engine/core-modules/search/search.module';
import { serverlessModuleFactory } from 'src/engine/core-modules/serverless/serverless-module.factory';
import { ServerlessModule } from 'src/engine/core-modules/serverless/serverless.module';
import { TelemetryModule } from 'src/engine/core-modules/telemetry/telemetry.module';
import { TwentyConfigModule } from 'src/engine/core-modules/twenty-config/twenty-config.module';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { UserModule } from 'src/engine/core-modules/user/user.module';
import { WorkflowApiModule } from 'src/engine/core-modules/workflow/workflow-api.module';
import { SubscriptionsModule } from 'src/engine/subscriptions/subscriptions.module';
import { WorkspaceEventEmitterModule } from 'src/engine/workspace-event-emitter/workspace-event-emitter.module';

import { FileModule } from './file/file.module';

@Module({
  imports: [
    // Core infrastructure (shared with system)
    TwentyConfigModule.forRoot(),
    HealthModule,
    FeatureFlagModule,
    RedisClientModule,
    WorkspaceEventEmitterModule,
    ActorModule,
    TelemetryModule,
    SubscriptionsModule,
    SearchModule,

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

    // Shared modules needed by workspace operations
    UserModule,

    // Workspace-specific operations (only 5 modules based on our analysis)
    WorkspaceQueryRunnerModule,
    TimelineMessagingModule,
    TimelineCalendarEventModule,
    WorkflowApiModule,

    // Note: Company, Person, etc. are dynamically generated through workspace metadata
  ],
  exports: [
    // Export workspace modules that other modules might need
    TimelineMessagingModule,
    TimelineCalendarEventModule,
    WorkflowApiModule,
    UserModule,
  ],
})
export class WorkspaceEngineModule {}
