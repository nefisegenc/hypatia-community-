// src/data/projects.ts

type Supporter = {
    name: string;
    url: string;
    note: string;
};

type GalleryImage = {
    src: string;
    alt: string;
    caption: string;
    objectPosition?: string;
};

type ProjectDetail = {
    heroTitle: string;
    heroSubtitle: string;
    heroImageUrl: string;
    categories: string[];
    goal: {
        title: string;
        paragraphs: string[];
    };
    scope?: {
        title: string;
        items: { title: string; text?: string; points?: string[]; }[];
        supporters?: Supporter[];
    };
    impact: {
        title: string;
        paragraphs: string[];
    };
    results: {
        title: string;
        paragraphs?: string[];
        items?: { title?: string; text?: string; points?: string[]; }[];
    };
    achievements?: {
        title: string;
        paragraphs: string[];
    };
    gallery?: GalleryImage[];
    finalMessage?: {
        title: string;
        quote: string;
        closing: string;
    };
};

type LocalizedProjectData = {
    title: string;
    description: string;
    detail: ProjectDetail;
};

export type Project = {
    slug: string;
    imageUrl: string;
    tr: LocalizedProjectData;
    en: LocalizedProjectData;
};

export const projects: Project[] = [
    {
        slug: "regl-farkindaligi-egitimi",
        imageUrl: "/IMG_0771.JPG",
        tr: {
            title: "Regl Farkındalığı Projesi",
            description: "Toplumda regl döngüsü hakkındaki tabuları yıkarak, gençler başta olmak üzere tüm bireylerin doğru bilgiye ulaşmasını sağlayan bir farkındalık projesi.",
            detail: {
                heroTitle: "Regl Farkındalığı",
                heroSubtitle: "Konuşalım, Normalleştirelim, Güçlenelim",
                heroImageUrl: "/IMG_0771.JPG",
                categories: ["Toplumsal Farkındalık", "Sağlık"],
                goal: {
                    title: "Projenin Amacı",
                    paragraphs: [
                        `"Regl Farkındalığı" projesiyle, reglin biyolojik ve doğal bir döngü olduğu bilincini artırarak toplumda farkındalık yaratmayı hedefliyoruz.`,
                        `Bu konuda yalnızca kadınların değil, kadın ve erkeklerin birlikte bilinçlenmesinin toplumsal dönüşüm için kritik olduğuna inanıyoruz.`,
                        `Regl; utanç, tabu ya da gizlenmesi gereken bir konu değil — hayatın doğal bir parçasıdır.`,
                        `Ancak "regl tabuları" ve "regl yoksulluğu", hem dünyada hem de Türkiye'de halen ciddi bir toplumsal eşitsizlik yaratıyor.`,
                        `Biz, bu sessizliği kırmak ve "yalnız değiliz" demek için bu projeyi hayata geçirdik.`
                    ],
                },
                scope: {
                    title: "Projenin Kapsamı",
                    items: [
                        { title: "1. Amaç:", text: "Toplumda regl üzerine açık bir diyalog başlatmak, regl yoksulluğu ve tabu konularına dikkat çekmek." },
                        { title: "2. Etkinlik:", text: `Proje kapsamında, R. Miray Reyhan'ın konuşmacı olduğu "Regl Farkındalığı İçin Konuşalım" konferansını düzenledik. Katılımcılarla birlikte regl deneyimini açıkça konuşarak, hem biyolojik hem de toplumsal yönleriyle farkındalığı derinleştirdik.` },
                    ],
                    supporters: [
                        { name: "@kotexturkiye", url: "https://www.instagram.com/kotexturkiye", note: "Ped sponsorluğu ve farkındalık desteği" },
                        { name: "@beije.co", url: "https://www.instagram.com/beijewomen/", note: "Ped sponsorluğu ve farkındalık desteği" },
                        { name: "@peddonofficial", url: "https://www.instagram.com/peddonofficial", note: "Etkinlik desteği ve katılımı" },
                    ],
                },
                impact: {
                    title: "Etkinlik İçeriği ve Etkisi",
                    paragraphs: [
                        "Etkinlikte, R. Miray Reyhan'ın etkileyici konuşmasıyla regl üzerine tabusuz, samimi ve öğretici bir diyalog kuruldu. Katılımcılar; beden farkındalığı, regl yoksulluğu ve toplumsal algılar üzerine kendi deneyimlerini paylaşma fırsatı buldu.",
                        "Etkinlik sonunda, @kotexturkiye ve @beije.co sponsorluğuyla ped dağıtımı gerçekleştirilerek hem maddi hem sembolik düzeyde destek sağlandı. Bu adım, regl ürünlerine erişimin bir lüks değil, temel hak olduğunu hatırlatmak için güçlü bir mesaj taşıdı."
                    ],
                },
                results: {
                    title: "Sonuç ve Etki",
                    paragraphs: [
                        "• Toplumsal düzeyde regl üzerine açık konuşma kültürüne katkı sağlandı.",
                        "• Katılımcılar arasında beden farkındalığı, utanmadan konuşabilme ve dayanışma duygusu güçlendi.",
                        "• Hypatia topluluğu, bu etkinlikle birlikte Türkiye'deki genç kadınlar ve erkekler arasında eşitlikçi ve kapsayıcı diyalogların yaygınlaşmasına öncülük etti."
                    ]
                },
                gallery: [
                    { src: "/images/IMG_0664.JPG", alt: "Regl farkındalığı etkinliğinde ekibimiz", caption: "" },
                    { src: "/images/IMG_0735.JPG", alt: "Regl farkındalığı etkinliğinden bir diğer an", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: `"Regl utanılacak bir şey değil, konuşulacak bir şeydir."`,
                    closing: "Birlikte öğrenerek, birlikte farkında olduğumuz yarınlara! ✨",
                },
            }
        },
        en: {
            title: "Menstrual Awareness Project",
            description: "An awareness project that breaks taboos about menstrual cycles in society, ensuring all individuals, especially youth, have access to accurate information.",
            detail: {
                heroTitle: "Menstrual Awareness",
                heroSubtitle: "Let's Talk, Normalize, and Empower",
                heroImageUrl: "/IMG_0771.JPG",
                categories: ["Social Awareness", "Health"],
                goal: {
                    title: "Project Goal",
                    paragraphs: [
                        `With the "Menstrual Awareness" project, we aim to raise awareness in society by increasing consciousness that menstruation is a biological and natural cycle.`,
                        `We believe that it is critical for social transformation that not only women, but both women and men become conscious about this issue together.`,
                        `Menstruation is not a topic of shame, taboo, or something to be hidden — it is a natural part of life.`,
                        `However, "menstrual taboos" and "period poverty" still create serious social inequality both in the world and in Turkey.`,
                        `We launched this project to break this silence and say "we are not alone".`
                    ],
                },
                scope: {
                    title: "Project Scope",
                    items: [
                        { title: "1. Purpose:", text: "To start an open dialogue about menstruation in society, and draw attention to period poverty and taboo issues." },
                        { title: "2. Event:", text: `As part of the project, we organized the "Let's Talk for Menstrual Awareness" conference with R. Miray Reyhan as speaker. By openly discussing the menstrual experience with participants, we deepened awareness on both biological and social aspects.` },
                    ],
                    supporters: [
                        { name: "@kotexturkiye", url: "https://www.instagram.com/kotexturkiye", note: "Pad sponsorship and awareness support" },
                        { name: "@beije.co", url: "https://www.instagram.com/beijewomen/", note: "Pad sponsorship and awareness support" },
                        { name: "@peddonofficial", url: "https://www.instagram.com/peddonofficial", note: "Event support and participation" },
                    ],
                },
                impact: {
                    title: "Event Content and Impact",
                    paragraphs: [
                        "At the event, a taboo-free, sincere, and educational dialogue about menstruation was established with R. Miray Reyhan's impressive speech. Participants had the opportunity to share their own experiences on body awareness, period poverty, and social perceptions.",
                        "At the end of the event, pad distribution was carried out with sponsorship from @kotexturkiye and @beije.co, providing support at both material and symbolic levels. This step carried a powerful message to remind that access to menstrual products is a basic right, not a luxury."
                    ],
                },
                results: {
                    title: "Results and Impact",
                    paragraphs: [
                        "• Contributed to a culture of open discussion about menstruation at the societal level.",
                        "• Body awareness, the ability to speak without shame, and a sense of solidarity were strengthened among participants.",
                        "• With this event, the Hypatia community pioneered the spread of egalitarian and inclusive dialogues among young women and men in Turkey."
                    ]
                },
                gallery: [
                    { src: "/images/IMG_0664.JPG", alt: "Our team at the menstrual awareness event", caption: "" },
                    { src: "/images/IMG_0735.JPG", alt: "Another moment from the menstrual awareness event", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: `"Menstruation is not something to be ashamed of, it's something to talk about."`,
                    closing: "Learning together, toward tomorrows where we are aware together! ✨",
                },
            }
        }
    },
    {
        slug: "deprem-dayanisma-matematik-2023",
        imageUrl: "/images/h-1.jpeg",
        tr: {
            title: "Deprem Dayanışma Projesi (2023-2025)",
            description: "Şubat 2023 depremi sonrası 6, 7 ve 8. sınıf öğrencilerine yönelik ücretsiz ve online matematik eğitimi projesi.",
            detail: {
                heroTitle: "Deprem Dayanışma Projesi (2023-2025)",
                heroSubtitle: "Matematikle Umudu Yeniden Kuruyoruz",
                heroImageUrl: "/images/h-1.jpeg",
                categories: ["Eğitimde Fırsat Eşitliği", "Sosyal Sorumluluk", "Gönüllülük"],
                goal: {
                    title: "Projenin Amacı",
                    paragraphs: [
                        "Şubat 2023 depremi sonrasında eğitimde kesintiye uğrayan 6., 7. ve 8. sınıf öğrencilerine ücretsiz ve çevrimiçi matematik eğitimi sağlamak amacıyla bu programı başlattık.",
                        "Hızlı bir çözüm modeli olarak tasarlanan proje, Mart 2023'te hayata geçirildi ve ilk etapta üç ay sürmesi planlandı. Haziran 2023'teki ilk mezuniyet dönemine 100'ün üzerinde öğrenci katıldı. Hem öğrencilerden hem de gönüllü öğretmenlerden oldukça olumlu geri bildirimler alındı.",
                        "Elde edilen bu başarıların ardından program genişletilerek toplam 2,5 yıl boyunca devam etti. Haziran 2025'te tüm öğrencilerimizi liseye uğurlayarak projenin kapanışını büyük bir gururla gerçekleştirdik.",
                        "Bu süreçte amacımız yalnızca matematik öğretmek değil; aynı zamanda, afetin ardından öğrencilerin yanında olduğumuzu hissettirmekti. Toplamda 40'tan fazla gönüllü öğretmenle 300'ün üzerinde öğrenciye ulaştık."
                    ],
                },
                scope: {
                    title: "Projenin Kapsamı",
                    items: [
                        { title: "1. Hedef Kitle:", text: "Depremden etkilenen bölgelerdeki 6., 7. ve 8. sınıf öğrencileri." },
                        { title: "2. İçerik:", text: "Belirlenen yaş grubuna özel haftalık matematik dersleri düzenlenmiştir." },
                        { title: "3. Yöntem:", text: "Eğitimler, tamamen gönüllü öğretmenler aracılığıyla ücretsiz online platformlar küçük gruplar halinde gerçekleştirilmiştir." },
                        { title: "4. Süre:", text: "Mart 2023 - Haziran 2025 (2,5 yıl)." },
                        { title: "5. Platform ve Araçlar:", text: "Zoom, WhatsApp grupları ve dijital materyal paylaşım araçları kullanılmıştır." },
                        { title: "6. Ekip:", text: "Gönüllü matematik öğretmenleri, proje koordinatörleri ve teknik destekten oluşan 45+ kişilik bir ekip." }
                    ],
                },
                impact: {
                    title: "Proje Süreci ve Etki",
                    paragraphs: [
                        "Proje süresince öğrencilerin katılım ve devam oranları düzenli olarak takip edildi. Haftalık öğretmen gözlemleri doğrultusunda öğrenci ilerleme raporları hazırlandı.",
                        "Proje, yalnızca akademik destek değil; psikolojik dayanıklılık, sosyal bağ kurma ve öğrenme motivasyonu alanlarında da güçlü bir etki yarattı.",
                        "Gönüllü öğretmenler için de, kriz sonrası uzaktan eğitimde pedagojik dayanıklılık ve toplumsal etki yaratma açısından önemli bir öğrenme deneyimi sağladı."
                    ]
                },
                results: {
                    title: "Alınan Sonuçlar",
                    paragraphs: [
                        "Proje, kısa vadeli bir yardım girişimi olmaktan çıkarak uzun soluklu bir dayanışma ve öğrenme ekosistemine dönüştü. Öğrencilerin yalnızca matematik başarısı değil; özgüven, disiplin ve aidiyet duyguları da güçlendi.",
                        "Süreç boyunca toplanan veriler (öğrenci katılımı, öğretmen geri bildirimleri, oturum gözlemleri) akademik düzeyde analiz edilerek afet sonrası dijital öğrenme modellerine yönelik bir araştırma oluşturdu.",
                        `Bu analizlerin sonucu olarak ortaya çıkan çalışma, "From Post-Disaster Support to Educational Equity: Conceptualizing a Volunteer-Driven Online Peer-to-Peer Learning Ecosystem at Scale" başlıklı akademik makaleye dönüştürüldü.`,
                        "Makale, gönüllülük temelli çevrimiçi akran eğitimi modellerinin sürdürülebilirliği, ölçeklenebilirliği ve eğitimde fırsat eşitliğine katkısı üzerine özgün bir kuramsal çerçeve sundu."
                    ]
                },
                achievements: {
                    title: "Uluslararası Başarı 🌍",
                    paragraphs: [
                        "Projemiz bir araştırmaya dönüştü ve uluslararası ISD 2025 Konferansı (Information Systems Development)'nda En İyi Makale Ödülü'nde ikinci sırayı kazandı! 🏆",
                        "Topluluk kurucumuz Öykü Kaplan, Belgrad'daki konferansta ödülünü alarak projemizin hikâyesini uluslararası akademiyle paylaştı.",
                        "Makale, deprem sonrasında gönüllülük temelli başlatılan çevrimiçi akranlar arası öğrenme girişiminin; eğitimde eşitliği destekleyen sürdürülebilir ve ölçeklenebilir bir ekosisteme dönüşümünü kavramsallaştırıyor. Bu gelişmeyle birlikte projemiz, yalnızca yerelde değil, uluslararası ölçekte de ses getirmeye başladı. 🌟"
                    ]
                },
                gallery: [
                    { src: "/images/h-2.jpeg", alt: "Deprem Dayanışma Projesi (2023-2025) ders oturumu", caption: "" },
                    { src: "/images/h-3.jpeg", alt: "Deprem Dayanışma Projesi (2023-2025) gönüllü buluşması", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: "Eğitim bir ayrıcalık değil, bir dayanışma biçimidir.",
                    closing: "Deprem Dayanışma Projesi, afet sonrası eğitimde topluluk temelli dayanıklılığın, dijital gönüllülüğün ve akran destekli öğrenmenin gücünü ortaya koydu."
                }
            }
        },
        en: {
            title: "Earthquake Solidarity Project (2023-2025)",
            description: "A free online mathematics education project for 6th, 7th, and 8th grade students after the February 2023 earthquake.",
            detail: {
                heroTitle: "Earthquake Solidarity Project (2023-2025)",
                heroSubtitle: "Rebuilding Hope with Mathematics",
                heroImageUrl: "/images/h-1.jpeg",
                categories: ["Educational Equity", "Social Responsibility", "Volunteering"],
                goal: {
                    title: "Project Goal",
                    paragraphs: [
                        "We launched this program to provide free online mathematics education to 6th, 7th, and 8th grade students whose education was interrupted after the February 2023 earthquake.",
                        "Designed as a rapid solution model, the project was launched in March 2023 and was initially planned to last three months. Over 100 students participated in the first graduation period in June 2023. Very positive feedback was received from both students and volunteer teachers.",
                        "Following these achievements, the program was expanded and continued for a total of 2.5 years. In June 2025, we proudly concluded the project by seeing all our students off to high school.",
                        "Throughout this process, our goal was not just to teach mathematics; but also to make students feel that we were by their side after the disaster. In total, we reached over 300 students with more than 40 volunteer teachers."
                    ],
                },
                scope: {
                    title: "Project Scope",
                    items: [
                        { title: "1. Target Audience:", text: "6th, 7th, and 8th grade students in earthquake-affected regions." },
                        { title: "2. Content:", text: "Weekly mathematics lessons tailored to the specific age group were organized." },
                        { title: "3. Method:", text: "Training was conducted in small groups through free online platforms entirely by volunteer teachers." },
                        { title: "4. Duration:", text: "March 2023 - June 2025 (2.5 years)." },
                        { title: "5. Platforms and Tools:", text: "Zoom, WhatsApp groups, and digital material sharing tools were used." },
                        { title: "6. Team:", text: "A team of 45+ people consisting of volunteer math teachers, project coordinators, and technical support." }
                    ],
                },
                impact: {
                    title: "Project Process and Impact",
                    paragraphs: [
                        "Throughout the project, student participation and attendance rates were regularly monitored. Student progress reports were prepared based on weekly teacher observations.",
                        "The project created a strong impact not only in academic support but also in psychological resilience, social bonding, and learning motivation.",
                        "For volunteer teachers as well, it provided an important learning experience in terms of pedagogical resilience and creating social impact in post-crisis distance education."
                    ]
                },
                results: {
                    title: "Results Achieved",
                    paragraphs: [
                        "The project evolved from a short-term relief initiative into a long-term solidarity and learning ecosystem. Not only the students' math success, but also their self-confidence, discipline, and sense of belonging were strengthened.",
                        "Data collected throughout the process (student participation, teacher feedback, session observations) was analyzed at an academic level, creating research on post-disaster digital learning models.",
                        `The study that emerged from these analyses was transformed into an academic paper titled "From Post-Disaster Support to Educational Equity: Conceptualizing a Volunteer-Driven Online Peer-to-Peer Learning Ecosystem at Scale".`,
                        "The paper presented an original theoretical framework on the sustainability, scalability, and contribution to educational equity of volunteer-based online peer education models."
                    ]
                },
                achievements: {
                    title: "International Achievement 🌍",
                    paragraphs: [
                        "Our project was transformed into research and won second place in the Best Paper Award at the international ISD 2025 Conference (Information Systems Development)! 🏆",
                        "Our community founder Öykü Kaplan received the award at the conference in Belgrade and shared the story of our project with the international academic community.",
                        "The paper conceptualizes the transformation of an online peer-to-peer learning initiative, launched on a volunteer basis after the earthquake, into a sustainable and scalable ecosystem supporting educational equity. With this development, our project has started to make an impact not only locally but also on an international scale. 🌟"
                    ]
                },
                gallery: [
                    { src: "/images/h-2.jpeg", alt: "Earthquake Solidarity Project (2023-2025) lesson session", caption: "" },
                    { src: "/images/h-3.jpeg", alt: "Earthquake Solidarity Project (2023-2025) volunteer meeting", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: "Education is not a privilege, it is a form of solidarity.",
                    closing: "The Earthquake Solidarity Project demonstrated the power of community-based resilience, digital volunteering, and peer-supported learning in post-disaster education."
                }
            }
        }
    },
    {
        slug: "deprem-mentorluk-programi",
        imageUrl: "/images/h-6.jpeg",
        tr: {
            title: "Depremden Etkilenmiş Liseliler için Mentorluk Programı",
            description: "Depremden etkilenen lise öğrencilerinin akademik ve duygusal ihtiyaçlarını desteklemek için gönüllü mentorlarla eşleştirildiği, uzun soluklu bir gelişim programı.",
            detail: {
                heroTitle: "Hypatia Mentorluk Programı",
                heroSubtitle: "Depremden Etkilenen Gençlerle Güçlü Bir Geleceğe",
                heroImageUrl: "/images/h-6.jpeg",
                categories: ["Eğitim", "Mentorluk", "Gönüllülük", "Gençlik Güçlenmesi"],
                goal: {
                    title: "Arka Plan ve Amacımız",
                    paragraphs: [
                        "Depremin üzerinden iki yılı aşkın süre geçti, ancak hâlâ 650.000'den fazla insan konteynerlerde yaşıyor. Bu yalnızca bir barınma sorunu değil — aynı zamanda eğitimdeki eşitsizliklerin en somut yansıması. Hypatia Topluluğu olarak bu gerçeği unutmuyor, dayanışmamızı her gün büyütüyoruz.",
                        "2023 yılında başlattığımız Deprem Dayanışma Projesi ile yüzlerce öğrencinin eğitim yolculuğuna eşlik ettik; onları liseye uğurlayarak projeyi başarıyla tamamladık. Şimdi bu yolculuğu Mentorluk Programı ile sürdürüyoruz — çünkü inanıyoruz ki destek, sadece okul kapısında bitmez. 🌱",
                        "Bu programın amacı, her çocuğun ve gencin, koşullar ne olursa olsun, güvenli, umut dolu ve güçlendirici bir eğitim yolculuğu yaşamasını sağlamak. Depremden etkilenen liseli gençlerin yeniden motivasyon kazanmalarına, üniversite hayallerine sağlam adımlarla ilerlemesine ve potansiyellerini keşfetmelerine destek olmayı hedefliyoruz.",
                        "Mentorluk Programı, yalnızca bilgi aktarımı değil — ilham, yol arkadaşlığı ve dayanışma anlamına geliyor. 💫"
                    ]
                },
                scope: {
                    title: "Projenin Kapsamı",
                    items: [
                        { title: "Hedef Kitle:", text: "Depremden etkilenen bölgelerde öğrenim gören 9., 10. ve 11. sınıf öğrencileri (menteeler)." },
                        { title: "Mentor Profili:", text: "Gönüllü üniversite öğrencileri ve yetişkin mentorlar, deneyimleriyle gençlere rehberlik edecek." },
                        { title: "İçerik:", text: "3 ay sürecek bu programda mentorlar, öğrencilerin akademik hedeflerine ulaşmalarına destek olacak; ders çalışma yöntemleri, motivasyon, öz farkındalık ve gelecek planlaması gibi alanlarda rehberlik sağlayacak." },
                        { title: "Yaklaşım:", text: "Öğrencilerin kendilerini özgürce ifade edebilecekleri, güvenli ve kapsayıcı bir iletişim alanı oluşturulacak. Amaç, yaşanan zorlukların geleceğin önüne geçmesine izin vermemek — umudu ve özgüveni yeniden inşa etmek." }
                    ]
                },
                impact: {
                    title: "Programın Başlangıcı: Mentorlarımızla İlk Buluşma ✨",
                    paragraphs: [
                        "Hypatia Topluluğu olarak yürüttüğümüz Depremden Etkilenen Liseli Öğrenciler için Mentorluk Programı ile 3 ay sürecek yolculuğumuza 48 mentor ve 48 mentee ile başladık!",
                        "Bu yolculuk, sadece bilgi paylaşımı değil; umut, ilham ve dayanışma demek. 💜",
                        "Mentorlarımız, kendi deneyimleriyle gençlere ışık tutacak, onlara destek, yol arkadaşlığı ve güç sunacak."
                    ]
                },
                results: {
                    title: "Beklenen Sonuçlar",
                    items: [
                        {
                            title: "Kısa Vadede",
                            points: [
                                "Gençlerin eğitim motivasyonu, özgüveni ve hedef bilinci artar.",
                                "Mentor-mentee eşleşmeleri sayesinde güçlü bir dayanışma ağı kurulur."
                            ]
                        },
                        {
                            title: "Uzun Vadede",
                            points: [
                                "Eğitime erişimde fırsat eşitliği güçlenir.",
                                "Üniversiteye hazırlık süreçleri daha bilinçli ve planlı ilerler.",
                                "Gönüllülük bilinci ve toplumsal sorumluluk anlayışı yaygınlaşır."
                            ]
                        }
                    ]
                },
                gallery: [
                    { src: "/images/h-4.png", alt: "Mentorluk programı katılımcıları", caption: "" },
                    { src: "/images/h-5.png", alt: "Mentor ve öğrencinin birlikte çalışması", caption: "", objectPosition: "40% center" }
                ],
                finalMessage: {
                    title: "",
                    quote: "✨ Gönüllü Mentor Ol, Geleceğin Yolunu Aydınlat! ✨",
                    closing: ""
                }
            }
        },
        en: {
            title: "Mentorship Program for Earthquake-Affected High School Students",
            description: "A long-term development program where earthquake-affected high school students are paired with volunteer mentors to support their academic and emotional needs.",
            detail: {
                heroTitle: "Hypatia Mentorship Program",
                heroSubtitle: "Toward a Strong Future with Earthquake-Affected Youth",
                heroImageUrl: "/images/h-6.jpeg",
                categories: ["Education", "Mentorship", "Volunteering", "Youth Empowerment"],
                goal: {
                    title: "Background and Our Purpose",
                    paragraphs: [
                        "More than two years have passed since the earthquake, but over 650,000 people still live in containers. This is not just a housing problem — it is also the most concrete reflection of inequalities in education. As Hypatia Community, we do not forget this reality and we grow our solidarity every day.",
                        "With the Earthquake Solidarity Project we started in 2023, we accompanied hundreds of students on their educational journey; we successfully completed the project by seeing them off to high school. Now we continue this journey with the Mentorship Program — because we believe that support doesn't end at the school door. 🌱",
                        "The purpose of this program is to ensure that every child and young person, regardless of circumstances, has a safe, hopeful, and empowering educational journey. We aim to support earthquake-affected high school students in regaining motivation, taking solid steps toward their university dreams, and discovering their potential.",
                        "The Mentorship Program is not just about knowledge transfer — it means inspiration, companionship, and solidarity. 💫"
                    ]
                },
                scope: {
                    title: "Project Scope",
                    items: [
                        { title: "Target Audience:", text: "9th, 10th, and 11th grade students (mentees) studying in earthquake-affected regions." },
                        { title: "Mentor Profile:", text: "Volunteer university students and adult mentors will guide youth with their experiences." },
                        { title: "Content:", text: "In this 3-month program, mentors will support students in achieving their academic goals; providing guidance in areas such as study methods, motivation, self-awareness, and future planning." },
                        { title: "Approach:", text: "A safe and inclusive communication space will be created where students can express themselves freely. The goal is not to let difficulties stand in the way of the future — to rebuild hope and self-confidence." }
                    ]
                },
                impact: {
                    title: "Program Launch: Our First Meeting with Mentors ✨",
                    paragraphs: [
                        "With the Mentorship Program for Earthquake-Affected High School Students run by Hypatia Community, we started our 3-month journey with 48 mentors and 48 mentees!",
                        "This journey is not just about sharing knowledge; it means hope, inspiration, and solidarity. 💜",
                        "Our mentors will shine a light on youth with their own experiences, offering them support, companionship, and strength."
                    ]
                },
                results: {
                    title: "Expected Results",
                    items: [
                        {
                            title: "Short Term",
                            points: [
                                "Youth's educational motivation, self-confidence, and goal awareness increase.",
                                "A strong solidarity network is established through mentor-mentee pairings."
                            ]
                        },
                        {
                            title: "Long Term",
                            points: [
                                "Equal opportunity in access to education is strengthened.",
                                "University preparation processes progress more consciously and planned.",
                                "Volunteering awareness and sense of social responsibility become widespread."
                            ]
                        }
                    ]
                },
                gallery: [
                    { src: "/images/h-4.png", alt: "Mentorship program participants", caption: "" },
                    { src: "/images/h-5.png", alt: "Mentor and student working together", caption: "", objectPosition: "40% center" }
                ],
                finalMessage: {
                    title: "",
                    quote: "✨ Become a Volunteer Mentor, Light the Path to the Future! ✨",
                    closing: ""
                }
            }
        }
    },
    {
        slug: "youtube-genclik-haritasi",
        imageUrl: "/images/h-8.jpeg",
        tr: {
            title: "Youtube: Gençlik Haritası",
            description: "Yurtdışına çıkan gençlerin ilham veren yolculuklarını ve deneyimlerini paylaştığı video serisi.",
            detail: {
                heroTitle: "Gençlik Haritası",
                heroSubtitle: "Yurtdışına Çıkan Gençlerin İlham Veren Yolculukları",
                heroImageUrl: "/images/h-8.jpeg",
                categories: ["Gençlik", "Uluslararası Fırsatlar", "Medya", "Gönüllülük"],
                goal: {
                    title: "Projenin Amacı",
                    paragraphs: [
                        "Gençlik Haritası, Hypatia topluluğu tarafından hayata geçirilen bir video serisidir.",
                        "Bu serinin amacı, yurtdışına çıkan gençlerin deneyimlerini görünür kılmak, gençler arasında ilham paylaşımını güçlendirmek ve uluslararası gönüllülük, eğitim ve kültürel değişim fırsatları hakkında farkındalık yaratmaktır.",
                        `Seri, "Bir gün ben de yapabilir miyim?" diyen gençlere cesaret, yol göstericilik ve umut aşılamayı hedefliyor. 🌍✨`
                    ]
                },
                scope: {
                    title: "Projenin Kapsamı",
                    items: [
                        { title: "1. Hedef Kitle:", text: "18–30 yaş arası gençler, özellikle uluslararası deneyim kazanmak, gönüllülük yapmak veya Avrupa fırsatlarını değerlendirmek isteyenler." },
                        { title: "2. İçerik:", text: "Her bölümde yurtdışına çıkmış bir gencin hikâyesine yer veriliyor. Katılımcılar; Avrupa Dayanışma Programı (ESC), Erasmus+ projeleri, stajlar veya gönüllülük programları aracılığıyla yaşadıkları deneyimleri anlatıyor." },
                        {
                            title: "3. Yöntem:",
                            points: [
                                "YouTube ve sosyal medya platformlarında yayınlanan kısa video röportajlar 🎥",
                                "Katılımcıların kendi sesinden gerçek hikâyeler ve ilham veren deneyimler 💬",
                                "Gençlerin karşılaştığı zorluklardan öğrendikleri dersler ve yeni başlayanlara tavsiyeler 🌱"
                            ],
                        },
                        { title: "4. Yaygınlaştırma:", text: `Videolar Hypatia'nın dijital kanallarında paylaşılırken; her hikâye, gençlerin birbirine ilham olabileceği bir "deneyim haritası" oluşturuyor.` },
                    ],
                },
                results: {
                    title: "Beklenen Etkiler ve Hedefler",
                    items: [
                        {
                            title: "",
                            points: [
                                "Gençler arasında uluslararası fırsatlara erişim konusunda farkındalık yaratmak.",
                                "Gönüllülük ve kültürlerarası öğrenme kavramlarını yaygınlaştırmak.",
                                "Gerçek hikâyeler üzerinden özgüven, ilham ve dayanışma duygusunu güçlendirmek.",
                                "Türkiye'den daha fazla gencin Avrupa gençlik programlarına katılımını artırmak."
                            ]
                        }
                    ]
                },
                impact: {
                    title: "İletişim Dili ve Yaklaşım",
                    paragraphs: [
                        `Gençlik Haritası'nın dili, samimi, ilham verici ve kapsayıcıdır. Her video, izleyiciye şu mesajı verir: "Sen de yapabilirsin." 💪`,
                        "Seri boyunca mizah, içtenlik ve cesaret duygusu öne çıkar. Hypatia, bu projeyle gençlerin kendi hikâyelerini anlatabilecekleri güvenli ve destekleyici bir alan yaratır."
                    ]
                },
                gallery: [
                    { src: "/images/h-8.jpeg", alt: "Genç bir kadın bilgisayar başında gülümsüyor", caption: "" },
                    { src: "/images/h-11.jpeg", alt: "Gençlik Haritası proje buluşması", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: `"Gençlik Haritası: Hikâyeni Paylaş, İlham Ol."`,
                    closing: ""
                },
            }
        },
        en: {
            title: "YouTube: Youth Map",
            description: "A video series where young people who went abroad share their inspiring journeys and experiences.",
            detail: {
                heroTitle: "Youth Map",
                heroSubtitle: "Inspiring Journeys of Young People Going Abroad",
                heroImageUrl: "/images/h-8.jpeg",
                categories: ["Youth", "International Opportunities", "Media", "Volunteering"],
                goal: {
                    title: "Project Goal",
                    paragraphs: [
                        "Youth Map is a video series brought to life by the Hypatia community.",
                        "The purpose of this series is to make the experiences of young people who went abroad visible, strengthen inspiration sharing among youth, and raise awareness about international volunteering, education, and cultural exchange opportunities.",
                        `The series aims to instill courage, guidance, and hope in young people who say "Can I do this one day too?" 🌍✨`
                    ]
                },
                scope: {
                    title: "Project Scope",
                    items: [
                        { title: "1. Target Audience:", text: "Young people aged 18-30, especially those who want to gain international experience, volunteer, or take advantage of European opportunities." },
                        { title: "2. Content:", text: "Each episode features the story of a young person who has gone abroad. Participants share their experiences through the European Solidarity Corps (ESC), Erasmus+ projects, internships, or volunteering programs." },
                        {
                            title: "3. Method:",
                            points: [
                                "Short video interviews published on YouTube and social media platforms 🎥",
                                "Real stories and inspiring experiences in the participants' own voices 💬",
                                "Lessons learned from the challenges young people face and advice for beginners 🌱"
                            ],
                        },
                        { title: "4. Dissemination:", text: `While videos are shared on Hypatia's digital channels, each story creates an "experience map" where young people can inspire each other.` },
                    ],
                },
                results: {
                    title: "Expected Impacts and Goals",
                    items: [
                        {
                            title: "",
                            points: [
                                "Raise awareness about access to international opportunities among youth.",
                                "Spread the concepts of volunteering and intercultural learning.",
                                "Strengthen feelings of self-confidence, inspiration, and solidarity through real stories.",
                                "Increase participation of more young people from Turkey in European youth programs."
                            ]
                        }
                    ]
                },
                impact: {
                    title: "Communication Language and Approach",
                    paragraphs: [
                        `The language of Youth Map is sincere, inspiring, and inclusive. Each video gives the viewer the message: "You can do it too." 💪`,
                        "Throughout the series, humor, sincerity, and a sense of courage stand out. With this project, Hypatia creates a safe and supportive space where young people can tell their own stories."
                    ]
                },
                gallery: [
                    { src: "/images/h-8.jpeg", alt: "A young woman smiling at the computer", caption: "" },
                    { src: "/images/h-11.jpeg", alt: "Youth Map project meeting", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: `"Youth Map: Share Your Story, Be an Inspiration."`,
                    closing: ""
                },
            }
        }
    },
    {
        slug: "deprem-dayanisma-projesi-matematik",
        imageUrl: "/images/h-9.jpeg",
        tr: {
            title: "Deprem Dayanışma Projesi (2025)",
            description: "Depremden etkilenen 6, 7 ve 8. sınıf öğrencilerine yönelik ücretsiz ve online matematik eğitimi projesi.",
            detail: {
                heroTitle: "Deprem Dayanışma Projesi (2025)",
                heroSubtitle: "Ücretsiz ve Online Matematik Eğitimi",
                heroImageUrl: "/images/h-9.jpeg",
                categories: ["Eğitim", "Sosyal Dayanışma", "Afet Sonrası Destek"],
                goal: {
                    title: "Projenin Amacı",
                    paragraphs: [
                        "Depremin üzerinden iki yılı aşkın süre geçti, ancak hâlâ 650.000'den fazla insan konteynerlerde yaşıyor. Bu yalnızca bir barınma sorunu değil — aynı zamanda eğitimdeki eşitsizliklerin en somut yansıması.",
                        "Hypatia Topluluğu olarak bu gerçeği unutmuyor, dayanışmamızı her geçen gün büyütüyoruz. Daha önce büyük bir özveri ve başarıyla yürüttüğümüz Deprem Dayanışma Projesini bu yıl yeniden hayata geçiriyoruz.",
                        "Projenin amacı, depremden etkilenen 6., 7. ve 8. sınıf öğrencilerine ücretsiz ve online matematik eğitimi sunarak onların akademik, duygusal ve sosyal olarak güçlenmelerine destek olmaktır.",
                        "Bizim için eğitim bir ayrıcalık değil, dayanışmanın en güçlü biçimidir. Bu proje yalnızca ders desteği değil; gençlerin yeniden umut kurabildikleri, kendilerini güvende hissedebildikleri bir öğrenme alanı yaratır."
                    ],
                },
                scope: {
                    title: "Projenin Kapsamı",
                    items: [
                        { title: "Hedef Kitle:", text: "Depremden etkilenen bölgelerde öğrenim gören 6., 7. ve 8. sınıf öğrencileri." },
                        { title: "Yöntem:", text: "Eğitimler tamamen çevrimiçi platformlar (Zoom, Google Meet) üzerinden yürütülmektedir. Her öğrenci grubu, gönüllü matematik öğretmenleri tarafından haftalık derslerle desteklenmektedir." },
                        { title: "Süre:", text: "Proje, Mart 2023'te başlatılmış; 2,5 yıl boyunca kesintisiz sürdürülmüş ve yüzlerce öğrencinin liseye geçişine eşlik etmiştir. 2025 itibarıyla yeni dönem başlamış olup, aynı modelle 120+ yeni öğrenciye ulaşılmıştır." },
                        { title: "Kapsam ve İçerik:", text: "Matematik müfredatına uygun konu anlatımları, soru çözümleri, deneme sınavları ve mentorluk temelli öğrenme desteği sağlanmaktadır. Öğrenciler, yalnızca akademik olarak değil; özgüven, motivasyon ve aidiyet açısından da desteklenmektedir." }
                    ],
                },
                impact: {
                    title: "Proje Süreci",
                    paragraphs: [
                        "1. Başlangıç (2023 Mart): Kriz sonrası hızlı müdahale modeliyle pilot program başlatıldı.",
                        "2. Büyüme (2023–2024): 40'tan fazla gönüllü öğretmenle 300'ü aşkın öğrenciye ulaşıldı.",
                        "3. Tamamlanma (2025 Haziran): İlk proje başarıyla tamamlanarak öğrenciler liseye uğurlandı.",
                        "4. Yeniden Başlangıç (2025 Ekim): Yeni dönemde 120+ öğrenciyle program yeniden başlatıldı."
                    ],
                },
                results: {
                    title: "Beklenen Sonuçlar",
                    paragraphs: [
                        "• Öğrencilerin matematik başarısında ve özgüveninde artış",
                        "• Depremden etkilenen gençlerin eğitim sistemine yeniden entegrasyonu",
                        "• Gönüllü eğitim ekosistemiyle sürdürülebilir toplumsal dayanışma",
                        "• Eğitimde fırsat eşitliğine katkı"
                    ],
                },
                gallery: [
                    { src: "/images/h-9.jpeg", alt: "Deprem Dayanışma Projesi (2025) öğrenci buluşması", caption: "" },
                    { src: "/images/h-10.jpeg", alt: "Deprem Dayanışma Projesi (2025) dayanışma anı", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: "Deprem Dayanışma Projesi, afet sonrası eğitimde dayanışma temelli bir öğrenme modeli sunarak yüzlerce gencin hayatına dokunmuştur. Bu proje, matematiği bir ders olmaktan çıkarıp umudu yeniden inşa etmenin dili hâline getirmiştir. Hypatia Topluluğu olarak, bu dayanışmayı sürdürmeye ve daha fazla öğrenciye ulaşmaya kararlıyız. Çünkü biliyoruz ki:",
                    closing: "Birlikte öğrenmek, birlikte iyileşmektir. 💜"
                }
            }
        },
        en: {
            title: "Earthquake Solidarity Project (2025)",
            description: "A free online mathematics education project for 6th, 7th, and 8th grade students affected by the earthquake.",
            detail: {
                heroTitle: "Earthquake Solidarity Project (2025)",
                heroSubtitle: "Free and Online Mathematics Education",
                heroImageUrl: "/images/h-9.jpeg",
                categories: ["Education", "Social Solidarity", "Post-Disaster Support"],
                goal: {
                    title: "Project Goal",
                    paragraphs: [
                        "More than two years have passed since the earthquake, but over 650,000 people still live in containers. This is not just a housing problem — it is also the most concrete reflection of inequalities in education.",
                        "As Hypatia Community, we do not forget this reality and we grow our solidarity every day. We are relaunching the Earthquake Solidarity Project, which we previously ran with great dedication and success.",
                        "The purpose of the project is to support the academic, emotional, and social empowerment of 6th, 7th, and 8th grade students affected by the earthquake by providing free online mathematics education.",
                        "For us, education is not a privilege; it is the strongest form of solidarity. This project is not just lesson support; it creates a learning space where young people can rebuild hope and feel safe."
                    ],
                },
                scope: {
                    title: "Project Scope",
                    items: [
                        { title: "Target Audience:", text: "6th, 7th, and 8th grade students studying in earthquake-affected regions." },
                        { title: "Method:", text: "Training is conducted entirely through online platforms (Zoom, Google Meet). Each student group is supported by volunteer math teachers with weekly lessons." },
                        { title: "Duration:", text: "The project was launched in March 2023; continued uninterrupted for 2.5 years and accompanied hundreds of students' transition to high school. As of 2025, a new term has begun, reaching 120+ new students with the same model." },
                        { title: "Scope and Content:", text: "Topic explanations aligned with the math curriculum, problem solving, practice exams, and mentorship-based learning support are provided. Students are supported not only academically but also in terms of self-confidence, motivation, and belonging." }
                    ],
                },
                impact: {
                    title: "Project Process",
                    paragraphs: [
                        "1. Launch (March 2023): Pilot program started with a rapid response model after the crisis.",
                        "2. Growth (2023–2024): Reached over 300 students with more than 40 volunteer teachers.",
                        "3. Completion (June 2025): First project successfully completed, students sent off to high school.",
                        "4. Relaunch (October 2025): Program relaunched in the new term with 120+ students."
                    ],
                },
                results: {
                    title: "Expected Results",
                    paragraphs: [
                        "• Increase in students' math success and self-confidence",
                        "• Reintegration of earthquake-affected youth into the education system",
                        "• Sustainable social solidarity with volunteer education ecosystem",
                        "• Contribution to equal opportunity in education"
                    ],
                },
                gallery: [
                    { src: "/images/h-9.jpeg", alt: "Earthquake Solidarity Project (2025) student meeting", caption: "" },
                    { src: "/images/h-10.jpeg", alt: "Earthquake Solidarity Project (2025) solidarity moment", caption: "" }
                ],
                finalMessage: {
                    title: "",
                    quote: "The Earthquake Solidarity Project has touched the lives of hundreds of young people by offering a solidarity-based learning model in post-disaster education. This project transformed math from just a subject into a language for rebuilding hope. As Hypatia Community, we are determined to continue this solidarity and reach more students. Because we know that:",
                    closing: "Learning together is healing together. 💜"
                }
            }
        }
    },
    {
        slug: "liseli-talks",
        imageUrl: "/images/h-7.png",
        tr: {
            title: "Liseli Talks",
            description: "Lise öğrencilerinin kendi sesleriyle ilham veren hikayelerini paylaştığı, askıya alınmış bir platform projesi.",
            detail: {
                heroTitle: "Liseli Talks",
                heroSubtitle: "Gençlerin Sesi, Geleceğin Hikayesi",
                heroImageUrl: "/images/h-7.png",
                categories: ["Gençlik", "Liderlik", "Topluluk", "İlham"],
                goal: {
                    title: "Projenin Vizyonu ve Amacı",
                    paragraphs: [
                        `📍 Askıya Alındı: "Liseli Talks" projesi daha önce kamuoyuna duyurulmuş olup, planlama ve uygulama süreçlerindeki yeniden yapılandırma çalışmaları nedeniyle geçici olarak askıya alınmıştır. Hypatia Topluluğu, projenin içeriğini güçlendirmek, kapsamını genişletmek ve sürdürülebilir bir etki yaratmak amacıyla geliştirme sürecine devam etmektedir.`,
                        `"Liseli Talks", 15–18 yaş aralığındaki gençlerin kendi sesleriyle görünür olabilecekleri, fikirlerini paylaşabilecekleri ve birbirlerine ilham verebilecekleri bir platform olarak tasarlandı. Bu proje, gençlerin yalnızca dinleyici değil; anlatan, düşünen ve dönüştüren bireyler olmaları için oluşturulmuş özgün bir sahne niteliğindedir. 🌟`,
                        "Çünkü biz inanıyoruz ki: Her genç bir hikâyeye sahiptir — ve o hikâye başkalarına yön verebilir.",
                        `"Liseli Talks"un amacı, lise öğrencilerinin kendi becerilerini, tutkularını ve fikirlerini paylaşarak özgüven kazanmalarını ve topluma katkı sunmalarını desteklemektir. Proje, gençlerin liderlik ve iletişim becerilerini güçlendirmeyi, özgür bir ifade alanı kazanmalarını, kültürel ve sosyal çeşitlilik içinde birbirlerinden öğrenmelerini, ve kendi potansiyellerini fark ederek ilham veren hikâyeler ortaya koymalarını hedefler.`
                    ],
                },
                scope: {
                    title: "Projenin Kapsamı",
                    items: [
                        { title: "Hedef Kitle:", text: "15–18 yaş aralığındaki lise öğrencileri." },
                        {
                            title: "İçerik:",
                            points: [
                                "Kısa bireysel konuşmalar (talks) ve paylaşım etkinlikleri.",
                                "İfade becerilerini ve sahne hakimiyetini geliştiren atölye çalışmaları.",
                                "Dijital yayın ve video serileri aracılığıyla gençlerin hikâyelerinin görünür kılınması."
                            ]
                        },
                        { title: "Yöntem:", text: `"Liseli Talks", başlangıçta dört haftalık bir pilot faz olarak tasarlanmıştır. Bu pilot uygulamanın ardından, proje sonuçlarına göre daha uzun süreli ve yüz yüze oturumlarla genişletilmesi planlanmaktadır.` }
                    ]
                },
                impact: {
                    title: "Gelecek Planı",
                    paragraphs: [
                        `Hypatia Topluluğu, "Liseli Talks"un yeniden başlatılacağı dönemde daha geniş bir gençlik kitlesine ulaşmayı, dijital yayın formatını zenginleştirmeyi ve gençlerin hikâyelerini ulusal ölçekte duyurmayı hedeflemektedir.`
                    ]
                },
                results: {
                    title: "",
                    paragraphs: []
                },
                finalMessage: {
                    title: "",
                    closing: "",
                    quote: "Hypatia olarak, gençlerin potansiyeline ve söz hakkına olan inancımız tam."
                }
            }
        },
        en: {
            title: "High School Talks",
            description: "A suspended platform project where high school students share inspiring stories in their own voices.",
            detail: {
                heroTitle: "High School Talks",
                heroSubtitle: "The Voice of Youth, The Story of the Future",
                heroImageUrl: "/images/h-7.png",
                categories: ["Youth", "Leadership", "Community", "Inspiration"],
                goal: {
                    title: "Project Vision and Purpose",
                    paragraphs: [
                        `📍 Suspended: The "High School Talks" project was previously announced to the public and has been temporarily suspended due to restructuring work in planning and implementation processes. Hypatia Community continues the development process to strengthen the project's content, expand its scope, and create a sustainable impact.`,
                        `"High School Talks" was designed as a platform where young people aged 15-18 can be visible in their own voices, share their ideas, and inspire each other. This project is a unique stage created for young people to be not just listeners but individuals who tell, think, and transform. 🌟`,
                        "Because we believe: Every young person has a story — and that story can guide others.",
                        `The purpose of "High School Talks" is to support high school students in gaining self-confidence and contributing to society by sharing their own skills, passions, and ideas. The project aims to strengthen young people's leadership and communication skills, help them gain a space for free expression, learn from each other in cultural and social diversity, and create inspiring stories by discovering their own potential.`
                    ],
                },
                scope: {
                    title: "Project Scope",
                    items: [
                        { title: "Target Audience:", text: "High school students aged 15-18." },
                        {
                            title: "Content:",
                            points: [
                                "Short individual talks and sharing events.",
                                "Workshop activities that develop expression skills and stage presence.",
                                "Making young people's stories visible through digital broadcasts and video series."
                            ]
                        },
                        { title: "Method:", text: `"High School Talks" was initially designed as a four-week pilot phase. Following this pilot implementation, it is planned to be expanded with longer-term and face-to-face sessions according to the project results.` }
                    ]
                },
                impact: {
                    title: "Future Plan",
                    paragraphs: [
                        `Hypatia Community aims to reach a wider youth audience, enrich the digital broadcast format, and announce young people's stories on a national scale when "High School Talks" is relaunched.`
                    ]
                },
                results: {
                    title: "",
                    paragraphs: []
                },
                finalMessage: {
                    title: "",
                    closing: "",
                    quote: "At Hypatia, our belief in the potential and voice of young people is absolute."
                }
            }
        }
    }
];
