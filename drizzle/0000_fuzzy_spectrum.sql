CREATE TABLE `texts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`summary_content` text,
	`key_points` json,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `texts_id` PRIMARY KEY(`id`)
);
