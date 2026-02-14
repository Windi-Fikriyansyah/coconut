-- Query to create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255) DEFAULT NULL,
    rating INT DEFAULT 5,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample data for testimonials
INSERT INTO testimonials (name, role, content, image, rating, display_order) VALUES 
('John Smith', 'Global Importer, UK', 'The quality of the coconut products from Global Coco Prime is consistently exceptional. Their professionalism and delivery reliability are top-notch.', 'https://i.pravatar.cc/150?u=1', 5, 1),
('Maria Rodriguez', 'Manufacturing Director, Spain', 'Finding a supplier that understands international standards and maintains organic integrity is rare. Global Coco Prime exceeds our expectations every time.', 'https://i.pravatar.cc/150?u=2', 5, 2),
('Chen Wei', 'Head of Procurement, Singapore', 'Their logistics team is incredibly efficient. Our shipments always arrive on time and the product freshness is unparalleled.', 'https://i.pravatar.cc/150?u=3', 5, 3),
('Sarah Miller', 'Wholesale Distributor, USA', 'Excellent communication and high-quality coconut derivatives. They have become our primary partner for sustainable coconut ingredients.', 'https://i.pravatar.cc/150?u=4', 5, 4);
