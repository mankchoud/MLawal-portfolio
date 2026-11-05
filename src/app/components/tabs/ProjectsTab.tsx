"use client";
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/app/components/ui/Badge';
import { useLanguage } from '@/app/context/LanguageContext';
import { tr, pick } from '@/app/lib/i18n';
import { personalProjects, categoryLabels, type Category } from '@/app/data/personalProjects';

export default function ProjectsTab() {
    const { language } = useLanguage();
    const [filter, setFilter] = useState<Category | 'all'>('all');

    const categories = useMemo(
        () => Array.from(new Set(personalProjects.map((p) => p.category))),
        []
    );
    const visible = personalProjects.filter((p) => filter === 'all' || p.category === filter);

    return (
        <div>
            <h2 className="text-3xl font-bold text-accent mb-2 text-center">
                {pick(language, tr("Personal projects", "Projets personnels"))}
            </h2>
            <p className="text-sm text-secondary text-center mb-6">
                {pick(language, tr(
                    "Hands-on DevOps and cloud security projects, each with its code on GitHub.",
                    "Projets pratiques DevOps et sécurité cloud, chacun avec son code sur GitHub."
                ))}
            </p>

            {categories.length > 1 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {(['all', ...categories] as const).map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setFilter(c)}
                            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                                filter === c
                                    ? 'bg-accent/20 text-accent border-accent/40'
                                    : 'text-secondary border-border-color hover:text-primary'
                            }`}
                        >
                            {c === 'all' ? pick(language, tr("All", "Tous")) : pick(language, categoryLabels[c])}
                        </button>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visible.map((project) => (
                    <article key={project.id} className="flex flex-col p-5 bg-card-bg border border-border-color rounded-xl">
                        {project.image && project.imageSize && (
                            <Image
                                src={project.image}
                                alt={pick(language, project.title)}
                                width={project.imageSize[0]}
                                height={project.imageSize[1]}
                                className="w-full h-auto rounded-lg border border-border-color mb-4"
                            />
                        )}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-primary">{pick(language, project.title)}</h3>
                            {project.status && (
                                <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                                    {pick(language, project.status)}
                                </Badge>
                            )}
                        </div>
                        <p className="text-secondary text-sm mb-4">{pick(language, project.description)}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((item) => (
                                <Badge key={item} className="bg-gray-700/50 text-gray-300 border-gray-600">{item}</Badge>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-wrap gap-3">
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-border-color text-primary hover:bg-white/5 transition-colors">
                                    <FaGithub size={16} />
                                    {pick(language, tr("Code", "Code"))}
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors">
                                    <ExternalLink size={16} />
                                    {pick(language, tr("Demo", "Démo"))}
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
