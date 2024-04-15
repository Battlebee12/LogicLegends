CREATE DATABASE test;
use test;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    zipCode VARCHAR(255) NOT NULL
    
);

CREATE TABLE event_organizers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    zipCode VARCHAR(10) NOT NULL
);

CREATE TABLE admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    ticket_price DECIMAL(10, 2) NOT NULL,
    tickets_available INT NOT NULL DEFAULT 0,
    tickets_sold INT NOT NULL DEFAULT 0, -- New column for tracking tickets sold
    venue VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE events ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'pending';

insert into admins (email,password) values('testuser@test.com','$2y$10$5qERIxFZv6XENnOisGnJLuJTPb5MLOrvCAfaMJTHoc.BmQRXa4WtC');
