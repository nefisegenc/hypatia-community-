// src/data/projects.ts

type Supporter = {
    name: string;
    url: string; // Instagram veya web sitesi linki
    note: string; // Sponsorluk notu
};

type GalleryImage = {
    src: string;
    alt: string;
    caption: string;
    objectPosition?: string;
};

// Ana Proje Tipini güncelleyelim
export type Project = {
    slug: string;
    // Ana sayfadaki proje kartları için bilgiler
    title: string;
    description: string;
    imageUrl: string;

    // Proje detay sayfası için tüm zengin içerik
    detail: {
        heroTitle: string;
        heroSubtitle: string;
        heroImageUrl: string;
        categories: string[];

        goal: {
            title: string;
            paragraphs: string[];
        };
        scope?: { // Opsiyonel bölüm
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
        achievements?: { // Opsiyonel başarılar bölümü
            title: string;
            paragraphs: string[];
        };
        gallery?: GalleryImage[]; // Opsiyonel galeri
        finalMessage?: {
            title: string;
            quote: string;
            closing: string;
        };
    }
};

export const projects: Project[] = [
    {
        slug: "regl-farkindaligi-egitimi",
        title: "Regl Farkındalığı Projesi",
        description: "Toplumda regl döngüsü hakkındaki tabuları yıkarak, gençler başta olmak üzere tüm bireylerin doğru bilgiye ulaşmasını sağlayan bir farkındalık projesi.",
        imageUrl: "/IMG_0771.JPG",
        detail: {
            heroTitle: "Regl Farkındalığı",
            heroSubtitle: "Konuşalım, Normalleştirelim, Güçlenelim",
            heroImageUrl: "/IMG_0771.JPG",
            categories: ["Toplumsal Farkındalık", "Sağlık"],
            goal: {
                title: "Projenin Amacı",
                paragraphs: [
                    "“Regl Farkındalığı” projesiyle, reglin biyolojik ve doğal bir döngü olduğu bilincini artırarak toplumda farkındalık yaratmayı hedefliyoruz.", "Bu konuda yalnızca kadınların değil, kadın ve erkeklerin birlikte bilinçlenmesinin toplumsal dönüşüm için kritik olduğuna inanıyoruz.", "Regl; utanç, tabu ya da gizlenmesi gereken bir konu değil — hayatın doğal bir parçasıdır.", "Ancak “regl tabuları” ve “regl yoksulluğu”, hem dünyada hem de Türkiye’de halen ciddi bir toplumsal eşitsizlik yaratıyor.", "Biz, bu sessizliği kırmak ve “yalnız değiliz” demek için bu projeyi hayata geçirdik."
                ],
            },
            scope: {
                title: "Projenin Kapsamı",
                items: [
                    { title: "1. Amaç:", text: "Toplumda regl üzerine açık bir diyalog başlatmak, regl yoksulluğu ve tabu konularına dikkat çekmek." },
                    { title: "2. Etkinlik:", text: "Proje kapsamında, R. Miray Reyhan’ın konuşmacı olduğu “Regl Farkındalığı İçin Konuşalım” konferansını düzenledik. Katılımcılarla birlikte regl deneyimini açıkça konuşarak, hem biyolojik hem de toplumsal yönleriyle farkındalığı derinleştirdik." },
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
                    "Etkinlikte, R. Miray Reyhan’ın etkileyici konuşmasıyla regl üzerine tabusuz, samimi ve öğretici bir diyalog kuruldu. Katılımcılar; beden farkındalığı, regl yoksulluğu ve toplumsal algılar üzerine kendi deneyimlerini paylaşma fırsatı buldu.", "Etkinlik sonunda, @kotexturkiye ve @beije.co sponsorluğuyla ped dağıtımı gerçekleştirilerek hem maddi hem sembolik düzeyde destek sağlandı. Bu adım, regl ürünlerine erişimin bir lüks değil, temel hak olduğunu hatırlatmak için güçlü bir mesaj taşıdı."
                ],
            },
            results: {
                title: "Sonuç ve Etki",
                paragraphs: [
                    "• Toplumumsal düzeyde regl üzerine açık konuşma kültürüne katkı sağlandı.", "• Katılımcılar arasında beden farkındalığı, utanmadan konuşabilme ve dayanışma duygusu güçlendi.", "• Hypatia topluluğu, bu etkinlikle birlikte Türkiye’deki genç kadınlar ve erkekler arasında eşitlikçi ve kapsayıcı diyalogların yaygınlaşmasına öncülük etti."
                ]
            },
            gallery: [
                { src: "/images/IMG_0664.JPG", alt: "Regl farkındalığı etkinliğinde ekibimiz", caption: "" },
                { src: "/images/IMG_0735.JPG", alt: "Regl farkındalığı etkinliğinden bir diğer an", caption: "" }
            ],
            finalMessage: {
                title: "",
                quote: "“Regl utanılacak bir şey değil, konuşulacak bir şeydir.”",
                closing: "Birlikte öğrenerek, birlikte farkında olduğumuz yarınlara! ✨",
            },
        }
    },
    {
        slug: "deprem-dayanisma-matematik-2023",
        title: "Deprem Dayanışma Projesi (2023-2025)",
        description: "Şubat 2023 depremi sonrası 6, 7 ve 8. sınıf öğrencilerine yönelik ücretsiz ve online matematik eğitimi projesi.",
        imageUrl: "/images/h-1.jpeg",
        detail: {
            heroTitle: "Deprem Dayanışma Projesi (2023-2025)",
            heroSubtitle: "Matematikle Umudu Yeniden Kuruyoruz",
            heroImageUrl: "/images/h-1.jpeg",
            categories: ["Eğitimde Fırsat Eşitliği", "Sosyal Sorumluluk", "Gönüllülük"],
            goal: {
                title: "Projenin Amacı",
                paragraphs: [
                    "Şubat 2023 depremi sonrasında eğitimde kesintiye uğrayan 6., 7. ve 8. sınıf öğrencilerine ücretsiz ve çevrimiçi matematik eğitimi sağlamak amacıyla bu programı başlattık.",
                    "Hızlı bir çözüm modeli olarak tasarlanan proje, Mart 2023’te hayata geçirildi ve ilk etapta üç ay sürmesi planlandı. Haziran 2023’teki ilk mezuniyet dönemine 100’ün üzerinde öğrenci katıldı. Hem öğrencilerden hem de gönüllü öğretmenlerden oldukça olumlu geri bildirimler alındı.",
                    "Elde edilen bu başarıların ardından program genişletilerek toplam 2,5 yıl boyunca devam etti. Haziran 2025’te tüm öğrencilerimizi liseye uğurlayarak projenin kapanışını büyük bir gururla gerçekleştirdik.",
                    "Bu süreçte amacımız yalnızca matematik öğretmek değil; aynı zamanda, afetin ardından öğrencilerin yanında olduğumuzu hissettirmekti. Toplamda 40’tan fazla gönüllü öğretmenle 300’ün üzerinde öğrenciye ulaştık."
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
                    "Bu analizlerin sonucu olarak ortaya çıkan çalışma, “From Post-Disaster Support to Educational Equity: Conceptualizing a Volunteer-Driven Online Peer-to-Peer Learning Ecosystem at Scale” başlıklı akademik makaleye dönüştürüldü.",
                    "Makale, gönüllülük temelli çevrimiçi akran eğitimi modellerinin sürdürülebilirliği, ölçeklenebilirliği ve eğitimde fırsat eşitliğine katkısı üzerine özgün bir kuramsal çerçeve sundu."
                ]
            },
            achievements: {
                title: "Uluslararası Başarı 🌍",
                paragraphs: [
                    "Projemiz bir araştırmaya dönüştü ve uluslararası ISD 2025 Konferansı (Information Systems Development)’nda En İyi Makale Ödülü’nde ikinci sırayı kazandı! 🏆",
                    "Topluluk kurucumuz Öykü Kaplan, Belgrad’daki konferansta ödülünü alarak projemizin hikâyesini uluslararası akademiyle paylaştı.",
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
        },
    },
    {
        slug: "deprem-mentorluk-programi",
        title: "Depremden Etkilenmiş Liseliler için Mentorluk Programı",
        description: "Depremden etkilenen lise öğrencilerinin akademik ve duygusal ihtiyaçlarını desteklemek için gönüllü mentorlarla eşleştirildiği, uzun soluklu bir gelişim programı.",
        imageUrl: "/images/h-6.jpeg",
        detail: {
            heroTitle: "Hypatia Mentorluk Programı",
            heroSubtitle: "Depremden Etkilenen Gençlerle Güçlü Bir Geleceğe",
            heroImageUrl: "/images/h-6.jpeg",
            categories: ["Eğitim", "Mentorluk", "Gönüllülük", "Gençlik Güçlenmesi"],
            goal: {
                title: "Arka Plan ve Amacımız",
                paragraphs: [
                    "Depremin üzerinden iki yılı aşkın süre geçti, ancak hâlâ 650.000’den fazla insan konteynerlerde yaşıyor. Bu yalnızca bir barınma sorunu değil — aynı zamanda eğitimdeki eşitsizliklerin en somut yansıması. Hypatia Topluluğu olarak bu gerçeği unutmuyor, dayanışmamızı her gün büyütüyoruz.", "2023 yılında başlattığımız Deprem Dayanışma Projesi ile yüzlerce öğrencinin eğitim yolculuğuna eşlik ettik; onları liseye uğurlayarak projeyi başarıyla tamamladık. Şimdi bu yolculuğu Mentorluk Programı ile sürdürüyoruz — çünkü inanıyoruz ki destek, sadece okul kapısında bitmez. 🌱", "Bu programın amacı, her çocuğun ve gencin, koşullar ne olursa olsun, güvenli, umut dolu ve güçlendirici bir eğitim yolculuğu yaşamasını sağlamak. Depremden etkilenen liseli gençlerin yeniden motivasyon kazanmalarına, üniversite hayallerine sağlam adımlarla ilerlemesine ve potansiyellerini keşfetmelerine destek olmayı hedefliyoruz.", "Mentorluk Programı, yalnızca bilgi aktarımı değil — ilham, yol arkadaşlığı ve dayanışma anlamına geliyor. 💫"
                ]
            },
            scope: {
                title: "Projenin Kapsamı",
                items: [
                    { title: "Hedef Kitle:", text: "Depremden etkilenen bölgelerde öğrenim gören 9., 10. ve 11. sınıf öğrencileri (menteeler)." }, { title: "Mentor Profili:", text: "Gönüllü üniversite öğrencileri ve yetişkin mentorlar, deneyimleriyle gençlere rehberlik edecek." }, { title: "İçerik:", text: "3 ay sürecek bu programda mentorlar, öğrencilerin akademik hedeflerine ulaşmalarına destek olacak; ders çalışma yöntemleri, motivasyon, öz farkındalık ve gelecek planlaması gibi alanlarda rehberlik sağlayacak." }, { title: "Yaklaşım:", text: "Öğrencilerin kendilerini özgürce ifade edebilecekleri, güvenli ve kapsayıcı bir iletişim alanı oluşturulacak. Amaç, yaşanan zorlukların geleceğin önüne geçmesine izin vermemek — umudu ve özgüveni yeniden inşa etmek." }
                ]
            },
            impact: {
                title: "Programın Başlangıcı: Mentorlarımızla İlk Buluşma ✨",
                paragraphs: [
                    "Hypatia Topluluğu olarak yürüttüğümüz Depremden Etkilenen Liseli Öğrenciler için Mentorluk Programı ile 3 ay sürecek yolculuğumuza 48 mentor ve 48 mentee ile başladık!", "Bu yolculuk, sadece bilgi paylaşımı değil; umut, ilham ve dayanışma demek. 💜", "Mentorlarımız, kendi deneyimleriyle gençlere ışık tutacak, onlara destek, yol arkadaşlığı ve güç sunacak."
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
    {
        slug: "youtube-genclik-haritasi",
        title: "Youtube: Gençlik Haritası",
        description: "Yurtdışına çıkan gençlerin ilham veren yolculuklarını ve deneyimlerini paylaştığı video serisi.",
        imageUrl: "/images/h-8.jpeg",
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
                    "Seri, “Bir gün ben de yapabilir miyim?” diyen gençlere cesaret, yol göstericilik ve umut aşılamayı hedefliyor. 🌍✨"
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
                    { title: "4. Yaygınlaştırma:", text: "Videolar Hypatia’nın dijital kanallarında paylaşılırken; her hikâye, gençlerin birbirine ilham olabileceği bir “deneyim haritası” oluşturuyor." },
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
                            "Türkiye’den daha fazla gencin Avrupa gençlik programlarına katılımını artırmak."
                        ]
                    }
                ]
            },
            impact: {
                title: "İletişim Dili ve Yaklaşım",
                paragraphs: [
                    "Gençlik Haritası’nın dili, samimi, ilham verici ve kapsayıcıdır. Her video, izleyiciye şu mesajı verir: “Sen de yapabilirsin.” 💪",
                    "Seri boyunca mizah, içtenlik ve cesaret duygusu öne çıkar. Hypatia, bu projeyle gençlerin kendi hikâyelerini anlatabilecekleri güvenli ve destekleyici bir alan yaratır."
                ]
            },
            gallery: [
                { src: "/images/h-8.jpeg", alt: "Genç bir kadın bilgisayar başında gülümsüyor", caption: "" },
                { src: "/images/h-11.jpeg", alt: "Gençlik Haritası proje buluşması", caption: "" }
            ],
            finalMessage: {
                title: "",
                quote: "“Gençlik Haritası: Hikâyeni Paylaş, İlham Ol.”",
                closing: ""
            },
        }
    },
    {
        slug: "deprem-dayanisma-projesi-matematik",
        title: "Deprem Dayanışma Projesi (2025)",
        description: "Depremden etkilenen 6, 7 ve 8. sınıf öğrencilerine yönelik ücretsiz ve online matematik eğitimi projesi.",
        imageUrl: "/images/h-9.jpeg",
        detail: {
            heroTitle: "Deprem Dayanışma Projesi (2025)",
            heroSubtitle: "Ücretsiz ve Online Matematik Eğitimi",
            heroImageUrl: "/images/h-9.jpeg",
            categories: ["Eğitim", "Sosyal Dayanışma", "Afet Sonrası Destek"],
            goal: {
                title: "Projenin Amacı",
                paragraphs: [
                    "Depremin üzerinden iki yılı aşkın süre geçti, ancak hâlâ 650.000’den fazla insan konteynerlerde yaşıyor. Bu yalnızca bir barınma sorunu değil — aynı zamanda eğitimdeki eşitsizliklerin en somut yansıması.",
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
                    { title: "Süre:", text: "Proje, Mart 2023’te başlatılmış; 2,5 yıl boyunca kesintisiz sürdürülmüş ve yüzlerce öğrencinin liseye geçişine eşlik etmiştir. 2025 itibarıyla yeni dönem başlamış olup, aynı modelle 120+ yeni öğrenciye ulaşılmıştır." },
                    { title: "Kapsam ve İçerik:", text: "Matematik müfredatına uygun konu anlatımları, soru çözümleri, deneme sınavları ve mentorluk temelli öğrenme desteği sağlanmaktadır. Öğrenciler, yalnızca akademik olarak değil; özgüven, motivasyon ve aidiyet açısından da desteklenmektedir." }
                ],
            },
            impact: {
                title: "Proje Süreci",
                paragraphs: [
                    "1. Başlangıç (2023 Mart): Kriz sonrası hızlı müdahale modeliyle pilot program başlatıldı.",
                    "2. Büyüme (2023–2024): 40’tan fazla gönüllü öğretmenle 300’ü aşkın öğrenciye ulaşıldı.",
                    "3. Tamamlanma (2025 Haziran): İlk proje başarıyla tamamlanarak öğrenciler liseye uğurlandı.",
                    "4. Yeniden Başlangıç (2025 Ekim): Yeni dönemde 120+ öğrenciyle program yeniden başlatıldı."
                ],
            },
            results: {
                title: "Beklenen Sonuçlar",
                paragraphs: [
                    "• Öğrencilerin matematik başarısında ve özgüveninde artış",
                    "• Depremden etkilenen gençlerin eğitim sistemine yeniden entrasyonu",
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
    {
        slug: "liseli-talks",
        title: "Liseli Talks",
        description: "Lise öğrencilerinin kendi sesleriyle ilham veren hikayelerini paylaştığı, askıya alınmış bir platform projesi.",
        imageUrl: "/images/h-7.png",
        detail: {
            heroTitle: "Liseli Talks",
            heroSubtitle: "Gençlerin Sesi, Geleceğin Hikayesi",
            heroImageUrl: "/images/h-7.png",
            categories: ["Gençlik", "Liderlik", "Topluluk", "İlham"],
            goal: {
                title: "Projenin Vizyonu ve Amacı",
                paragraphs: [
                    "📍 Askıya Alındı: “Liseli Talks” projesi daha önce kamuoyuna duyurulmuş olup, planlama ve uygulama süreçlerindeki yeniden yapılandırma çalışmaları nedeniyle geçici olarak askıya alınmıştır. Hypatia Topluluğu, projenin içeriğini güçlendirmek, kapsamını genişletmek ve sürdürülebilir bir etki yaratmak amacıyla geliştirme sürecine devam etmektedir.",
                    "“Liseli Talks”, 15–18 yaş aralığındaki gençlerin kendi sesleriyle görünür olabilecekleri, fikirlerini paylaşabilecekleri ve birbirlerine ilham verebilecekleri bir platform olarak tasarlandı. Bu proje, gençlerin yalnızca dinleyici değil; anlatan, düşünen ve dönüştüren bireyler olmaları için oluşturulmuş özgün bir sahne niteliğindedir. 🌟",
                    "Çünkü biz inanıyoruz ki: Her genç bir hikâyeye sahiptir — ve o hikâye başkalarına yön verebilir.",
                    "“Liseli Talks”un amacı, lise öğrencilerinin kendi becerilerini, tutkularını ve fikirlerini paylaşarak özgüven kazanmalarını ve topluma katkı sunmalarını desteklemektir. Proje, gençlerin liderlik ve iletişim becerilerini güçlendirmeyi, özgür bir ifade alanı kazanmalarını, kültürel ve sosyal çeşitlilik içinde birbirlerinden öğrenmelerini, ve kendi potansiyellerini fark ederek ilham veren hikâyeler ortaya koymalarını hedefler."
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
                    { title: "Yöntem:", text: "“Liseli Talks”, başlangıçta dört haftalık bir pilot faz olarak tasarlanmıştır. Bu pilot uygulamanın ardından, proje sonuçlarına göre daha uzun süreli ve yüz yüze oturumlarla genişletilmesi planlanmaktadır." }
                ]
            },
            impact: {
                title: "Gelecek Planı",
                paragraphs: [
                    "Hypatia Topluluğu, “Liseli Talks”un yeniden başlatılacağı dönemde daha geniş bir gençlik kitlesine ulaşmayı, dijital yayın formatını zenginleştirmeyi ve gençlerin hikâyelerini ulusal ölçekte duyurmayı hedeflemektedir."
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
    }
];
