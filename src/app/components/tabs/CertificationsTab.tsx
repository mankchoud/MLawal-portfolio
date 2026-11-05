"use client";
import { Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { tr, pick, type L } from '@/app/lib/i18n';

type Item = {
    name: L;
    issuer: string;
    kind: "certification" | "training";
    date?: L;
    detail?: L;
};

const items: Item[] = [
    {
        name: tr("TOEFL iBT", "TOEFL iBT"),
        issuer: "ETS",
        kind: "certification",
        date: tr("April 2025", "Avril 2025"),
        detail: tr("Score 81 / 120 (Reading 19, Listening 22, Speaking 19, Writing 21)",
                   "Score 81 / 120 (Reading 19, Listening 22, Speaking 19, Writing 21)"),
    },
    {
        name: tr("CCNA (training course)", "CCNA (formation)"),
        issuer: "Alphorm",
        kind: "training",
        detail: tr("Networking fundamentals: routing, switching, IP addressing.",
                   "Fondamentaux réseau : routage, commutation, adressage IP."),
    },
    {
        name: tr("LPIC (training course)", "LPIC (formation)"),
        issuer: "Alphorm",
        kind: "training",
        detail: tr("Linux system administration.", "Administration système Linux."),
    },
    {
        name: tr("Nagios Monitoring", "Supervision avec Nagios"),
        issuer: "Udemy",
        kind: "training",
        detail: tr("Infrastructure monitoring and alerting.", "Supervision d'infrastructure et alertes."),
    },
    {
        name: tr("Seeds for the Future", "Seeds for the Future"),
        issuer: "Huawei",
        kind: "training",
        detail: tr("Programme completion.", "Programme suivi jusqu'à son terme."),
    },
];

export default function CertificationsTab() {
    const { language } = useLanguage();

    return (
        <div>
            <h2 className="text-3xl font-bold text-accent mb-8 text-center">
                {pick(language, tr("Certifications & Training", "Certifications & formations"))}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {items.map((item) => {
                    const Icon = item.kind === "certification" ? Award : BookOpen;
                    return (
                        <div key={item.name.en} className="p-5 bg-card-bg border border-border-color rounded-xl flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-border-color text-accent">
                                <Icon size={22} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">{pick(language, item.name)}</h3>
                                <p className="text-sm text-secondary">
                                    {item.issuer}{item.date ? " · " + pick(language, item.date) : ""}
                                </p>
                                {item.detail && (
                                    <p className="text-sm text-secondary mt-2">{pick(language, item.detail)}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
