'use client'
import { motion } from "motion/react";
import { Download, ExternalLink, Code, ChevronRight, Send, Sun, Moon } from 'lucide-react';
const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce del Futuro",
        desc: "Plataforma de ventas con experiencia 3D y pagos cripto integrados.",
        img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
        tags: ["React", "Three.js", "Node.js"],
        githubUrl: "https://github.com/alexdev/ecommerce-3d",
        demoUrl: "#"
    },
    {
        id: 2,
        title: "Fintech Dashboard",
        desc: "Panel de control financiero con visualización de datos en tiempo real.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
        tags: ["TypeScript", "Tailwind", "D3.js"],
        githubUrl: "https://github.com/alexdev/fintech-dashboard",
        demoUrl: "#"
    },
    {
        id: 3,
        title: "App de Productividad",
        desc: "Gestor de tareas basado en IA que prioriza tu trabajo automáticamente.",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1280",
        tags: ["Next.js", "OpenAI", "PostgreSQL"],
        githubUrl: "https://github.com/alexdev/ai-productivity",
        demoUrl: "#"
    }
];
export default function ProyectComponents() {
    return (
        <div>
            <section id="proyectos" className="py-24 px-6 print:hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-text-main">PROYECTOS<span className="text-accent">.</span></h2>
                        <p className="text-text-muted max-w-md text-lg">Una selección de mis trabajos más recientes, combinando diseño innovador y tecnología de punta.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {PROJECTS.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative overflow-hidden rounded-[2rem] bg-bg-card aspect-[4/3] hover:scale-[1.02] hover:shadow-xl transition-all duration-500 ease-out ${i === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
                            >
                                <img src={p.img} alt={p.title} className="object-cover w-full h-full opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                                    <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                        <div className="flex gap-2 mb-4 flex-wrap">
                                            {p.tags.map(t => (
                                                <span key={t} className="text-xs font-mono font-bold bg-accent text-accent-fg px-3 py-1 rounded-full uppercase tracking-wider">{t}</span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold font-display mb-3 text-white">{p.title}</h3>
                                        <p className="text-text-muted text-lg max-w-xl mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">{p.desc}</p>
                                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <a href={p.demoUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent transition-colors" title="Ver Demo">
                                                <ExternalLink size={20} />
                                            </a>
                                            <a href={p.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-bg-main text-text-main flex items-center justify-center hover:bg-accent hover:text-accent-fg transition-colors" title="Ver Código en GitHub">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'currentColor', transform: '', msFilter: '' }}><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}