import { Field, InputType } from '@nestjs/graphql';

import { IsOptional } from 'class-validator';

import { IsSupportedPlainDate } from 'src/modules/dashboard/chart-data/validators/is-supported-plain-date.validator';

@InputType()
export class ChartDateRangeInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsSupportedPlainDate()
  start?: string | null;

  @Field(() => String, {
    nullable: true,
    description: 'Last day of the range, included',
  })
  @IsOptional()
  @IsSupportedPlainDate()
  end?: string | null;
}
