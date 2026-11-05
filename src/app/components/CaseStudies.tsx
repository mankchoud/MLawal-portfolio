"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';
import { Modal } from '@/app/components/ui/Modal';
import { useLanguage } from '@/app/context/LanguageContext';
import { tr, pick } from '@/app/lib/i18n';
import { caseStudies, overview, type Diagram } from '@/app/data/caseStudies';

function DiagramButton({ diagram, alt, onOpen }: { diagram: Diagram; alt: string; onOpen: () => void }) {
    const { language } = useLanguage();
    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={pick(language, tr("Enlarge diagram", "Agrandir le schéma"))}
            className="group/diagram relative block w-full overflow-hidden rounded-lg border border-border-color"
        >
            <Image src={diagram.src} alt={alt} width={diagram.width} height={diagram.height}
                   className="w-full h-auto bg-white" />
            <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white opacity-80 group-hover/diagram:opacity-100">
                <Maximize2 size={12} />
                {pick(language, tr("Enlarge", "Agrandir"))}
            </span>
        </button>
    );
}

export default function CaseStudies() {
    const { language } = useLanguage();
    const [open, setOpen] = useState<{ diagram: Diagram; alt: string } | null>(null);

    return (
        <div className="mt-8">
            <h4 className="text-lg font-bold text-accent mb-1">
                {pick(language, tr("Case studies", "Études de cas"))}
            </h4>
            <p className="text-sm text-secondary mb-4">
                {pick(language, tr(
                    "Four missions from this role, described by goal, choices and result.",
                    "Quatre missions de ce poste, décrites par objectif, choix et résultat."
                ))}
            </p>

            <figure className="mb-6">
                <DiagramButton
                    diagram={overview.diagram}
                    alt={pick(language, overview.title)}
                    onOpen={() => setOpen({ diagram: overview.diagram, alt: pick(language, overview.title) })}
                />
                <figcaption className="mt-2 text-xs text-secondary">{pick(language, overview.caption)}</figcaption>
            </figure>

            <div className="space-y-6">
                {caseStudies.map((cs) => (
                    <article key={cs.id} className="p-4 md:p-5 bg-card-bg border border-border-color rounded-xl">
                        <h5 className="text-base md:text-lg font-bold text-primary mb-3">{pick(language, cs.title)}</h5>

                        <p className="text-sm text-secondary mb-3">
                            <span className="font-semibold text-primary">{pick(language, tr("Goal: ", "Objectif : "))}</span>
                            {pick(language, cs.goal)}
                        </p>

                        <DiagramButton
                            diagram={cs.diagram}
                            alt={pick(language, cs.title)}
                            onOpen={() => setOpen({ diagram: cs.diagram, alt: pick(language, cs.title) })}
                        />

                        <p className="mt-4 mb-1 text-sm font-semibold text-primary">
                            {pick(language, tr("Choices", "Choix"))}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-secondary text-sm pl-2 mb-3">
                            {cs.choices.map((choice, i) => <li key={i}>{pick(language, choice)}</li>)}
                        </ul>

                        <p className="text-sm text-secondary mb-3">
                            <span className="font-semibold text-primary">{pick(language, tr("Result: ", "Résultat : "))}</span>
                            {pick(language, cs.result)}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {cs.stack.map((item) => (
                                <Badge key={item} className="bg-gray-700/50 text-gray-300 border-gray-600">{item}</Badge>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <Modal isOpen={open !== null} onClose={() => setOpen(null)} wide>
                {open && (
                    <Image src={open.diagram.src} alt={open.alt} width={open.diagram.width} height={open.diagram.height}
                           className="w-full h-auto rounded-lg bg-white mt-6" />
                )}
            </Modal>
        </div>
    );
}
