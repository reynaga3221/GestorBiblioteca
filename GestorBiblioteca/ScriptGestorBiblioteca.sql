CREATE DATABASE GestorBiblioteca;
GO
USE GestorBiblioteca;
GO


CREATE TABLE GestorBiblioteca.dbo.Users (
    IdUser int NOT NULL IDENTITY(1, 1),
    Name varchar(255) NOT NULL,
    UserName varchar(255),
    Password varchar(255),
    PRIMARY KEY (IdUser)
);

INSERT INTO Users
VALUES ('Santiago Reynaga', 'admin', 'admin');

select * from Users