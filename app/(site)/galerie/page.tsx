"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryAssets, Asset } from "@/data/assetsData";

type FilterCategory = "all" | "plat" | "restaurant" | "ambiance" | "equipe";

export default function Galerie() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: "Tout", value: "all" },
    { label: "Nos Plats", value: "plat" },
    { label: "Le Restaurant", value: "restaurant" },
    { label: "Ambiance", value: "ambiance" },
    { label: "Notre Équipe", value: "equipe" },
  ];

  const filteredAssets =
    activeFilter === "all"
      ? galleryAssets
      : galleryAssets.filter((asset) => asset.category === activeFilter);

  const closeLightbox = () => setSelectedAsset(null);

  return (
    <>
      {/* Hero Section */}
      <section className="galerie-hero">
        <div className="galerie-hero-overlay"></div>
        <div className="galerie-hero-content">
          <span className="section-badge hero-animate">Notre Galerie</span>
          <h1 className="hero-animate">Découvrez La Toscana</h1>
          <p className="galerie-hero-subtitle hero-animate">
            Plongez dans l&apos;univers chaleureux de notre restaurant à travers
            nos photos et vidéos
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="galerie-section">
        <div className="container">
          {/* Filters */}
          <div className="galerie-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`galerie-filter-btn ${activeFilter === filter.value ? "active" : ""
                  }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {filteredAssets.map((asset, index) => (
              <div
                key={asset.id}
                className={`bento-item bento-item-${(index % 6) + 1}`}
                onClick={() => setSelectedAsset(asset)}
              >
                {asset.type === "image" ? (
                  <Image
                    src={asset.src}
                    alt={asset.alt || "Photo La Toscana"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="bento-image"
                  />
                ) : (
                  <div className="bento-video-container">
                    <video
                      src={asset.src}
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="bento-play-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="bento-overlay">
                  <span className="bento-category">
                    {asset.category === "plat" && "🍝 Nos Plats"}
                    {asset.category === "restaurant" && "🏠 Restaurant"}
                    {asset.category === "ambiance" && "✨ Ambiance"}
                    {asset.category === "equipe" && "👨‍🍳 Équipe"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedAsset && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedAsset.type === "image" ? (
              <Image
                src={selectedAsset.src}
                alt={selectedAsset.alt || "Photo La Toscana"}
                width={1200}
                height={800}
                className="lightbox-image"
              />
            ) : (
              <video
                src={selectedAsset.src}
                controls
                autoPlay
                className="lightbox-video"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
