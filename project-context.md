# Project Context & Indexing Tool

Bu dosya, projenin mimarisini, modüllerini ve aralarındaki bağımlılıkları anlamak için bir kılavuz görevi görür.

## Ana Giriş Noktası
- **`src/main.jsx`**: Uygulamanın DOM'a bağlandığı ana giriş noktası.
- **`src/App.jsx`**: Ana uygulama bileşeni. Tema yönetimi, preloader kontrolü ve tüm ana bölümlerin (Hero, Services, Portfolio vb.) orkestrasyonunu yapar.

## Modüller ve Bileşenler

### UI & Layout Bileşenleri
- **Navbar (`/components/Navbar.jsx`)**: Üst navigasyon çubuğu. Tema değiştirme (toggle) mantığını barındırır ve sayfa içi linkleri yönetir.
- **Footer (`/components/Footer.jsx`)**: Sayfanın en alt kısmı, sosyal linkler ve telif bilgileri.
- **Preloader (`/components/Preloader.jsx`)**: Uygulama ilk açıldığında gösterilen animasyonlu yükleme ekranı. `App.jsx`'teki `loading` state'ine bağlıdır.
- **CustomCursor (`/components/CustomCursor.jsx`)**: Fare hareketlerini takip eden özel görsel imleç.

### İçerik Bölümleri
- **Hero (`/components/Hero.jsx`)**: Karşılama ekranı. `Particles` bileşenini arka plan olarak kullanır.
- **Services (`/components/Services.jsx`)**: Sunulan hizmetlerin listelendiği bölüm.
- **Portfolio (`/components/Portfolio.jsx`)**: Projelerin sergilendiği ana galeri. `src/data/projectsData.js` dosyasından verileri çeker ve her proje için `ProjectDetailModal` bileşenini tetikleyebilir.
- **Testimonials (`/components/Testimonials.jsx`)**: Müşteri yorumlarını içeren bölüm.
- **Support (`/components/Support.jsx`)**: İletişim formu ve destek bilgileri. `@emailjs/browser` ile entegre çalışır.

### Yardımcı ve Animasyon Bileşenleri
- **Magnetic (`/components/Magnetic.jsx`)**: Elemanlara "mıknatıs" etkisi veren wrapper bileşen. Navigasyon ikonlarında kullanılır.
- **Reveal (`/components/Reveal.jsx`)**: Kaydırma (scroll) sırasında içeriklerin animasyonla belirmesini sağlayan wrapper. `framer-motion` kullanır.
- **Particles (`/components/Particles.jsx`)**: Hero bölümünde kullanılan interaktif arka plan parçacık sistemi.
- **ProjectDetailModal (`/components/ProjectDetailModal.jsx`)**: Portfolyo projelerine tıklandığında açılan detay penceresi.

## Veri Yapısı
- **`src/data/projectsData.js`**: Portfolyo bölümünde gösterilen projelerin başlık, açıklama, teknoloji ve görsel bilgilerini içeren merkezi veri dosyası.

## Stil ve Tasarım Sistemi
- **`src/index.css`**: Tailwind CSS v4 yapılandırması ve özel CSS değişkenlerini (renk paleti, fontlar) barındıran ana stil dosyası.

## Bağımlılıklar Arasındaki İlişkiler
1. **App.jsx** -> Tüm ana bileşenleri (`Navbar`, `Hero`, `Portfolio` vb.) import eder.
2. **Portfolio.jsx** -> `projectsData.js` dosyasından beslenir ve `ProjectDetailModal`'ı kontrol eder.
3. **Hero.jsx** -> `Particles` ve `Reveal` bileşenlerini kullanır.
4. **Bileşenler** -> Görsel tutarlılık için `index.css`'teki global sınıfları ve Tailwind değişkenlerini kullanır.
