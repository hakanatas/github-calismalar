# Çalışmalar Fihristi

Hakan Ataş'ın GitHub depolarının levha levha fihristi. Yayın adresi:
**https://hakanatas.github.io/github-calismalar/**

Tek sayfalık, derlemesiz bir site: HTML, CSS ve düz JavaScript. Bağımlılık yok, kurulum yok.

## Dosyalar

| Dosya | Görevi |
|---|---|
| `index.html` | Fihristin kendisi. Depo listesi (`D`), konu tablosu (`CATS`) ve vitrin seçkisi (`FEATURED`) bu dosyanın içindeki `<script>` bloğunda. |
| `covers.js` | Depo adı → kapak dosyası eşlemesi (`IMG`). |
| `kapak/` | Levha kapakları, 420×262 boyutunda `.webp`. `og.jpg` sosyal paylaşım görseli. |
| `404.html` | GitHub Pages'in bulunamayan adreslerde gösterdiği sayfa. |
| `proje-dizini.html` + `dizin-data.json` | Fihristin öncülü olan eski dizin sayfası. Fihristte 70. levha olarak duruyor; verisi ayrı bir dosyada. |
| `portolio.html` | Fihristle ilgisi olmayan, ALKEV 5. sınıf öğrenci portfolyo vitrini. Hiçbir sayfadan bağlantı verilmiyor; `robots.txt` ile arama motorlarına kapatıldı. |
| `robots.txt`, `sitemap.xml` | Arama motorları için. |

## Yeni depo eklemek

`index.html` içindeki `D` dizisine bir satır ekle:

```js
{"n": "depo-adi", "t": "Levha Başlığı", "d": "Bir cümlelik açıklama.", "c": "mat", "l": "JavaScript", "u": "2026-09-05", "v": 1, "no": 83}
```

| Alan | Anlamı |
|---|---|
| `n` | GitHub depo adı (adres bundan türetilir: `hakanatas.github.io/<n>/`). |
| `t` | Levhada görünen başlık. |
| `d` | Kısa açıklama, tek cümle. |
| `c` | Konu anahtarı: `mat`, `fen`, `yz`, `rob`, `oyun`, `ders`, `muzik`, `portal`, `arsiv`. |
| `l` | Ana dil (GitHub'ın gösterdiği). Yoksa `"—"`. |
| `u` | Oluşturma tarihi, `YYYY-AA-GG`. Yıl ayraçları ve sıralama buna göre. |
| `v` | Sayfa yayında mı? `1` evet, `0` yalnız kod. |
| `no` | Levha numarası; sıradaki sayıyı ver. |
| `p` | İsteğe bağlı: canlı adresin sonuna eklenecek dosya adı (`"proje-dizini.html"` gibi). |

Masthead'deki "on bir yılda seksen iki depo" cümlesi veriden hesaplanır, elle güncellenmez.

## Kapak eklemek

1. Yayındaki sayfanın 420×262 boyutunda ekran görüntüsünü al, `.webp` olarak kaydet.
2. `kapak/<depo-adi>.webp` adıyla klasöre koy.
3. `covers.js` içine `"depo-adi": "kapak/depo-adi.webp",` satırını ekle.

Yayında olup kapağı olmayan levhalar fihristte "kapak bekliyor" etiketiyle görünür; yayında olmayanlar "yalnız kod deposu" der.

## Vitrin

`FEATURED` dizisindeki dört depo adı vitrini belirler. İlki kahraman boyutunda gösterilir. Dördünün de yayında ve kapaklı olması gerekir; değilse vitrin hiç çizilmez.

## Süzgeçler adres çubuğuna yazılır

Her süzgeç durumu paylaşılabilir bir bağlantı üretir, örneğin:

```
https://hakanatas.github.io/github-calismalar/#konu=mat&yayin=1&gorunum=liste
```

Parametreler: `konu`, `ara`, `dil`, `sira` (`new`/`old`/`az`), `yayin` (`1`), `gorunum` (`liste`).

## Yerelde bakmak

Herhangi bir statik sunucu yeter; kapaklar ve `dizin-data.json` `fetch` ile yüklendiği için dosyayı doğrudan açmak yerine sunucu kullan:

```
npx http-server -p 8080 .
```
