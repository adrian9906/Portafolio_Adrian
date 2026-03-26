import { useState } from "react";
import { cn } from "@/lib/utils";

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
        demoUrl: "https://bb-cafe.vercel.app/",
        className: "col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Fake Spotify",
        desc: "Clon de Spotify con Astro, React y Svelte. Inspirado en MiduDev.",
        img: "/fotosProyects/fake_spotify.png",
        tags: ["Astro", "React", "Svelte", "Tailwind"],
        githubUrl: "https://github.com/adrian9906/Spotify-Clone-Astro",
        demoUrl: "https://fake-spotify-astro-71lu.vercel.app/",
        className: "col-span-2 row-span-1",
    },
];
function BentoCard({ title, desc, img, tags, githubUrl, demoUrl, className }) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]",
                "transition-all duration-300 hover:border-[#C8FF00]/40 hover:shadow-[0_0_30px_rgba(200,255,0,0.08)]",
                className
            )}
        >
            {/* Imagen de fondo */}
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




            {/* Info inferior */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-tight leading-tight">
                    {title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1 ">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/20 px-2 py-0.5 text-lg font-mono text-[#C8FF00]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="mt-1 text-xs text-white/60 line-clamp-2 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-20">
                    {desc}
                </p>
                <div className="flex gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:mt-6 z-20">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-4 py-2 text-sm text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            GitHub
                        </a>
                    )}
                    {demoUrl && demoUrl !== "#" && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative  flex items-center gap-2 rounded-full bg-[#C8FF00] px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#D4FF33] hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
                        >
                            {/* External link icon */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Ver demo
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}

// ─── BENTO GRID ──────────────────────────────────────────────────────────────

function BentoGrid({ projects }) {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[880px] max-w-7xl">
            {projects.map((p) => (
                <BentoCard key={p.id} {...p} />
            ))}
        </div>
    );
}

// ─── TABS ────────────────────────────────────────────────────────────────────

const TABS = [
    { title: "Web", value: "web", projects: PROJECTS_WEB },
    { title: "Python", value: "python", projects: PROJECTS_PYTHON },
];

function Tabs({ active, onChange }) {
    return (
        <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-[#111111] p-1 w-fit">
            {TABS.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => onChange(tab.value)}
                    className={cn(
                        "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                        active === tab.value
                            ? "text-black"
                            : "text-white/50 hover:text-white"
                    )}
                >
                    {active === tab.value && (
                        <span className="absolute inset-0 rounded-full bg-[#C8FF00]" />
                    )}
                    <span className="relative">{tab.title}</span>
                </button>
            ))}
        </div>
    );
}

// ─── SECTION ─────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("web");

    const currentProjects = TABS.find((t) => t.value === activeTab)?.projects ?? [];

    return (
        <section id="proyectos" className="py-24 px-6 print:hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white">
                        PROYECTOS<span className="text-[#C8FF00]">.</span>
                    </h2>
                    <p className="text-[#A0A0A0] max-w-md text-lg">
                        Una selección de mis trabajos más recientes, combinando diseño innovador y tecnología de punta.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8">
                    <Tabs active={activeTab} onChange={setActiveTab} />
                </div>

                {/* Grid */}
                <BentoGrid projects={currentProjects} />

            </div>
        </section>
    );
}