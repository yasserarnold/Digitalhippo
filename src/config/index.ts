export const PRODUCT_CATEGORIES = [
  {
    label: "Faith Dictionary",
    value: "faith_dict" as const,
    featured: [
      {
        name: "Brand picks",
        href: `/products?category=faith_dict`,
        imageSrc: "/nav/faith_dict/mixed.jpg",
      },
      {
        name: "New Additions",
        href: "/products?category=faith_dict&sort=desc",
        imageSrc: "/nav/faith_dict/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=faith_dict",
        imageSrc: "/nav/faith_dict/purple.jpg",
      },
    ],
  },
  {
    label: "Christ Identity",
    value: "christ_id" as const,
    featured: [
      {
        name: "Favorite Brand Picks",
        href: `/products?category=christ_id`,
        imageSrc: "/nav/christ_id/picks.jpg",
      },
      {
        name: "New Addition",
        href: "/products?category=christ_id&sort=desc",
        imageSrc: "/nav/christ_id/new.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=christ_id",
        imageSrc: "/nav/christ_id/bestsellers.jpg",
      },
    ],
  },
];
