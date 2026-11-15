import {
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';
import { isSupportedPlainDate } from 'twenty-shared/utils';

export function IsSupportedPlainDate(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsSupportedPlainDate',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown) {
          if (typeof value !== 'string') {
            return false;
          }

          return isSupportedPlainDate(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a YYYY-MM-DD date`;
        },
      },
    });
  };
}
