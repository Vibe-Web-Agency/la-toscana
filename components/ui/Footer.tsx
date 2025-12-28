import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Logo & Description */}
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <Image src="/images/logo.png" alt="La Toscana" width={120} height={60} />
                        </Link>
                        <p>
                            Restaurant franco-italien au cœur de Paris.
                            Une cuisine authentique dans une ambiance chaleureuse.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="footer-nav">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link href="/">Accueil</Link></li>
                            <li><Link href="/menu">Menu</Link></li>
                            <li><Link href="/privatisation">Privatisation</Link></li>
                            <li><Link href="/galerie">Galerie</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Horaires */}
                    <div className="footer-hours">
                        <h4>Horaires</h4>
                        <ul>
                            <li>Lundi - Dimanche</li>
                            <li>11h30 - 15h30</li>
                            <li>18h30 - 23h30</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="tel:0143468807">01 43 46 88 07</a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/place/La+Toscana/@48.8469275,2.3846835,17z" target="_blank" rel="noopener noreferrer">
                                    94 Boulevard Diderot<br />75012 Paris
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} La Toscana. Tous droits réservés.</p>
                    <p>
                        Conçu et développé par{' '}
                        <a href="https://www.vibewebagency.fr" target="_blank" rel="noopener noreferrer" className="vibe-link">
                            Vibe Web Agency
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
