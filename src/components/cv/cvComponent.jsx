import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase, Code, Download, GraduationCap, Mail } from "lucide-react"; // Ajusta según los iconos que uses
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
const SKILLS = [
    "JavaScript", "TypeScript", "React & Next.js", "Node.js & Express", "Astro", "Angular", "Python", "JAVA", "Machine Learning",
    "Tailwind CSS", "MySQL", "MongoDB", "Prisma", "PostgreSQL", "Git & CI/CD", "Django", "Apache Solr",
    "Apache Kafka", "NLP", "Flask & FastApi"
];
export default function CV() {
    const EXPERIENCE = [
        {
            role: "Software Developer",
            company: "ALL NOVU",
            period: "Ago 2025 – Presente",
            location: "La Habana, Cuba",
            items: [
                "Desarrollé el sitio web oficial de la marca allnovu.com, que presenta el catálogo completo de electrodomésticos de la marca.",
                "Desarrollé la primera calculadora solar de Cuba, disponible en allnovu.com/consumo, donde los usuarios pueden calcular su consumo energético y recibir recomendaciones de paneles solares e inversores.",
                "Desarrollé una plataforma de comercio electrónico para la misma marca, diseñada para pantallas promocionales verticales, donde los usuarios pueden comprar los productos de la marca directamente; adicionalmente, cuando la pantalla está en modo de espera, se proyectan las promociones de la marca.",
                "Desarrollé una automatización para crear hojas de cálculo de Excel automatizadas y subirlas a Google Drive, que sirvió como base de conocimiento para entrenar un modelo de inteligencia artificial.",
                "Construí la base de conocimiento para un modelo de IA especializado en la venta de electrodomésticos.",
            ],
        },
        {
            role: "Software Developer",
            company: "CIP",
            period: "Ago 2022 – May 2025",
            location: "La Habana, Cuba",
            items: [
                "Desarrollé un sistema capaz de detectar entidades nombradas personalizadas que ayudan con la extracción de información de portales de noticias.",
                "Desarrollé un web scraper para recopilar información relevante de todos los portales de noticias nacionales e internacionales. Además, se creó un sistema de estadísticas para visualizar la información extraída relevante, como los temas que aparecen con mayor frecuencia en los artículos, y mostrar una nube de palabras con las palabras clave más utilizadas en los artículos.",
                "Implementé una arquitectura Big Data para el análisis de flujos de texto utilizando tecnologías de código abierto como Apache Kafka, Apache Solr, Apache Spark y MongoDB. Las tareas de análisis incluyen clasificación de texto, reconocimiento de entidades nombradas, extracción de palabras clave y análisis de sentimientos. Esto facilita la toma de decisiones para los analistas de datos.",
                "Implementé un algoritmo de similitud documental que identifica y compara documentos similares o idénticos a un documento específico. Esta herramienta es crucial para evaluar la unicidad del contenido en los medios y cuantificar el nivel de replicación de noticias en diferentes sitios de noticias.",
                "Desarrollé una plataforma web integral llamada SAI (Sistema de Análisis de Información) utilizando Node.js y Next.js. Esta plataforma centraliza y unifica todas las herramientas del Centro, ofreciendo una solución integral para el análisis y gestión de información mediática. Las principales características y funcionalidades de SAI incluyen:",
                "  1. Reconocimiento de entidades nombradas para identificar y clasificar elementos clave en los textos.",
                "  2. Generación de nubes de etiquetas multi-término, proporcionando una visualización intuitiva de los temas más relevantes.",
                "  3. Creación automática de informes PDF sobre cobertura mediática, con capacidad de enviarlos por correo electrónico.",
                "  4. Sistema para generar estadísticas detalladas de medios, permitiendo un análisis cuantitativo en profundidad.",
                "  5. Dashboard interactivo para un control y monitoreo eficiente de los medios.",
                "  6. Motor de búsqueda avanzado integrado con la base de datos Apache Solr que permite búsquedas rápidas y precisas.",
                "  7. Sistema de gestión y creación de perfiles de usuario para personalizar y automatizar la entrega de informes.",
            ],
        },
    ];
    const SKILLS = [
        "Python", "Java", "TypeScript", "JavaScript", "C#",
        "React", "Next.js", "Angular", "Astro",
        "Tailwind CSS", "HTML", "CSS",
        "Node.js", "FastAPI", "Django", "Flask",
        "MySQL", "MongoDB", "PostgreSQL", "SQL",
        "Apache Kafka", "Apache Solr", "Apache Spark",
        "Machine Learning", "Git", "GitHub", "GitLab", "Linux",
    ];

    return (
        <div className="bg-gray-950 mt-10">
            <section id="cv">
                <div className="max-w-7xl mx-auto">
                    <div className="print:hidden flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#ffffff]">CURRICULUM<span className="text-[#C8FF00]">.</span></h2>
                        <button className="flex items-center gap-2 bg-[#C8FF00] text-black px-8 py-4 rounded-full font-bold hover:bg-[#C8FF00]/85 transition-colors border border-transparent hover:border-accent">
                            <Download size={20} />
                            Descargar PDF
                        </button>
                    </div>
                </div>
                <div className="bg-[#18181b] max-w-5xl items-center justify-center mx-auto print:bg-white border border-[#27272a] print:border-none rounded-[2rem] print:rounded-none p-8 md:p-16 print:p-0 shadow-2xl print:shadow-none">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#27272a] print:border-gray-300 pb-10 mb-10 gap-6">
                        <div>
                            <h3 className="text-5xl md:text-7xl font-display font-black text-[#ffffff] print:text-black tracking-tighter">ADRIAN <span className="text-[#C8FF00] print:text-gray-500">DEV</span></h3>
                            <p className="text-xl md:text-2xl text-[#a1a1aa] print:text-gray-600 mt-2 font-light">Desarrollador Full Stack</p>
                        </div>
                        <div className="flex flex-col gap-2 text-[#a1a1aa] print:text-gray-600 font-mono text-sm">
                            <a href="mailto:adriandfl99@gmail.com" className="flex items-center gap-2 hover:text-[#C8FF00] print:hover:text-black transition-colors"><Mail size={16} /> adriandfl99@gmail.com</a>
                            <a href="https://www.linkedin.com/in/adrian-d-fernandez-12096b297/" className="flex items-center gap-2 hover:text-[#C8FF00] print:hover:text-black transition-colors"><LinkedInLogoIcon size={16} /> Adrian Fernandez</a>
                            <a href="https://github.com/adrian9906" className="flex items-center gap-2 hover:text-[#C8FF00] print:hover:text-black transition-colors"><GitHubLogoIcon size={16} /> github.com/adrian9906</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Left Column: Experience */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h4 className="flex items-center gap-3 text-2xl font-display font-bold text-[#ffffff] print:text-black mb-8">
                                    <Briefcase className="text-[#C8FF00] print:text-gray-800" /> Experiencia Laboral
                                </h4>
                                <div className="space-y-10">
                                    {EXPERIENCE.map((exp, i) => (
                                        <div key={i} className="relative pl-6 border-l border-[#27272a] print:border-gray-300">
                                            <div className="absolute w-3 h-3 bg-[#C8FF00] print:bg-gray-800 rounded-full -left-[6.5px] top-2" />
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                                                <h5 className="text-xl font-bold text-[#ffffff] print:text-black">{exp.role}</h5>
                                                <span className="text-sm font-mono text-[#C8FF00] print:text-gray-500 bg-[#C8FF00]/10 print:bg-transparent px-3 py-1 rounded-full">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-lg text-[#a1a1aa] print:text-gray-700 font-medium mb-3">{exp.company} · {exp.location}</p>
                                            <ul className="space-y-2 mt-3">
                                                {exp.items.map((item, idx) => (
                                                    <li key={idx} className="text-[#a1a1aa] print:text-gray-600 leading-relaxed flex gap-2">
                                                        <span className="text-[#C8FF00] mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h4 className="flex items-center gap-3 text-2xl font-display font-bold text-[#ffffff] print:text-black mb-8">
                                    <GraduationCap className="text-[#C8FF00] print:text-gray-800" /> Educación
                                </h4>
                                <div className="relative pl-6 border-l border-[#27272a] print:border-gray-300">
                                    <div className="absolute w-3 h-3 bg-[#C8FF00] print:bg-gray-800 rounded-full -left-[6.5px] top-2" />
                                    <h5 className="text-xl font-bold text-[#ffffff] print:text-black mb-1">Ingeniería en Software</h5>
                                    <p className="text-lg text-[#a1a1aa] print:text-gray-700 mb-2">Universidad Tecnológica</p>
                                    <p className="text-[#a1a1aa] print:text-gray-600">2018 - 2022</p>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Skills & Profile */}
                        <div className="space-y-12">
                            <section>
                                <h4 className="flex items-center gap-3 text-2xl font-display font-bold text-[#ffffff] print:text-black mb-6">
                                    <Code className="text-[#C8FF00] print:text-gray-800" /> Habilidades
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {SKILLS.map(skill => (
                                        <span key={skill} className="bg-[#050505] print:bg-gray-100 border border-[#C8FF00] print:border-gray-300 text-[#a1a1aa] print:text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h4 className="text-2xl font-display font-bold text-[#ffffff] print:text-black mb-6">Idiomas</h4>
                                <ul className="space-y-4 text-[#a1a1aa] print:text-gray-600">
                                    <li className="flex justify-between items-center border-b border-[#27272a] print:border-gray-200 pb-2">
                                        <span className="font-medium text-[#ffffff] print:text-black">Español</span>
                                        <span className="text-sm font-mono">Nativo</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-[#27272a] print:border-gray-200 pb-2">
                                        <span className="font-medium text-[#ffffff] print:text-black">Inglés</span>
                                        <span className="text-sm font-mono">C1 Avanzado</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}