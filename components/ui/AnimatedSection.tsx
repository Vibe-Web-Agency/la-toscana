'use client'

import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight'
    delay?: number
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'fadeInUp',
    delay = 0
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const element = ref.current
        if (!element || hasAnimated.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`animated-section ${className} ${isVisible ? `animate-${animation}` : 'animate-hidden'}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}
