CREATE DATABASE movievue_db;
USE movievue_db;

CREATE TABLE `users` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `email` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY ( `id` )
);
