// src/components/ThemeToggler.jsx
'use client'
import { useState, useEffect, useRef } from "react";

export default function ThemeToggler({ duration = 400 }) {
    const [isDark, setIsDark] = useState(false);
    const buttonRef = useRef(null);

    // Leer el tema inicial desde el <html>
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = async (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const nextTheme = !isDark;

        // Fallback para Firefox (no soporta startViewTransition aún)
        if (!document.startViewTransition) {
            document.documentElement.classList.toggle("dark", nextTheme);
            localStorage.setItem("theme", nextTheme ? "dark" : "light");
            setIsDark(nextTheme);
            return;
        }

        // Calcular el radio máximo del círculo desde la posición del click
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            document.documentElement.classList.toggle("dark", nextTheme);
            localStorage.setItem("theme", nextTheme ? "dark" : "light");
            setIsDark(nextTheme);
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            document.documentElement.animate(
                { clipPath: nextTheme ? clipPath : [...clipPath].reverse() },
                {
                    duration,
                    easing: "ease-in",
                    pseudoElement: nextTheme
                        ? "::view-transition-new(root)"
                        : "::view-transition-old(root)",
                }
            );
        });
    };

    return (
        <button
            ref={buttonRef}
            onClick={toggle}
            aria-label="Toggle theme"
            className="relative flex items-center justify-center w-9 h-9 rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
            {/* Sol */}
            <svg
                className={`absolute transition-all duration-300 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            {/* Luna */}
            <svg
                className={`absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </button>
    );
}