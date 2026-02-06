import pool from './mysql';
import { RowDataPacket } from 'mysql2';

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
}

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

export async function getProducts(): Promise<Product[]> {
    const [rows] = await pool.query<Product[]>('SELECT * FROM products ORDER BY id ASC');
    return rows;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const [rows] = await pool.query<Product[]>('SELECT * FROM products WHERE slug = ?', [slug]);
    return rows.length > 0 ? rows[0] : null;
}

export async function getCertificates(): Promise<Certificate[]> {
    const [rows] = await pool.query<Certificate[]>('SELECT * FROM certificates ORDER BY id ASC');
    return rows;
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
    const [rows] = await pool.query<ProcessStep[] & RowDataPacket[]>('SELECT * FROM process_steps ORDER BY step_number ASC');
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

export async function getHeroData(): Promise<HeroData | null> {
    const [rows] = await pool.query<(HeroData & RowDataPacket)[]>('SELECT * FROM hero_section LIMIT 1');
    return rows.length > 0 ? rows[0] : null;
}

export interface StatItem {
    label: string;
    value: string;
    suffix: string;
}

export async function getStatsData(): Promise<StatItem[]> {
    const [rows] = await pool.query<(StatItem & RowDataPacket)[]>('SELECT label, value, suffix FROM stats_section ORDER BY display_order ASC');
    return rows;
}

export interface AboutData {
    subtitle: string;
    title: string;
    description: string;
    image: string;
    highlight_value: string;
    highlight_text: string;
    features: any;
    button_text: string;
    button_link: string;
}

export async function getAboutData(): Promise<AboutData | null> {
    const [rows] = await pool.query<(AboutData & RowDataPacket)[]>('SELECT * FROM about_section LIMIT 1');
    return rows.length > 0 ? rows[0] : null;
}

export interface TrustItem {
    title: string;
    text: string;
    icon: string;
}

export async function getTrustData(): Promise<TrustItem[]> {
    const [rows] = await pool.query<(TrustItem & RowDataPacket)[]>('SELECT title, text, icon FROM trust_section ORDER BY display_order ASC');
    return rows;
}

export interface ShippingGalleryItem {
    id: number;
    title: string;
    description: string;
    image: string;
    display_order: number;
}

export interface ShippingGalleryRow extends ShippingGalleryItem, RowDataPacket { }

export async function getShippingGallery(): Promise<ShippingGalleryItem[]> {
    try {
        const [rows] = await pool.query<ShippingGalleryRow[]>('SELECT * FROM shipping_gallery ORDER BY display_order ASC');
        return rows;
    } catch (error) {
        console.error("Error fetching shipping gallery:", error);
        return [];
    }
}

export interface WhyChooseUsItem {
    icon: string;
    title: string;
    description: string;
}

export async function getWhyChooseUsData(): Promise<WhyChooseUsItem[]> {
    const [rows] = await pool.query<(WhyChooseUsItem & RowDataPacket)[]>('SELECT icon, title, description FROM why_choose_us_section ORDER BY display_order ASC');
    return rows;
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
}

export async function getContactData(): Promise<ContactData | null> {
    try {
        const [rows] = await pool.query<ContactData[]>('SELECT * FROM contact_section LIMIT 1');
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Error fetching contact data:", error);
        return null;
    }
}

export interface GlobalContent extends RowDataPacket {
    content_key: string;
    content_value: string;
}

export async function getGlobalContent(): Promise<Record<string, string>> {
    const [rows] = await pool.query<GlobalContent[]>('SELECT content_key, content_value FROM global_content');
    const content: Record<string, string> = {};
    rows.forEach(row => {
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
    journey_image: string;
    vision_title: string;
    vision_description: string;
    mission_title: string;
    mission_points: any;
    values_data: any;
}

export async function getAboutPageData(): Promise<AboutPageData | null> {
    try {
        const [rows] = await pool.query<AboutPageData[]>('SELECT * FROM about_page LIMIT 1');
        return rows.length > 0 ? rows[0] : null;
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
        const [rows] = await pool.query<BlogPost[]>('SELECT * FROM blog_posts ORDER BY created_at DESC');
        return rows;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const [rows] = await pool.query<BlogPost[]>('SELECT * FROM blog_posts WHERE slug = ?', [slug]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Error fetching blog post by slug:", error);
        return null;
    }
}

export async function getBlogPostsPaginated(page: number, limit: number): Promise<BlogPost[]> {
    try {
        const offset = (page - 1) * limit;
        const [rows] = await pool.query<BlogPost[]>('SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT ? OFFSET ?', [limit, offset]);
        return rows;
    } catch (error) {
        console.error("Error fetching paginated blog posts:", error);
        return [];
    }
}

export async function getBlogPostsCount(): Promise<number> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>('SELECT COUNT(*) as count FROM blog_posts');
        return rows[0].count;
    } catch (error) {
        console.error("Error fetching blog posts count:", error);
        return 0;
    }
}
