import { pgTable, serial, text, timestamp, unique } from "drizzle-orm/pg-core";

export const newsletterSubscribersTable = pgTable(
  "newsletter_subscribers",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [unique("newsletter_subscribers_email_unique").on(table.email)],
);

export type NewsletterSubscriberRecord =
  typeof newsletterSubscribersTable.$inferSelect;
