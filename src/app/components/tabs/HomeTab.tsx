"use client";
import type { ComponentType } from 'react';
import { Download, Cloud, Zap, Lock, Terminal, Shield, ShieldCheck } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
    SiAmazonec2, SiAmazonrds, SiAmazons3, SiAmazoniam, SiAmazoncloudwatch,
    SiAmazonroute53, SiAmazonwebservices, SiTerraform, SiDocker, SiKubernetes,
    SiAnsible, SiNginx, SiCloudflare, SiOkta, SiPython, SiGithubactions,
    SiGit, SiGitlab, SiLinux, SiGnubash,
} from 'react-icons/si';
import { useLanguage } from '@/app/context/LanguageContext';
import { tr, pick, pickAny, type L } from '@/app/lib/i18n';

type Icon = ComponentType<{ size?: number; className?: string }>;

const socialLinks = [
    { icon: MdEmail, url: 'mailto:lawalremi20@gmail.com', name: 'Email' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/lawal-mankchoud', name: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/mankchoud', name: 'GitHub' },
];

const skillCategories: { icon: Icon; title: L; skills: { name: string | L; icon: Icon }[] }[] = [
    {
        icon: Cloud,
        title: tr("Cloud (AWS)"),
        skills: [
            { name: "EC2", icon: SiAmazonec2 },
            { name: "RDS", icon: SiAmazonrds },
            { name: "S3", icon: SiAmazons3 },
            { name: "IAM", icon: SiAmazoniam },
            { name: "CloudWatch", icon: SiAmazoncloudwatch },
            { name: "Route 53", icon: SiAmazonroute53 },
            { name: "CloudFront", icon: SiAmazonwebservices },
        ],
    },
    {
        icon: Zap,
        title: tr("IaC, Containers & CI/CD", "IaC, conteneurs & CI/CD"),
        skills: [
            { name: "Terraform", icon: SiTerraform },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes (K3s)", icon: SiKubernetes },
            { name: "Ansible / AWX", icon: SiAnsible },
            { name: "GitHub Actions", icon: SiGithubactions },
        ],
    },
    {
        icon: Lock,
        title: tr("Security & Networking", "Sécurité & réseaux"),
        skills: [
            { name: "Nginx", icon: SiNginx },
            { name: "Cloudflare", icon: SiCloudflare },
            { name: tr("Okta (SSO)", "Okta (SSO)"), icon: SiOkta },
            { name: "mTLS", icon: ShieldCheck },
            { name: tr("Least-privilege IAM", "IAM (moindre privilège)"), icon: ShieldCheck },
            { name: "Gitleaks", icon: Lock },
            { name: "Trivy", icon: Shield },
            { name: "tfsec", icon: SiTerraform },
        ],
    },
    {
        icon: Terminal,
        title: tr("Scripting & Tooling", "Scripts & outils"),
        skills: [
            { name: "Python", icon: SiPython },
            { name: "Git", icon: SiGit },
            { name: "GitLab", icon: SiGitlab },
            { name: "Linux", icon: SiLinux },
            { name: "Bash", icon: SiGnubash },
        ],
    },
];

const about1 = tr(
    "Cloud & Infrastructure Engineer, studying for a Master's in Systems, Networks and Cloud at ESGI Paris. I design, automate and secure cloud infrastructure, with a DevOps approach and security built in from the start.",
    "Ingénieur Cloud et Infrastructure, en Mastère Systèmes, Réseaux et Cloud à l'ESGI Paris. Je conçois, automatise et sécurise des infrastructures cloud, avec une approche DevOps et la sécurité intégrée dès la conception."
);
const about2 = tr(
    "My areas: AWS, infrastructure as code, CI/CD pipelines, containers and monitoring. I'm looking for a work-study internship (1 week at school, 3 weeks in the company) to keep growing towards DevSecOps and cloud security.",
    "Mes domaines : AWS, Infrastructure as Code, pipelines CI/CD, conteneurs et supervision. Je recherche un stage alterné (1 semaine école, 3 semaines entreprise) pour continuer à progresser vers le DevSecOps et la sécurité cloud."
);

export default function HomeTab() {
    const { language } = useLanguage();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">

            <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent">{pick(language, tr("About Me", "À propos"))}</h2>
                <p className="text-secondary leading-relaxed">{pick(language, about1)}</p>
                <p className="text-secondary leading-relaxed">{pick(language, about2)}</p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {socialLinks.map(link => (
                        <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                           className="text-secondary hover:text-primary transition-colors">
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>

                <a href="/CV_Lawal_Mankchoud.pdf" download="CV_Lawal_Mankchoud.pdf"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-colors">
                    <Download size={18} />
                    {pick(language, tr("Download my resume", "Télécharger mon CV"))}
                </a>
            </div>

            <div className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl font-bold text-accent text-center lg:text-left">
                    {pick(language, tr("Skills", "Compétences"))}
                </h2>
                {skillCategories.map(category => (
                    <div key={category.title.en} className="p-6 bg-card-bg border border-border-color rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <category.icon size={24} className="text-accent" />
                            <h3 className="text-lg font-bold text-primary">{pick(language, category.title)}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map(skill => {
                                const label = pickAny(language, skill.name);
                                return (
                                    <span key={label}
                                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700/30 rounded-full text-sm text-primary">
                                        <skill.icon size={16} className="shrink-0 text-accent" />
                                        {label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
