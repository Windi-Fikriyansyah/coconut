import React from 'react';

const JsonLd = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PT Sumber Niaga Alam Sejahtera",
        "url": "https://indonesiacoco.com",
        "logo": "https://indonesiacoco.com/logo.png",
        "description": "Global exporter of premium coconut derivatives from Indonesia: Charcoal Briquettes, VCO, Desiccated Coconut, and more.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Grand Slipi Tower",
            "addressLocality": "Jakarta",
            "addressRegion": "DKI Jakarta",
            "postalCode": "11480",
            "addressCountry": "ID"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-812-3456-7890",
            "contactType": "Sales",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Indonesian"]
        },
        "sameAs": [
            "https://facebook.com/indonesiacoco",
            "https://linkedin.com/company/indonesiacoco",
            "https://instagram.com/indonesiacoco"
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Coconut Charcoal Briquettes",
                "description": "Premium Grade A coconut charcoal briquettes for shisha and BBQ."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Virgin Coconut Oil (VCO)",
                "description": "Extra virgin cold-pressed coconut oil, organic certified."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Desiccated Coconut",
                "description": "High-quality desiccated coconut for industrial food production."
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
        </>
    );
};

export default JsonLd;
