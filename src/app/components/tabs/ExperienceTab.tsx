"use client";
// src/app/components/tabs/ExperienceTab.tsx
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';
import { useLanguage } from '@/app/context/LanguageContext';
import { tr, pick, pickAny } from '@/app/lib/i18n';
import CaseStudies from '@/app/components/CaseStudies';

const experiences = [
    {
        role: tr("Cloud & Infrastructure Engineer", "Ingénieur Cloud et Infrastructure"),
        company: "ITSICS-Consulting",
        location: tr("Remote (managed service provider)", "Télétravail (société de services managés)"),
        initials: "ITS",
        date: tr("5 Jan – 30 Jun 2026", "5 janv. – 30 juin 2026"),
        caseStudies: true,
        tasks: [
            tr("MSP platform: deployed osTicket (ticketing), Snipe-IT (inventory) and AWX on K3s (patching and automation) in a three-tier architecture on AWS, with one organisation per customer and Okta federated access.",
               "Plateforme MSP : déploiement d'osTicket (tickets), Snipe-IT (inventaire) et AWX sur K3s (correctifs et automatisation) en architecture trois niveaux sur AWS, avec une organisation par client et un accès fédéré Okta."),
            tr("Secure entry point: Cloudflare and a single Nginx reverse proxy (TLS, mTLS) with one Elastic IP, private backends and Security Groups limited to Cloudflare ranges kept in sync automatically.",
               "Point d'entrée sécurisé : Cloudflare et un reverse proxy Nginx unique (TLS, mTLS) avec une seule IP Elastic, des backends privés et des Security Groups limités aux plages Cloudflare synchronisées automatiquement."),
            tr("Monitoring: 21 CloudWatch alarms in 5 blocks with SNS notifications, designed to keep monitoring costs under control.",
               "Supervision : 21 alarmes CloudWatch en 5 blocs avec notifications SNS, pensées pour maîtriser le coût de la supervision."),
            tr("Cloud SFTP server: file upload to a private S3 bucket (Mountpoint for S3, cross-account IAM role) and HTTPS delivery through CloudFront.",
               "Serveur SFTP cloud : dépôt de fichiers vers un bucket S3 privé (Mountpoint for S3, rôle IAM inter-comptes) et diffusion HTTPS via CloudFront."),
        ],
        tech: ["AWS EC2", "RDS", "S3", "Route 53", "CloudFront", "CloudWatch", "SNS", "Lambda", "Cloudflare", "Nginx", "Okta", "Kubernetes (K3s)", "Ansible AWX", "osTicket", "Snipe-IT"],
    },
    {
        role: tr("Computer & Network Maintenance Technician (Internship)", "Technicien Maintenance Informatique et Réseau (stage)"),
        company: "Smartland Africa",
        location: tr("Bénin (on-site)", "Bénin (sur site)"),
        initials: "SA",
        date: tr("Apr – Aug 2025", "Avr. – août 2025"),
        tasks: [
            tr("Set up Wi-Fi zones with ticket payment by mobile money.",
               "Configuration de zones Wi-Fi avec paiement des tickets par mobile money."),
            tr("Hardware and software maintenance for end-user systems.",
               "Maintenance matérielle et logicielle des postes utilisateurs."),
            tr("Diagnosed and resolved network issues.",
               "Dépannage des problèmes réseau."),
        ],
        tech: [tr("Networking", "Réseaux"), "Wi-Fi", tr("Hardware Maintenance", "Maintenance matérielle"), tr("Software Support", "Support logiciel"), tr("Troubleshooting", "Dépannage")],
    },
];

const education = [
    {
        degree: tr("Master's in Systems, Networks and Cloud Computing – Year 1 (Bac+4)",
                   "Mastère Systèmes, Réseaux et Cloud Computing – 1re année (Bac+4)"),
        school: "ESGI Paris",
        location: tr("Paris, France"),
        date: tr("Sep 2026 – Present", "Sept. 2026 – en cours"),
        points: [
            tr("RNCP36296 title “Expert in systems-network architecture and IT security” (level 7, state-recognised).",
               "Titre RNCP36296 « Expert en architectures systèmes-réseaux et en sécurité informatique » (niveau 7, reconnu par l'État)."),
            tr("Work-study programme, taught in French.", "Formation en alternance, enseignée en français."),
        ],
    },
    {
        degree: tr("Master 1 – Systems, Networks and Cloud (SRC)", "Mastère 1 – Systèmes, Réseaux et Cloud (SRC)"),
        school: "ESGIS Bénin",
        location: tr("Cotonou, Benin", "Cotonou, Bénin"),
        date: tr("Oct 2025 – Jul 2026", "Oct. 2025 – juil. 2026"),
        points: [
            tr("Advanced systems, networks and cloud computing.", "Systèmes, réseaux et cloud computing avancés."),
            tr("Infrastructure architecture and security.", "Architecture d'infrastructures et sécurité."),
        ],
    },
    {
        degree: tr("Bachelor's (Bac+3) – Information and Communication Technologies (TIC)",
                   "Licence (Bac+3) – Technologies de l'Information et de la Communication (TIC)"),
        school: "Université IRGIB Africa",
        location: tr("Cotonou, Benin", "Cotonou, Bénin"),
        date: tr("2020 – 2023"),
        points: [
            tr("Information systems fundamentals, networks and system administration.",
               "Fondamentaux des systèmes d'information, réseaux et administration système."),
            tr("Technical problem solving.", "Résolution de problèmes techniques."),
        ],
    },
    {
        degree: tr("West African Senior School Certificate (WASSCE)", "West African Senior School Certificate (WASSCE)"),
        school: "Cotonou International School",
        location: tr("Cotonou, Benin", "Cotonou, Bénin"),
        date: tr("2019 – 2020"),
        points: [
            tr("Bilingual (English / French) scientific secondary education.",
               "Parcours scientifique bilingue (anglais / français)."),
        ],
    },
];

export default function ExperienceTab() {
    const { language } = useLanguage();

    return (
        <div className="space-y-14">
            <section>
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">
                    {pick(language, tr("Professional Experience", "Expérience professionnelle"))}
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={exp.company} className="flex gap-4 sm:gap-6">
                            <div className="relative flex flex-col items-center">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-border-color text-xs font-bold text-accent">
                                    {exp.initials}
                                </div>
                                {index < experiences.length - 1 && (
                                    <div className="flex-grow w-px bg-border-color mt-4"></div>
                                )}
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between items-start mb-1 flex-col sm:flex-row">
                                    <h3 className="text-lg font-semibold text-primary">{pick(language, exp.role)}</h3>
                                    <time className="text-sm font-normal text-secondary sm:ml-4 flex-shrink-0">{pick(language, exp.date)}</time>
                                </div>
                                <p className="text-base text-secondary mb-3">{exp.company} - {pick(language, exp.location)}</p>
                                <ul className="list-disc list-inside space-y-1.5 text-secondary text-sm pl-2 mb-4">
                                    {exp.tasks.map((task, i) => <li key={i}>{pick(language, task)}</li>)}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((techItem) => {
                                        const label = pickAny(language, techItem);
                                        return (
                                            <Badge key={label} className="bg-gray-700/50 text-gray-300 border-gray-600">
                                                {label}
                                            </Badge>
                                        );
                                    })}
                                </div>
                                {"caseStudies" in exp && exp.caseStudies && <CaseStudies />}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">
                    {pick(language, tr("Education", "Formation"))}
                </h2>
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div key={edu.degree.en} className="flex gap-4 sm:gap-6">
                            <div className="relative flex flex-col items-center">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-border-color text-accent">
                                    <GraduationCap size={22} />
                                </div>
                                {index < education.length - 1 && (
                                    <div className="flex-grow w-px bg-border-color mt-4"></div>
                                )}
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between items-start mb-1 flex-col sm:flex-row">
                                    <h3 className="text-lg font-semibold text-primary">{pick(language, edu.degree)}</h3>
                                    <time className="text-sm font-normal text-secondary sm:ml-4 flex-shrink-0">{pick(language, edu.date)}</time>
                                </div>
                                <p className="text-base text-secondary mb-3">{edu.school} - {pick(language, edu.location)}</p>
                                <ul className="list-disc list-inside space-y-1.5 text-secondary text-sm pl-2">
                                    {edu.points.map((point, i) => <li key={i}>{pick(language, point)}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
