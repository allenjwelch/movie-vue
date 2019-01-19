CREATE DATABASE movievue_db;
USE movievue_db;

CREATE TABLE `users` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `email` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  PRIMARY KEY ( `id` )
);

CREATE TABLE `watchlists` (
  `id` INT( 11 ) AUTO_INCREMENT NOT NULL,
  `uid` INT( 11 ) NOT NULL,
  `title` VARCHAR (255) NOT NULL,
  `title_id` INT (11) NOT NULL,
  PRIMARY KEY ( `id` )
);

INSERT INTO users (email, password)
VALUES ('test@gmail.com', 123);

INSERT INTO watchlists (uid, title, title_id)
VALUES (2, 'Interstellar', 123456);

INSERT INTO watchlists (uid, title, title_id)
VALUES (2, 'The Martian', 9999);
