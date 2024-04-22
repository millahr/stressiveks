DROP DATABASE IF EXISTS Stressiveks;
CREATE DATABASE Stressiveks;
USE Stressiveks;

-- Create a table for users
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    birthdate DATE,
    address VARCHAR(255),
    phonenumber CHAR(10)
);

-- Create a table for diary entries
CREATE TABLE DiaryEntries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    entry_date DATE,
    title VARCHAR(255),
    notes TEXT,
    HRVData VARCHAR(255),
    mood VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Insert User sample data
-- Inserting multiple user rows at once
INSERT INTO Users (email, name, birthdate, address, phonenumber) VALUES
  ('user1@example.com', 'User One', '1990-01-01', '123 Street, City', '1234567890'),
  ('user2@example.com', 'User Two', '1995-02-15', '456 Avenue, Town', '9876543210'),
  ('user3@example.com', 'User Three', '1988-05-20', '789 Road, Village', '5551234567');


-- Inserting multiple diary entries
INSERT INTO DiaryEntries (user_id, entry_date, title, notes, HRVData, mood, created_at) VALUES
  (1, '2024-04-22', 'First Entry', 'This is the first entry for User One.', 'HRV data for first entry', 'Happy', NOW()),
  (2, '2024-04-22', 'Starting Out', 'User Two starts their diary today.', 'HRV data for second entry', 'Excited', NOW()),
  (3, '2024-04-22', 'Beginnings', 'User Three begins their journey with this entry.', 'HRV data for third entry', 'Hopeful', NOW());
