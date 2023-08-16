\c namaste_dev;

INSERT INTO namastecards (category, message, sender, reciver, img, date, is_favorite) VALUES

('LOVE', 'Love is the only force capable of transforming an enemy into a friend.', 'James Gunn', 'Sunita lowe', NULL, 09042023, TRUE),

('LIFE', 'Life is either a daring adventure or nothing at all.', 'Rita Arora', 'Drake Wisdome', NULL, 01122023, TRUE),

('FUNNY', 'I''m on a seafood diet. I see food, and I eat it.', 'Tee Money', 'Yeshi Tshokey', NULL, NULL, TRUE);

-- //run on terminal to run this files/ restart new
-- //psql -U postgres -f db/schema.sql
-- //psql -U postgres -f db/seed.sql

