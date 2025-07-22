import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Kartımızın alacağı bilgilerin tiplerini tanımlıyoruz
type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
};

export const ProjectCard = ({ title, description, imageUrl, tags }: ProjectCardProps) => {
    return (
        <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            {/* Kartın üstündeki resim */}
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Kartın başlık ve açıklama kısmı */}
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="line-clamp-2">{description}</CardDescription>
            </CardHeader>

            {/* Kartın etiketleri (React, Next.js vb.) */}
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};