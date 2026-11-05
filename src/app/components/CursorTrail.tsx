"use client";
import { useEffect, useState } from 'react'; // <-- L'import manquant est ici
import { motion } from 'framer-motion';

export const CursorTrail = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed -inset-px rounded-full"
            style={{
                background: `radial-gradient(250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-glow), 0.15), transparent 80%)`
            }}
        />
    );
};