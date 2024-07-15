/*
  Warnings:

  - You are about to drop the column `lastname` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_doctor_id_fkey";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "lastname",
DROP COLUMN "password",
ADD COLUMN     "services" JSONB[],
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Service";

-- DropEnum
DROP TYPE "Services";

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
