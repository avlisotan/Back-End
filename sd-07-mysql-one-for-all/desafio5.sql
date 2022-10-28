CREATE VIEW top_2_hits_do_momento AS
SELECT c.nome AS cancao,
COUNT(*) AS reproducoes
FROM SpotifyClone.cancoes AS c
JOIN  SpotifyClone.usuarios_cancoes uc ON c.id = uc.cancao_id
GROUP BY c.nome
ORDER BY 2 DESC, 1
LIMIT 2;
