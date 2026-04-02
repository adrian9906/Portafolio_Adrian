import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../../hooks/useLanguage";

export default function Navbar({ textColor = "white" }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndicatorLeft, setActiveIndicatorLeft] = useState(0);
    const [activeIndicatorWidth, setActiveIndicatorWidth] = useState(0);
    const [pathname, setPathname] = useState("/");
    const [theme, setTheme] = useState(null);
    const itemRefs = useRef([]);
    const containerRef = useRef(null);

    const menuItems = [
        { label: t("navbar.cv"), href: "/#cv" },
        { label: t("navbar.projects"), href: "/#proyectos" },
        { label: t("navbar.about"), href: "/#about" },
        { label: t("navbar.skills"), href: "/#skill" },
    ];

    const getCurrentTheme = useCallback(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved) {
                return saved;
            }
            return "dark";
        }
        return null;
    }, []);

    useEffect(() => {
        setPathname(window.location.pathname);

        const currentTheme = getCurrentTheme();
        setTheme(currentTheme);

        const handleStorageChange = (e) => {
            if (e.key === "theme") {
                setTheme(e.newValue);
            }
        };

        const handleThemeChange = (e) => {
            const newTheme = e.detail?.theme || getCurrentTheme();
            setTheme(newTheme);
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("themeChange", handleThemeChange);

        const observer = new MutationObserver(() => {
            const currentTheme = getCurrentTheme();
            setTheme(currentTheme);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "data-theme"]
        });

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("themeChange", handleThemeChange);
            observer.disconnect();
        };
    }, [getCurrentTheme]);

    const isLightTheme = theme === "light";

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
        if (isLightTheme) {
            return isActive
                ? "text-blue-600 font-semibold"
                : isHovered
                    ? "text-blue-600"
                    : "text-gray-600";
        }

        return isActive
            ? "text-main font-semibold"
            : isHovered
                ? "text-[#C8FF00]"
                : "text-muted";
    };

    const lineColor = isLightTheme ? "#2563eb" : "#C8FF00";
    const lineClass = isLightTheme ? "bg-blue-600" : "bg-[#C8FF00]";

    return (
        <>
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

                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 ${lineClass} transition-all duration-300 ease-out ${isHovered && !isActive ? "w-3/4 opacity-60" : "w-0 opacity-0"
                                        }`}
                                />
                            </a>
                        </div>
                    );
                })}

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

            <button
                className="lg:hidden ml-auto p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <Menu className={`w-6 h-6 ${isLightTheme ? "text-blue-600" : "text-[#C8FF00]"}`} />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex flex-col">
                    <div className={`w-full p-6 shadow-xl ${isLightTheme ? "bg-white" : "bg-[#111111]"}`}>
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className={`w-6 h-6 ${isLightTheme ? "text-gray-800" : "text-white"}`} />
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
                                        className={`relative text-lg py-3 px-4 rounded-lg transition-colors ${isLightTheme
                                            ? isActive
                                                ? "text-blue-600 font-semibold bg-blue-50"
                                                : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                                            : isActive
                                                ? "text-[#C8FF00] font-semibold bg-[#C8FF00]/10"
                                                : "text-white/80 hover:text-[#C8FF00] hover:bg-white/10"
                                            }`}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isLightTheme ? "bg-blue-600" : "bg-[#C8FF00]"
                                                }`} />
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
