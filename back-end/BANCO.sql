USE bd_fitpay;

ALTER TABLE exercicios ADD musculo VARCHAR(255);

SELECT * FROM users_fitpay;

DROP TABLE users_fitpay;

CREATE TABLE users_fitpay(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL unique,
    password VARCHAR (255) NOT NULL,
    funcao VARCHAR (255) NOT NULL
); 
SELECT * FROM exercicios;

CREATE TABLE exercicios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (255) NOT NULL,
    file VARCHAR(255) NOT NULL,
    musculo VARCHAR(255) NOT NULL
);

DROP TABLE exercicios;

CREATE TABLE moedas(
	userid INT,
    quantia VARCHAR (255)
);

CREATE TABLE lojas(
	id int auto_increment primary key,
	nome varchar(255),
    imagem varchar(255)
);

CREATE TABLE realizados(
	id int auto_increment primary key,
	nome varchar(255)
);

CREATE TABLE transações(
	id int auto_increment primary key,
	nome varchar(255),
    moedas varchar(255)
);

SELECT * FROM users_fitpay;

