"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { Heart, BookOpen, Users, Venus, Linkedin, Instagram } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { JoinForm } from "@/components/JoinForm";
import { projects } from "@/data/projects";

// Hero bölümünde kullanılacak görselin kaynağı
const heroImageSrc = "/images/h-1-1.png";

// Bu dizi ve ilgili state/fonksiyonlar, Hero'da slider kaldırıldığı için artık kullanılmayacak.
// Ancak eğer başka bir yerde slider mantığı kullanıyorsan kalsın, yoksa silebilirsin.
const sliderImages = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto-format=fit=crop",
		alt: "Hypatia Community Ekibi",
		title: "Topluluk Buluşması",
		description: "Birlikte öğreniyor, üretiyoruz",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto-format=fit=crop",
		alt: "Teknoloji Atölyesi",
		title: "Teknoloji Atölyesi",
		description: "Yeni teknolojileri keşfediyoruz",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1778&auto-format=fit=crop",
		alt: "Proje Sunumu",
		title: "Proje Sunumu",
		description: "Fikirlerimizi paylaşıyoruz",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1974&auto-format=fit=crop",
		alt: "Yaratıcılık Atölyesi",
		title: "Yaratıcılık Atölyesi",
		description: "Hayal gücümüzü geliştiriyoruz",
	},
];

const teamMembers = [
	{
		name: "Öykü Kaplan",
		role: "Founder",
		linkedinUrl: "#",
		instagramUrl: "#",
		imageUrl: "/images/e-1.png",
	},
	{
		name: "Nefise Genç",
		role: "Developer",
		linkedinUrl: "#",
		instagramUrl: "#",
		imageUrl: "/images/e-2.png",
	},
	{
		name: "Ali Nazaroğlu",
		role: "Designer",
		linkedinUrl: "https://www.linkedin.com/in/m-ali-nazaroglu-29b727176/",
		instagramUrl: "https://www.instagram.com/m.nazaroglu/",
		imageUrl: "/images/e-4.png",
	},
	{
		name: "Şebnem Aldemir",
		role: "Project Manager",
		linkedinUrl: "https://www.linkedin.com/in/%C5%9Febnem-aldemir-62a189245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
		instagramUrl: "https://www.instagram.com/sebnemaldemir?igsh=b2JqZTIxN2RqeWhx&utm_source=qr",
		imageUrl: "/images/e-3.png",
	},
];

const coreValues = [
	{
		icon: Heart,
		title: "Kadın ve Gençlerin Güçlenmesi",
		description: "Gençler ve kadınlar hayaller kurar, harekete geçer ve ilham verir.",
		color: "#661a91",
		tint: "rgba(102, 26, 145, 0.12)",
		border: "rgba(102, 26, 145, 0.35)",
	},
	{
		icon: BookOpen,
		title: "Kaliteli ve Erişilebilir Eğitim",
		description: "Her çocuk, güven veren ve umut taşıyan bir eğitimle güçlenmelidir.",
		color: "#4D88B7",
		tint: "rgba(77, 136, 183, 0.12)",
		border: "rgba(77, 136, 183, 0.35)",
	},
	{
		icon: Venus,
		title: "Toplumsal Cinsiyet Eşitliği",
		description: "Cinsiyet, sesimizi kısmak için değil; çeşitliliğimizi kutlamak içindir.",
		color: "#DA1FA3",
		tint: "rgba(218, 31, 163, 0.12)",
		border: "rgba(218, 31, 163, 0.35)",
	},
];

export default function HomePage() {
	// Hero slider'ı kaldırıldığı için bu state ve fonksiyonlar artık kullanılmayacak.
	// Eğer 'sliderImages' dizisi başka bir yerde kullanılıyorsa bu satırları silebilirsin.
	const [currentSlide, setCurrentSlide] = useState(0);
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

	return (
		<>
			{/* HERO */}
			<section
				id="home"
				className="relative overflow-hidden min-h-screen flex items-center py-12 sm:py-16 md:py-20 lg:py-32"
			>
				<div className="background-soft-gradient" />

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Sol (Metin) */}
						<div className="flex flex-col gap-6 text-center lg:text-left">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-hypatia-charcoal">
								Birlikte Başarıyor,
								<br />
								<span className="text-[#661a91]">Birlikte Büyüyoruz!</span>
							</h1>

							<p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
								Kaliteli ve erişilebilir eğitimi desteklemek, toplumsal cinsiyet eşitliğini sağlamak ve gençler ile kadınların güçlenmesi için sosyal fayda odaklı projeler üretiyoruz.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Link href="#projects">
									<Button size="lg" className="btn-primary">
										Projelerimizi İncele
									</Button>
								</Link>
								<Dialog>
									<DialogTrigger asChild>
										<Button
											size="lg"
											variant="outline"
											className="bg-transparent border-2 border-[#661a91] text-[#661a91] hover:bg-[#661a91] hover:text-white transition-colors duration-300"
										>
											Aramıza Katıl
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle className="sr-only">Topluluğumuza Katıl</DialogTitle>
										</DialogHeader>
										<JoinForm />
									</DialogContent>
								</Dialog>
							</div>
						</div>

						{/* Sağ (TEK GÖRSEL) */}
						<div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto mt-8 lg:mt-0">
							<Image
								src={heroImageSrc}
								alt="Hypatia Community ekibiyle buluşma"
								width={500}
								height={400}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>

				<div className="fade-out-bottom" />
				<div className="fade-out-sides" />
			</section>

			{/* ABOUT, PROJECTS, TEAM */}
			<section id="about" className="relative py-16 md:py-20 lg:py-28 bg-white scroll-mt-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-hypatia-charcoal">
						Biz Kimiz?
					</h2>
					<p className="mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto">
						Eğitime, eşitliğe ve toplumsal faydaya inanan; birlikte üreten <br /> ve birlikte büyüyen bir ekibiz.
					</p>

					{/* --- GÜNCELLEME: Misyon, Vizyon ve Değerler bölümleri modernize edildi --- */}
					<div className="mt-16 md:mt-24 space-y-24">

						{/* Misyon */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
							<div className="relative order-last md:order-first">
								{/* Metin bloğu resmin üzerine binecek */}
								<div className="relative z-10 md:transform md:-translate-x-8 p-8">
									<h3 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--hypatia-soft-purple))]">Misyonumuz</h3>
									<p className="mt-4 text-lg text-muted-foreground">
										Hypatia, toplumsal cinsiyet eşitliğini savunmak, kaliteli ve erişilebilir eğitimi yaygınlaştırmak ve gençlerle kadınların öncülüğünde gerçek etki yaratan sosyal sorumluluk projeleri geliştiren bir topluluktur.
										Yerelden küresele uzanan bir dayanışma ağı kurarak, bireylerin sadece katılımcı değil, aynı zamanda değişimin aktif öznesi olmasını sağlıyoruz.
									</p>
								</div>
							</div>
							<div className="flex justify-center">
								<Image
									src="/images/h-1-4.png"
									alt="Misyonumuz"
									width={500}
									height={400}
									className="w-full h-80 object-cover"
								/>
							</div>
						</div>

						{/* Vizyon */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
							<div className="flex justify-center">
								<Image
									src="/images/h-1-3.png"
									alt="Vizyonumuz"
									width={500}
									height={400}
									className="w-full h-80 object-cover"
								/>
							</div>
							<div className="relative">
								{/* Metin bloğu resmin üzerine binecek */}
								<div className="relative z-10 md:transform md:translate-x-8 p-8">
									<h3 className="text-2xl sm:text-3xl font-bold text-[hsl(var(--hypatia-soft-pink))]">Vizyonumuz</h3>
									<p className="mt-4 text-lg text-muted-foreground">
										Hypatia, geleceği şekillendiren gençlerin ve kadınların liderlik ettiği küresel bir hareket olmayı hedefler.
										Eğitimin erişilebilir olduğu, eşitliğin norm haline geldiği ve kolektif gücün sürdürülebilir bir dünyayı mümkün kıldığı bir gelecek inşa etmektir.
										Bu vizyonla, gelecek nesilleri güçlendirmeye ve daha kapsayıcı, adil ve umut dolu bir toplumsal dönüşüme öncülük etmeye devam edeceğiz.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Değerler */}
					<div className="mt-24 md:mt-32">
						<h3 className="text-3xl font-bold text-center text-hypatia-charcoal mb-16">Değerlerimiz</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{coreValues.map(({ icon: Icon, title, description, color, tint, border }) => (
								<div
									key={title}
									className="group text-center items-center flex flex-col bg-white rounded-xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
									style={{ borderColor: border }}
								>
									<div
										className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 transition-transform duration-300 group-hover:scale-105"
										style={{ backgroundColor: tint, color }}
									>
										<Icon className="w-7 h-7" />
									</div>
									<h4 className="text-xl font-bold mb-2" style={{ color }}>
										{title}
									</h4>
									<p className="text-base text-muted-foreground">
										{description}
									</p>
								</div>
							))}
						</div>
					</div>
					{/* --- GÜNCELLEME SONU --- */}

					{/* Projeler - YATAY SLIDER */}
					<div id="projects" className="mt-24 md:mt-36 scroll-mt-20">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-hypatia-charcoal mb-12">
							Projelerimiz
						</h2>
						{/* no-scrollbar sınıfı globals.css'te tanımlanmalıdır */}
						<div className="flex overflow-x-auto space-x-8 pb-4 pl-4 sm:pl-6 lg:pl-8 no-scrollbar -mx-4 sm:-mx-6 lg:-mx-8">
							{projects.map((p) => (
								<div key={p.slug} className="flex-shrink-0 w-[85vw] sm:w-96">
									<ProjectCard
										slug={p.slug}
										title={p.detail.heroTitle}
										description={p.detail.heroSubtitle || p.description}
										imageUrl={p.imageUrl}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* EKİBİMİZ BÖLÜMÜ */}
			<section id="team" className="py-16 md:py-20 lg:py-28 bg-hypatia-blue/10 scroll-mt-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-hypatia-charcoal mb-4">
						Ekibimiz
					</h2>
					<p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-12">
						Ekibimiz ile tanışın.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{teamMembers.map((member) => (
							<div key={member.name} className="card relative text-center flex flex-col justify-center items-center p-6 min-h-[140px] overflow-hidden group">
								<div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
									{member.imageUrl && (
										<div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
											<Image
												src={member.imageUrl}
												alt={`${member.name} portresi`}
												width={96}
												height={96}
												className="h-full w-full object-cover"
											/>
										</div>
									)}
									<h4 className="text-xl font-bold text-hypatia-charcoal">{member.name}</h4>
									<p className="text-[#661a91] font-medium mt-1">{member.role}</p>
								</div>
								<div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
									<Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-hypatia-blue hover:text-[hsl(var(--hypatia-soft-purple))] transition-colors">
										<Linkedin size={28} />
									</Link>
									<Link href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-hypatia-blue hover:text-[hsl(var(--hypatia-soft-pink))] transition-colors">
										<Instagram size={28} />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
