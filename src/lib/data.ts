import pool from "./mysql";
import { RowDataPacket } from "mysql2";
import { cache } from "react";

export interface Product extends RowDataPacket {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  bts_image: string | null;
  specifications: any;
  why_points: any;
  applications: any;
  tags: any;
  meta_title: string | null;
  meta_description: string | null;
  updated_at: Date;
}

// Tambahkan interface ini
export interface Country extends RowDataPacket {
  id: number;
  name: string;
  iso_code: string; // Contoh: ID, US, GB
}

// Tambahkan fungsi fetch ini
export const getCountries = cache(async (): Promise<Country[]> => {
  try {
    const [rows] = await pool.query<Country[]>(
      "SELECT id, name FROM countries ORDER BY name ASC",
    );
    return rows;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
});

export interface Certificate extends RowDataPacket {
  id: number;
  title: string;
  full_title: string;
  description: string;
  icon: string;
  logo: string | null;
}

export interface ProcessStep extends RowDataPacket {
  id: number;
  step_number: string;
  title: string;
  description: string;
  icon: string;
}

function sanitizeImageUrl(url: any, updatedAt?: Date): string {
  if (!url) return "";

  // If it is a JSON string (for product gallery), parse it and sanitize each URL
  if (typeof url === 'string' && (url.startsWith('[') || url.startsWith('{'))) {
    try {
      const parsed = JSON.parse(url);
      if (Array.isArray(parsed)) {
        return JSON.stringify(parsed.map(img => ({
          ...img,
          url: sanitizeImageUrl(img.url, updatedAt)
        })));
      }
      if (typeof parsed === 'object' && parsed.url) {
        return JSON.stringify({
          ...parsed,
          url: sanitizeImageUrl(parsed.url, updatedAt)
        });
      }
    } catch (e) {
      // Not a valid JSON, continue with normal sanitization
    }
  }

  if (typeof url !== "string") return "";

  // 1. Strip domain if it exists
  let cleanPath = url.replace(/^(https?:\/\/[^\/]+)/, "");

  // 2. Remove /public or /storage prefixes
  cleanPath = cleanPath.replace(/^\/?public\//, "/");
  cleanPath = cleanPath.replace(/^\/?storage\//, "/");

  // 3. Ensure it starts with a single slash
  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }

  // Gunakan timestamp dari database sebagai versioning cache (aman di unoptimized mode)
  if (updatedAt) {
    const version = new Date(updatedAt).getTime();
    const separator = cleanPath.includes("?") ? "&" : "?";
    return `${cleanPath}${separator}v=${version}`;
  }

  return cleanPath;
}

export const getProducts = cache(async (): Promise<Product[]> => {
  try {
    const [rows] = await pool.query<Product[]>(
      "SELECT * FROM products ORDER BY id ASC",
    );
    if (!Array.isArray(rows)) return [];
    return rows.map((row) => ({
      ...row,
      image: sanitizeImageUrl(row.image, row.updated_at),
      bts_image: sanitizeImageUrl(row.bts_image, row.updated_at),
    }));
  } catch (error) {
    console.error("Database connection failed in getProducts:", error);
    // Returning empty array prevents checking crash (503)
    return [];
  }
});

export const getProductBySlug = cache(
  async (slug: string): Promise<Product | null> => {
    const [rows] = await pool.query<Product[]>(
      "SELECT * FROM products WHERE slug = ?",
      [slug],
    );
    if (rows.length === 0) return null;
    const product = rows[0];
    return {
      ...product,
      image: sanitizeImageUrl(product.image, product.updated_at),
      bts_image: sanitizeImageUrl(product.bts_image, product.updated_at),
    };
  },
);

export async function getCertificates(): Promise<Certificate[]> {
  const [rows] = await pool.query<Certificate[]>(
    "SELECT * FROM certificates ORDER BY id ASC",
  );
  return rows.map((row) => ({
    ...row,
    logo: sanitizeImageUrl(row.logo),
  }));
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
  const [rows] = await pool.query<ProcessStep[] & RowDataPacket[]>(
    "SELECT * FROM process_steps ORDER BY step_number ASC",
  );
  return rows;
}

export interface HeroData {
  badge_text: string;
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  background_image: string;
}

export async function getHeroData(): Promise<HeroData[]> {
  const [rows] = await pool.query<(HeroData & RowDataPacket)[]>(
    "SELECT * FROM hero_section ORDER BY id ASC",
  );

  return rows.map((row) => ({
    ...row,
    background_image: sanitizeImageUrl(row.background_image),
  }));
}

export interface StatItem {
  label: string;
  value: string;
  suffix: string;
}

export async function getStatsData(): Promise<StatItem[]> {
  const [rows] = await pool.query<(StatItem & RowDataPacket)[]>(
    "SELECT label, value, suffix FROM stats_section ORDER BY display_order ASC",
  );
  return rows;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  image: any;
  highlight_value: string;
  highlight_text: string;
  features: any;
  button_text: string;
  button_link: string;
}

export async function getAboutData(): Promise<AboutData | null> {
  const [rows] = await pool.query<(AboutData & RowDataPacket)[]>(
    "SELECT * FROM about_section LIMIT 1",
  );
  if (rows.length === 0) return null;
  return rows[0];
}

export interface TrustItem {
  title: string;
  text: string;
  icon: string;
}

export async function getTrustData(): Promise<TrustItem[]> {
  const [rows] = await pool.query<(TrustItem & RowDataPacket)[]>(
    "SELECT title, text, icon FROM trust_section ORDER BY display_order ASC",
  );
  return rows;
}

export interface ShippingGalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  display_order: number;
}

export interface ShippingGalleryRow
  extends ShippingGalleryItem, RowDataPacket { }

export async function getShippingGallery(): Promise<ShippingGalleryItem[]> {
  try {
    const [rows] = await pool.query<ShippingGalleryRow[]>(
      "SELECT * FROM shipping_gallery ORDER BY display_order ASC",
    );
    return rows.map((row) => ({
      ...row,
      image: sanitizeImageUrl(row.image),
    }));
  } catch (error) {
    console.error("Error fetching shipping gallery:", error);
    return [];
  }
}

export interface ShippingGallerySection {
  id: number;
  subtitle: string;
  title: string;
}

export async function getShippingGallerySection(): Promise<ShippingGallerySection | null> {
  try {
    const [rows] = await pool.query<(ShippingGallerySection & RowDataPacket)[]>(
      "SELECT * FROM shipping_gallery_section LIMIT 1",
    );
    if (rows.length === 0) return null;
    return rows[0];
  } catch (error) {
    console.error("Error fetching shipping gallery section:", error);
    return null;
  }
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export async function getWhyChooseUsData(): Promise<WhyChooseUsItem[]> {
  const [rows] = await pool.query<(WhyChooseUsItem & RowDataPacket)[]>(
    "SELECT icon, title, description FROM why_choose_us_section ORDER BY display_order ASC",
  );
  return rows;
}

export interface WhyChooseUsMetadata {
  id: number;
  subtitle: string;
  title: string;
  image: any;
}

export async function getWhyChooseUsMetadata(): Promise<WhyChooseUsMetadata | null> {
  try {
    const [rows] = await pool.query<(WhyChooseUsMetadata & RowDataPacket)[]>(
      "SELECT * FROM why_choose_us_metadata LIMIT 1",
    );
    if (rows.length === 0) return null;
    return rows[0];
  } catch (error) {
    console.error("Error fetching why choose us metadata:", error);
    return null;
  }
}

export interface QualityCommitmentData {
  id: number;
  subtitle: string;
  title: string;
  image: any;
}

export interface QualityCommitmentItem {
  icon: string;
  title: string;
  description: string;
}

export async function getQualityCommitmentData(): Promise<QualityCommitmentData | null> {
  try {
    const [rows] = await pool.query<(QualityCommitmentData & RowDataPacket)[]>(
      "SELECT * FROM quality_commitment_section LIMIT 1",
    );
    return rows[0];
  } catch (error) {
    console.error("Error fetching quality commitment data:", error);
    return null;
  }
}

export async function getQualityCommitmentItems(): Promise<QualityCommitmentItem[]> {
  try {
    const [rows] = await pool.query<(QualityCommitmentItem & RowDataPacket)[]>(
      "SELECT icon, title, description FROM quality_commitment_items ORDER BY display_order ASC",
    );
    return rows;
  } catch (error) {
    console.error("Error fetching quality commitment items:", error);
    return [];
  }
}

export interface ContactData extends RowDataPacket {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
  map_image: string;
  map_embed_url: string; // New field for Google Maps iframe
}

export async function getContactData(): Promise<ContactData | null> {
  try {
    const [rows] = await pool.query<ContactData[]>(
      "SELECT * FROM contact_section LIMIT 1",
    );
    if (rows.length === 0) return null;
    return {
      ...rows[0],
      map_image: sanitizeImageUrl(rows[0].map_image),
    };
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return null;
  }
}

export interface FooterSettings extends RowDataPacket {
  id: number;
  description: string;
  linkedin_url: string;
  instagram_url: string;
  facebook_url: string;
  youtube_url: string;
  tiktok_url: string;
}

export async function getFooterData(): Promise<FooterSettings | null> {
  try {
    const [rows] = await pool.query<FooterSettings[]>(
      "SELECT * FROM footer_settings LIMIT 1",
    );
    if (rows.length === 0) return null;
    return rows[0];
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}

export interface GlobalContent extends RowDataPacket {
  content_key: string;
  content_value: string;
}

export async function getGlobalContent(): Promise<Record<string, string>> {
  const [rows] = await pool.query<GlobalContent[]>(
    "SELECT content_key, content_value FROM global_content",
  );
  const content: Record<string, string> = {};
  rows.forEach((row) => {
    content[row.content_key] = row.content_value;
  });
  return content;
}

export interface AboutPageData extends RowDataPacket {
  id: number;
  hero_badge: string;
  hero_title: string;
  hero_description: string;
  hero_image: string;
  journey_title: string;
  journey_description_1: string;
  journey_description_2: string;
  journey_image: any;
  vision_title: string;
  vision_description: string;
  mission_title: string;
  mission_points: any;
  values_data: any;
  commitment_title: string;
  commitment_description: string;
  commitment_image: string;
  process_title: string;
  process_subtitle: string;
  process_items: any;
}

export async function getAboutPageData(): Promise<AboutPageData | null> {
  try {
    const [rows] = await pool.query<AboutPageData[]>(
      "SELECT * FROM about_page LIMIT 1",
    );
    const row = rows[0];

    // Helper to parse and sanitize image arrays or strings
    const parseImages = (input: any) => {
      if (!input) return [];
      try {
        const parsed = typeof input === 'string' && (input.startsWith('[') || input.startsWith('{'))
          ? JSON.parse(input)
          : input;

        if (Array.isArray(parsed)) {
          return parsed.map((img: any) => sanitizeImageUrl(typeof img === 'string' ? img : img.url));
        }
        return [sanitizeImageUrl(input)];
      } catch (e) {
        return [sanitizeImageUrl(input)];
      }
    };

    return {
      ...row,
      hero_image: sanitizeImageUrl(row.hero_image),
      journey_image: parseImages(row.journey_image),
      commitment_image: sanitizeImageUrl(row.commitment_image),
      process_items: typeof row.process_items === 'string' ? JSON.parse(row.process_items).map((item: any) => ({
        ...item,
        image: sanitizeImageUrl(item.image)
      })) : row.process_items,
    };
  } catch (error) {
    console.error("Error fetching about page data:", error);
    return null;
  }
}

export interface BlogPost extends RowDataPacket {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date_str: string;
  author: string;
  tags: any;
  image: string;
  created_at: Date;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const [rows] = await pool.query<BlogPost[]>(
      "SELECT * FROM blog_posts ORDER BY created_at DESC",
    );
    return rows.map((post) => ({
      ...post,
      image: sanitizeImageUrl(post.image),
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const [rows] = await pool.query<BlogPost[]>(
      "SELECT * FROM blog_posts WHERE slug = ?",
      [slug],
    );
    if (rows.length === 0) return null;
    return {
      ...rows[0],
      image: sanitizeImageUrl(rows[0].image),
    };
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}

export async function getBlogPostsPaginated(
  page: number,
  limit: number,
): Promise<BlogPost[]> {
  try {
    const offset = (page - 1) * limit;
    const [rows] = await pool.query<BlogPost[]>(
      "SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT ? OFFSET ?",
      [limit, offset],
    );
    return rows.map((post) => ({
      ...post,
      image: sanitizeImageUrl(post.image),
    }));
  } catch (error) {
    console.error("Error fetching paginated blog posts:", error);
    return [];
  }
}

export async function getBlogPostsCount(): Promise<number> {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT COUNT(*) as count FROM blog_posts",
    );
    return rows[0].count;
  } catch (error) {
    console.error("Error fetching blog posts count:", error);
    return 0;
  }
}
export interface ProductsPageData extends RowDataPacket {
  id: number;
  hero_badge: string;
  hero_title: string;
  hero_description: string;
  hero_image: string;
  cta_title: string;
  cta_description: string;
  cta_button_text: string;
}

export const getProductsPageData = cache(
  async (): Promise<ProductsPageData | null> => {
    try {
      const [rows] = await pool.query<ProductsPageData[]>(
        "SELECT * FROM products_page LIMIT 1",
      );
      if (rows.length === 0) return null;
      return {
        ...rows[0],
        hero_image: sanitizeImageUrl(rows[0].hero_image),
      };
    } catch (error) {
      console.error("Error fetching products page data:", error);
      return null;
    }
  },
);
export interface ProductDetailRow extends RowDataPacket {
  id: number;
  product_id: number;
  title: string | null;
  description: string | null;
  image: string;
  display_order: number;
}

export const getProductRowDetails = cache(
  async (productId: number): Promise<ProductDetailRow[]> => {
    try {
      const [rows] = await pool.query<ProductDetailRow[]>(
        "SELECT * FROM product_details WHERE product_id = ? ORDER BY display_order ASC",
        [productId],
      );
      return rows.map((row) => ({
        ...row,
        image: sanitizeImageUrl(row.image, row.updated_at),
      }));
    } catch (error) {
      console.error("Error fetching product row details:", error);
      return [];
    }
  },
);

export interface GalleryMetadata {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  background_image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  display_order: number;
}

export async function getGalleryMetadata(): Promise<GalleryMetadata | null> {
  try {
    const [rows] = await pool.query<(GalleryMetadata & RowDataPacket)[]>(
      "SELECT * FROM gallery_metadata LIMIT 1",
    );
    if (rows.length === 0) return null;
    return {
      ...rows[0],
      background_image: sanitizeImageUrl(rows[0].background_image),
    };
  } catch (error) {
    console.error("Error fetching gallery metadata:", error);
    return null;
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const [rows] = await pool.query<(GalleryImage & RowDataPacket)[]>(
      "SELECT * FROM gallery_images ORDER BY display_order ASC",
    );
    return rows.map((img) => ({
      ...img,
      src: sanitizeImageUrl(img.src),
    }));
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}
