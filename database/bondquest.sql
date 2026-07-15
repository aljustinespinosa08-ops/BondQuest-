CREATE DATABASE IF NOT EXISTS bondquest;
USE bondquest;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student','teacher','admin') DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    student_id VARCHAR(30),
    xp INT DEFAULT 0,
    coins INT DEFAULT 0,
    level INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    department VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    topic VARCHAR(100) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT,
    question TEXT NOT NULL,
    difficulty ENUM('Beginner','Intermediate','Advanced'),
    answer VARCHAR(255),
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE choices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT,
    choice_text VARCHAR(255),
    is_correct BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    lesson_id INT,
    completed BOOLEAN DEFAULT FALSE,
    score INT DEFAULT 0,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE badges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    badge_name VARCHAR(100),
    description TEXT
);