select title, coalesce (genres_id, '0'), genre_id,name
from movies
inner join genres on genre.id = genre_id;

select title, coalesce (genres.name, 'Sin genero') as 'genre_id'
from movies
left join genres on genres.id = genre_id;
