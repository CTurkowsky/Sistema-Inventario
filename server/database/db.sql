use inventario;
CREATE TABLE Categoria (
    idCategoria INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombreCategoria VARCHAR(40) NOT NULL
);
CREATE TABLE Marca(
    idMarca INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombreMarca VARCHAR(40) NOT NULL
);

CREATE TABLE Usuario(
    idUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    apellidoPaterno VARCHAR(40) NOT NULL,
    apellidoMaterno VARCHAR(40) NOT NULL,
    correo VARCHAR(40) NOT NULL,
    contrasena VARCHAR(40) NOT NULL
);

CREATE TABLE Area(
    idArea INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombreAreaVARCHAR VARCHAR(40) NOT NULL
);
CREATE TABLE Producto (
    idProducto INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombreProducto VARCHAR(40) NOT NULL,
    stock INTEGER NOT NULL,
    fecha  DATE NOT NULL,
    categoria INTEGER, FOREIGN KEY(categoria) REFERENCES Categoria(idCategoria),
    marca INTEGER, FOREIGN KEY(marca)  REFERENCES Marca(idMarca)
);
CREATE TABLE Entrada(
    idEntrada INTEGER PRIMARY KEY AUTO_INCREMENT,
    fecha  DATE NOT NULL,
     cantidad INTEGER NOT NULL,
    usuario INTEGER, FOREIGN KEY(usuario)  REFERENCES Usuario(idUsuario),
    producto INTEGER, FOREIGN KEY(producto)  REFERENCES Producto(idProducto)
);
CREATE TABLE Salida(
    idSalida INTEGER PRIMARY KEY AUTO_INCREMENT,
    fecha  DATE NOT NULL,
    cantidad INTEGER NOT NULL,
    usuario INTEGER, FOREIGN KEY(usuario)  REFERENCES Usuario(idUsuario),
    area INTEGER, FOREIGN KEY(area)  REFERENCES Area(idArea),
    producto INTEGER, FOREIGN KEY(producto)  REFERENCES Producto(idProducto)
);