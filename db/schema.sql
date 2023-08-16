DROP DATABASE IF EXISTS namastecards_dev;
CREATE DATABASE namastecards_dev;

\c namastecards_dev;

CREATE TABLE namastecards (
 id SERIAL PRIMARY KEY,
 category TEXT NOT NULL,
 message VARCHAR(300) NOT NULL ,
 sender TEXT,
 reciver TEXT,
 image TEXT,
 is_favorite BOOLEAN
);

