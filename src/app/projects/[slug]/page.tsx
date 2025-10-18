// src/app/projects/[slug]/page.tsx

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type ProjectDetailPageProps = {
    params: { slug: string } | Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }
    const { detail } = project;

    return (
        <main className="bg-white">
            {/* --- HERO BÖLÜMÜ --- */}
            <section className="relative h-[65vh] min-h-[450px] sm:h-[75vh] flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={detail.heroImageUrl}
                        alt={detail.heroTitle}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
					<Link href="/#projects" className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Tüm Projelere Dön
                    </Link>

                    <h1 className="text-4xl font-bold leading-tight text-[hsl(var(--hypatia-soft-pink))] sm:text-5xl md:text-6xl lg:text-7xl">
                        {detail.heroTitle}
                        <span className="mt-2 block text-2xl font-semibold tracking-wide text-[hsl(var(--hypatia-soft-purple))] sm:text-3xl md:text-4xl">
                            {detail.heroSubtitle}
                        </span>
                    </h1>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {detail.categories.map((category) => (
                            <div key={category} className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider backdrop-blur-sm">
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ANA METİN İÇERİĞİ BÖLÜMÜ --- */}
            <div className="container mx-auto max-w-4xl -mt-24 px-4 sm:px-6 lg:px-8">
                <div className="relative z-20 space-y-12 rounded-2xl bg-white p-6 shadow-2xl sm:p-10 md:p-16">

                    <section>
                        <h2 className="text-3xl font-bold text-hypatia-charcoal sm:text-4xl">
                            {detail.goal.title}
                        </h2>
                        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                            {detail.goal.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </section>

                    {detail.scope && (
                        <section>
                            <h2 className="text-3xl font-bold text-hypatia-charcoal sm:text-4xl">
                                {detail.scope.title}
                            </h2>
                            <div className="mt-6 space-y-6">
                                {detail.scope.items.map((item, i) => (
                                    <div key={i}>
                                        <h3 className="text-xl font-semibold text-hypatia-charcoal">{item.title}</h3>
                                        <p className="mt-2 text-lg text-muted-foreground">{item.text}</p>
                                    </div>
                                ))}
                                {detail.scope.supporters && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-hypatia-charcoal mt-6">Destekçiler:</h3>
                                        <ul className="mt-3 space-y-2 text-lg text-muted-foreground">
                                            {detail.scope.supporters.map((sup, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-hypatia-magenta mt-1" />
                                                    <span>
                                                        <a href={sup.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-hypatia-magenta transition hover:underline">
                                                            {sup.name}
                                                        </a>
                                                        {' '}– {sup.note}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    <section>
                        <h2 className="text-3xl font-bold text-hypatia-charcoal sm:text-4xl">
                            {detail.impact.title}
                        </h2>
                        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                            {detail.impact.paragraphs.map((p, i) => <p key={i}>{p.split(/(@\S+)/g).map((part, j) => {
                                if (part.startsWith('@')) {
                                    const supporter = detail.scope?.supporters?.find(s => s.name === part);
                                    if (supporter) {
                                        return <a key={j} href={supporter.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-hypatia-magenta transition hover:underline">{part}</a>;
                                    }
                                }
                                return <span key={j}>{part}</span>;
                            })}</p>)}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-hypatia-charcoal sm:text-4xl">
                            {detail.results.title}
                        </h2>
                        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                            {detail.results.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </section>

                    {detail.achievements && (
                        <section>
                            <h2 className="text-3xl font-bold text-hypatia-charcoal sm:text-4xl">
                                {detail.achievements.title}
                            </h2>
                            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                                {detail.achievements.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {detail.gallery && (
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {detail.gallery.map((image, i) => (
                            <div key={i} className="flex flex-col">
                                <Image src={image.src} alt={image.alt} width={1200} height={900} className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
                                {image.caption.trim() && (
                                    <p className="mt-4 text-center text-sm text-muted-foreground">{image.caption}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {detail.finalMessage && (
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
                    <section className="rounded-xl bg-gradient-to-r from-hypatia-magenta/10 to-hypatia-blue/10 p-8 text-center">
                        {detail.finalMessage.title.trim() && (
                            <h3 className="text-2xl font-bold text-hypatia-charcoal">{detail.finalMessage.title}</h3>
                        )}
                        <p className="mt-4 text-xl italic text-muted-foreground">{detail.finalMessage.quote}</p>
                        <p className="mt-6 text-lg font-semibold text-hypatia-charcoal">{detail.finalMessage.closing}</p>
                    </section>
                </div>
            )}
        </main>
    );
}
