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
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
    performanceID INT NOT NULL,
    spotify INTEGER NOT NULL,
    youtube INTEGER NOT NULL,
    instagram INTEGER NOT NULL,
    /* Set ID as primary key */
    PRIMARY KEY ( id ),
    FOREIGN KEY (performanceID) references performances(id)
);