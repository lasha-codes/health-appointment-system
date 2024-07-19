/*
  Warnings:

  - You are about to alter the column `image_url` on the `Doctor` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100000)`.

*/
-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "image_url" SET DATA TYPE VARCHAR(100000);
