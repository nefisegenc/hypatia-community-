import { ProjectCard } from "@/components/ProjectCard";

const projects = [
    {
        title: "Hypatia Topluluk Platformu",
        description: "Üyelerin bir araya geldiği, fikir alışverişi yaptığı ve etkinlikleri takip ettiği interaktif web platformu.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format=fit=crop",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Mobil Bilgi Yarışması",
        description: "Kullanıcıların mobil cihazlarından katılabildiği, genel kültür ve teknoloji odaklı eğlenceli bir bilgi yarışması uygulaması.",
        imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto=format=fit=crop",
        tags: ["React Native", "Firebase", "Gamification"],
    },
    {
        title: "Yapay Zeka Sanat Galerisi",
        description: "Yapay zeka modelleri tarafından üretilen sanat eserlerinin sergilendiği, dijital bir sanat galerisi projesi.",
        imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1974&auto=format=fit=crop",
        tags: ["Python", "PyTorch", "Generative AI"],
    },
];

export default function ProjectsPage() {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto">
                <div className="text-left mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Tüm Projeler</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Topluluğumuz tarafından hayata geçirilen projelerin tam listesi.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}