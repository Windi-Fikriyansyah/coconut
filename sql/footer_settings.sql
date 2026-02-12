CREATE TABLE IF NOT EXISTS footer_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    linkedin_url VARCHAR(255),
    instagram_url VARCHAR(255),
    facebook_url VARCHAR(255),
    youtube_url VARCHAR(255),
    tiktok_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO footer_settings (description, linkedin_url, instagram_url, facebook_url, youtube_url, tiktok_url)
VALUES (
    "Supplying the world's finest coconut derivatives from sustainable sources. Committed to quality, heritage, and global innovation.",
    "#",
    "#",
    "#",
    "#",
    "#"
);
