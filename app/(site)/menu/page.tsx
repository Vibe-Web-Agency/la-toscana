"use client";

import React, { useState, useMemo, useRef } from "react";
import { menu, MenuItem } from "@/data/menu";

// Grouper les catégories par type
const categoryGroups = {
  "Nos Entrées": ["Entrées froides", "Entrées", "Bruschettas", "Salades gourmandes", "Soupes"],
  "Nos Plats": ["Pizzas", "Pâtes", "Lasagnes", "Aubergines", "Viandes", "Poissons", "Omelettes"],
  "Charcuteries & Fromages": ["Charcuteries", "Fromages"],
  "Formules & Menus": ["Menus"],
  "Boissons": ["Apéritifs", "Cocktails", "Sans alcool", "Bières", "Boissons fraîches", "Eaux", "Boissons chaudes"],
  "Carte des Vins": ["Vins français", "Vins italiens", "Champagne", "Digestifs"],
  "Desserts": ["Desserts - Glaces", "Desserts glacés", "Desserts - Pâtisseries"],
};

const allCategories = Object.values(categoryGroups).flat();

export default function MenuPage() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const handleFilterClick = (group: string | null) => {
    setActiveGroup(group);
    // Scroll vers le haut des catégories avec offset pour navbar + menu-nav
    setTimeout(() => {
      if (categoriesRef.current) {
        const offset = 160; // navbar (84px) + menu-nav (~76px)
        const top = categoriesRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  // Grouper les items par catégorie
  const menuByCategory = useMemo(() => {
    const grouped: Record<string, MenuItem[]> = {};
    menu.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, []);

  // Filtrer les catégories selon le groupe actif
  const visibleCategories = useMemo(() => {
    if (!activeGroup) return allCategories;
    return categoryGroups[activeGroup as keyof typeof categoryGroups] || [];
  }, [activeGroup]);

  const getBadgeLabel = (badge: string) => {
    switch (badge) {
      case "signature":
        return "Signature";
      case "coup_de_coeur":
        return "❤️ Coup de cœur";
      default:
        return badge;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
          <span className="section-badge hero-animate">La Carte</span>
          <h1 className="hero-animate">Notre Menu</h1>
          <p className="menu-hero-subtitle hero-animate">
            Découvrez notre sélection de spécialités franco-italiennes,
            préparées avec passion et des produits frais
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-page-section">
        <div className="container">
          {/* Navigation par groupes */}
          <div className="menu-nav">
            <button
              className={`menu-nav-btn ${activeGroup === null ? "active" : ""}`}
              onClick={() => handleFilterClick(null)}
            >
              Tout voir
            </button>
            {Object.keys(categoryGroups).map((group) => (
              <button
                key={group}
                className={`menu-nav-btn ${activeGroup === group ? "active" : ""}`}
                onClick={() => handleFilterClick(group)}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Catégories et items */}
          <div className="menu-categories" ref={categoriesRef}>
            {visibleCategories.map((category) => {
              const items = menuByCategory[category];
              if (!items || items.length === 0) return null;

              return (
                <div key={category} className="menu-category-block">
                  <h2 className="menu-category-title">{category}</h2>
                  <div className="menu-items-grid">
                    {items.map((item, index) => (
                      <div
                        key={`${item.name}-${index}`}
                        className={`menu-item ${item.badges?.length ? "has-badge" : ""}`}
                      >
                        <div className="menu-item-header">
                          <h3 className="menu-item-name">{item.name}</h3>
                          <span className="menu-item-dots"></span>
                          <span className="menu-item-price">
                            {item.price.toFixed(2).replace(".", ",")} €
                          </span>
                        </div>
                        {item.badges && item.badges.length > 0 && (
                          <div className="menu-item-badges">
                            {item.badges.map((badge) => (
                              <span
                                key={badge}
                                className={`menu-badge menu-badge-${badge}`}
                              >
                                {getBadgeLabel(badge)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note légale */}
          <div className="menu-footer-note">
            <p>
              🍷 L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
            </p>
            <p>
              📍 Prix nets en euros, service compris.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
