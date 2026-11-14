import { Field, InputType } from '@nestjs/graphql';

import { IsISO8601, IsOptional, Matches } from 'class-validator';

const PLAIN_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

@InputType()
export class ChartDateRangeInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @Matches(PLAIN_DATE_FORMAT)
  @IsISO8601({ strict: true })
  start?: string | null;

  @Field(() => String, {
    nullable: true,
    description: 'Last day of the range, included',
  })
  @IsOptional()
  @Matches(PLAIN_DATE_FORMAT)
  @IsISO8601({ strict: true })
  end?: string | null;
}
