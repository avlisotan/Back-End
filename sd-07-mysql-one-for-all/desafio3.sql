CREATE VIEW historico_reproducao_usuarios AS 
SELECT u.nome AS `usuario`,
c.nome AS `nome`
FROM SpotifyClone.usuarios AS u
JOIN SpotifyClone.usuarios_cancoes AS uc
ON u.id = uc.usuario_id
JOIN SpotifyClone.cancoes AS c
ON uc.cancao_id = c.id
ORDER BY u.nome, c.nome;
