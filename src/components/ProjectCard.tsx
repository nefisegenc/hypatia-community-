// src/components/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link"; // Link'i import ediyoruz
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
    slug: string; // slug'ı props olarak ekliyoruz
    title: string;
    description: string;
    imageUrl: string;
};

export const ProjectCard = ({ slug, title, description, imageUrl }: ProjectCardProps) => {
    return (
        // Kartın tamamını bir Link bileşeni ile sarmalıyoruz
        <Link href={`/projects/${slug}`} className="group block h-full">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="relative w-full h-48">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>
                {/* CardContent'i şimdilik boş bırakabilir veya etiketler için kullanabilirsiniz */}
                <CardContent className="flex-grow">
                    {/* İsteğe bağlı içerik */}
                </CardContent>
            </Card>
        </Link>
    );
};