select title, genres.name
FROM movies_db.series
inner join movies_db.genres  ON genre_id = genres.id


