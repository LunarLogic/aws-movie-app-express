/*
  Warnings:

  - The `time` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
