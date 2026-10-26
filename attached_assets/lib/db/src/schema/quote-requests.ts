import { jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export type StoredQuoteLine = {
  productId: number;
  productName: string;
  sku: string;
  quantity: number;
};

export const quoteRequestsTable = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  vehicleMake: text("vehicle_make").notNull(),
  vehicleModel: text("vehicle_model").notNull(),
  vehicleYear: text("vehicle_year"),
  vin: text("vin"),
  message: text("message"),
  items: jsonb("items").$type<StoredQuoteLine[]>().notNull(),
  status: text("status").notNull().default("received"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type QuoteRequestRecord = typeof quoteRequestsTable.$inferSelect;
