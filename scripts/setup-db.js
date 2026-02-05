const mysql = require('mysql2/promise');
require('dotenv').config();

const globalContent = [
    { key: 'contact_whatsapp', value: '+6281234567890' },
];

const heroData = {
    badge_text: 'Premium Coconut Exporter',
    title: 'Prime Indonesian Coconut, <br /><span class="text-coco-gold italic">Global Trust.</span>',
    subtitle: 'We are more than just an exporter; we are your strategic partner in sourcing the finest Indonesian coconut derivatives for global industrial needs.',
    cta_text: 'Explore Our Products',
    cta_link: '#products',
    background_image: 'https://images.unsplash.com/photo-1596722511434-b811e5a32694?q=80&w=2000&auto=format&fit=crop'
};

const statsData = [
    { label: 'Countries Exported', value: '25+', suffix: '', display_order: 1 },
    { label: 'Tons Shipped / Year', value: '5000', suffix: '+', display_order: 2 },
    { label: 'Quality Certificates', value: '12', suffix: '', display_order: 3 },
    { label: 'Happy Partners', value: '150', suffix: '+', display_order: 4 },
];

const aboutData = {
    subtitle: 'The Heritage',
    title: 'Rooted in Nature, <br />Driven by Excellence',
    description: 'Global Coco Prime is a leading exporter of premium coconut derivatives from Indonesia. We specialize in providing high-quality Semi Husked Coconut, Virgin Coconut Oil, and Charcoal Briquettes to partners worldwide. Our commitment to quality, sustainability, and transparency has made us a trusted name in the global coconut industry.',
    image: 'https://images.unsplash.com/photo-1589139265243-78c773ee49fb?q=80&w=1200&auto=format&fit=crop',
    highlight_value: '15+ Years',
    highlight_text: 'Empowering more than 500 local farmers across the Indonesian archipelago.',
    features: JSON.stringify([
        "Modern industrial processing standards",
        "Direct partnership with 500+ local farmers",
        "Sustainable waste-to-energy practice",
        "Global logistics and reliable export chain"
    ]),
    button_text: 'Discover Our Process',
    button_link: '#process'
};

const trustItems = [
    { title: "Direct Factory Access", text: "We control the entire supply chain from the farm to the container.", icon: "Factory", display_order: 1 },
    { title: "International Standards", text: "Our products undergo rigorous Quality Control (QC) to meet global export requirements.", icon: "Shield", display_order: 2 },
    { title: "Flexible Packaging", text: "We offer Private Label (OEM) services and various packaging sizes (Bulk, Retail, or Custom).", icon: "Box", display_order: 3 },
    { title: "Efficient Logistics", text: "Strategically located near major Indonesian ports to ensure timely delivery worldwide.", icon: "Ship", display_order: 4 }
];

const whyChooseItems = [
    { icon: "Leaf", title: "100% Sustainable", description: "Every part of the coconut is utilized, ensuring zero-waste production and eco-friendly practices.", display_order: 1 },
    { icon: "Award", title: "Uncompromising Quality", description: "Multi-stage quality control ensures only premium products reach our international clients.", display_order: 2 },
    { icon: "Truck", title: "Global Logistics", description: "Seamless global distribution network with tracking and reliable delivery timelines.", display_order: 3 },
    { icon: "ShieldCheck", title: "Certified Excellence", description: "Our facilities and products are ISO, Organic, and Halal certified for global compliance.", display_order: 4 }
];

const contactData = {
    subtitle: 'Get In Touch',
    title: "Let's Discuss Your <br />Industrial Needs",
    description: "Ready to elevate your supply chain? Reach out to our team for export inquiries, samples, or customized specifications.",
    email: 'hello@globalcocoprime.com',
    phone: '+62 812 3456 7890',
    address: 'HQ Jakarta, Indonesia | Factory Central Java',
    whatsapp: '+6281234567890',
    map_image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop'
};

const products = [
    {
        slug: "semi-husked-mature-coconut",
        title: "Semi-Husked Mature Coconut (Kelapa Tua)",
        shortDescription: "Premium hand-picked mature coconuts for high-yield industrial extraction.",
        longDescription: "Our semi-husked mature coconuts are selected from the finest palms in Indonesia. Known for their thick, nutrient-dense meat and high oil content, they are the ideal choice for desiccated coconut production, coconut milk extraction, and retail markets requiring high-maturity nuts.",
        image: "https://images.unsplash.com/photo-1543207064-751bd7394220?q=80&w=800&auto=format&fit=crop",
        btsImage: "/semi_husked_sorting_1770259203229.png",
        specifications: JSON.stringify([
            { label: "Weight", value: "800g – 1200g per nut" },
            { label: "Maturity", value: "90% - 100% (High Density)" },
            { label: "Cleaning", value: "Well-cleaned, Fiber remains on eyes" },
            { label: "Shelf Life", value: "Up to 50 Days (Ambient)" }
        ]),
        whyPoints: JSON.stringify([
            "Low Moisture Husk: Reduced shipping weight for cost efficiency.",
            "High Oil Yield: Perfect for industrial processing plants.",
            "Fresh Harvest: Sourced directly from local farmer cooperatives."
        ]),
        tags: JSON.stringify(["Mature", "High Oil", "Indonesian Origin"])
    },
    {
        slug: "fresh-young-coconut",
        title: "Fresh Young Coconut (Kelapa Muda)",
        shortDescription: "Naturally sweet and hydrating diamond-cut young coconuts.",
        longDescription: "Harvested at the peak of flavor, our young coconuts offer premium clarity and a refreshingly sweet taste. Popular in the beverage industry and high-end retail, we offer diamond-cut or whole green options to ensure maximum aesthetic appeal and natural freshness.",
        image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Style", value: "Diamond Cut / Whole Green" },
            { label: "Water Volume", value: "350ml - 500ml per nut" },
            { label: "Brix Level", value: "5.5% - 7% Naturally Sweet" },
            { label: "Packing", value: "9-12 nuts per carton (Sea Freight)" }
        ]),
        whyPoints: JSON.stringify([
            "Electrolyte Rich: Original isotonic drink from nature.",
            "Premium Presentation: Custom diamond cutting for retail ready look.",
            "Rapid Delivery: Express cold-chain logistics available."
        ]),
        tags: JSON.stringify(["Hydrating", "Sweet", "Beverage Grade"])
    },
    {
        slug: "desiccated-coconut",
        title: "Desiccated Coconut (Export Grade)",
        shortDescription: "Finely shredded and dried coconut meat for bakery and confectionery.",
        longDescription: "Our desiccated coconut is produced from fresh mature nuts, processed under strict hygienic conditions. It is available in High Fat and Low Fat options with various textures (Fine and Medium). It serves as a vital ingredient for chocolates, biscuits, cakes, and other food industries.",
        image: "https://images.unsplash.com/photo-1533038595781-807fdc996636?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Fat Content", value: "High Fat (min 65%) / Low Fat (max 45%)" },
            { label: "Grades", value: "Fine Grade / Medium Grade" },
            { label: "Moisture", value: "Max 3.0%" },
            { label: "Certifications", value: "HACCP, ISO 22000" }
        ]),
        whyPoints: JSON.stringify([
            "Bacto-Controlled: Free from Salmonella and E.Coli.",
            "Natural Flavor: No sweeteners or chemical whitening agents.",
            "Versatile Texture: Consistent particle size for industrial use."
        ]),
        tags: JSON.stringify(["Bakery", "High Fat", "Food Grade"])
    },
    {
        slug: "coconut-flour",
        title: "Gluten-Free Coconut Flour",
        shortDescription: "Organic, high-fiber flour alternative for healthy living.",
        longDescription: "Our coconut flour is a healthy, gluten-free alternative to wheat flour. Made from defatted organic coconut meat, it is exceptionally high in dietary fiber and protein while maintaining a low glycemic index. Perfect for paleo, keto, and gluten-free baking.",
        image: "https://images.unsplash.com/photo-1599824622114-1678129fd570?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Fiber Content", value: "35% - 40% (High Fiber)" },
            { label: "Texture", value: "Extra Fine (100 Mesh)" },
            { label: "Color", value: "Creamy White" },
            { label: "Moisture", value: "Max 5%" }
        ]),
        whyPoints: JSON.stringify([
            "Low GI: Stable energy source without insulin spikes.",
            "100% Organic: No pesticides or synthetic fertilizers used.",
            "Highly Absorbent: Economical for industrial food manufacturing."
        ]),
        tags: JSON.stringify(["Gluten-Free", "High Fiber", "Organic Flour"])
    },
    {
        slug: "coconut-milk-cream",
        title: "UHT Coconut Milk & Cream",
        shortDescription: "Silky smooth, high-fat liquid extracted from fresh coconut.",
        longDescription: "Extracted from freshly grated coconut meat, our coconut milk and cream are processed using Ultra-High Temperature (UHT) technology. This preserves the natural aroma and creamy texture while ensuring a long shelf life without the need for artificial preservatives.",
        image: "https://images.unsplash.com/photo-1621213143716-cd962a9bc493?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Fat Content", value: "17% - 24% (Customizable)" },
            { label: "pH Level", value: "5.9 - 6.2" },
            { label: "Shelf Life", value: "12 - 18 months" },
            { label: "Processing", value: "UHT Sterilized & Aseptic Filling" }
        ]),
        whyPoints: JSON.stringify([
            "No Preservatives: 100% natural coconut essence.",
            "Rich & Creamy: Superior mouthfeel for gourmet cooking.",
            "Scalable Supply: Available from 200ml to 1000L packaging."
        ]),
        tags: JSON.stringify(["UHT", "Creamy", "Kitchen Ready"])
    },
    {
        slug: "organic-coconut-sugar",
        title: "Organic Coconut Palm Sugar",
        shortDescription: "Natural low-glycemic sweetener from palm nectar.",
        longDescription: "Collected from the blossoms of coconut palm trees, our sugar is a sustainable and healthy alternative to cane sugar. It is minimally processed, retaining its natural golden color and rich caramel flavor. Certified organic and low-glycemic for global health markets.",
        image: "https://images.unsplash.com/photo-1587825316104-d50d60303da5?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Form", value: "Granulated / Block / Liquid" },
            { label: "Purity", value: "99%+ Crystal Purity" },
            { label: "Moisture", value: "Max 2.0%" },
            { label: "Color", value: "Light to Dark Golden Brown" }
        ]),
        whyPoints: JSON.stringify([
            "Low GI Index: Approx 35, much lower than white sugar.",
            "Mineral Rich: Contains Potassium, Magnesium, and Iron.",
            "Eco-Friendly: Sustainable harvesting from live trees."
        ]),
        tags: JSON.stringify(["Vegan", "Low GI", "Organic Certified"])
    },
    {
        slug: "virgin-coconut-oil",
        title: "Virgin Coconut Oil (VCO)",
        shortDescription: "Cold-pressed, unrefined, and nutrient-dense premium oil.",
        longDescription: "Our VCO is produced via cold-pressing and centrifugal extraction, bypassing high heat to keep antioxidants and Lauric Acid intact. It is crystal clear, has a fresh coconut aroma, and is widely used in pharmaceutical, cosmetic, and health-supplement industries.",
        image: "https://images.unsplash.com/photo-1621441394707-160682245c11?q=80&w=800&auto=format&fit=crop",
        btsImage: "/vco_lab_test_1770259220705.png",
        specifications: JSON.stringify([
            { label: "Method", value: "100% Cold-Pressed (Centrifugal)" },
            { label: "Lauric Acid", value: "50% - 54% Content" },
            { label: "Moisture", value: "Max 0.1%" },
            { label: "Appearance", value: "Crystal Clear (Water White)" }
        ]),
        whyPoints: JSON.stringify([
            "Superfood Grade: High concentration of Medium Chain Triglycerides (MCT).",
            "Zero Trans-Fat: The healthiest fatty acid profile for daily use.",
            "Dual-Use: Perfect for both edible and cosmetic applications."
        ]),
        tags: JSON.stringify(["Cold-Pressed", "MCT Oil", "Health Grade"])
    },
    {
        slug: "rbd-coconut-oil",
        title: "RBD Coconut Oil (Refined)",
        shortDescription: "High-performance frying oil for large-scale food production.",
        longDescription: "Refined, Bleached, and Deodorized (RBD) coconut oil is the workhorse of the food industry. With a high smoke point and neutral flavor profile, it is perfect for deep-frying, snacks manufacturing, and margarine production where stability is paramount.",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Smoke Point", value: "232°C (450°F)" },
            { label: "Flavor/Odor", value: "Neutral / Odorless" },
            { label: "FFA Content", value: "Max 0.1%" },
            { label: "Color (Lovibond)", value: "Yellow 1.0 - 1.5" }
        ]),
        whyPoints: JSON.stringify([
            "High Stability: Resists oxidation during prolonged heating.",
            "Neutral Profile: Doesn't affect the taste of fried products.",
            "Cost-Effective: Industrial packaging (Jerrycans, IBC, Flexibag)."
        ]),
        tags: JSON.stringify(["Odorless", "Deep Fry", "Industrial Oil"])
    },
    {
        slug: "industrial-copra",
        title: "Dried Industrial Copra",
        shortDescription: "Kernel-dried coconut kernels for high-volume oil extraction.",
        longDescription: "Our copra is carefully dried using sun or kiln methods to achieve the highest possible oil yield. It serves as the primary raw material for commercial coconut oil crushing plants, ensuring low Free Fatty Acid (FFA) levels for superior refining results.",
        image: "https://images.unsplash.com/photo-1543207064-751bd7394220?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Oil Content", value: "Min 63%" },
            { label: "Moisture", value: "Max 5% - 6%" },
            { label: "FFA Level", value: "Max 1.0% (Export Quality)" },
            { label: "Smoky Nut", value: "Max 5% (Low Smoke Residue)" }
        ]),
        whyPoints: JSON.stringify([
            "Maximum Yield: Optimized drying process locks in oil content.",
            "Rigid Sourcing: No rotten or rubbery nuts allowed.",
            "Scale Ready: Monthly capacity up to 500+ Metric Tons."
        ]),
        tags: JSON.stringify(["Raw Material", "Oil Crushing", "High Yield"])
    },
    {
        slug: "charcoal-briquettes",
        title: "Coconut Shell Charcoal Briquettes",
        shortDescription: "Premium long-burning briquettes for Shisha and BBQ.",
        longDescription: "Engineered for high-end smoking and grilling, our coconut shell briquettes produce intense heat with minimal ash. They are smokeless, odorless, and eco-friendly, made from 100% natural coconut shells with food-grade binder. Preferred by shisha lounges globally.",
        image: "https://images.unsplash.com/photo-1610473068533-3d36cd6609da?q=80&w=800&auto=format&fit=crop",
        btsImage: "/charcoal_briquette_test_1770259238325.png",
        specifications: JSON.stringify([
            { label: "Fixed Carbon", value: "Min 80%" },
            { label: "Ash Content", value: "2.0% - 2.5% (White Ash)" },
            { label: "Burning Time", value: "2.5 - 3 Hours" },
            { label: "Hardness", value: "No breaking when dropped from 1 meter" }
        ]),
        whyPoints: JSON.stringify([
            "Smokeless & Odorless: Enhances the flavor of tobacco or food.",
            "No Chemicals: Safe for domestic and indoor use.",
            "Custom Shape: Cube, Hexagonal, or Finger options available."
        ]),
        tags: JSON.stringify(["Shisha", "Long Burning", "Low Ash"])
    },
    {
        slug: "shell-charcoal",
        title: "Natural Coconut Shell Charcoal",
        shortDescription: "Carbonized raw coconut shells for industrial fuel and filtration.",
        longDescription: "Produced via traditional carbonization methods, our shell charcoal is the ideal base for the production of activated carbon. It is thoroughly cleaned and free from husk fibers, ensuring high density and consistent calorific value for industrial energy needs.",
        image: "https://images.unsplash.com/photo-1599824622114-1678129fd570?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Moisture", value: "Max 15%" },
            { label: "Impurities", value: "Max 1% (Cleaned Shells)" },
            { label: "Carbonization", value: "Uniformly Charred (No Brown Shells)" },
            { label: "Density", value: "High (Bulk density 0.5 – 0.6 g/cm³)" }
        ]),
        whyPoints: JSON.stringify([
            "Uniform Purity: Essential for high-quality activated carbon.",
            "Efficient Fuel: High calorific value for metallurgical processes.",
            "Sustainable: Made from recycled agricultural waste."
        ]),
        tags: JSON.stringify(["Industrial Fuel", "Carbon Base", "Recycled"])
    },
    {
        slug: "coco-peat",
        title: "Coco Peat (Hydroponic Media)",
        shortDescription: "Organic, high-retention growing medium for professional horticulture.",
        longDescription: "Our coco peat is a premium organic substrate made from crushed husks. It is a sustainable alternative to peat moss, offering superior water retention and aeration. Available in Low EC (washed) for direct planting and High EC for specialized agricultural needs.",
        image: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Selection", value: "Low EC (< 0.5 mS/cm) / High EC" },
            { label: "pH Level", value: "5.5 – 6.8 (Balanced)" },
            { label: "Expansion", value: "12 - 15 Liters per KG" },
            { label: "Form", value: "5kg Blocks / 650g Briquettes / Buffered" }
        ]),
        whyPoints: JSON.stringify([
            "High Water Retention: Reduces watering frequency by up to 30%.",
            "Eco-Substrate: Renewable resource for sustainable greenhouse farming.",
            "Fungus Resistant: Natural lignin inhibits harmful soil bacteria."
        ]),
        tags: JSON.stringify(["Hydroponics", "Eco-Friendly", "Agricultural Substrate"])
    },
    {
        slug: "coco-fiber",
        title: "Natural Coco Fiber (Industrial)",
        shortDescription: "Strong, resilient natural fiber for mattresses and upholstery.",
        longDescription: "Extracted from the thick husk of the coconut, our coco fiber is a versatile natural material known for its strength and resilience. It is widely used in the production of furniture padding, brushes, rope, and erosion control mats due to its high salt-water resistance.",
        image: "https://images.unsplash.com/photo-1596722511434-b811e5a32694?q=80&w=800&auto=format&fit=crop",
        specifications: JSON.stringify([
            { label: "Color", value: "Golden Brown" },
            { label: "Fiber Length", value: "10cm - 25cm" },
            { label: "Impurities", value: "Max 3% - 5%" },
            { label: "Moisture", value: "Max 15%" }
        ]),
        whyPoints: JSON.stringify([
            "Salt Water Resistant: Only natural fiber that resists seawater damage.",
            "Bio-Degradable: Perfect for geo-textiles and soil stabilization.",
            "Durable Strength: High tensile strength for industrial upholstery."
        ]),
        tags: JSON.stringify(["Industrial Fiber", "Mattress Grade", "Erosion Control"])
    }
];

const certificates = [
    { title: "FDA", full_title: "Food & Drug Administration", icon: "Shield", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/US_FDA_logo.svg/1200px-US_FDA_logo.svg.png" },
    { title: "CFIA", full_title: "Canadian Food Inspection Agency", icon: "Shield", logo: null },
    { title: "HACCP", full_title: "Hazard Analysis Critical Control Point", icon: "Shield", logo: null },
    { title: "SGS", full_title: "SGS Certification", icon: "Shield", logo: null },
    { title: "Halal Indonesia", full_title: "LPPOM MUI", icon: "Shield", logo: null },
    { title: "Badan POM", full_title: "Indonesian FDA", icon: "Shield", logo: null },
    { title: "Karantina Pertanian", full_title: "Agricultural Quarantine", icon: "Shield", logo: null },
    { title: "GMO Free", full_title: "Non-GMO Project", icon: "Shield", logo: null },
    { title: "Pesticide Free", full_title: "100% Pesticide Free", icon: "Shield", logo: null },
    { title: "Purity", full_title: "100% Pure Natural", icon: "Shield", logo: null },
    { title: "ISO 9001", full_title: "Quality Management System", icon: "Shield", logo: null },
    { title: "Rainforest Alliance", full_title: "Sustainable Agriculture", icon: "Shield", logo: null },
];

const steps = [
    { step_number: "01", title: "Harvesting", description: "Selecting the best coconuts directly from sustainable local plantations in Indonesia.", icon: "TreePalm" },
    { step_number: "02", title: "Selection & Grading", description: "Strict sorting based on size, maturity, and physical quality for export standards.", icon: "ClipboardCheck" },
    { step_number: "03", title: "Processing", description: "Modern processing methods to ensure hygiene and maintain product quality.", icon: "Factory" },
    { step_number: "04", title: "Quality Assurance", description: "Final inspections and laboratory testing to ensure compliance with international standards.", icon: "SearchCheck" },
    { step_number: "05", title: "Secure Packaging", description: "Export-standard packaging designed to maintain freshness during long journeys.", icon: "Box" },
    { step_number: "06", title: "Global Logistics", description: "Efficient shipping to various parts of the world through a trusted logistics network.", icon: "Ship" }
];

async function setup() {
    const dbUrl = new URL(process.env.DATABASE_URL);
    const dbName = dbUrl.pathname.substring(1);
    const connectionConfig = {
        host: dbUrl.hostname,
        user: dbUrl.username,
        password: dbUrl.password,
        port: dbUrl.port || 3306
    };

    let connection = await mysql.createConnection(connectionConfig);
    console.log(`Connected to MySQL server at ${dbUrl.hostname}.`);

    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
        await connection.query(`USE ${dbName}`);

        // Tables
        await connection.query(`CREATE TABLE IF NOT EXISTS global_content (id INT AUTO_INCREMENT PRIMARY KEY, content_key VARCHAR(100) UNIQUE NOT NULL, content_value TEXT)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS hero_section (id INT AUTO_INCREMENT PRIMARY KEY, badge_text VARCHAR(100), title TEXT, subtitle TEXT, cta_text VARCHAR(100), cta_link VARCHAR(255), background_image VARCHAR(255))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS stats_section (id INT AUTO_INCREMENT PRIMARY KEY, label VARCHAR(100), value VARCHAR(50), suffix VARCHAR(10), display_order INT)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS about_section (id INT AUTO_INCREMENT PRIMARY KEY, subtitle VARCHAR(100), title TEXT, description TEXT, image VARCHAR(255), highlight_value VARCHAR(50), highlight_text TEXT, features JSON, button_text VARCHAR(100), button_link VARCHAR(255))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS trust_section (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), text TEXT, icon VARCHAR(50), display_order INT)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS why_choose_us_section (id INT AUTO_INCREMENT PRIMARY KEY, icon VARCHAR(50), title VARCHAR(255), description TEXT, display_order INT)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS contact_section (id INT AUTO_INCREMENT PRIMARY KEY, subtitle VARCHAR(100), title TEXT, description TEXT, email VARCHAR(255), phone VARCHAR(50), address TEXT, whatsapp VARCHAR(50), map_image VARCHAR(255))`);
        await connection.query(`CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, slug VARCHAR(255) UNIQUE NOT NULL, title VARCHAR(255) NOT NULL, short_description TEXT, long_description TEXT, image VARCHAR(255), bts_image VARCHAR(255), specifications JSON, why_points JSON, applications JSON, tags JSON, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS certificates (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50) NOT NULL, full_title VARCHAR(255), description TEXT, icon VARCHAR(50), logo VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS process_steps (id INT AUTO_INCREMENT PRIMARY KEY, step_number VARCHAR(10), title VARCHAR(255), description TEXT, icon VARCHAR(50), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
        await connection.query(`CREATE TABLE IF NOT EXISTS blog_posts (id INT AUTO_INCREMENT PRIMARY KEY, slug VARCHAR(255) UNIQUE NOT NULL, title VARCHAR(255) NOT NULL, excerpt TEXT, content LONGTEXT, date_str VARCHAR(50), author VARCHAR(100), tags JSON, image VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);

        // Clear
        await connection.query('DELETE FROM global_content');
        await connection.query('DELETE FROM hero_section');
        await connection.query('DELETE FROM stats_section');
        await connection.query('DELETE FROM about_section');
        await connection.query('DELETE FROM trust_section');
        await connection.query('DELETE FROM why_choose_us_section');
        await connection.query('DELETE FROM contact_section');
        await connection.query('DELETE FROM products');
        await connection.query('DELETE FROM certificates');
        await connection.query('DELETE FROM process_steps');
        await connection.query('DELETE FROM blog_posts');

        // Seed
        for (const c of globalContent) await connection.query('INSERT INTO global_content (content_key, content_value) VALUES (?, ?)', [c.key, c.value]);
        await connection.query('INSERT INTO hero_section (badge_text, title, subtitle, cta_text, cta_link, background_image) VALUES (?, ?, ?, ?, ?, ?)', [heroData.badge_text, heroData.title, heroData.subtitle, heroData.cta_text, heroData.cta_link, heroData.background_image]);
        for (const s of statsData) await connection.query('INSERT INTO stats_section (label, value, suffix, display_order) VALUES (?, ?, ?, ?)', [s.label, s.value, s.suffix, s.display_order]);
        await connection.query('INSERT INTO about_section (subtitle, title, description, image, highlight_value, highlight_text, features, button_text, button_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [aboutData.subtitle, aboutData.title, aboutData.description, aboutData.image, aboutData.highlight_value, aboutData.highlight_text, aboutData.features, aboutData.button_text, aboutData.button_link]);
        for (const t of trustItems) await connection.query('INSERT INTO trust_section (title, text, icon, display_order) VALUES (?, ?, ?, ?)', [t.title, t.text, t.icon, t.display_order]);
        for (const w of whyChooseItems) await connection.query('INSERT INTO why_choose_us_section (icon, title, description, display_order) VALUES (?, ?, ?, ?)', [w.icon, w.title, w.description, w.display_order]);
        await connection.query('INSERT INTO contact_section (subtitle, title, description, email, phone, address, whatsapp, map_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [contactData.subtitle, contactData.title, contactData.description, contactData.email, contactData.phone, contactData.address, contactData.whatsapp, contactData.map_image]);
        for (const p of products) await connection.query('INSERT INTO products (slug, title, short_description, long_description, image, bts_image, specifications, why_points, tags, applications) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [p.slug, p.title, p.shortDescription, p.longDescription, p.image, p.btsImage, p.specifications, p.whyPoints, p.tags, p.applications || null]);
        for (const c of certificates) await connection.query('INSERT INTO certificates (title, full_title, description, icon, logo) VALUES (?, ?, ?, ?, ?)', [c.title, c.full_title, c.description, c.icon, c.logo || null]);
        for (const s of steps) await connection.query('INSERT INTO process_steps (step_number, title, description, icon) VALUES (?, ?, ?, ?)', [s.step_number, s.title, s.description, s.icon]);

        console.log('Setup complete.');
    } catch (err) {
        console.error(err);
    } finally {
        await connection.end();
    }
}
setup();
