SELECT distinct movies.title, concat (actors.first_name, ' ', actors.last_name) as actor 
FROM movies_db.actor_movie
inner join actors on actors.id = actor_movie.actor_id
inner join movies on actor_movie.movie_id = movies.id
where movies.id = 3 
or movies.id = 4