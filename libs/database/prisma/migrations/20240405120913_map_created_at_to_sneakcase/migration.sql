/*
  Warnings:

  - You are about to drop the column `createdAt` on the `events` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "max_attendees" INTEGER,
    "date" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_events" ("date", "details", "id", "location", "max_attendees", "slug", "title") SELECT "date", "details", "id", "location", "max_attendees", "slug", "title" FROM "events";
DROP TABLE "events";
ALTER TABLE "new_events" RENAME TO "events";
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
