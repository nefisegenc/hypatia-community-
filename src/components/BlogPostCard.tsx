import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type BlogPostCardProps = {
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    authorName: string;
    authorImageUrl: string;
    date: string;
};

export const BlogPostCard = ({ slug, title, excerpt, imageUrl, authorName, authorImageUrl, date }: BlogPostCardProps) => {
    return (
        <Link href={`/blog/${slug}`} className="group">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-transparent hover:border-hypatia-purple">
                {/* Blog Görseli */}
                <div className="relative w-full h-52">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
                </CardContent>

                {/* Yazar Bilgisi */}
                <CardFooter>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={authorImageUrl} alt={authorName} />
                            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-sm">{authorName}</p>
                            <p className="text-xs text-muted-foreground">{date}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};