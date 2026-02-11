-- ============================================================
-- Migration: Tambah kolom meta_title dan meta_description
-- pada tabel products untuk SEO
-- ============================================================

ALTER TABLE products
  ADD COLUMN meta_title VARCHAR(255) DEFAULT NULL AFTER tags,
  ADD COLUMN meta_description TEXT DEFAULT NULL AFTER meta_title;

-- ============================================================
-- Contoh UPDATE untuk mengisi data meta per produk:
-- ============================================================

-- UPDATE products
-- SET meta_title = 'Desiccated Coconut | Premium Quality from Indonesia',
--     meta_description = 'High-quality desiccated coconut from Indonesia. Available in fine, medium, and coarse grades for food manufacturing and bakery industries.'
-- WHERE slug = 'desiccated-coconut';

-- UPDATE products
-- SET meta_title = 'Virgin Coconut Oil (VCO) | Cold-Pressed & Organic',
--     meta_description = 'Pure virgin coconut oil made from fresh coconut meat using cold-pressed method. Ideal for cooking, skincare, and health supplements.'
-- WHERE slug = 'virgin-coconut-oil';

-- Ulangi untuk setiap produk sesuai kebutuhan SEO Anda
