'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Story() {
    return (
        <section className="story-section">
            <div className="container">
                <div className="story-grid">
                    <AnimatedSection animation="fadeInLeft">
                        <div className="story-image-container">
                            <Image
                                src="/images/hero.png"
                                alt="Restaurant La Toscana"
                                width={550}
                                height={450}
                                className="story-image"
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInRight">
                        <div className="story-content">
                            <span className="section-badge">Nos Origines</span>
                            <h2>Une histoire de passion</h2>
                            <p>
                                La Toscana est née d'une passion profonde pour la cuisine méditerranéenne.
                                Notre restaurant incarne le mariage parfait entre les saveurs italiennes
                                et le savoir-faire français.
                            </p>
                            <p>
                                Depuis notre ouverture, nous avons à cœur de proposer une cuisine
                                authentique, généreuse et conviviale. Chaque plat est préparé avec
                                amour, comme à la maison, avec des produits frais soigneusement
                                sélectionnés.
                            </p>
                            <p>
                                Notre équipe passionnée vous accueille dans une ambiance chaleureuse
                                de cantine, où se mêlent rires, partages et saveurs. Ici, vous êtes
                                comme en famille !
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
