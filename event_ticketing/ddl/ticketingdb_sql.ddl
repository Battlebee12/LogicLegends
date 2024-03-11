CREATE DATABASE siteddl;
go;

USE siteddl;
go;

DROP TABLE admin;
DROP TABLE customer;
DROP TABLE csa;
DROP TABLE csquerrys;
DROP TABLE eventorganizer;
DROP TABLE event;
DROP TABLE ticket;
DROP TABLE transaction;

CREATE TABLE admin (
    adminId             INT IDENTITY,
    userName            VARCHAR(20),
    password            VARCHAR(30),
    firstName           VARCHAR(40),
    lastName            VARCHAR(40),
    email               VARCHAR(50),
    phonenum            VARCHAR(20),
    PRIMARY KEY (adminId)
);

CREATE TABLE customer (
    customerId          INT NOT NULL AUTO_INCREMENT,,
    userName            VARCHAR(20),
    password            VARCHAR(30),
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
    employeeId          INT NOT NULL AUTO_INCREMENT,,
    firstName           VARCHAR(40),
    lastName            VARCHAR(40),
    PRIMARY KEY (employeeId)
);

-- Customer support querrys
CREATE TABLE csquerrys (
    querryId            INT IDENTIFY,
    CSAId               INT,
    customerId          INT,
    date                DATETIME,
    probDesc            VARCHAR(300),
    PRIMARY KEY (querryId),
    FOREIGN KEY (CSAId) REFERENCES CSA(employeeId)
        ON UPDATE CASCADE ON DELETE NO ACTION,
    FOREIGN KEY (customerId) REFERENCES customer(customerId)
        ON UPDATE CASCADE ON DELETE NO ACTION
);

CREATE TABLE eventorganizer (
    organizerId         INT IDENTIFY,
    name                VARCHAR(20),
    email               VARCHAR(40),
    PRIMARY KEY (organizerId)
);

CREATE TABLE event (
    eventId             INT IDENTIFY,
    organizerId         INT,
    name                VARCHAR(40),
    address             VARCHAR(50),
    city                VARCHAR(40),
    state               VARCHAR(20),
    postalCode          VARCHAR(20),
    country             VARCHAR(40),
    date                DATETIME,
    capacity            INT,
    ageRestriction      INT,
    descritpion         VARCHAR(500)
    PRIMARY KEY (eventId),
    FOREIGN KEY (organizerId) REFERENCES eventorganizer(organizerId)
        ON UPDATE CASCADE ON DELETE CASCADE
);
-- when owner is null it means it hasnt been sold
CREATE TABLE ticket (
    ticketId            INT IDENTIFY;
    eventId             INT,
    ownerId             INT,
    price               DECIMAL(10,2),
    seatNum             VARCHAR(5),
    PRIMARY KEY (ticketId),
    FOREIGN KEY (eventId) REFERENCES event(eventId)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (ownerId) REFERENCES customer(customerId)
        ON UPDATE CASCADE ON DELETE CASCADE,
    );

CREATE TABLE transaction (
    transactionId       INT NOT NULL AUTO_INCREMENT,
    customerId          INT,
    eventId             INT,
    amount              DECIMAL(10, 2) NOT NULL,
    date                DATE NOT NULL,
    PRIMARY KEY (transactionId),
    FOREIGN KEY (customerId) REFERENCES customer(customerId)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (eventId) REFERENCES Event(EventId)
        ON UPDATE CASCADE ON DELETE CASCADE
);

--Filler info needs to be changed for later
INSERT INTO admin(adminId,userName,password,firstName,lastName,email,phonenum)
VALUES (1,'Admin1','password123','John','Doe','john.doe@gmail.com',2039753427);