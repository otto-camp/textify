import { InferModel, relations } from 'drizzle-orm';
import {
  bigint,
  int,
  json,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const links = mysqlTable('links', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  pageId: bigint('page_id', { mode: 'bigint' }).notNull(),
  url: varchar('url', { length: 500 }).notNull(),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  imageUrl: varchar('image_url', { length: 500 }),
  order: int('order'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Links = InferModel<typeof links>;

export const pages = mysqlTable('pages', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  image: varchar('image', { length: 500 }),
  themeData: json('theme_data'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Pages = InferModel<typeof pages>;

export const linksRelation = relations(links, ({ one }) => ({
  link: one(pages, { fields: [links.pageId], references: [pages.id] }),
}));

export const pageRelation = relations(pages, ({ many }) => ({
  links: many(links),
}));
