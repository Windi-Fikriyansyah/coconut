import { TreePalm, Droplets, Flame, Shield, CheckCircle2, Factory, Ship, Globe, Leaf, Box } from 'lucide-react';

export const productsData = [
    {
        slug: "semi-husked-coconut",
        title: "Semi Husked Coconut",
        shortDescription: "The Finest Source for Global Industrial & Retail Needs",
        longDescription: "Our semi husked coconuts are harvested from the best plantations in Indonesia, known for their thick meat and high water content. Each nut is meticulously hand-picked and processed to ensure the perfect balance between shelf-life and usability.",
        image: "https://images.unsplash.com/photo-1543207064-751bd7394220?q=80&w=800&auto=format&fit=crop",
        btsImage: "/semi_husked_sorting_1770259203229.png", // Path will need to be absolute in public
        specifications: [
            { label: "Weight", value: "500g – 1.2kg per nut (Customizable)" },
            { label: "Maturity", value: "9-11 months (Fully mature)" },
            { label: "Husk Type", value: "Semi-husked (well-cleaned, fiber remains on the eyes for protection)" },
            { label: "Color", value: "Natural Brown" }
        ],
        whyPoints: [
            "High Durability: Optimized for long-distance shipping (up to 45 days).",
            "Freshness Guaranteed: Harvested and packed within the same week of shipment.",
            "Year-Round Supply: Consistent monthly capacity to fulfill large-scale orders."
        ],
        tags: ["Fresh", "High Maturity", "Export Grade"]
    },
    {
        slug: "virgin-coconut-oil",
        title: "Virgin Coconut Oil (VCO)",
        shortDescription: "Pure, Cold-Pressed, and Unrefined for Maximum Nutrients",
        longDescription: "Experience the purest essence of coconut. Our Virgin Coconut Oil is extracted from fresh coconut milk using a cold-pressed and centrifugal method without the use of high heat or chemicals. This ensures that the lauric acid and natural antioxidants remain intact.",
        image: "https://images.unsplash.com/photo-1621441394707-160682245c11?q=80&w=800&auto=format&fit=crop",
        btsImage: "/vco_lab_test_1770259220705.png",
        specifications: [
            { label: "Method", value: "100% Cold-Pressed (No Heat)" },
            { label: "Appearance", value: "Crystal clear at room temperature; pure white when solidified" },
            { label: "Aroma", value: "Subtle, fresh coconut scent (No rancid odor)" },
            { label: "Lauric Acid", value: "Content exceeds 50%" }
        ],
        applications: [
            "Nutraceuticals: Superfood supplement for immune support.",
            "Cosmetics: Premium base oil for skin and hair care.",
            "Food Industry: Healthy alternative for gourmet cooking and baking."
        ],
        whyPoints: [
            "100% Organic & Pure",
            "No Chemical Processing",
            "High Lauric Acid Content"
        ],
        tags: ["Organic", "Cold-Pressed", "Lab Tested"]
    },
    {
        slug: "bbq-charcoal-briquettes",
        title: "BBQ Coconut Charcoal Briquettes",
        shortDescription: "Superior Heat Performance for the Ultimate Grilling Experience",
        longDescription: "Upgrade your BBQ experience with our 100% natural coconut shell briquettes. Designed for high-performance grilling, our briquettes provide a longer-lasting, consistent heat that enhances the flavor of your food without harmful chemicals or excessive smoke.",
        image: "https://images.unsplash.com/photo-1610473068533-3d36cd6609da?q=80&w=800&auto=format&fit=crop",
        btsImage: "/charcoal_briquette_test_1770259238325.png",
        specifications: [
            { label: "Fixed Carbon", value: "75% - 80%" },
            { label: "Burning Time", value: "3 – 5 hours (depending on airflow)" },
            { label: "Ash Content", value: "2% - 3% (Low ash, easy cleanup)" },
            { label: "Heat Value", value: "Up to 7,500 Kcal/kg" }
        ],
        whyPoints: [
            "Chemical-Free: No artificial binders, safe for food contact.",
            "Smokeless & Odorless: Does not alter the natural taste of the meat.",
            "High Density: Hard-pressed to ensure it doesn't spark or break easily."
        ],
        tags: ["Eco-Friendly", "Long Burning", "High Heat"]
    }
];

export const trustPoints = [
    {
        title: "Sustainable Sourcing, Global Reliability",
        items: [
            {
                title: "Direct Factory Access",
                text: "We control the entire supply chain from the farm to the container.",
                icon: Factory
            },
            {
                title: "International Standards",
                text: "Our products undergo rigorous Quality Control (QC) to meet global export requirements.",
                icon: Shield
            },
            {
                title: "Flexible Packaging",
                text: "We offer Private Label (OEM) services and various packaging sizes (Bulk, Retail, or Custom).",
                icon: Box
            },
            {
                title: "Efficient Logistics",
                text: "Strategically located near major Indonesian ports to ensure timely delivery worldwide.",
                icon: Ship
            }
        ]
    }
];
