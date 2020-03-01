DROP DATABASE IF EXISTS music_hall_db;

CREATE DATABASE music_hall_db;

USE music_hall_db;

CREATE TABLE artists(
	id Int AUTO_INCREMENT NOT NULL,
    artist_name VARCHAR(30) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    
    PRIMARY KEY (id)
);

CREATE TABLE musicAPIs (
    id Int AUTO_INCREMENT NOT NULL,
    artistID INT NOT NULL,
    spotify INTEGER NOT NULL,
    youtube INTEGER NOT NULL,
    instagram INTEGER NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    /* Set ID as primary key */
    PRIMARY KEY (id),
    FOREIGN KEY (artistID) references artists(id)
);

CREATE TABLE performances (
	id INT NOT NULL AUTO_INCREMENT,
    artistID INT NOT NULL,
    date DATE NOT NULL, 
    total_sold INT NOT NULL,
    spotify_reach VARCHAR(30),
    instagram_following INT,
    total_money DECIMAL(13, 4) NOT NULL,
    total_attendance  INT NOT NULL,
    average_ticket_price DECIMAL(13,4) NOT NULL,
    percent_sold INT NOT NULL,
    show_success BOOLEAN,
    fiscal_year VARCHAR(30),
    genre VARCHAR(30),
    spotify_popularity INT,
    instagram_strength INT,
    average_strength INT,
    projected_success VARCHAR(30),
    actual_success VARCHAR(30),
    predictability VARCHAR(30),
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),  
    FOREIGN KEY (artistID) references artists(id)
);  


-- INSERT INTO artists (artist_name)
-- VALUES ("Pat Benatar & Neil Giraldo"), ("The Tallest Man on Earth"), ("Josh Turner"), ("Bruce Hornsby and Music"), ("Bobby McFerrin"),("Straight No Chaser");

-- INSERT INTO musicAPIs (artistID, spotify, youtube, instagram)
-- VALUES (1, 99, 100, 101), (2, 99, 100, 101), (3, 99, 100, 101), (4, 99, 100, 101), (5, 99, 100, 101),(6, 98, 900, 60),(6, 98, 900, 60);

-- INSERT INTO performances (artistID, date, total_sold, spotify_reach, instagram_following, total_money, total_attendance, average_ticket_price, percent_sold, show_success, fiscal_year, genre, spotify_popularity, instagram_strength, average_strength, projected_success, actual_success, predictability)
-- VALUES (1, "3/8/17", 689, "5-7K", 23200, 59537, 715, 86, 83, True, "FY17", "Rock", 5, 4, 4.5, "Great", "Great", "Correct"), 
-- (2,"5/10/20", 244, "<2K", 241,	9941, 244, 41, 29,NULL,"FY20", "Singer/Songwriter", 1, 1, 1, "Poor", "Poor", "Correct"), 
-- (3, "5/10/20", 244, "<2K", 241, 9941, 244, 41, 29, NULL, "FY20", "Singer/Songwriter", 1, 1, 1, "Poor", "Poor", "Correct"),
-- (4, "3/1/20", 351, "<2K", 10000, 29670, 365, 85, 42, NULL, "FY20", "Rythm & Blues", 1, 3, 2, "Good", "Good", "Correct"), 
-- (5, "2/12/20", 241, "<2K", 16200, 17172, 265, 71, 29, NULL, "FY20", "World Music", 1, 3, 2, "Good", "Poor", "Wrong"),
-- (6,"8/8/19", 548, ">2K", 29300, 37704, 571, 69, 66, NULL, "FY20", "A cappella", 1, 4, 2.5, "Good", "Good", "Correct");