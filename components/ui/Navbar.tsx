'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Fermer le menu quand on clique sur un lien
    const closeMenu = () => setIsMenuOpen(false)

    // Bloquer le scroll quand le menu est ouvert
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            <nav>
                <div className="logo">
                    <Link href="/"><Image src="/images/logo.png" alt="Logo La Toscana" width={70} height={70} /></Link>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-desktop">
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/galerie">Galerie</Link></li>
                    <li><Link href="/privatisation">Privatisation</Link></li>
                    <li><Link href="/notre-histoire">Notre histoire</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                <button className="btn btn-primary nav-desktop">
                    <Link href="/reserver">Réserver</Link>
                </button>

                {/* Burger Menu Button - se transforme en X */}
                <button
                    className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                >
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="/menu" onClick={closeMenu}>Menu</Link></li>
                    <li><Link href="/galerie" onClick={closeMenu}>Galerie</Link></li>
                    <li><Link href="/privatisation" onClick={closeMenu}>Privatisation</Link></li>
                    <li><Link href="/notre-histoire" onClick={closeMenu}>Notre histoire</Link></li>
                    <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
                <Link href="/reserver" className="btn btn-cta-primary" onClick={closeMenu}>
                    Réserver une table
                </Link>
            </div>
        </>
    )
}
