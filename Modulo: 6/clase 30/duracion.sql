SELECT series.title as Titulo, DATEDIFF(series.end_date, series.release_date) as Duración 
from series; 