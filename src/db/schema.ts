import { InferModel } from 'drizzle-orm';
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
  fileId: bigint('file_id', { mode: 'number' }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Texts = InferModel<typeof texts>;

export const files = mysqlTable('files', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  url: varchar('url', { length: 500 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Files = InferModel<typeof files>;

export const ocrResults = mysqlTable('ocr_results', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  result: text('result').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type OcrResults = InferModel<typeof ocrResults>;

export const summaryResults = mysqlTable('summary_results', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  result: text('result').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type SummaryResults = InferModel<typeof summaryResults>;

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
