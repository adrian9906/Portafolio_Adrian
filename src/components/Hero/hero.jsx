'use client'
import { ChevronRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { SparklesText } from '../ui/sparkles-text';
import { Highlighter } from '../ui/highlighter';
import TrueFocus from '../TrueFocus';
import LightRays from '../LightRays';

const SKILLS = [
    "JavaScript", "TypeScript", "React & Next.js", "Node.js & Express", "Astro", "Angular", "Python", "JAVA", "Machine Learning",
    "Tailwind CSS", "MySQL", "MongoDB", "Prisma", "PostgreSQL", "Git & CI/CD", "Django", "Apache Solr",
    "Apache Kafka", "NLP", "Flask & FastApi"
];
export default function HeroComponents() {
    return (
        <div>
            <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 print:hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8FF00]/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
                </div>



                {/* LightRays ocupando toda la pantalla */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1}
                        lightSpread={0.5}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0}
                        distortion={0}
                        className="custom-rays"
                        pulsating={false}
                        fadeDistance={1}
                        saturation={1}
                    />
                </div>

                {/* Contenido centrado pero sin limitar el fondo */}
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="max-w-6xl mx-auto text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <TrueFocus
                                sentence="Desarrollador Full Stack"
                                manualMode={false}
                                blurAmount={5}
                                borderColor="#5227FF"
                                animationDuration={1.5}
                                pauseBetweenAnimations={1}
                                glowColor='#C8FF00'
                            />
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 text-[#ffffff]">
                                CREANDO<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#a1a1aa]">EXPERIENCIAS</span><br />
                                DIGITALES<span className='text-[#C8FF00]'>.</span>
                            </h1>
                            <div className="flex flex-wrap justify-center gap-4 mt-12">
                                <a href="#proyectos" className="bg-[#CCFF00] text-[#000000] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                                    Ver Proyectos <ChevronRight size={20} />
                                </a>
                                <a href="mailto:adriandfl99@gmail.com" className="bg-[#18181b]/50 backdrop-blur-md border border-border-main text-text-main px-8 py-4 rounded-full font-bold text-lg hover:bg-[#09090b] transition-colors flex items-center gap-2">
                                    <Mail size={20} /> Contáctame
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </section>
            <div className="relative flex overflow-x-hidden gap-6 mt-10 bg-[#CCFF00] text-[#000000] py-4 print:hidden -rotate-2 scale-110 my-12 shadow-xl">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-8 px-4 text-2xl md:text-4xl font-display font-black uppercase tracking-wider">
                            <span>Innovación</span> • <span>Desarrollo</span> • <span>Creatividad</span> • <span>Tecnología</span> •
                        </div>
                    ))}
                </motion.div>
            </div>
            <section id='about'>
                <h3 className='justify-center items-center text-center mt-20 mx-auto max-w-7xl'>
                    <SparklesText>Sobre <span className='text-[#C8FF00]'>Mi</span></SparklesText>

                    <div className="text-center text-2xl md:text-3xl lg:text-4xl font-display leading-tight mt-10">
                        <p className="leading-relaxed">
                            Soy un{" "}
                            <Highlighter action="underline" color="#C8FF00">
                                Desarrollador Full Stack
                            </Highlighter>{" "}
                            con experiencia en la creación de aplicaciones web escalables y de alto rendimiento. En el frontend, domino tecnologías modernas como{" "}
                            <Highlighter action="highlight" color="#C8FF00">
                                ,<span className='text-[#0A0A0A] font-bold'>
                                    React, Angular y Astro
                                </span>
                            </Highlighter>
                            , construyendo interfaces intuitivas con{" "}
                            <Highlighter action="underline" color="#0088cc">
                                HTML5, CSS3 y JavaScript
                            </Highlighter>
                            . En el backend, desarrollo APIs robustas y servicios escalables utilizando{" "}
                            <Highlighter action="highlight" color="#0088cc">
                                <span className='text-[#0A0A0A] font-bold'>
                                    Python, C#, Java y Node.js
                                </span>
                            </Highlighter>
                            .
                        </p>
                        <p className="leading-relaxed mt-4">
                            Además, cuento con experiencia en el campo de la{" "}
                            <Highlighter action="underline" color="#C8FF00">
                                Minería de Texto
                            </Highlighter>{" "}
                            y{" "}
                            <Highlighter action="highlight" color="#C8FF00">
                                <span className='text-[#0A0A0A] font-bold'>
                                    Machine Learning
                                </span>
                            </Highlighter>
                            , aplicando técnicas de procesamiento de lenguaje natural y modelos predictivos para extraer insights valiosos de datos no estructurados. Mi enfoque combina la atención al detalle en el diseño de experiencias de usuario con sólidas prácticas de arquitectura backend y ciencia de datos, asegurando aplicaciones{" "}
                            <Highlighter action="underline" color="#0088cc">
                                funcionales, mantenibles e inteligentes
                            </Highlighter>
                            .
                        </p>
                    </div>
                </h3>
            </section>
            <section id="skill" className="py-24 px-6 bg-gray-950 mt-10 print:hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 text-text-main"
                    >
                        HABILIDADES <span className="text-[#CCFF00]">TÉCNICAS.</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {SKILLS.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-bg-main border border-border-main text-text-muted px-6 py-3 rounded-full text-lg font-medium hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all duration-300 cursor-default shadow-sm hover:-translate-y-1"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    )
}