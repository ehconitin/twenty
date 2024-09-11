import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddcanAccessAdminPanel1726059448009 implements MigrationInterface {
  name = 'AddcanAccessAdminPanel1726059448009';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."user" ADD "canAccessAdminPanel" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "textValueDeprecated" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TYPE "core"."workspace_activationStatus_enum" RENAME TO "workspace_activationStatus_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "core"."workspace_activationstatus_enum" AS ENUM('ONGOING_CREATION', 'PENDING_CREATION', 'ACTIVE', 'INACTIVE')`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ALTER COLUMN "activationStatus" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ALTER COLUMN "activationStatus" TYPE "core"."workspace_activationstatus_enum" USING "activationStatus"::"text"::"core"."workspace_activationstatus_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ALTER COLUMN "activationStatus" SET DEFAULT 'INACTIVE'`,
    );
    await queryRunner.query(
      `DROP TYPE "core"."workspace_activationStatus_enum_old"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "core"."workspace_activationStatus_enum_old" AS ENUM('ACTIVE', 'INACTIVE', 'ONGOING_CREATION', 'PENDING_CREATION')`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ALTER COLUMN "activationStatus" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ALTER COLUMN "activationStatus" TYPE "core"."workspace_activationStatus_enum_old" USING "activationStatus"::"text"::"core"."workspace_activationStatus_enum_old"`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."workspace" ALTER COLUMN "activationStatus" SET DEFAULT 'INACTIVE'`,
    );
    await queryRunner.query(
      `DROP TYPE "core"."workspace_activationstatus_enum"`,
    );
    await queryRunner.query(
      `ALTER TYPE "core"."workspace_activationStatus_enum_old" RENAME TO "workspace_activationStatus_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."keyValuePair" ALTER COLUMN "textValueDeprecated" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."user" DROP COLUMN "canAccessAdminPanel"`,
    );
  }
}
