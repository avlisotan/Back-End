CREATE VIEW top_3_artistas AS
SELECT a.nome AS artista,
COUNT(u.id) AS seguidores
from SpotifyClone.artistas AS a
JOIN SpotifyClone.usuarios_artistas AS us ON a.id = us.artista_id
JOIN SpotifyClone.usuarios AS u ON us.usuario_id = u.id
GROUP BY a.nome
ORDER BY 2 DESC, 1
LIMIT 3;
