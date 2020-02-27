DROP DATABASE IF EXISTS music_hall_db;

CREATE DATABASE music_hall_db;

USE music_hall_db;

CREATE TABLE performances (
	id INT NOT NULL AUTO_INCREMENT,
    performance VARCHAR(30) NOT NULL,
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
    
    PRIMARY KEY (id)
);

CREATE TABLE musicAPIs (
    id Int AUTO_INCREMENT NOT NULL,
    performanceID INT NOT NULL,
    spotify INTEGER NOT NULL,
    youtube INTEGER NOT NULL,
    instagram INTEGER NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    /* Set ID as primary key */
    PRIMARY KEY ( id ),
    FOREIGN KEY (performanceID) references performances(id)
);

INSERT INTO performances (performance, date, total_sold, spotify_reach, instagram_following, total_money, total_attendance, average_ticket_price, percent_sold, show_success, fiscal_year, genre, spotify_popularity, instagram_strength, average_strength, projected_success, actual_success, predictability) 
VALUES ("Pat Benatar & Neil Giraldo", "3/8/17", 689, "5-7K", 23200, 59537, 715, 86,	83,	True, "FY17", "Rock", 5, 4, 4.5, "Great", "Great", "Correct");

INSERT INTO performances (performance, date, total_sold, spotify_reach, instagram_following, total_money, total_attendance, average_ticket_price, percent_sold, show_success, fiscal_year, genre, spotify_popularity, instagram_strength, average_strength, projected_success, actual_success, predictability) 
VALUES ("The Tallest Man on Earth", "5/10/20", 244, "<2K", 241,	9941, 244, 41, 29,NULL,"FY20", "Singer/Songwriter", 1, 1, 1, "Poor", "Poor", "Correct");

INSERT INTO performances (performance, date, total_sold, spotify_reach, instagram_following, total_money, total_attendance, average_ticket_price, percent_sold, show_success, fiscal_year, genre, spotify_popularity, instagram_strength, average_strength, projected_success, actual_success, predictability) 
VALUES ("Josh Turner", "4/5/20", 102, "6-8K", 125000, 14565, 194, 143, 12, NULL, "FY20", "Country", 5, 5, 5, "Great", "Poor", "Wrong");

INSERT INTO performances (performance, date, total_sold, spotify_reach, instagram_following, total_money, total_attendance, average_ticket_price, percent_sold, show_success, fiscal_year, genre, spotify_popularity, instagram_strength, average_strength, projected_success, actual_success, predictability) 
VALUES ("Bruce Hornsby and Music", "3/1/20", 351, "<2K", 10000, 29670, 365, 85, 42, NULL, "FY20", "Rythem & Blues", 1, 3, 2, "Good", "Good", "Correct");