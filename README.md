# Hypatia Community

Hypatia Community, genç ve dinamik bir topluluk platformudur. Proje yönetimi, ekip işbirliği ve sosyal etkinlikleri merkezi bir web arayüzü üzerinden sunmaktadır.

## 🌟 Özellikler

- **Anasayfa**: Topluluk hakkında bilgi ve öne çıkan projeler
- **Projeler**: Detaylı proje sayfaları, hedefler, etki ve destekçiler hakkında bilgi
- **Hakkımızda**: Hypatia Community'nin misyonu, vizyonu ve değerleri
- **Ekip**: Topluluk üyeleri hakkında bilgi
- **Katılım Formu**: Yeni üyelerin topluluğa katılması için form
- **Blog**: Etkinlik ve başarı hikayeleri paylaşımı

## 🛠 Teknolojiler

- **Framework**: [Next.js 15.4.2](https://nextjs.org/) (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 3.4.18 + tailwindcss-animate
- **UI Components**: Radix UI (Dialog, Navigation, Avatar, Label)
- **Icons**: Lucide React
- **Backend**: Firebase (Firestore, Cloud Functions)
- **Email**: Nodemailer
- **Form Validation**: Built-in React hooks
- **TypeScript**: Type-safe development

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── page.tsx              # Anasayfa
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global stiller
│   ├── about/                # Hakkımızda sayfası
│   ├── blog/                 # Blog sayfası
│   ├── join/                 # Katılım formu
│   └── projects/
│       ├── page.tsx          # Projeler listesi
│       └── [slug]/page.tsx   # Proje detay sayfası
├── components/
│   ├── BlogPostCard.tsx
│   ├── JoinForm.tsx          # Katılım formu bileşeni
│   ├── ProjectCard.tsx       # Proje kartı bileşeni
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── projects/
│   │   └── ProjectGallery.tsx
│   └── ui/                   # Radix UI bileşenleri
├── config/
│   └── navigation.ts         # Navigasyon linkleri
├── data/
│   └── projects.ts           # Proje veri tanımlamaları
└── lib/
    ├── firebase.ts           # Firebase konfigürasyonu
    └── utils.ts              # Utility fonksiyonları
```

## 🚀 Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm install
npm run dev
```

Sunucu [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## 📜 Komutlar

- `npm run dev` - Geliştirme sunucusu (Turbopack)
- `npm run build` - Üretim derlemesi
- `npm start` - Üretim sunucusu
- `npm run lint` - Kod kalitesi kontrol

## 🔧 Backend

- **Firebase Firestore**: Veri tabanı ve güvenlik kuralları
- **Cloud Functions**: Email ve form işlemleri

## 🎨 Stil ve Tasarım

- **Tailwind CSS**: Responsive tasarım ve kustom utility classes
- **Animasyonlar**: `tailwindcss-animate` ve `tw-animate-css` ile akıcı geçişler
- **Responsive**: Mobile-first approach ile tüm cihazlarda uyumlu

## 🤝 Katılım

Hypatia Community'ye katılmak isterseniz:

1. [Katılım Formu](/join) aracılığıyla başvuru yapın
2. Sosyal medya hesaplarımızdan bizi takip edin
3. Etkinliklere ve projelerimize katılın

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

## 🙏 Destekçiler

Hypatia Community'nin başarısına katkıda bulunan tüm destekçilere ve ekip üyelerine teşekkür ederiz.
