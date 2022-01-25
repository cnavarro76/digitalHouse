SELECT distinct a.first_name, a.last_name
FROM actor_movie am
INNER JOIN actors a ON a.id = am.actor_id
INNER JOIN movies m ON am.movie_id = m.id
WHERE m.id IN (3,4)