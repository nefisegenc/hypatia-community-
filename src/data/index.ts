
// src/data/index.ts
import { projects as projectsTr } from './projects-tr';
import { projectsEn } from './projects-en';
import { Project } from './projects-tr';

export { type Project } from './projects-tr';

export const getProjects = (locale: string): Project[] => {
    switch (locale) {
        case 'en':
            return projectsEn;
        case 'tr':
        default:
            return projectsTr;
    }
};

export const getProject = (slug: string, locale: string): Project | undefined => {
    const projects = getProjects(locale);
    return projects.find((p) => p.slug === slug);
};
