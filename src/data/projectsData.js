export const projects = [
  {
    id: 1,
    title: 'TUGCORE Restoran & Sipariş',
    shortTitle: 'TUGCORE Restoran',
    category: 'Web Geliştirme',
    image: 'projects/tugcore_siparis.png',
    demoUrl: 'https://magical-paletas-4e0ef3.netlify.app/',
    repoUrl: '#',
    subtitle: 'Komisyonsuz, kendi markanızla online sipariş, KDS ve kurye ekosistemi.',
    description: 'Yemek platformlarına komisyon ödemeden doğrudan müşterinize satış yapın. Canlı mutfak ekranı ve kurye modülüyle tam bağımsız kontrol.',
    badges: ['⚡ Realtime KDS', '📍 KM Bazlı Kurye', '💳 %0 Komisyon'],
    metrics: [
      { label: 'Komisyon', value: '%0' },
      { label: 'Mutfak Ekranı', value: 'Canlı KDS' },
      { label: 'Kurye', value: 'KM Bazlı' }
    ],
    targetAudience: ['Restoranlar', 'Fast Food', 'Paket Servis Ağları'],
    problem: 'Yemek platformlarının %30+ komisyonları ve müşteri datasını sahiplenmesi.',
    solution: 'Kendi markanızla doğrudan satış, otomatik mesafe ücreti ve canlı mutfak ekranı.',
    modules: [
      {
        name: 'Müşteri Siparişi',
        items: [
          { title: 'Hızlı Menü & Özelleştirme', desc: 'Porsiyon, sos ve pişme tercihi seçimi.' },
          { title: 'Google Maps KM Ücreti', desc: 'Mesafeye göre anlık otomatik teslimat bedeli.' },
          { title: 'Tek Tıkla Ödeme', desc: 'Kayıtlı adres ve kartla saniyeler içinde sipariş.' }
        ]
      },
      {
        name: 'Mutfak Ekranı (KDS)',
        items: [
          { title: 'Sesli & Anlık Bildirim', desc: 'Sipariş düştüğü an mutfakta sesli uyarı.' },
          { title: 'Dokunmatik Yönetim', desc: 'Hazırlanıyor ve hazır durumuna tek tıkla geçiş.' }
        ]
      },
      {
        name: 'Kurye Modülü',
        items: [
          { title: 'Görev Ekranı', desc: 'Atanan siparişler ve teslimat adresi kurye ekranında.' },
          { title: 'Tek Tuşla Onay', desc: 'Teslim edildi bildirimiyle anında kasa güncellemesi.' }
        ]
      },
      {
        name: 'Yönetim Paneli',
        items: [
          { title: 'Ciro & Sipariş Grafiği', desc: 'Günlük ve haftalık satış analitiği.' },
          { title: 'Toplu Menü Güncelleme', desc: 'Tüm fiyatları tek ekrandan saniyeler içinde değiştirme.' }
        ]
      }
    ],
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase Realtime'],
    features: [
      '%0 Komisyon ile Doğrudan Satış',
      'Canlı Mutfak Ekranı (KDS) & Sesli Uyarı',
      'Google Maps KM Bazlı Teslimat Ücreti',
      'Kurye Paneli ve Canlı Sipariş Takibi'
    ]
  },
  {
    id: 2,
    title: 'Tugcore Kafe & POS Otomasyonu',
    shortTitle: 'Tugcore Kafe POS',
    category: 'Web Geliştirme',
    image: 'projects/tugcore_masatakip.png',
    demoUrl: 'https://masatakipdemo.netlify.app/',
    repoUrl: '#',
    subtitle: 'Ek donanım maliyetsiz; tablet ve telefondan masadan mutfağa tam kontrol.',
    description: 'Pahalı POS terminallerine son. Tabletinizden çalışan görsel masa planı, mutfak yönlendirmesi, QR sipariş ve parçalı hesap alma.',
    badges: ['📱 ₺0 Donanım', '⚡ Canlı Garson & KDS', '💳 Split Bill'],
    metrics: [
      { label: 'Donanım', value: '₺0 Terminal' },
      { label: 'Masa Devri', value: '+%35 Hız' },
      { label: 'Bildirim', value: 'Sesli & Anlık' }
    ],
    targetAudience: ['Kafeler & 3. Nesil Kahveciler', 'Restoranlar', 'Pub & Lounge'],
    problem: 'Pahalı lisanslar, hantal terminaller ve hesap alma kuyrukları.',
    solution: 'Mevcut tablet ve telefonlarla çalışan, QR menülü ve parçalı hesap alan bulut POS.',
    modules: [
      {
        name: 'Garson & POS',
        items: [
          { title: 'Bölgesel Masa Planı', desc: 'Bahçe, Salon, Teras anlık renkli doluluk takibi.' },
          { title: 'Hızlı Sipariş Girişi', desc: 'Porsiyon, pişme derecesi ve garson notları.' }
        ]
      },
      {
        name: 'Mutfak & Bar Ekranı',
        items: [
          { title: 'Otomatik Yönlendirme', desc: 'Yemekler mutfağa, içecekler bar ekranına anında düşer.' },
          { title: 'Süre Takibi', desc: 'Hazırlık süresi ve bekleme süresi canlı izlenir.' }
        ]
      },
      {
        name: 'Parçalı Hesap (Split)',
        items: [
          { title: 'Ürün Bazlı Bölme', desc: 'Her müşteri sadece kendi siparişini öder.' },
          { title: 'Otomatik Boşaltma', desc: 'Hesap kapandığı an masa sistemde boşa düşer.' }
        ]
      },
      {
        name: 'Temassız QR Menü',
        items: [
          { title: 'Masadan Sipariş', desc: 'Müşteri QR okutup garson beklemeden sipariş verir.' },
          { title: 'Sıfır Baskı Masrafı', desc: 'Fiyat değişikliklerinde menü basımına son.' }
        ]
      }
    ],
    tags: ['Next.js', 'Realtime POS', 'TailwindCSS', 'Cloud Database'],
    features: [
      'Tablet ve Telefonla Sıfır Donanım Maliyeti',
      'Görsel Masa Planı ve Renkli Doluluk',
      'Otomatik Mutfak & Bar Yönlendirmesi',
      'Parçalı Hesap Alma (Split Bill)'
    ]
  },
  {
    id: 3,
    title: 'TUGCORE Taksi & VIP Transfer',
    shortTitle: 'TUGCORE Taksi & Filo',
    category: 'Web Geliştirme',
    image: 'projects/tugcore_taksi.png',
    demoUrl: 'https://hastahanetaksi.netlify.app/',
    repoUrl: '#',
    subtitle: 'Taksi durakları ve transfer filoları için canlı harita ve operasyon merkezi.',
    description: 'Yolculara müsait araçları canlı gösterip tek tıkla aratan, yöneticilere GPS ve periyodik bakım alarmları sunan filo yazılımı.',
    badges: ['🚖 Canlı Müsaitlik', '🌍 TR / EN Çift Dil', '🔧 Bakım Alarmı'],
    metrics: [
      { label: 'Takip', value: 'Canlı GPS' },
      { label: 'Dil Desteği', value: 'TR / EN' },
      { label: 'Memnuniyet', value: '4.9 / 5' }
    ],
    targetAudience: ['Taksi Durakları', 'VIP Transfer', 'Filo İşletmeleri'],
    problem: 'Telefon meşguliyetiyle kaçan yolcular ve unutulan araç bakımları.',
    solution: 'Boş araçları canlı gösteren çift dilli vitrin ve akıllı periyodik bakım takibi.',
    modules: [
      {
        name: 'Müşteri Vitrini',
        items: [
          { title: 'Canlı Müsait Taksi', desc: 'Boş ve görevdeki taksiler şoför bilgisiyle canlı listelenir.' },
          { title: 'Tek Tıkla Arama', desc: 'Müşteri tek tuşla durağı veya taksiyi arayabilir.' },
          { title: 'TR / EN Çift Dil', desc: 'Turistler için tek tıkla anında İngilizceye geçiş.' }
        ]
      },
      {
        name: 'Filo & GPS Takip',
        items: [
          { title: 'Araç & Şoför Yönetimi', desc: 'Durum güncelleme, plaka ve şoför atama.' },
          { title: 'Canlı Harita', desc: 'Koordinatlar üzerinden anlık harita konumu izleme.' }
        ]
      },
      {
        name: 'Bakım & Masraf',
        items: [
          { title: 'Akıllı Bakım Alarmı', desc: 'Yağ, balata ve muayene gününü otomatik renkle uyarır.' },
          { title: 'Servis Arşivi', desc: 'Her aracın parça ve servis maliyet kaydı.' }
        ]
      }
    ],
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'GPS Harita'],
    features: [
      'Canlı Müsait Taksi Göstergesi & Hızlı Arama',
      'TR / EN Çift Dil ve Koyu/Açık Tema',
      'GPS Canlı Araç Harita Takip Altyapısı',
      'Otomatik Periyodik Bakım Alarmı'
    ]
  },
  {
    id: 4,
    title: 'Güzellik Salonu & Randevu CRM',
    shortTitle: 'Güzellik Randevu CRM',
    category: 'Web Geliştirme',
    image: 'projects/NergizGuzellikSalonu.png',
    demoUrl: 'https://www.xn--nergizgzelliksalonu-cbc.com/',
    repoUrl: '#',
    subtitle: 'Randevu kayıplarına son; salonunuzu ve kasanızı cebinizden yönetin.',
    description: '3 adımda çakışmasız online randevu motoru, otomatik SMS hatırlatmaları ve personel bazlı ciro analitiği.',
    badges: ['📅 Çakışmasız Takvim', '💬 Otomatik SMS', '📈 Ciro Analitiği'],
    metrics: [
      { label: 'Verimlilik', value: '+%40' },
      { label: 'Çakışma', value: '%0 Hata' },
      { label: 'Müşteri', value: '10.000+' }
    ],
    targetAudience: ['Kuaförler & Berberler', 'Güzellik Merkezleri', 'Spa & Stüdyolar'],
    problem: 'Defter veya WhatsApp ile randevu karmaşası ve çifte randevu stresi.',
    solution: 'Çakışmayı engelleyen akıllı randevu motoru ve otomatik SMS onayları.',
    modules: [
      {
        name: 'Online Randevu',
        items: [
          { title: '3 Adımda Randevu', desc: 'Hizmet, personel, tarih ve uygun saati seçerek anında onay.' },
          { title: 'Akıllı Boş Saat', desc: 'Sadece personelin gerçekten müsait saatleri gösterilir.' }
        ]
      },
      {
        name: 'Takvim & Ciro',
        items: [
          { title: 'Sürükle-Bırak Takvim', desc: 'Günlük ve personel bazlı randevu akışı tek ekranda.' },
          { title: 'Personel Ciro Raporu', desc: 'Hangi personelin ne kadar ciro getirdiği anlık grafiklerde.' }
        ]
      },
      {
        name: 'Otomasyon',
        items: [
          { title: 'Sıfır Çakışma', desc: 'Aynı koltuğa çift randevu verilmesini matematiksel engeller.' },
          { title: 'Otomatik SMS', desc: 'Randevu oluştuğunda ve saat yaklaşınca müşteriye giden SMS.' }
        ]
      }
    ],
    tags: ['PostgreSQL', 'TailwindCSS', 'Appointment Engine', 'SMS Gateway'],
    features: [
      '3 Adımda Hızlı ve Çakışmasız Randevu',
      'Akıllı Boş Saat Algoritması',
      'Otomatik SMS Onay & Hatırlatma',
      'Personel ve Hizmet Bazlı Ciro Analitiği'
    ]
  }
];
