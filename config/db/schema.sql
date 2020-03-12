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
    spotify INTEGER,
    youtube INTEGER,
    instagram INTEGER,
    bandsintown INTEGER,
    timestp VARCHAR(255),
    daily_diff INTEGER,
    spotify_timestp VARCHAR(255),
    spotify_popularity INTEGER,
	createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    /* Set ID as primary key */
    PRIMARY KEY (id),
    FOREIGN KEY (artistID) references artists(id)
);

CREATE TABLE performances (
	id INT NOT NULL AUTO_INCREMENT,
    ArtistId INT NOT NULL,
    date DATE NOT NULL, 
    total_sold INT NOT NULL,
    spotify_reach VARCHAR(30),
    instagram_following INT,
    total_money DECIMAL(13, 2) NOT NULL,
    total_attendance  INT NOT NULL,
    average_ticket_price DECIMAL(13,2) NOT NULL,
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
    marketing_budget INT,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),  
    FOREIGN KEY (ArtistId) references artists(id)
);  
