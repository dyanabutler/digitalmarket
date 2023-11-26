// Definition of PRODUCT_CATEGORIES constant
export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits', // Category label
        value: 'ui_kits' as const, // Unique value identifier for the category
        featured: [
            // Array of featured items in the UI Kits category
            {
                name: 'Editor Picks', // Name of the featured item
                href: '#', // Link for the item (placeholder in this case)
                imageSrc: '/nav/ui_kits/mixed.jpeg', // Image source for the item
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/ui_kits/blue.jpeg',
            },
            {
                name: 'Bestsellers',
                href: '#',
                imageSrc: '/nav/ui_kits/purple.jpeg',
            },
        ],
    },
    {
        label: 'Icons', // Another category label
        value: 'icons' as const,
        featured: [
            // Array of featured items in the Icons category
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc: '/nav/icons/picks.jpeg',
            },
            {
                name: "New Arrivals",
                href: '#',
                imageSrc: '/nav/icons/new.jpeg',
            },
            {
                name: "Bestselling Icons",
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpeg',
            },
        ],
    },
]
