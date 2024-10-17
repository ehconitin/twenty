import { Logger } from '@nestjs/common';

import { Like } from 'typeorm';

import { ObjectMetadataInterface } from 'src/engine/metadata-modules/field-metadata/interfaces/object-metadata.interface';

import {
  CallWebhookJob,
  CallWebhookJobData,
} from 'src/engine/api/graphql/workspace-query-runner/jobs/call-webhook.job';
import { InjectMessageQueue } from 'src/engine/core-modules/message-queue/decorators/message-queue.decorator';
import { Process } from 'src/engine/core-modules/message-queue/decorators/process.decorator';
import { Processor } from 'src/engine/core-modules/message-queue/decorators/processor.decorator';
import { MessageQueue } from 'src/engine/core-modules/message-queue/message-queue.constants';
import { MessageQueueService } from 'src/engine/core-modules/message-queue/services/message-queue.service';
import { TwentyORMGlobalManager } from 'src/engine/twenty-orm/twenty-orm-global.manager';
import { WebhookWorkspaceEntity } from 'src/modules/webhook/standard-objects/webhook.workspace-entity';

export enum CallWebhookJobsJobOperation {
  create = 'create',
  update = 'update',
  delete = 'delete',
  destroy = 'destroy',
}

export type CallWebhookJobsJobData = {
  workspaceId: string;
  objectMetadataItem: ObjectMetadataInterface;
  record: any;
  operation: CallWebhookJobsJobOperation;
};

@Processor(MessageQueue.webhookQueue)
export class CallWebhookJobsJob {
  private readonly logger = new Logger(CallWebhookJobsJob.name);

  constructor(
    @InjectMessageQueue(MessageQueue.webhookQueue)
    private readonly messageQueueService: MessageQueueService,
    private readonly twentyORMGlobalManager: TwentyORMGlobalManager,
  ) {}

  @Process(CallWebhookJobsJob.name)
  async handle(data: CallWebhookJobsJobData): Promise<void> {
    const webhookRepository =
      await this.twentyORMGlobalManager.getRepositoryForWorkspace<WebhookWorkspaceEntity>(
        data.workspaceId,
        'webhook',
      );

    const nameSingular = data.objectMetadataItem.nameSingular;
    const operation = data.operation;
    const eventName = `${nameSingular}.${operation}`;

    const webhooks = await webhookRepository.find({
      where: [
        { operation: Like(`${eventName}%`) },
        { operation: Like(`*.${operation}%`) },
        { operation: Like(`${nameSingular}.*%`) },
        { operation: Like('*.*%') },
      ],
    });

    webhooks.forEach((webhook) => {
      const webhookOperation = webhook.operation;
      const operationParts = webhookOperation.split('.');

      if (operationParts.length > 2) {
        const fieldId = operationParts[2];

        if (fieldId !== '*') {
          const objectFieldIds = data.objectMetadataItem.fields.map(
            (f) => f.id,
          );

          if (objectFieldIds.includes(fieldId)) {
            const fieldName = data.objectMetadataItem.fields.find(
              (f) => f.id === fieldId,
            )?.name;

            if (fieldName && fieldName in data.record) {
              this.messageQueueService.add<CallWebhookJobData>(
                CallWebhookJob.name,
                {
                  targetUrl: webhook.targetUrl,
                  eventName: `${eventName}.${fieldName}`,
                  objectMetadata: {
                    id: data.objectMetadataItem.id,
                    nameSingular: data.objectMetadataItem.nameSingular,
                  },
                  workspaceId: data.workspaceId,
                  webhookId: webhook.id,
                  eventDate: new Date(),
                  record: { [fieldName]: data.record[fieldName] },
                },
                { retryLimit: 3 },
              );

              return;
            }
          }
        }
      }

      // If not a field-specific webhook or if field not found, send the entire record
      // DRY :)
      this.messageQueueService.add<CallWebhookJobData>(
        CallWebhookJob.name,
        {
          targetUrl: webhook.targetUrl,
          eventName,
          objectMetadata: {
            id: data.objectMetadataItem.id,
            nameSingular: data.objectMetadataItem.nameSingular,
          },
          workspaceId: data.workspaceId,
          webhookId: webhook.id,
          eventDate: new Date(),
          record: data.record,
        },
        { retryLimit: 3 },
      );
    });

    if (webhooks.length) {
      this.logger.log(
        `CallWebhookJobsJob on eventName '${eventName}' called on webhooks ids [\n"${webhooks
          .map((webhook) => webhook.id)
          .join('",\n"')}"\n]`,
      );
    }
  }
}
