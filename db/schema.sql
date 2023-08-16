DROP DATABASE IF EXISTS namastecards_dev;
CREATE DATABASE namaste_dev;

\c namaste_dev;

CREATE TABLE namastecards (
 id SERIAL PRIMARY KEY,
 category TEXT NOT NULL,
 message VARCHAR(300) NOT NULL ,
 sender TEXT,
 reciver TEXT,
 img TEXT,
 date INT DEFAULT NULL,
 is_favorite BOOLEAN
);

