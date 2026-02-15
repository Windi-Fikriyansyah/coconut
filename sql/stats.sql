-- Query to create company_stats table
CREATE TABLE IF NOT EXISTS company_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value VARCHAR(50) NOT NULL,
    label VARCHAR(255) NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data based on the user request
INSERT INTO company_stats (value, label, display_order) VALUES
('20+', 'Farmers & Fishermen Partners', 1),
('50+', 'Natural Products', 2),
('10+', 'Export Ready Products', 3),
('100%', 'Quality Commitment', 4);
