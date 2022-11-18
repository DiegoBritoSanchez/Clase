/*Product*/
/* use stonestore; */
use u674705277_diegobrito1;
CREATE Table
    if not exists product (
        id int auto_increment,
        name varchar(255),
        description varchar(255),
        price float,
        stock int,
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
INSERT INTO product values (null, 'stone1', 'stone1Description', 19.99, 5);
INSERT INTO product values (null, 'stone2', 'stone2Description', 35.99, 7);
INSERT INTO product values (null, 'stone3', 'stone3Description', 9.99, 1);
/*imagenes*/
INSERT INTO images values (null, 1, 'stone1.png', null);
INSERT INTO images values (null, 1, 'stone1-2.png', null);
INSERT INTO images values (null, 2, 'stone2.png', null);
INSERT INTO images values (null, 3, 'stone3.png', null);