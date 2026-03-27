import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const menuItems = [
    { label: "CV", href: "/#cv" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Sobre mi", href: "/#about" },
    { label: "Habilidades", href: "/#skill" },
];

export default function Navbar({ textColor = "white" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
    const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
    const [pathname, setPathname] = useState("/");
    const itemRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    const activeIndex = menuItems.findIndex(
        (item) =>
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href))
    );

    const setItemRef = useCallback(
        (index) => (el) => {
            itemRefs.current[index] = el;
        },
        []
    );

    const updateActiveIndicator = useCallback(() => {
        if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
            const el = itemRefs.current[activeIndex];
            setActiveIndicatorLeft(el.offsetLeft);
            setActiveIndicatorWidth(el.offsetWidth);
        } else {
            setActiveIndicatorWidth(0);
        }
    }, [activeIndex]);

    useEffect(() => {
        updateActiveIndicator();

        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(updateActiveIndicator);
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
            itemRefs.current.forEach((ref) => ref && resizeObserver.observe(ref));
        }

        const handleResize = () => requestAnimationFrame(updateActiveIndicator);
        window.addEventListener("resize", handleResize);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, [updateActiveIndicator, activeIndex]);

    const getTextClass = (isActive, isHovered) => {
        if (textColor === "white") {
            return isActive
                ? "text-white font-semibold"
                : isHovered
                    ? "text-[#C8FF00]"
                    : "text-white/70";
        }
        return isActive
            ? "text-gray-900 font-semibold"
            : isHovered
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-900";
    };

    const lineColor = textColor === "black" ? "#ffffff" : "#2563eb";
    const lineClass = textColor === "black" ? "bg-black" : "bg-[#C8FF00]";

    return (
        <>
            {/* Desktop nav */}
            <div
                ref={containerRef}
                className="hidden lg:flex items-center justify-center flex-1 gap-8 relative"
            >
                {menuItems.map((item, index) => {
                    const isActive = activeIndex === index;
                    const isHovered = hoveredIndex === index;

                    return (
                        <div key={item.href} ref={setItemRef(index)} className="relative">
                            <a
                                href={item.href}
                                className={`relative inline-flex items-center justify-center px-2 py-3 text-sm font-medium transition-colors duration-300 ${getTextClass(isActive, isHovered)}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <span className="relative z-10">{item.label}</span>

                                {/* Hover underline */}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 ${lineClass} transition-all duration-300 ease-out ${isHovered && !isActive ? "w-3/4 opacity-60" : "w-0 opacity-0"
                                        }`}
                                />
                            </a>
                        </div>
                    );
                })}

                {/* Active indicator line */}
                {activeIndex >= 0 && (
                    <div
                        className="absolute bottom-0 h-0.5 transition-all duration-500 ease-out"
                        style={{
                            width: activeIndicatorWidth,
                            left: activeIndicatorLeft,
                            backgroundColor: lineColor,
                        }}
                    />
                )}
            </div>

            {/* Mobile hamburger */}
            <button
                className="lg:hidden ml-auto p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6 text-black" />
            </button>

            {/* Mobile drawer */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex flex-col">
                    <div className="w-full bg-white p-6 shadow-xl">
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            {menuItems.map((item) => {
                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" && pathname.startsWith(item.href));

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`relative text-lg py-3 px-4 rounded-lg transition-colors ${isActive
                                            ? "text-blue-600 font-semibold bg-blue-50"
                                            : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                                            }`}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="flex-1"
                        role="button"
                        tabIndex={0}
                        aria-label="Close menu"
                        onClick={() => setIsOpen(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setIsOpen(false);
                        }}
                    />
                </div>
            )}
        </>
    );
}