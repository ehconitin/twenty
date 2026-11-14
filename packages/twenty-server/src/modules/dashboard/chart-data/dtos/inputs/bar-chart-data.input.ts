import { Field, InputType } from '@nestjs/graphql';

import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsTimeZone,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

import { UUIDScalarType } from 'src/engine/api/graphql/workspace-schema-builder/graphql-types/scalars';
import { BarChartConfigurationDTO } from 'src/engine/metadata-modules/page-layout-widget/dtos/bar-chart-configuration.dto';
import { ChartDateRangeInput } from 'src/modules/dashboard/chart-data/dtos/inputs/chart-date-range.input';

@InputType()
export class BarChartDataInput {
  @Field(() => UUIDScalarType)
  @IsUUID()
  @IsNotEmpty()
  objectMetadataId: string;

  @Field(() => GraphQLJSON)
  @ValidateNested()
  @Type(() => BarChartConfigurationDTO)
  @IsNotEmpty()
  configuration: BarChartConfigurationDTO;

  @Field(() => ChartDateRangeInput, {
    nullable: true,
    description:
      'Days the primary date axis must cover, shown as empty buckets where there is no data',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => ChartDateRangeInput)
  primaryAxisDateRange?: ChartDateRangeInput | null;

  @Field(() => String, {
    nullable: true,
    description:
      'Time zone for date buckets and relative date filters, instead of the one stored on the widget',
  })
  @IsOptional()
  @IsTimeZone()
  viewerTimeZone?: string | null;
}
