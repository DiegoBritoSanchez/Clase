/*Product*/
use u674705277_diegobrito1;
CREATE Table
    if not exists product (
        id int auto_increment,
        name varchar(255),
        description varchar(255),
        price float,
        PRIMARY KEY (id)
    );

/*Images*/

CREATE TABLE
    IF NOT EXISTS images (
        id int auto_increment,
        id_prod int not null,
        image varchar(255),
        description varchar(255),
        PRIMARY KEY (id),
        FOREIGN KEY (id_prod) REFERENCES product (id)
    );

/*Users*/

CREATE TABLE
    IF NOT EXISTS users (
        id int auto_increment,
        name varchar(255),
        psswd varchar(255),
        email varchar(255),
        PRIMARY KEY (id)
    );

/*orders*/

CREATE TABLE
    IF NOT EXISTS orders (
        id int auto_increment,
        id_prod int,
        id_user int,
        PRIMARY KEY (id),
        FOREIGN KEY (id_prod) REFERENCES product (id),
        FOREIGN KEY (id_user) REFERENCES users (id)
    );
/*admin*/
INSERT INTO `users` (`id`, `name`, `psswd`, `email`) VALUES (NULL, 'admin', 'admin', 'admin@admin.com');
/*producto*/
INSERT INTO product values (null, 'piedra1', 'piedra1Descripcion', 19.99);
/*imagenes*/
INSERT INTO images values (null, 1, 'piedra1.png', null);