CREATE VIEW cancoes_premium AS
SELECT
c.nome AS nome,
COUNT(*) AS reproducoes
FROM SpotifyClone.cancoes AS c  
JOIN SpotifyClone.usuarios_cancoes AS uc
ON c.id = uc.cancao_id
WHERE uc.usuario_id IN (2, 3)
GROUP BY 1
ORDER BY 1;
