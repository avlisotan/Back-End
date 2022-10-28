CREATE VIEW perfil_artistas AS
SELECT
a.nome AS artista,
ab.nome AS album,
COUNT(ab.id) AS seguidores
FROM SpotifyClone.artistas a
JOIN SpotifyClone.albuns ab ON ab.artista_id = a.id
JOIN SpotifyClone.usuarios_artistas us ON a.id = us.artista_id
GROUP BY ab.id
ORDER BY 3 DESC, 1, 2;
