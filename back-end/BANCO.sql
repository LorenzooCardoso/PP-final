CREATE DATABASE bd_fitpay;

USE bd_fitpay;

CREATE TABLE users_fitpay(
	id INT PRIMARY KEY AUTO_INCREMENT primary key NOT NULL,
	name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL unique,
    password VARCHAR (255) NOT NULL
); 
SELECT * FROM users_fitpay;

CREATE TABLE Exercicios(
	id int auto_increment primary key,
	nome varchar(255),
    imagem varchar(255),
	musculos varchar(255)
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

