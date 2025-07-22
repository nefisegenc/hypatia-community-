import { BlogPostCard } from "@/components/BlogPostCard";

// Örnek blog yazısı verileri
const mockPosts = [
    {
        slug: "ilk-adim-react-dunyasina-giris",
        title: "İlk Adım: React Dünyasına Giriş",
        excerpt: "Modern web geliştirmenin temel taşı olan React kütüphanesine sağlam bir başlangıç yapın. JSX, component ve state kavramlarını öğrenin.",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        authorName: "Ayşe Yılmaz",
        authorImageUrl: "https://github.com/shadcn.png",
        date: "21 Temmuz 2025",
    },
    {
        slug: "tailwind-css-ile-tasarimi-hizlandir",
        title: "Tailwind CSS ile Tasarımı Hızlandır",
        excerpt: "Utility-first yaklaşımıyla tanışın ve projelerinizde CSS yazma şeklinizi sonsuza dek değiştirin. Prototiplemeden üretime hız kazanın.",
        imageUrl: "https://images.unsplash.com/photo-1643223992337-556a424268b8?q=80&w=1932&auto=format&fit=crop",
        authorName: "Can Öztürk",
        authorImageUrl: "https://github.com/shadcn.png",
        date: "18 Temmuz 2025",
    },
    {
        slug: "next-js-neden-gelecek",
        title: "Next.js Neden Web'in Geleceği?",
        excerpt: "Sunucu tarafında render (SSR), statik site oluşturma (SSG) ve daha fazlası... Next.js'in sunduğu güçlü özelliklerle tanışın.",
        imageUrl: "https://images.unsplash.com/photo-1632993048319-6d53931c3b0a?q=80&w=1974&auto=format&fit=crop",
        authorName: "Zeynep Kaya",
        authorImageUrl: "https://github.com/shadcn.png",
        date: "15 Temmuz 2025",
    },
];

export default function BlogPage() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Teknoloji, tasarım ve topluluk üzerine yazılarımız.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockPosts.map((post) => (
                        <BlogPostCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            excerpt={post.excerpt}
                            imageUrl={post.imageUrl}
                            authorName={post.authorName}
                            authorImageUrl={post.authorImageUrl}
                            date={post.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
