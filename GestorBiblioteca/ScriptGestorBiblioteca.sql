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





CREATE TABLE GestorBiblioteca.dbo.Books (
	IdBook int NOT NULL IDENTITY(1, 1),
	 Title varchar(255) NOT NULL,
	 Author varchar(255) NOT NULL,
	 TotalQuantity varchar(255) NOT NULL,
	 PublishedDate DATE not null
);



CREATE TABLe clientes (
	Idcliente int NOT NULL IDENTITY(1, 1),
	 DNI int NOT NULL,
	 Nombre  varchar(255) NOT NULL,
	 Apellido varchar(255) NOT NULL,
	 telefono int not null,
	 Mail varchar(255) not null
);




CREATE TABLE GestorBiblioteca.dbo.Loans (
	 IdLoan int NOT NULL IDENTITY(1, 1),
	 LoanDate DATE not null,
	 ReturnDate DATE  null,
	 IdBook int NOT Null,
	 idcliente int not null
);