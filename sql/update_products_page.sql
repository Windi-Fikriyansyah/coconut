-- Query to add whatsapp and email columns to products_page table
ALTER TABLE products_page 
ADD COLUMN IF NOT EXISTS cta_whatsapp VARCHAR(255) DEFAULT NULL,
ADD COLUMN IF NOT EXISTS cta_email VARCHAR(255) DEFAULT NULL;

-- Update sample data if needed (replace with your actual data)
UPDATE products_page SET 
cta_whatsapp = '+6281234567890', 
cta_email = 'hello@globalcocoprime.com' 
WHERE id = 1;
