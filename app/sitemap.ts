import { MetadataRoute } from "next";

const base = "https://latoscanaparis.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: base,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
        { url: `${base}/menu`,                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
        { url: `${base}/reserver`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/galerie`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/privatisation`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/notre-histoire`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/contact`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/blog`,                lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
        { url: `${base}/mentions-legales`,    lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
        { url: `${base}/cgu`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    ];
}
