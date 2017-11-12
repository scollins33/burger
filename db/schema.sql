CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);