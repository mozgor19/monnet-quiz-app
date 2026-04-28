# Hangi Monet Tablosusun?

Mobil öncelikli, statik bir quiz web app. Kullanıcı 10 soruya cevap verir; uygulama cevaplardan bir kişilik vektörü çıkarır ve bunu 72 Claude Monet tablosunun vektörleriyle karşılaştırarak en yakın sonucu seçer.

## Dosyalar

- `index.html`: Sayfa yapısı, quiz ekranı ve sonuç ekranı.
- `styles.css`: Mobil öncelikli arayüz, responsive layout ve sonuç kartı görünümü.
- `data.js`: 10 soru, cevap skorları, 72 Monet sonucu ve her sonucun metinleri.
- `app.js`: Quiz akışı, sonuç algoritması, Wikimedia Commons görsel çekme, PNG indirme ve Twitter paylaşımı.
- `favicon.svg`: Küçük Monet esintili favicon.
- `vercel.json`: Statik Vercel ayarları.
- `.vercelignore`: Vercel'e gereksiz yerel dosyaların gitmesini engeller.

## Sonuç Seçimi Nasıl Çalışıyor?

Evet, sonuç seçimi vektör ve cosine similarity kullanıyor.

Uygulamada 10 kişilik boyutu var:

```txt
sun, water, city, garden, motion, drama, intimacy, winter, social, mystery
```

Her cevap bu boyutlara puan ekliyor. Örneğin bir cevap `water`, `mystery` ve `intimacy` puanlarını artırabiliyor. Kullanıcının 10 cevabı toplandığında tek bir kullanıcı vektörü oluşuyor.

Her Monet tablosunun da `traits` alanı var. Örneğin:

```js
traits: ["water", "garden", "mystery", "intimacy", "sun"]
```

Bu trait listesi tablo vektörüne çevriliyor. Listenin başındaki trait'ler daha güçlü kabul ediliyor:

- İlk iki trait: `+3`
- Sonraki iki trait: `+2`
- Kalan trait'ler: `+1`

Sonra `app.js` içindeki `cosine()` fonksiyonu kullanıcı vektörü ile her tablo vektörü arasındaki cosine similarity değerini hesaplıyor. Cosine similarity burada iyi bir tercih çünkü toplam puandan çok cevap profilinin yönüne bakıyor: yani kullanıcı çok yoğun cevap vermiş gibi değil, hangi temalara yaklaştığı üzerinden eşleşiyor.

## Neden Herkese Aynı Sonuç Çıkmıyor?

Ana eşleşme cosine similarity ile yapılıyor. Bunun üstüne çok küçük, deterministik bir çeşitlendirme ekleniyor:

```js
const jitter = (hashString(`${answerKey}:${painting.id}`) % 1000) / 10000;
```

Bu değer rastgele değil; aynı cevapları veren kişi aynı sonucu alır. Ama birbirine çok yakın skor alan tablolar arasında bağ bozucu gibi çalışır. Böylece sonuçlar tek bir popüler tabloya yığılmaz.

Örnek dağılım kontrolünde 5.000 farklı cevap kombinasyonu simüle edildi ve 72 sonucun tamamı en az bir kez üretildi.

## Görseller

Sonuç görselleri kullanıcı sonucu gördüğünde Wikimedia Commons kategorilerinden çekilir. Bu işlem `app.js` içinde MediaWiki API ile yapılır.

Görsel çekilemezse uygulama kırılmaz. Sonuç kartı, tablonun renk paletine yakın bir gradient fallback ile çalışmaya devam eder.

## Paylaşım ve İndirme

- `Görseli indir`: Sonucu `1080x1350` boyutunda PNG kartına çizer ve indirir.
- `Twitter'da paylaş`: Twitter intent penceresi açar, sonuç başlığını ve sayfa URL'sini paylaşır.
- Paylaşılan URL'de `?result=...` parametresi bulunur. Bu parametreyle gelen kullanıcı quiz çözmeden doğrudan aynı sonucu görebilir.

## Gizlilik

Quiz tamamen tarayıcıda çalışır. Cevaplar bir sunucuya gönderilmez. Sadece sonuç görselini göstermek için Wikimedia Commons'a görsel isteği yapılır.
