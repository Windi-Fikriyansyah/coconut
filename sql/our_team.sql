-- Query to create team_members table
CREATE TABLE IF NOT EXISTS team_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    linkedin_url VARCHAR(255) DEFAULT NULL,
    instagram_url VARCHAR(255) DEFAULT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample data for team members
INSERT INTO team_members (name, role, image, linkedin_url, instagram_url, display_order) VALUES 
('Ahmad Fauzi', 'Chief Executive Officer', 'https://i.pravatar.cc/400?u=a1', 'https://linkedin.com', 'https://instagram.com', 1),
('Siti Aminah', 'Director of Operations', 'https://i.pravatar.cc/400?u=a2', 'https://linkedin.com', 'https://instagram.com', 2),
('Budi Santoso', 'Supply Chain Manager', 'https://i.pravatar.cc/400?u=a3', 'https://linkedin.com', 'https://instagram.com', 3),
('Dewi Lestari', 'Quality Assurance Specialist', 'https://i.pravatar.cc/400?u=a4', 'https://linkedin.com', 'https://instagram.com', 4);
