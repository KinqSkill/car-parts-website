import { integer, jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export type StoredOrderLine = {
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
};

export const ordersTable = pgTable("orders", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  city: text("city").notNull(),
  address: text("address").notNull(),
  items: jsonb("items").$type<StoredOrderLine[]>().notNull(),
  total: integer("total").notNull(),
  status: text("status").notNull().default("received"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type OrderRecord = typeof ordersTable.$inferSelect;
