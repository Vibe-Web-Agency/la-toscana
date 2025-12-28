import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><Image src={logo} alt="Logo" width={70} height={70} /></Link>
            </div>
            <ul>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/galerie">Galerie</Link></li>
                <li><Link href="/privatisation">Privatisation</Link></li>
                <li><Link href="/notre-histoire">Notre histoire</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            <button className="btn btn-primary"> <Link href="/reserver">Réserver</Link></button>
        </nav>
    )
}
