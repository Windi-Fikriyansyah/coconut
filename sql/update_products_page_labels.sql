-- Query to add label columns for buttons in products_page table
ALTER TABLE products_page 
ADD COLUMN IF NOT EXISTS cta_whatsapp_label VARCHAR(255) DEFAULT 'WhatsApp',
ADD COLUMN IF NOT EXISTS cta_email_label VARCHAR(255) DEFAULT 'Email Inquiry';

-- Update sample data
UPDATE products_page SET 
cta_whatsapp_label = 'WhatsApp', 
cta_email_label = 'Email Inquiry' 
WHERE id = 1;
