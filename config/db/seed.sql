use music_hall_db;

INSERT INTO artists (artist_name)
VALUES ("Pat Benatar & Neil Giraldo"), ("The Tallest Man on Earth"), ("Josh Turner"), ("Bruce Hornsby and Music"), ("Bobby McFerrin"),("Straight No Chaser");

INSERT INTO musicAPIs (artistID, spotify, youtube, instagram)
VALUES (1, 99, 100, 101), (2, 99, 100, 101), (3, 99, 100, 101), (4, 99, 100, 101), (5, 99, 100, 101),(6, 98, 900, 60),(6, 98, 900, 60);

INSERT INTO performances (artistID, date, total_sold, spotify_reach, instagram_following, total_money, total_attendance, average_ticket_price, percent_sold, show_success, fiscal_year, genre, spotify_popularity, instagram_strength, average_strength, projected_success, actual_success, predictability)
VALUES (1, "2017/3/8", 689, "5-7K", 23200, 59537, 715, 86, 83, True, "FY17", "Rock", 5, 4, 4.5, "Great", "Great", "Correct"), 
(2,"2020/5/10", 244, "<2K", 241,	9941, 244, 41, 29,NULL,"FY20", "Singer/Songwriter", 1, 1, 1, "Poor", "Poor", "Correct"), 
(3, "2020/5/10", 244, "<2K", 241, 9941, 244, 41, 29, NULL, "FY20", "Singer/Songwriter", 1, 1, 1, "Poor", "Poor", "Correct"),
(4, "2020/3/1", 351, "<2K", 10000, 29670, 365, 85, 42, NULL, "FY20", "Rythm & Blues", 1, 3, 2, "Good", "Good", "Correct"), 
(5, "2020/2/12", 241, "<2K", 16200, 17172, 265, 71, 29, NULL, "FY20", "World Music", 1, 3, 2, "Good", "Poor", "Wrong"),
(6,"2020/8/8", 548, ">2K", 29300, 37704, 571, 69, 66, NULL, "FY20", "A cappella", 1, 4, 2.5, "Good", "Good", "Correct");