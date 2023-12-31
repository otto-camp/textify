import { relations } from 'drizzle-orm';
import {
  bigint,
  float,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const texts = mysqlTable('texts', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  title: varchar('title', { length: 1000 }).notNull(),
  content: text('content').notNull(),
  label: varchar('label', { length: 100 }),
  fileId: bigint('file_id', { mode: 'bigint' }),
  slug: varchar('slug', { length: 200 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Texts = typeof texts.$inferSelect;

export const files = mysqlTable('files', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  url: varchar('url', { length: 500 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Files = typeof files.$inferSelect;

export const textsRelations = relations(texts, ({ one }) => ({
  files: one(files, {
    fields: [texts.fileId],
    references: [files.id],
  }),
}));

export const summaryResults = mysqlTable('summary_results', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  result: text('result').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type SummaryResults = typeof summaryResults.$inferSelect;

export const sentimentResults = mysqlTable('sentiment_results', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  result: varchar('result', { length: 100 }).notNull(),
  negative: float('negative'),
  positive: float('positive'),
  neutral: float('neutral'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type SentimentResults = typeof sentimentResults.$inferSelect;
