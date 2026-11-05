// src/app/data/personalProjects.ts
// Projets personnels (galerie de l'onglet « Projets »).
// L'onglet n'apparaît sur le site que lorsque cette liste n'est pas vide.
// Pour ajouter un projet : copier l'exemple ci-dessous dans le tableau, remplir les champs.
// Les descriptions sont écrites à la main (FR + EN) ; les boutons Code / Démo n'apparaissent que si le lien est renseigné.
import { tr, type L } from '@/app/lib/i18n';

export type Category = 'cloud-security' | 'devops' | 'kubernetes' | 'iac';

export const categoryLabels: Record<Category, L> = {
    'cloud-security': tr("Cloud security", "Sécurité cloud"),
    'devops': tr("DevOps & CI/CD", "DevOps & CI/CD"),
    'kubernetes': tr("Kubernetes", "Kubernetes"),
    'iac': tr("Infrastructure as Code", "Infrastructure as Code"),
};

export type PersonalProject = {
    id: string;
    title: L;
    category: Category;
    status?: L;                       // ex. tr("In progress", "En cours")
    image?: string;                   // ex. "/personal/mon-projet.png"
    imageSize?: [number, number];     // [largeur, hauteur] de l'image
    description: L;
    stack: string[];
    repo?: string;                    // lien GitHub
    demo?: string;                    // lien de démo (projets web seulement)
};

export const personalProjects: PersonalProject[] = [
    // Exemple (à copier puis adapter) :
    // {
    //     id: "aws-secure-multi-account",
    //     title: tr("Secure multi-account AWS", "AWS multi-comptes sécurisé"),
    //     category: 'cloud-security',
    //     description: tr("Short description in English.", "Courte description en français."),
    //     stack: ["AWS IAM", "STS", "Terraform"],
    //     repo: "https://github.com/mankchoud/aws-secure-multi-account",
    // },
];
