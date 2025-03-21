import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameSystemVarToConfigVar1742545817391
  implements MigrationInterface
{
  name = 'RenameSystemVarToConfigVar1742545817391';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "core"."keyValuePair_type_enum" RENAME TO "keyValuePair_type_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "core"."keyValuePair_type_enum" AS ENUM('USER_VAR', 'FEATURE_FLAG', 'CONFIG_VAR')`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "type" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "type" TYPE "core"."keyValuePair_type_enum" USING "type"::"text"::"core"."keyValuePair_type_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "type" SET DEFAULT 'USER_VAR'`,
    );
    await queryRunner.query(`DROP TYPE "core"."keyValuePair_type_enum_old"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "core"."keyValuePair_type_enum_old" AS ENUM('FEATURE_FLAG', 'SYSTEM_VAR', 'USER_VAR')`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "type" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "type" TYPE "core"."keyValuePair_type_enum_old" USING "type"::"text"::"core"."keyValuePair_type_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "type" SET DEFAULT 'USER_VAR'`,
    );
    await queryRunner.query(`DROP TYPE "core"."keyValuePair_type_enum"`);
    await queryRunner.query(
      `ALTER TYPE "core"."keyValuePair_type_enum_old" RENAME TO "keyValuePair_type_enum"`,
    );
  }
}
