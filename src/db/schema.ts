import { InferModel } from 'drizzle-orm';
import {
  json,
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
  summaryContent: text('summary_content'),
  keyPoints: json('key_points'),
  fileUrl: varchar('file_url', { length: 500 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Texts = InferModel<typeof texts>;
