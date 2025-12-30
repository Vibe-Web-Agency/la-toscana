export type AssetType = "image" | "video";

export interface Asset {
    id: string;
    src: string;
    type: AssetType;
    alt?: string;
    category?: "plat" | "restaurant" | "ambiance" | "equipe";
}

export const galleryAssets: Asset[] = [
    // Mélange de toutes les catégories pour une galerie variée
    {
        id: "burrata",
        src: "/images/burrata.jpg",
        type: "image",
        alt: "Burrata fraîche",
        category: "plat",
    },
    {
        id: "facade",
        src: "/images/facade.jpg",
        type: "image",
        alt: "Façade du restaurant La Toscana",
        category: "restaurant",
    },
    {
        id: "img_5948",
        src: "/images/IMG_5948.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "pizza_burrata",
        src: "/images/pizza_burrata.webp",
        type: "image",
        alt: "Pizza Burrata",
        category: "plat",
    },
    {
        id: "video_1",
        src: "/images/32bb1fdf6cc54c25aed304ed59a0b484.MOV",
        type: "video",
        alt: "Vidéo La Toscana",
        category: "ambiance",
    },
    {
        id: "salleprincipale",
        src: "/images/salleprincipale.jpg",
        type: "image",
        alt: "Salle principale du restaurant",
        category: "restaurant",
    },
    {
        id: "img_5949",
        src: "/images/IMG_5949.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "entree",
        src: "/images/entree.png",
        type: "image",
        alt: "Entrée du jour",
        category: "plat",
    },
    {
        id: "img_5950",
        src: "/images/IMG_5950.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "video_6016",
        src: "/images/IMG_6016.MOV",
        type: "video",
        alt: "Vidéo La Toscana",
        category: "ambiance",
    },
    {
        id: "plat",
        src: "/images/plat.png",
        type: "image",
        alt: "Plat principal",
        category: "plat",
    },
    {
        id: "img_5951",
        src: "/images/IMG_5951.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "ingredients",
        src: "/images/ingredients.png",
        type: "image",
        alt: "Ingrédients frais",
        category: "plat",
    },
    {
        id: "video_6017",
        src: "/images/IMG_6017.MOV",
        type: "video",
        alt: "Vidéo La Toscana",
        category: "ambiance",
    },
    {
        id: "img_5952",
        src: "/images/IMG_5952.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "dessert",
        src: "/images/dessert.png",
        type: "image",
        alt: "Dessert maison",
        category: "plat",
    },
    {
        id: "img_5953",
        src: "/images/IMG_5953.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "video_6018",
        src: "/images/IMG_6018.MOV",
        type: "video",
        alt: "Vidéo La Toscana",
        category: "ambiance",
    },
    {
        id: "img_5969",
        src: "/images/IMG_5969.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "video_6019",
        src: "/images/IMG_6019.MOV",
        type: "video",
        alt: "Vidéo La Toscana",
        category: "ambiance",
    },
    {
        id: "img_5970",
        src: "/images/IMG_5970.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "img_5971",
        src: "/images/IMG_5971.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
    {
        id: "video_7531",
        src: "/images/IMG_7531.MOV",
        type: "video",
        alt: "Vidéo La Toscana",
        category: "ambiance",
    },
    {
        id: "img_6022",
        src: "/images/IMG_6022.jpg",
        type: "image",
        alt: "Photo La Toscana",
        category: "ambiance",
    },
];

// Filtrer par type
export const getImageAssets = () =>
    galleryAssets.filter((asset) => asset.type === "image");
export const getVideoAssets = () =>
    galleryAssets.filter((asset) => asset.type === "video");

// Filtrer par catégorie
export const getAssetsByCategory = (category: Asset["category"]) =>
    galleryAssets.filter((asset) => asset.category === category);
