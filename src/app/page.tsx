import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1974&auto=format&fit=crop",
    tags: ["Python", "PyTorch", "Generative AI"],
  },
];


export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-white" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Fikirlere Hayat Ver,
              <br />
              <span className="text-hypatia-purple">Geleceği Şekillendir.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Hypatia, teknoloji ve yaratıcılık tutkusuyla bir araya gelen genç beyinlerin buluşma noktasıdır. Birlikte öğrenir, üretir ve ilham veririz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Link İngilizce (/join), metin Türkçe */}
              <Link href="/join">
                <Button size="lg" className="bg-hypatia-pink hover:bg-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
                  Topluluğa Katıl
                </Button>
              </Link>
              {/* Link İngilizce (/projects), metin Türkçe */}
              <Link href="/projects">
                <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow">
                  Projeleri İncele
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
              alt="Hypatia Community Ekibi"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Projelerimizden Bazıları</h2>
            <p className="text-lg text-muted-foreground mt-2">Topluluğumuzun hayal gücü ve emeğiyle ortaya çıkanlar.</p>
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
    </>
  );
}