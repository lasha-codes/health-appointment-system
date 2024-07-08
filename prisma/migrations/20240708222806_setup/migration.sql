-- CreateEnum
CREATE TYPE "Services" AS ENUM ('dermatologist', 'ocnologist', 'family_medicine', 'pediatrician', 'psychiatrist', 'internal_medicine', 'endocrinologist', 'ophthalmology', 'anesthesiologist');

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "service" "Services" NOT NULL,
    "summary" TEXT NOT NULL,
    "price_range" INTEGER NOT NULL,
    "doctor_id" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image_url" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "summary" TEXT,
    "bio" TEXT,
    "working_times" TEXT[],

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_phonenumber_key" ON "Doctor"("phonenumber");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
