/*
  Warnings:

  - You are about to drop the column `name` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "name",
DROP COLUMN "time",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;
