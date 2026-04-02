import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PreviewLinkCard, PreviewLinkCardContent, PreviewLinkCardImage, PreviewLinkCardTrigger } from "../animate-ui/components/radix/preview-link-card";
import { motion } from 'motion/react'
import { Globe, Smartphone } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";



const PROJECTS_PYTHON = [
    {
        id: 1,
        title: "Face Recognition",
        desc: "Sistema de reconocimiento facial (1:N) con liveness detection y análisis demográfico: edad, etnia y estado emocional.",
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
        tags: ["Python"],
        githubUrl: "https://github.com/adrian9906/faceRecognition",
        demoUrl: null,
        className: "col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Recommender System",
        desc: "API con FastAPI para recomendar películas según preferencias y calificaciones de usuarios.",
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
        tags: ["Python", "FastAPI"],
        githubUrl: "https://github.com/adrian9906/RecomenderSystem",
        demoUrl: null,
        className: "col-span-1 row-span-1",
    },
    {
        id: 3,
        title: "SpaceShip PyGame",
        desc: "Juego de disparos espaciales con Pygame.",
        img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop",
        tags: ["Python", "PyGame"],
        githubUrl: "https://github.com/adrian9906/SpaceShipPyGame",
        demoUrl: null,
        className: "col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Sentiment Analysis",
        desc: "Análisis de sentimientos con TextBlob y NLTK.",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop",
        tags: ["Python", "TextBlob", "NLTK"],
        githubUrl: "https://github.com/adrian9906/SntimentAnalysisDetection",
        demoUrl: null,
        className: "col-span-1 row-span-1",
    },
    {
        id: 5,
        title: "Text Stream Processing",
        desc: "Clasificación, agrupación y zero-shot de texto en tiempo real con MongoDB y Scikit-learn.",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
        tags: ["Python", "MongoDB", "Scikit-learn"],
        githubUrl: "https://github.com/adrian9906/TextStreamProcessing",
        demoUrl: null,
        className: "col-span-1 row-span-1",
    },
];

const PROJECTS_WEB = [
    {
        id: 1,
        title: "All Novu Web",
        desc: "Electrodomésticos de calidad líder en latinoamérica.",
        img: "/fotosProyects/allnovu.png",
        android: '/fotosProyects/Samsung-Galaxy-S20-allnovu.com.png',
        iphone: '/fotosProyects/iPhone-14-Plus-allnovu.com.png',
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
        githubUrl: null,
        demoUrl: "https://allnovu.com",
        className: "col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Mercarapid",
        desc: "Plataforma e-commerce de electrodomésticos.",
        img: "/fotosProyects/mercarapid.png",
        tags: ["Astro", "React", "Tailwind"],
        android: '',
        iphone: '',
        githubUrl: null,
        demoUrl: "https://mercarapid.com",
        className: "col-span-1 row-span-1",
    },
    {
        id: 3,
        title: "BB Café",
        desc: "Las mejores bebidas de café y dulces gourmets a tu puerta.",
        img: "/fotosProyects/bb_cafe.png",
        tags: ["Next.js", "React", "Shadcn"],
        githubUrl: "https://github.com/adrian9906/BB_Cafe",
        android: '',
        iphone: '',
        demoUrl: "https://bb-cafe.vercel.app/",
        className: "col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Fake Spotify",
        desc: "Clon de Spotify con Astro, React y Svelte. Inspirado en MiduDev.",
        img: "/fotosProyects/fake_spotify.png",
        tags: ["Astro", "React", "Svelte", "Tailwind"],
        android: '',
        iphone: '',
        githubUrl: "https://github.com/adrian9906/Spotify-Clone-Astro",
        demoUrl: "https://fake-spotify-astro-71lu.vercel.app/",
        className: "col-span-2 row-span-1",
    },
];
function IFrameIPhone({ url }) {
    return (
        <div className="relative mx-auto w-[280px] h-[580px] rounded-[50px] border-[8px] border-zinc-700 bg-zinc-800 shadow-2xl overflow-hidden flex flex-col">
            <div className="h-10 bg-zinc-800 flex items-center justify-center shrink-0">
                <div className="w-24 h-6 bg-black rounded-full" />
            </div>
            <div className="flex-1 overflow-hidden relative">
                <iframe
                    src={url}
                    className="absolute top-0 left-0 border-0"
                    style={{
                        width: "390px",
                        height: "100%",
                        transform: "scale(0.69)",
                        transformOrigin: "top left",
                    }}
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
            <div className="h-6 bg-zinc-800 flex items-center justify-center shrink-0">
                <div className="w-16 h-1 bg-zinc-500 rounded-full" />
            </div>
        </div>
    );
}
function BentoCard({ title, desc, img, tags, githubUrl, demoUrl, className, android, iphone }) {
    const [openModal, setOpenModal] = useState(false)
    const [activeTab, setActiveTab] = useState("android");
    const { t } = useLanguage();

    const tabs = [
        { value: "android", label: "Android", icon: Smartphone },
        { value: "iphone", label: "iPhone", icon: Smartphone },
        { value: "browser", label: "Browser", icon: Globe },
    ];
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]",
                "transition-all duration-300 hover:border-[#2563eb]/40 dark:hover:border-[#C8FF00]/40 hover:shadow-[0_0_30px_rgba(200,255,0,0.08)]",
                className
            )}
        >
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop";
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
            </div>




            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-display font-black text-base md:text-xl text-white uppercase tracking-tight leading-tight">
                    {title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1 ">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full dark:bg-[#C8FF00]/10 border bg-[#2563eb]/10 border-[#2563eb]/20 dark:border-[#C8FF00]/20 px-2 py-0.5 text-xs md:text-lg font-mono text-[#2563eb] dark:text-[#C8FF00]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="mt-1 text-xs text-white dark:text-muted line-clamp-2 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-20">
                    {desc}
                </p>
                <div className="flex gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:mt-6 z-20">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center gap-2 rounded-full border border-main bg-card px-4 py-2 text-sm text-main transition-all duration-200 hover:opacity-80"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            {t("projects.github")}
                        </a>
                    )}
                    {demoUrl && demoUrl !== "#" && (
                        <>
                            <PreviewLinkCard href={demoUrl}
                                followCursor={'x'}>
                                <PreviewLinkCardTrigger
                                    target="_blank"
                                    className="underline relative flex items-center gap-2 rounded-full bg-[#2563eb] dark:bg-[#C8FF00] px-4 py-2 text-xs md:text-sm font-semibold text-white dark:text-black transition-all duration-200 hover:bg-[#2563eb] dark:hover:bg-[#D4FF33] hover:shadow-[0_0_20px_rgba(37, 99, 235)] dark:hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
                                >
                                    {t("projects.seeDemo")}
                                </PreviewLinkCardTrigger>
                                <PreviewLinkCardContent
                                    side={'top'}
                                    sideOffset={2}
                                    align={'center'}
                                    alignOffset={2}
                                    target="_blank"

                                >
                                    <PreviewLinkCardImage alt="Animate UI Docs" />
                                </PreviewLinkCardContent>
                            </PreviewLinkCard>
                        </>

                    )}
                </div>

            </div>
        </div>
    );
}

function BentoGrid({ projects }) {
    return (
        <div className="grid grid-cols-2 grid-rows-4 gap-4 h-[880px] max-w-7xl md:grid-cols-3 md:grid-rows-3">
            {projects.map((p) => (
                <BentoCard key={p.id} {...p} />
            ))}
        </div>
    );
}

const TABS = [
    { title: "web", value: "web", projects: PROJECTS_WEB },
    { title: "python", value: "python", projects: PROJECTS_PYTHON },
];

function Tabss({ active, onChange }) {
    const { t } = useLanguage();
    const [buttonPositions, setButtonPositions] = useState({ left: 0, width: 0 });
    const buttonsRef = useRef([]);
    useEffect(() => {
        const activeIndex = TABS.findIndex(tab => tab.value === active);
        const activeButton = buttonsRef.current[activeIndex];

        if (activeButton) {
            setButtonPositions({
                left: activeButton.offsetLeft,
                width: activeButton.offsetWidth
            });
        }
    }, [active]);

    return (
        <div className="relative flex items-center gap-1 rounded-full border border-main bg-sec p-1 w-fit">
            <motion.div
                className="absolute rounded-full bg-[#2563eb] text-white dark:text-black dark:bg-[#C8FF00]"
                animate={{
                    x: buttonPositions.left,
                    width: buttonPositions.width
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    duration: 0.3
                }}
                style={{
                    height: "calc(100% - 8px)",
                    top: "4px",
                    left: 0,
                }}
            />

            {TABS.map((tab, index) => (
                <motion.button
                    key={tab.value}
                    ref={el => buttonsRef.current[index] = el}
                    onClick={() => onChange(tab.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                        active === tab.value
                            ? "text-main"
                            : "text-muted hover:text-main"
                    )}
                >
                    <span className={`relative ${active === tab.value ? 'text-white dark:text-black' : 'text-black dark:text-white'} `}>{t(`projects.${tab.title}`)}</span>
                </motion.button>
            ))}
        </div>
    );
}

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("web");

    const currentProjects = TABS.find((t) => t.value === activeTab)?.projects ?? [];

    return (
        <section id="proyectos" className="py-24 px-6 print:hidden">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end mb-12 gap-6">
                    <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-main">
                        PROYECTOS<span className="text-[#2563eb] dark:text-[#C8FF00]">.</span>
                    </h2>
                    <p className="text-muted max-w-md text-lg">
                        Una selección de mis trabajos más recientes, combinando diseño innovador y tecnología de punta.
                    </p>
                </div>

                <div className="mb-8">
                    <Tabss active={activeTab} onChange={setActiveTab} />
                </div>

                <BentoGrid projects={currentProjects} />

            </div>
        </section>
    );
}
