import { boolean, doublePrecision, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  sku: text("sku").notNull().unique(),
  category: text("category").notNull(),
  compatibleVehicles: text("compatible_vehicles")
    .array()
    .notNull()
    .default([]),
  technicalSpecs: text("technical_specs")
    .array()
    .notNull()
    .default([]),
  price: integer("price").notNull(),
  compareAtPrice: integer("compare_at_price"),
  imageUrl: text("image_url"),
  rating: doublePrecision("rating").notNull().default(0),
  reviewCount: integer("review_count").notNull().default(0),
  stockQuantity: integer("stock_quantity").notNull().default(0),
  isFeatured: boolean("is_featured").notNull().default(false),
});

export type ProductRecord = typeof productsTable.$inferSelect;
