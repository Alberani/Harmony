CREATE DATABASE harmony;
USE harmony;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    preferencia CHAR(1) CHECK (preferencia = 'T' or preferencia = 'E')
);

CREATE TABLE Post (
	idPost INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	conteudo VARCHAR(255),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);