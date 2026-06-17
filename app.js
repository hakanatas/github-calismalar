// Proje Verileri Listesi
const projects = [
  {
    name: "Zeka Pusulası",
    emoji: "🧭",
    category: "oyun",
    tagText: "Zeka Oyunları",
    color: "var(--accent-red)",
    description: "Türkiye'nin en kapsamlı zeka oyunları, akıl yürütme, beyin jimnastiği ve interaktif bulmaca platformu. Akıl oyunları severler için harika bir dijital kütüphane!",
    created: "Yayında",
    updated: "Haziran 2026",
    liveUrl: "https://www.zekapusulasi.com",
    githubUrl: "",
    featured: true
  },
  {
    name: "canopy-ftc",
    emoji: "🌳",
    category: "deneyim",
    color: "var(--accent-green)",
    description: "FIRST Tech Challenge temalı, kaydırma tabanlı interaktif tropik yağmur ormanı biyoçeşitlilik deneyimi. neal.fun/deep-sea projesinden ilham alınarak geliştirilmiştir.",
    created: "15 Haziran 2026",
    updated: "15 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/canopy-ftc/",
    githubUrl: "https://github.com/hakanatas/canopy-ftc"
  },
  {
    name: "kraliceyi-kurtarmak-v3",
    emoji: "👑",
    category: "matematik",
    color: "var(--accent-purple)",
    description: "Kraliçeyi Kurtarmak v3: 5. sınıf öğrencileri için üretici soru motorlu, müfredat uyumlu interaktif matematik macerası (Vladimir Tumanov'un kitabından).",
    created: "11 Haziran 2026",
    updated: "15 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/kraliceyi-kurtarmak-v3/",
    githubUrl: "https://github.com/hakanatas/kraliceyi-kurtarmak-v3"
  },
  {
    name: "elektrik-macerasi",
    emoji: "⚡",
    category: "fen bilimleri",
    color: "var(--accent-yellow)",
    description: "6. sınıf Fen Bilimleri 'Elektriğin İletimi ve Direnç' ünitesi için oyunlaştırılmış, MakeyMakey destekli interaktif ders paketi.",
    created: "11 Haziran 2026",
    updated: "11 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/elektrik-macerasi/",
    githubUrl: "https://github.com/hakanatas/elektrik-macerasi"
  },
  {
    name: "6-elektrik-portal",
    emoji: "🌀",
    category: "fen bilimleri",
    color: "var(--accent-blue)",
    description: "6. Sınıf Fen Bilimleri elektrik ve direnç konuları için eğlenceli, animasyonlu interaktif öğrenme portali.",
    created: "10 Haziran 2026",
    updated: "10 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/6-elektrik-portal/",
    githubUrl: "https://github.com/hakanatas/6-elektrik-portal"
  },
  {
    name: "matematik-hikayeleri-interaktif",
    emoji: "📚",
    category: "matematik",
    color: "var(--accent-orange)",
    description: "Hikayeleştirilmiş interaktif matematik maceraları, eğlenceli görsel bulmacalar ve pratik problem çözme araçları.",
    created: "9 Haziran 2026",
    updated: "9 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/matematik-hikayeleri-interaktif/",
    githubUrl: "https://github.com/hakanatas/matematik-hikayeleri-interaktif"
  },
  {
    name: "piksel-palet-studyosu",
    emoji: "🎨",
    category: "araçlar",
    color: "var(--accent-pink)",
    description: "Tarayıcı üzerinden piksel çizimleri yapmanıza, renk paletleri tasarlamanıza ve çalışmalarınızı kaydetmenize olanak tanıyan piksel stüdyosu.",
    created: "18 Mayıs 2026",
    updated: "8 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/piksel-palet-studyosu/",
    githubUrl: "https://github.com/hakanatas/piksel-palet-studyosu"
  },
  {
    name: "yz-oyunu-kozmo",
    emoji: "🚀",
    category: "oyun",
    color: "var(--accent-blue)",
    description: "Sevimli robot Kozmo ile uzayda eğlenceli yapay zeka kavramları ve makine öğrenimi temellerini öğreten interaktif oyun.",
    created: "27 Mayıs 2026",
    updated: "27 Mayıs 2026",
    liveUrl: "https://hakanatas.github.io/yz-oyunu-kozmo/",
    githubUrl: "https://github.com/hakanatas/yz-oyunu-kozmo"
  },
  {
    name: "muzik-prompt-ureteci",
    emoji: "🎵",
    category: "araçlar",
    color: "var(--accent-pink)",
    description: "Yapay zeka müzik üreticileri (Suno, Udio vb.) için en ideal müzik tarzı, tempo ve enstrüman promptlarını üreten yardımcı araç.",
    created: "26 Mayıs 2026",
    updated: "26 Mayıs 2026",
    liveUrl: "https://hakanatas.github.io/muzik-prompt-ureteci/",
    githubUrl: "https://github.com/hakanatas/muzik-prompt-ureteci"
  },
  {
    name: "llm-simulator",
    emoji: "🤖",
    category: "simülasyon",
    color: "var(--accent-yellow)",
    description: "Yapay Zeka Nasıl Konuşur? Büyük Dil Modellerinin (LLM) kelimeleri olasılıklarına göre tahmin etme sürecini adım adım görselleştiren simülatör.",
    created: "25 Mayıs 2026",
    updated: "25 Mayıs 2026",
    liveUrl: "https://hakanatas.github.io/llm-simulator/",
    githubUrl: "https://github.com/hakanatas/llm-simulator"
  },
  {
    name: "MathMuzikCodex",
    emoji: "🎹",
    category: "matematik",
    color: "var(--accent-orange)",
    description: "Matematiksel frekanslar, Fibonacci dizilimleri ve müzik teorisi arasındaki saklı altın oranları interaktif olarak inceleyin.",
    created: "5 Mart 2026",
    updated: "5 Mart 2026",
    liveUrl: "https://hakanatas.github.io/MathMuzikCodex/",
    githubUrl: "https://github.com/hakanatas/MathMuzikCodex"
  },
  {
    name: "Binario",
    emoji: "🔟",
    category: "oyun",
    color: "var(--accent-green)",
    description: "Klasik Binario (Takuzu) mantık bulmacası. 1 ve 0'ları kullanarak ızgarayı kurallara uygun şekilde doldurmaya çalışın.",
    created: "5 Mart 2026",
    updated: "5 Mart 2026",
    liveUrl: "https://hakanatas.github.io/Binario/",
    githubUrl: "https://github.com/hakanatas/Binario"
  },
  {
    name: "tarihi-yazan-kadinlar",
    emoji: "👩",
    category: "deneyim",
    color: "var(--accent-pink)",
    description: "8 Mart Dünya Kadınlar Günü anısına, tarihin akışını değiştiren bilim, sanat ve edebiyat kadınlarını tanıtan scrollytelling deneyimi.",
    created: "12 Şubat 2026",
    updated: "5 Haziran 2026",
    liveUrl: "https://hakanatas.github.io/tarihi-yazan-kadinlar/",
    githubUrl: "https://github.com/hakanatas/tarihi-yazan-kadinlar"
  },
  {
    name: "pi-day-finder",
    emoji: "🥧",
    category: "matematik",
    color: "var(--accent-red)",
    description: "Doğum gününüz Pi sayısının milyonlarca basamağı arasında nerede geçiyor? Girin, saniyeler içinde basamak sırasıyla bulun!",
    created: "5 Şubat 2026",
    updated: "6 Mayıs 2026",
    liveUrl: "https://hakanatas.github.io/pi-day-finder/",
    githubUrl: "https://github.com/hakanatas/pi-day-finder"
  },
  {
    name: "kesir-sefi",
    emoji: "👨‍🍳",
    category: "matematik",
    color: "var(--accent-orange)",
    description: "Şefin mutfağında pizzaları bölerek, pastaları paylaştırarak kesir toplama, çıkarma ve karşılaştırma işlemlerini oyunla öğrenin.",
    created: "23 Aralık 2025",
    updated: "11 Mart 2026",
    liveUrl: "https://hakanatas.github.io/kesir-sefi/",
    githubUrl: "https://github.com/hakanatas/kesir-sefi"
  }
];

// DOM Elemanları
const gridContainer = document.getElementById("projects-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const clickerCountSpan = document.getElementById("clicker-count");
const logoContainer = document.querySelector(".logo-container");

// Filtreleme Durumları
let currentFilter = "hepsi";
let searchQuery = "";

// Tıklama Sayacı (Local Storage Destekli)
let funPoints = parseInt(localStorage.getItem("hakan_fun_points") || "0", 10);
clickerCountSpan.textContent = funPoints;

// Kartları Ekrana Yazdıran Fonksiyon
function renderProjects() {
  gridContainer.innerHTML = "";
  
  const filtered = projects.filter(project => {
    const matchesCategory = currentFilter === "hepsi" || project.category === currentFilter;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results">
        <div class="no-results-emoji">🕵️‍♂️</div>
        <div class="no-results-title">Eşleşen Proje Bulunamadı</div>
        <div class="no-results-text">Arama kriterlerinizi veya seçili kategoriyi değiştirmeyi deneyebilirsiniz.</div>
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = `project-card ${project.featured ? 'featured-card' : ''}`;
    card.innerHTML = `
      ${project.featured ? '<div class="featured-badge">⭐ Öne Çıkan</div>' : ''}
      <div class="card-banner" style="background-color: ${project.color};">
        ${project.emoji}
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3 class="project-name">${project.name.replace(/-/g, " ")}</h3>
          <span class="project-tag" style="border-color: ${project.color};">${project.tagText || project.category}</span>
        </div>
        <p class="project-desc">${project.description}</p>
        <div class="card-footer">
          <div class="project-dates">
            <span>Yayın: ${project.created}</span>
            <span>Güncelleme: ${project.updated}</span>
          </div>
          <div class="project-actions">
            <a href="${project.liveUrl}" target="_blank" class="btn btn-primary" onclick="incrementFunPoints(5)">Oyna / Deneyimle</a>
            ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary" onclick="incrementFunPoints(2)">
              <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Kod
            </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

// Eğlence Puanı Artışı
function incrementFunPoints(amount = 1) {
  funPoints += amount;
  clickerCountSpan.textContent = funPoints;
  localStorage.setItem("hakan_fun_points", funPoints);

  // Küçük bir tıklama efekti
  const countBadge = document.querySelector(".easter-egg");
  countBadge.style.transform = "scale(1.15) rotate(3deg)";
  setTimeout(() => {
    countBadge.style.transform = "";
  }, 100);
}

// Logo Tıklama Efekti - Ekrandan Düşen Emojiler (Easter Egg)
function spawnEmojiRain() {
  incrementFunPoints(10);
  const emojis = ["🚀", "🎮", "⚡", "🌳", "👑", "📐", "🎨", "🎵", "🥧", "👨‍🍳", "🛸", "👾"];
  const count = 30;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const emoji = document.createElement("div");
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = "-5vh";
      emoji.style.fontSize = Math.random() * 2 + 1.5 + "rem";
      emoji.style.zIndex = "9999";
      emoji.style.pointerEvents = "none";
      emoji.style.transition = "transform 1.5s linear, opacity 1.5s ease-out";
      
      document.body.appendChild(emoji);

      // DOM güncellendikten hemen sonra düşüş animasyonunu başlat
      requestAnimationFrame(() => {
        emoji.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        emoji.style.opacity = "0";
      });

      // Animasyon sonunda elementi sil
      setTimeout(() => emoji.remove(), 1600);
    }, i * 50);
  }
}

// Event Listeners
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProjects();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Aktif buton görsel güncellemesi
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentFilter = button.getAttribute("data-category");
    incrementFunPoints(1);
    renderProjects();
  });
});

logoContainer.addEventListener("click", spawnEmojiRain);
document.querySelector(".easter-egg").addEventListener("click", () => incrementFunPoints(1));

// İlk Çalıştırma
renderProjects();
console.log("ALKEV.BİLİŞİM yüklendi! Bol eğlenceler 🎮");
