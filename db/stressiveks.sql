DROP DATABASE IF EXISTS Stressiveks;
CREATE DATABASE Stressiveks;
USE Stressiveks;

-- Create a table for users
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_level VARCHAR(10) NOT NULL DEFAULT 'regular'
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
INSERT INTO Users (email, password, user_level) VALUES
  ('admin@metropolia.com', 'adminsalasana', 'admin'),
  ('user@example.com', 'salasana', 'regular');


-- Inserting multiple diary entries
INSERT INTO DiaryEntries (user_id, entry_date, title, notes, HRVData, mood, created_at) VALUES
  (1, '2024-04-22', 'First Entry', 'This is the first entry for User One.', 'HRV data for first entry', 'Happy', NOW()),
  (2, '2024-04-22', 'Starting Out', 'User Two starts their diary today.', 'HRV data for second entry', 'Excited', NOW()),
  (1, '2024-04-22', 'Beginnings', 'User Three begins their journey with this entry.', 'HRV data for third entry', 'Hopeful', NOW());
