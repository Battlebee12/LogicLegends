-- Create the database
CREATE DATABASE IF NOT EXISTS siteddl;
USE siteddl;

DROP TABLE siteAdmin;
DROP TABLE customer;
DROP TABLE csa;
DROP TABLE csquerrys;
DROP TABLE eventorganizer;
DROP TABLE event;
DROP TABLE ticket;
DROP TABLE transactionTable;

CREATE TABLE siteAdmin (
    adminId             INT AUTO_INCREMENT,
    userName            VARCHAR(20),
    password   	        VARCHAR(30),
    firstName           VARCHAR(40),
    lastName            VARCHAR(40),
    email               VARCHAR(50),
    phonenum            VARCHAR(20),
    PRIMARY KEY (adminId)
);

CREATE TABLE customer (
    customerId          INT NOT NULL AUTO_INCREMENT,
    userName            VARCHAR(20),
    password   	        VARCHAR(30),
    firstName           VARCHAR(40),
    lastName            VARCHAR(40),
    email               VARCHAR(50),
    phonenum            VARCHAR(20),
    country             VARCHAR(40),
    age                 INT,
    PRIMARY KEY (customerId)
);

-- CSA stands for Customer Support Agent
CREATE TABLE csa(
    employeeId          INT NOT NULL AUTO_INCREMENT,
    firstName           VARCHAR(40),
    lastName            VARCHAR(40),
    PRIMARY KEY (employeeId)
);

-- Customer support querrys
CREATE TABLE csquerrys (
    querryId            INT AUTO_INCREMENT,
    CSAId               INT,
    customerId          INT,
    inquiryDate        	DATETIME,
    probDesc            VARCHAR(300),
    PRIMARY KEY (querryId),
    FOREIGN KEY (CSAId) REFERENCES CSA(employeeId)
        ON UPDATE CASCADE ON DELETE NO ACTION,
    FOREIGN KEY (customerId) REFERENCES customer(customerId)
        ON UPDATE CASCADE ON DELETE NO ACTION
);

CREATE TABLE eventorganizer (
    organizerId         INT AUTO_INCREMENT,
    organizerName     	VARCHAR(20),
    email               VARCHAR(40),
    PRIMARY KEY (organizerId)
);

CREATE TABLE eventstable (
    eventId             INT AUTO_INCREMENT,
    organizerId         INT,
    eventName       	VARCHAR(40),
    address             VARCHAR(50),
    city                VARCHAR(40),
    state               VARCHAR(20),
    postalCode          VARCHAR(20),
    country             VARCHAR(40),
    eventDate        	DATETIME,
    capacity            INT,
    ageRestriction      INT,
    descritpion         VARCHAR(500),
    status              VARCHAR(10),
    PRIMARY KEY (eventId),
    FOREIGN KEY (organizerId) REFERENCES eventorganizer(organizerId)
        ON UPDATE CASCADE ON DELETE CASCADE
);
-- when owner is null it means it hasnt been sold
CREATE TABLE ticket (
    ticketId            INT AUTO_INCREMENT,
    eventId             INT,
    ownerId             INT,
    price               DECIMAL(10,2),
    seatNum             VARCHAR(5),
    PRIMARY KEY (ticketId),
    FOREIGN KEY (eventId) REFERENCES eventsTable(eventId)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (ownerId) REFERENCES customer(customerId)
        ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE transactionTable (
    transactionId       INT NOT NULL AUTO_INCREMENT,
    customerId          INT,
    eventId             INT,
    amount              DECIMAL(10, 2) NOT NULL,
    transactionDate    	DATE NOT NULL,
    PRIMARY KEY (transactionId),
    FOREIGN KEY (customerId) REFERENCES customer(customerId)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (eventId) REFERENCES Event(EventId)
        ON UPDATE CASCADE ON DELETE CASCADE
);

-- Filler info needs to be changed for later
INSERT INTO siteAdmin(adminId,userName,password,firstName,lastName,email,phonenum)
VALUES (1,'Admin1','password123','John','Doe','john.doe@gmail.com',2039753427);

INSERT INTO eventstable (organizerId, eventName, address, city, state, postalCode, country, eventDate, capacity, ageRestriction, description, status) 
VALUES 
(1, 'Summer Music Festival', '123 Main Street', 'Toronto', 'Ontario', 'M1P 1A1', 'Canada', '2024-07-15 18:00:00', 500, 18, 'Join us for a day of live music performances from top artists!', 'Pending'),
(2, 'Art Exhibition', '456 Elm Avenue', 'Vancouver', 'British Columbia', 'V5Z 1M8', 'Canada', '2024-08-20 12:00:00', 200, NULL, 'Explore stunning artworks from local and international artists.', 'Pending'),
(3, 'Charity Gala Dinner', '789 Oak Street', 'Montreal', 'Quebec', 'H3A 1R2', 'Canada', '2024-09-10 19:00:00', 300, 18, 'Support a noble cause while enjoying a lavish dinner and entertainment.', 'Pending'),
(4, 'Tech Conference 2024', '101 Pine Road', 'Calgary', 'Alberta', 'T2E 2Z8', 'Canada', '2024-10-05 09:00:00', 400, NULL, 'Dive into the latest trends and innovations in the tech industry.', 'Pending'),
(5, 'Yoga Retreat', '222 Beach Avenue', 'Victoria', 'British Columbia', 'V8W 1A5', 'Canada', '2024-11-15 08:00:00', 100, 16, 'Relax and rejuvenate with yoga sessions in a serene coastal setting.', 'Pending');