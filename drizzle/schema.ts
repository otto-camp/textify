import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar, timestamp, float, text, bigint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const files = mysqlTable("files", {
	id: serial("id").notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	url: varchar("url", { length: 500 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		filesId: primaryKey({ columns: [table.id], name: "files_id"}),
		id: unique("id").on(table.id),
	}
});

export const sentimentResults = mysqlTable("sentiment_results", {
	id: serial("id").notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	result: varchar("result", { length: 100 }).notNull(),
	negative: float("negative"),
	positive: float("positive"),
	neutral: float("neutral"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		sentimentResultsId: primaryKey({ columns: [table.id], name: "sentiment_results_id"}),
		id: unique("id").on(table.id),
	}
});

export const summaryResults = mysqlTable("summary_results", {
	id: serial("id").notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	result: text("result").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		summaryResultsId: primaryKey({ columns: [table.id], name: "summary_results_id"}),
		id: unique("id").on(table.id),
	}
});

export const texts = mysqlTable("texts", {
	id: serial("id").notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	content: text("content").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).onUpdateNow(),
	title: varchar("title", { length: 1000 }).notNull(),
	fileId: bigint("file_id", { mode: "number" }),
	label: varchar("label", { length: 100 }),
},
(table) => {
	return {
		textsId: primaryKey({ columns: [table.id], name: "texts_id"}),
		id: unique("id").on(table.id),
	}
});