import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase, Code, Download, GraduationCap, Mail } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../../hooks/useLanguage";

export default function CV() {
    const { t } = useLanguage();

    const EXPERIENCE = [
        {
            role: t("cv.experiences.allnovu.role"),
            company: t("cv.experiences.allnovu.company"),
            period: t("cv.experiences.allnovu.period"),
            location: t("cv.experiences.allnovu.location"),
            items: t("cv.experiences.allnovu.items"),
        },
        {
            role: t("cv.experiences.cip.role"),
            company: t("cv.experiences.cip.company"),
            period: t("cv.experiences.cip.period"),
            location: t("cv.experiences.cip.location"),
            items: t("cv.experiences.cip.items"),
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
        <div className="bg-sec mt-10">
            <section id="cv">
                <div className="max-w-7xl mx-auto">
                    <div className="print:hidden flex flex-row justify-between md:items-end mb-8 md:mb-16 gap-6">
                        <h2 className="text-3xl md:text-7xl font-display font-black tracking-tighter text-main">CURRICULUM<span className="text-[#2563eb] dark:text-[#C8FF00]">.</span></h2>
                        <button className="flex items-center w-[150px] h-[40px] md:w-[150px] gap-2 bg-[#2563eb] dark:bg-[#C8FF00] text-white dark:text-black px-8 py-4 rounded-full font-bold hover:bg-[#2563eb]/85 dark:hover:bg-[#C8FF00]/85 transition-colors border border-transparent hover:border-accent">
                            <Download className="w-4 h-4 md:w-5 md:h-5" />
                            <a href="https://drive.google.com/file/d/17PwtNhnC8WxPztyeRpM720rxQXpFzxZo/view?usp=drive_link">
                                {t("cv.getCV")}
                            </a>
                        </button>
                    </div>
                </div>
                <div className="bg-card max-w-2xl md:max-w-5xl items-center justify-center mx-auto print:bg-white border border-main print:border-none rounded-[2rem] print:rounded-none p-8 md:p-16 print:p-0 shadow-2xl print:shadow-none">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-main print:border-gray-300 pb-10 mb-10 gap-6">
                        <div>
                            <h3 className="text-5xl md:text-7xl font-display font-black text-main print:text-black tracking-tighter">{t("cv.fullName")}</h3>
                            <p className="text-xl md:text-2xl text-muted print:text-gray-600 mt-2 font-light">{t("cv.role")}</p>
                        </div>
                        <div className="flex flex-col gap-2 text-muted print:text-gray-600 font-mono text-sm">
                            <a href="mailto:adriandfl99@gmail.com" className="flex items-center gap-2 hover:text-[#2563eb] dark:hover:text-[#C8FF00] print:hover:text-black transition-colors"><Mail size={16} /> adriandfl99@gmail.com</a>
                            <a href="https://www.linkedin.com/in/adrian-d-fernandez-12096b297/" className="flex items-center gap-2 hover:text-[#2563eb] dark:hover:text-[#C8FF00] print:hover:text-black transition-colors"><LinkedInLogoIcon size={16} /> Adrian Fernandez</a>
                            <a href="https://github.com/adrian9906" className="flex items-center gap-2 hover:text-[#2563eb] dark:hover:text-[#C8FF00] print:hover:text-black transition-colors"><GitHubLogoIcon size={16} /> github.com/adrian9906</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h4 className="flex items-center gap-3 text-2xl font-display font-bold text-main print:text-black mb-8">
                                    <Briefcase className="text-[#2563eb] dark:text-[#C8FF00] print:text-gray-800" /> {t("cv.experience")}
                                </h4>
                                <div className="space-y-10">
                                    {EXPERIENCE.map((exp, i) => (
                                        <div key={i} className="relative pl-6 border-l border-main print:border-gray-300">
                                            <div className="absolute w-3 h-3 bg-[#2563eb] dark:bg-[#C8FF00] print:bg-gray-800 rounded-full -left-[6.5px] top-2" />
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                                                <h5 className="text-xl font-bold text-main print:text-black">{exp.role}</h5>
                                                <span className="text-sm font-mono text-[#2563eb] dark:text-[#C8FF00] print:text-gray-500 bg-[#2563eb]/10 dark:bg-[#C8FF00]/10 print:bg-transparent px-3 py-1 rounded-full">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-lg text-muted print:text-gray-700 font-medium mb-3">{exp.company} · {exp.location}</p>
                                            <ul className="space-y-2 mt-3">
                                                {exp.items.map((item, idx) => (
                                                    <li key={idx} className="text-muted print:text-gray-600 leading-relaxed flex gap-2">
                                                        <span className="dark:text-[#C8FF00] mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h4 className="flex items-center gap-3 text-2xl font-display font-bold text-main print:text-black mb-8">
                                    <GraduationCap className="text-[#2563eb] dark:text-[#C8FF00] print:text-gray-800" /> {t("cv.education")}
                                </h4>
                                <div className="relative pl-6 border-l border-main print:border-gray-300">
                                    <div className="absolute w-3 h-3 bg-[#2563eb] dark:bg-[#C8FF00] print:bg-gray-800 rounded-full -left-[6.5px] top-2" />
                                    <h5 className="text-xl font-bold text-main print:text-black mb-1">{t("cv.degree")}</h5>
                                    <p className="text-lg text-muted print:text-gray-700 mb-2">{t("cv.university")}</p>
                                    <p className="text-muted print:text-gray-600">{t("cv.period")}</p>
                                </div>
                            </section>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h4 className="flex items-center gap-3 text-2xl font-display font-bold text-main print:text-black mb-6">
                                    <Code className="text-[#2563eb] dark:text-[#C8FF00] print:text-gray-800" /> {t("cv.skills")}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {SKILLS.map(skill => (
                                        <span key={skill} className="bg-bg-input print:bg-gray-100 border border-main print:border-gray-300 text-main print:text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h4 className="text-2xl font-display font-bold text-main print:text-black mb-6">{t("cv.languages")}</h4>
                                <ul className="space-y-4 text-muted print:text-gray-600">
                                    <li className="flex justify-between items-center border-b border-main print:border-gray-200 pb-2">
                                        <span className="font-medium text-main print:text-black">{t("cv.spanish")}</span>
                                        <span className="text-sm font-mono">{t("cv.native")}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-main print:border-gray-200 pb-2">
                                        <span className="font-medium text-main print:text-black">{t("cv.english")}</span>
                                        <span className="text-sm font-mono">{t("cv.englishLevel")}</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                    </div>
                </div>
            </section >
        </div >
    );
}
