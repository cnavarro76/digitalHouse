select episodes.title, actors.first_name, actors.last_name
from actor_episode
inner join actors
on actors.id = actor_episode.actor_id
inner join episodes
on actor_episode.episode_id = episodes.id