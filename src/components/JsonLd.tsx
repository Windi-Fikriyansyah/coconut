import React from 'react';

const JsonLd = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Global Coco Prime",
        "url": "https://globalcocoprime.com",
        "logo": "https://globalcocoprime.com/logo.png",
        "description": "Premium Coconut Derivatives Exporter for the Global Market",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jakarta",
            "addressCountry": "ID"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-812-3456-7890",
            "contactType": "Sales"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Coconut Charcoal Briquettes",
                "description": "Grade A premium coconut charcoal long-burning."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Virgin Coconut Oil",
                "description": "Organic cold-pressed virgin coconut oil."
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
