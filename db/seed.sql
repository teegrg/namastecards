\c namastecards_dev;

INSERT INTO namastecards (company, tag, name, email, phone, cell, address, linkedin, image) VALUES

('PURSUIT', 'Flex to Grow', 'Tee Gurung','pursuit.org', '212-333-4444', '918-000-0000', '47-10 Austell PL,NY 11101' ,'linkedin.com/in/tsheringgurungny' ,'https://p4.wallpaperbetter.com/wallpaper/929/78/380/dune-desert-nature-landscape-wallpaper-preview.jpg');


INSERT INTO reviews (reviewer, content, rating)
VALUES 
('Alex', 'Need more template options', 3);

-- //run on terminal to run this files/ restart new
-- //psql -U postgres -f db/schema.sql
-- //psql -U postgres -f db/seed.sql

