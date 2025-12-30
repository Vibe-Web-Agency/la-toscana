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
                                <a href="https://www.google.com/maps/place/La+Toscana/@48.8469275,2.3846835,17z/data=!3m1!5s0x47e6720db939ce67:0x919a789399cca53d!4m6!3m5!1s0x47e6720db8dbc763:0x3497ba2de7cf7463!8m2!3d48.8469444!4d2.3847222!16s%2Fg%2F11btlz96v3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                    94 Boulevard Diderot<br />75012 Paris
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Informations légales */}
                    <div className="footer-legal">
                        <h4>Informations</h4>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/cgu">CGU</Link></li>
                            <li><Link href="/mentions-legales">Mentions Légales</Link></li>
                        </ul>
                    </div>

                    {/* Moyens de paiement */}
                    <div className="footer-payment">
                        <h4>Moyens de paiement</h4>
                        <div className="payment-methods">
                            <div className="payment-item" title="Espèces">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                                </svg>
                                <span>Espèces</span>
                            </div>
                            <div className="payment-item" title="Visa">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28">
                                    <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" />
                                    <path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z" />
                                    <path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z" />
                                </svg>
                                <span>Visa</span>
                            </div>
                            <div className="payment-item" title="Mastercard">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28">
                                    <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" />
                                    <circle cx="18" cy="24" r="8" fill="#E53935" />
                                    <circle cx="30" cy="24" r="8" fill="#FFC107" />
                                    <path fill="#FF9800" d="M24,17.6c-2,1.6-3.3,4.1-3.3,6.9s1.3,5.3,3.3,6.9c2-1.6,3.3-4.1,3.3-6.9S26,19.2,24,17.6z" />
                                </svg>
                                <span>Mastercard</span>
                            </div>
                            <div className="payment-item" title="Tickets Restaurant">
                                <Image src="/images/tr.png" alt="Tickets Restaurant" width={16} height={16} />
                                <span>Tickets Restaurant</span>
                            </div>
                            <div className="payment-item" title="ANCV">
                                <Image src="/images/ANCV.png" alt="ANCV" width={16} height={16} />
                                <span>ANCV</span>
                            </div>
                        </div>
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
