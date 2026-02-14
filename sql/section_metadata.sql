-- Query to create metadata tables for Testimonials and Our Team
CREATE TABLE IF NOT EXISTS testimonials_metadata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subtitle VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS team_metadata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subtitle VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);

-- Insert sample metadata
INSERT INTO testimonials_metadata (subtitle, title) VALUES ('Success Stories', 'What Our Partners Say');
INSERT INTO team_metadata (subtitle, title) VALUES ('Masterminds', 'Meet Our Experts');
