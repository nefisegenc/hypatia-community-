
"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/data";
import { useTranslations, useLocale } from "next-intl";

export default function ProjectsPage() {
    const t = useTranslations("ProjectsPage");
    const locale = useLocale();
    const projects = getProjects(locale);

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto">
                <div className="text-left mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        {t("description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tags={project.detail.categories}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
