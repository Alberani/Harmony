CREATE DATABASE harmony;
USE harmony;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    preferencia CHAR(1) CHECK (preferencia = 'S' or preferencia = 'L')
);

CREATE TABLE Post (
	idPost INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	conteudo VARCHAR(255),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

insert into usuario values (null, 'teste', 'teste@email.com', '1234', 'S'),
						   (null, 'Pedro Alberani', 'pedro@email.com', '1234', 'L'),
                           (null, 'Arthur Ferreira', 'arthur@email.com', '1234', 'S'),
                           (null, 'Gustavo de Paulo', 'gustavo@email.com', '1234', 'S'),
                           (null, 'Pedro Ribeiro', 'ribeiro@email.com', '1234', 'S');
                           
insert into Post values (null, 'Album KIRK', 'Esse Album do DaBaby é muito massa!', 2);
