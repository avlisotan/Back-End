USE SpotifyClone;
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(usuario_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_cancoes INT;
    SELECT COUNT(*)
    FROM SpotifyClone.usuarios_cancoes
    WHERE SpotifyClone.usuarios_cancoes.usuario_id = usuario_id INTO total_cancoes;
    RETURN total_cancoes;
END $$

DELIMITER ;
