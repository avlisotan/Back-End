USE SpotifyClone;

DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN nome_artista VARCHAR(100))
BEGIN
    SELECT a.nome AS artista,
    ab.nome AS album
    FROM SpotifyClone.artistas AS a
    JOIN SpotifyClone.albuns AS ab ON a.id = ab.artista_id
    WHERE a.nome LIKE CONCAT('%', nome_artista, '%')
    ORDER BY 2;
END $$
DELIMITER ;
