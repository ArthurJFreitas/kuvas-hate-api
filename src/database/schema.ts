import { pgTable, integer, serial, text, timestamp } from "drizzle-orm/pg-core";

export const hateds = pgTable("hateds", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
  audio: text("audio")
});