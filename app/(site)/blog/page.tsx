import React from 'react'

export const metadata = {
    title: 'Blog | La Toscana',
    description: 'Découvrez les actualités, recettes et événements du restaurant La Toscana.',
}

export default function BlogPage() {
    return (
        <main className="legal-page">
            <div className="container">
                <h1>Blog</h1>

                <div className="blog-coming-soon">
                    <div className="coming-soon-content">
                        <span className="coming-soon-icon">📝</span>
                        <h2>Bientôt disponible</h2>
                        <p>
                            Notre blog arrive bientôt ! Vous y découvrirez nos recettes,
                            les coulisses du restaurant, nos événements et bien plus encore.
                        </p>
                        <p>
                            En attendant, suivez-nous sur nos réseaux sociaux pour ne rien manquer
                            de l&apos;actualité de La Toscana.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
