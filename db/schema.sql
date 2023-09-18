DROP DATABASE IF EXISTS namastecards_dev;
CREATE DATABASE namastecards_dev;

\c namastecards_dev;

CREATE TABLE namastecards (
 id SERIAL PRIMARY KEY,
 company TEXT,
 tag VARCHAR(50),
 name TEXT,
 email TEXT,
 phone CHAR(13) DEFAULT NULL,
 cell CHAR(13),
 address TEXT,
 linkedin TEXT,
 image TEXT
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5)
)
