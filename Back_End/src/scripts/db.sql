CREATE DATABASE IF NOT EXISTS siondb;
USE siondb;

CREATE TABLE IF NOT EXISTS clientes(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    correo VARCHAR(50) NOT NULL,
    nacionalidad VARCHAR(30) NOT NULL,
    ci INT NOT NULL,
    username varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO clientes (nombre, apellidos,edad,correo,nacionalidad,ci,username,password)
values
('Leonardo', 'Montenegro Barbeito', 22, 'leonardo13.lm47@gmail.com','boliviana',9044167,'LeoUser','123456'),
('Julio', 'Castedo', 20, 'Julio@gmail.com','boliviana',5041223,'JulioUser','123456'),
('Raul', 'Cespedez', 24, 'Raul@gmail.com','boliviana',902141,'RaulUser','123456');