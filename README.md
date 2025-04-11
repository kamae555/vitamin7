# vitamin7


# MongoDB & Express.js Project

This project involves building a backend server using MongoDB and Express.js. This README file provides the installation instructions, how to run the project, and how the MongoDB database is connected and used.

## Project Description

This project connects **MongoDB** and **Express.js** to build a simple backend API. Key points include:
1. Creating a **companyDB** database in MongoDB and managing the **projects** collection.
2. Using **Express.js** to implement a REST API that allows for inserting and querying data from MongoDB.

## Requirements

- **Node.js** and **npm** must be installed.
- **MongoDB** and **MongoDB Compass** should be installed.

## Installation and Setup

### 1. Install Node.js and npm
Download and install Node.js from [here](https://nodejs.org/). npm will be installed automatically with Node.js.

### 2. Clone the Project

```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject


1. workbench

-- 1. 데이터베이스 생성
CREATE DATABASE company_db;

-- 2. 사용할 데이터베이스 선택
USE company_db;

-- 3. employees 테이블 생성
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);


2. mongodb - mongodb compass
 make directory : data
make connection between mongodb and compass

3. node.js
nove -v : check the version
make a server.js

and nove server.js


