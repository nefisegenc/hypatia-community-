import Image from "next/image";
// CardFooter import'u kullanılmadığı için kaldırıldı.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
};

export const ProjectCard = ({ title, description, imageUrl, tags }: ProjectCardProps) => {
    return (
        <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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