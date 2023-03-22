-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
