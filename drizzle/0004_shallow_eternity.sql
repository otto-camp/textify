CREATE TABLE `files` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`url` varchar(500) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `files_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ocr_results` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`result` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `ocr_results_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sentiment_results` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`result` varchar(100) NOT NULL,
	`negative` float,
	`positive` float,
	`neutral` float,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sentiment_results_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `summary_results` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`result` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `summary_results_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `texts` ADD `file_id` bigint;