DROP DATABASE IF EXISTS `SpotifyClone` ;
CREATE DATABASE IF NOT EXISTS `SpotifyClone` ;
USE `SpotifyClone` ;

DROP TABLE IF EXISTS `SpotifyClone`.`planos` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`planos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `valor` DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `SpotifyClone`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `idade` INT NOT NULL,
  `plano_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_usuarios_planos`
    FOREIGN KEY (`plano_id`)
    REFERENCES `SpotifyClone`.`planos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `SpotifyClone`.`artistas` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`artistas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `SpotifyClone`.`albuns` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`albuns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `artista_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_albuns_artistas`
    FOREIGN KEY (`artista_id`)
    REFERENCES `SpotifyClone`.`artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `SpotifyClone`.`usuarios_artistas` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`usuarios_artistas` (
  `usuario_id` INT NOT NULL,
  `artista_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `artista_id`),
  CONSTRAINT `fk_usuarios_artistas_usuarios`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `SpotifyClone`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_artistas_artistas`
    FOREIGN KEY (`artista_id`)
    REFERENCES `SpotifyClone`.`artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `SpotifyClone`.`cancoes` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`cancoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `album_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cancoes_album`
    FOREIGN KEY (`album_id`)
    REFERENCES `SpotifyClone`.`albuns` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `SpotifyClone`.`usuarios_cancoes` ;

CREATE TABLE IF NOT EXISTS `SpotifyClone`.`usuarios_cancoes` (
  `usuario_id` INT NOT NULL,
  `cancao_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `cancao_id`),
  CONSTRAINT `fk_usuarios_cancoes_usuarios`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `SpotifyClone`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_cancoes_cancoes`
    FOREIGN KEY (`cancao_id`)
    REFERENCES `SpotifyClone`.`cancoes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO `SpotifyClone`.`planos` (`id`, `nome`, `valor`) 
VALUES 
(DEFAULT, 'gratuito', 0),
(DEFAULT, 'familiar', 7.99),
(DEFAULT, 'universitário', 5.99);

INSERT INTO `SpotifyClone`.`usuarios` (`id`, `nome`, `idade`, `plano_id`) VALUES (DEFAULT, 'Thati', 23, 1);
INSERT INTO `SpotifyClone`.`usuarios` (`id`, `nome`, `idade`, `plano_id`) VALUES (DEFAULT, 'Cintia', 35, 2);
INSERT INTO `SpotifyClone`.`usuarios` (`id`, `nome`, `idade`, `plano_id`) VALUES (DEFAULT, 'Bill', 20, 3);
INSERT INTO `SpotifyClone`.`usuarios` (`id`, `nome`, `idade`, `plano_id`) VALUES (DEFAULT, 'Roger', 45, 1);

INSERT INTO `SpotifyClone`.`artistas` (`id`, `nome`) VALUES (DEFAULT, 'Walter Phoenix');
INSERT INTO `SpotifyClone`.`artistas` (`id`, `nome`) VALUES (DEFAULT, 'Peter Strong');
INSERT INTO `SpotifyClone`.`artistas` (`id`, `nome`) VALUES (DEFAULT, 'Lance Day');
INSERT INTO `SpotifyClone`.`artistas` (`id`, `nome`) VALUES (DEFAULT, 'Freedie Shannon');

INSERT INTO `SpotifyClone`.`albuns` (`id`, `nome`, `artista_id`) VALUES (DEFAULT, 'Envious', 1);
INSERT INTO `SpotifyClone`.`albuns` (`id`, `nome`, `artista_id`) VALUES (DEFAULT, 'Exuberant', 1);
INSERT INTO `SpotifyClone`.`albuns` (`id`, `nome`, `artista_id`) VALUES (DEFAULT, 'Hallowed Steam', 2);
INSERT INTO `SpotifyClone`.`albuns` (`id`, `nome`, `artista_id`) VALUES (DEFAULT, 'Incandescent', 3);
INSERT INTO `SpotifyClone`.`albuns` (`id`, `nome`, `artista_id`) VALUES (DEFAULT, 'Temporary Culture', 4);

INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (1, 1);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (1, 3);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (1, 4);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (2, 1);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (2, 3);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (3, 1);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (3, 2);
INSERT INTO `SpotifyClone`.`usuarios_artistas` (`usuario_id`, `artista_id`) VALUES (4, 4);

INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Soul For Us', 1);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Reflections Of Magic', 1);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Dance With Her Own', 1);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Troubles Of My Inner Fire', 2);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Time Fireworks', 2);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Magic Circus', 3);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Honey, So Do I', 3);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Sweetie, Let\'s Go Wild', 3);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'She Knows', 3);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Fantasy For Me', 4);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Celebration Of More', 4);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Rock His Everything', 4);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Home Forever', 4);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Diamond Power', 4);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Honey, Let\'s Be Silly', 4);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Thang Of Thunder', 5);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Words Of Her Life', 5);
INSERT INTO `SpotifyClone`.`cancoes` (`id`, `nome`, `album_id`) VALUES (DEFAULT, 'Without My Streets', 5);

INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (1, 1);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (1, 6);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (1, 14);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (1, 16);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (2, 13);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (2, 17);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (2, 2);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (2, 15);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (3, 4);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (3, 16);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (3, 6);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (4, 3);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (4, 18);
INSERT INTO `SpotifyClone`.`usuarios_cancoes` (`usuario_id`, `cancao_id`) VALUES (4, 11);
