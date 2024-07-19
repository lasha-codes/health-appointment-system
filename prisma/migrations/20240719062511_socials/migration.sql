/*
  Warnings:

  - Made the column `summary` on table `Doctor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "socials" JSONB[],
ALTER COLUMN "summary" SET NOT NULL;
