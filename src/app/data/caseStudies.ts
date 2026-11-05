// src/app/data/caseStudies.ts
// Études de cas ITSICS. Pas de code ni de démo : seulement le contexte, les choix et le résultat.
// Noms génériques dans les diagrammes (aucun domaine, compte ou identifiant réel).
import { tr, type L } from '@/app/lib/i18n';

export type Diagram = { src: string; width: number; height: number };

export type CaseStudy = {
    id: string;
    title: L;
    goal: L;
    choices: L[];
    result: L;
    stack: string[];
    diagram: Diagram;
};

export const overview: { title: L; caption: L; diagram: Diagram } = {
    title: tr("Platform overview", "Vue d'ensemble de la plateforme"),
    caption: tr(
        "How the four case studies fit together: secure entry point, MSP applications, SFTP delivery and monitoring.",
        "Comment s'articulent les quatre études de cas : point d'entrée sécurisé, applications MSP, livraison SFTP et supervision."
    ),
    diagram: { src: "/case-studies/overview.png", width: 2250, height: 1260 },
};

export const caseStudies: CaseStudy[] = [
    {
        id: "msp-platform",
        title: tr(
            "MSP platform: osTicket, Snipe-IT and AWX on a three-tier architecture",
            "Plateforme MSP : osTicket, Snipe-IT et AWX en architecture trois niveaux"
        ),
        goal: tr(
            "Give a managed service provider (MSP) the tools to manage its customers independently: support, asset inventory and endpoint automation.",
            "Fournir à une société de services managés (MSP) les outils pour gérer ses clients séparément : support, inventaire et automatisation des postes."
        ),
        choices: [
            tr("Three complementary applications: osTicket (ticketing), Snipe-IT (inventory) and AWX on K3s (patching and automation on customer endpoints).",
               "Trois applications complémentaires : osTicket (tickets), Snipe-IT (inventaire) et AWX sur K3s (correctifs et automatisation des postes clients)."),
            tr("One organisation per customer in every application, for independent management.",
               "Une organisation par client dans chaque application, pour une gestion indépendante."),
            tr("Federated authentication (Okta) across the three applications.",
               "Authentification fédérée (Okta) pour les trois applications."),
            tr("Three-tier architecture: application (EC2, or K3s for AWX), managed RDS database, S3 storage.",
               "Architecture trois niveaux : application (EC2, ou K3s pour AWX), base managée RDS, stockage S3."),
            tr("Three domain names per application.", "Trois noms de domaine par application."),
            tr("AWX on K3s with automatic TLS certificates (cert-manager, DNS-01 through Route 53).",
               "AWX sur K3s avec certificats TLS automatiques (cert-manager, DNS-01 via Route 53)."),
            tr("A shared database instance for osTicket and Snipe-IT, to keep costs down.",
               "Une instance de base de données partagée pour osTicket et Snipe-IT, pour limiter les coûts."),
        ],
        result: tr(
            "Three production applications, independent multi-customer management, unified and secure access, fully documented.",
            "Trois applications en production, gestion multi-clients indépendante, accès unifié et sécurisé, le tout documenté."
        ),
        stack: ["AWS (EC2, RDS, S3, Route 53)", "Okta", "K3s", "Traefik", "cert-manager", "osTicket", "Snipe-IT", "AWX"],
        diagram: { src: "/case-studies/msp-platform.png", width: 2250, height: 1050 },
    },
    {
        id: "secure-architecture",
        title: tr(
            "Secure architecture: Cloudflare, Nginx reverse proxy and a single Elastic IP",
            "Architecture sécurisée : Cloudflare, reverse proxy Nginx et IP Elastic unique"
        ),
        goal: tr(
            "Secure access to the applications and to the file drop, and cut the cost of public IP addresses.",
            "Sécuriser l'accès aux applications et au dépôt de fichiers, et réduire le coût des adresses IP publiques."
        ),
        choices: [
            tr("Cloudflare in front (WAF, rate limiting, Access).",
               "Cloudflare en frontal (WAF, limitation de débit, Access)."),
            tr("A single Nginx reverse proxy with TLS termination and mTLS, routing each domain to the right application and relaying the SFTP stream.",
               "Un seul reverse proxy Nginx avec terminaison TLS et mTLS, qui route chaque domaine vers la bonne application et relaie le flux SFTP."),
            tr("A single Elastic IP for the whole entry point, instead of one per server.",
               "Une seule IP Elastic pour tout le point d'entrée, au lieu d'une par serveur."),
            tr("Application servers with no public IP.", "Serveurs applicatifs sans IP publique."),
            tr("Security Groups limited to Cloudflare's ranges, kept in sync automatically (Lambda, EventBridge).",
               "Security Groups limités aux plages Cloudflare, synchronisées automatiquement (Lambda, EventBridge)."),
            tr("The proxy doubles as the SSH bastion for administration.",
               "Le proxy sert aussi de bastion SSH pour l'administration."),
        ],
        result: tr(
            "One protected entry point, and fewer public IPs to pay for.",
            "Un point d'entrée unique et protégé, et moins d'adresses IP publiques à payer."
        ),
        stack: ["Cloudflare", "Nginx", "mTLS", "AWS (EC2, Elastic IP, Security Groups, Lambda, EventBridge)"],
        diagram: { src: "/case-studies/secure-architecture.png", width: 2250, height: 1035 },
    },
    {
        id: "monitoring",
        title: tr(
            "AWS infrastructure monitoring with CloudWatch",
            "Supervision de l'infrastructure AWS avec CloudWatch"
        ),
        goal: tr(
            "Monitor the platform and alert the team quickly, while keeping monitoring costs under control.",
            "Surveiller la plateforme et alerter rapidement, avec un coût de supervision maîtrisé."
        ),
        choices: [
            tr("21 alarms organised into 5 blocks (EC2 status, RDS storage, Route 53 health, S3 5xx errors, memory and disk).",
               "21 alarmes organisées en 5 blocs (état EC2, stockage RDS, santé Route 53, erreurs 5xx S3, mémoire et disque)."),
            tr("Email notifications through Amazon SNS.", "Notifications par e-mail via Amazon SNS."),
            tr("Custom metrics pushed by a scheduled script (cron) for what CloudWatch does not collect by default.",
               "Métriques personnalisées envoyées par un script planifié (cron) pour ce que CloudWatch ne collecte pas par défaut."),
            tr("Route 53 metrics tracked in us-east-1, where AWS publishes them.",
               "Métriques Route 53 suivies en us-east-1, où AWS les publie."),
        ],
        result: tr(
            "Complete, documented and cost-effective monitoring that alerts the team by email.",
            "Supervision complète, documentée et économique, qui alerte l'équipe par e-mail."
        ),
        stack: ["AWS (CloudWatch, SNS, Route 53)", "Bash", "cron"],
        diagram: { src: "/case-studies/monitoring.png", width: 2250, height: 960 },
    },
    {
        id: "sftp-server",
        title: tr(
            "Cloud SFTP server: file upload to S3 and HTTPS delivery",
            "Serveur SFTP cloud : dépôt de fichiers vers S3 et diffusion HTTPS"
        ),
        goal: tr(
            "Let non-technical users publish files with any SFTP client, over HTTPS and at almost no cost.",
            "Permettre à des utilisateurs non techniques de publier des fichiers avec n'importe quel client SFTP, en HTTPS et pour un coût quasi nul."
        ),
        choices: [
            tr("Mountpoint for S3 with a cross-account IAM role: no access key stored on the server.",
               "Mountpoint for S3 avec un rôle IAM inter-comptes : aucune clé d'accès stockée sur le serveur."),
            tr("A private bucket, never public.", "Un bucket privé, jamais public."),
            tr("CloudFront with Origin Access Control to serve the files over HTTPS.",
               "CloudFront avec Origin Access Control pour diffuser les fichiers en HTTPS."),
            tr("A CloudFront Function so PDFs open in the browser.",
               "Une CloudFront Function pour que les PDF s'ouvrent dans le navigateur."),
        ],
        result: tr(
            "No AWS access needed for staff, a bucket that is never public, and a complete guide delivered.",
            "Aucun accès AWS pour le personnel, un bucket jamais public, et un guide complet livré."
        ),
        stack: ["AWS (S3, CloudFront, IAM)", "SFTP", "Mountpoint for S3", "CloudFront Functions"],
        diagram: { src: "/case-studies/sftp-server.png", width: 2250, height: 750 },
    },
];
