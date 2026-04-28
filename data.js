window.MONET_QUIZ_DATA = {
  dimensions: [
    "sun",
    "water",
    "city",
    "garden",
    "motion",
    "drama",
    "intimacy",
    "winter",
    "social",
    "mystery"
  ],
  questions: [
    {
      eyebrow: "Işık testi",
      title: "Bir odaya girdiğinde atmosfer genelde ne yapıyor?",
      options: [
        {
          title: "Perdeler açılıyor gibi oluyor.",
          note: "Benim işlevim biraz sabah, biraz sahne ışığı.",
          scores: { sun: 3, social: 1, motion: 1 }
        },
        {
          title: "Herkes biraz daha sessizleşiyor.",
          note: "Gürültü beni görünce kendine çeki düzen verir.",
          scores: { mystery: 2, intimacy: 2, water: 1 }
        },
        {
          title: "Planlar değişiyor.",
          note: "Ben oradaysam sabit fikirler fazla sabit kalamaz.",
          scores: { motion: 3, city: 1, drama: 1 }
        },
        {
          title: "Kimse anlamıyor ama hava yumuşuyor.",
          note: "Belli belirsiz bir bahçe etkisi.",
          scores: { garden: 2, water: 1, intimacy: 2 }
        }
      ]
    },
    {
      eyebrow: "Astrolojik kriz",
      title: "Merkür retrosu senin mesaj kutunda nasıl belirir?",
      options: [
        {
          title: "Eski biri 'naber' yazar, ben de sanat tarihine sığınırım.",
          note: "Cevap vermek yerine kendimi müze planında bulurum.",
          scores: { intimacy: 3, mystery: 1, drama: 1 }
        },
        {
          title: "Üç ayrı takvim aynı anda bozulur.",
          note: "Kaos ama kurumsal.",
          scores: { city: 2, motion: 2, drama: 1 }
        },
        {
          title: "Ben zaten geç cevap veriyordum.",
          note: "Gezegenleri suç ortaklığına davet etmem.",
          scores: { water: 2, winter: 1, mystery: 2 }
        },
        {
          title: "Bir anda her şeyi temizlemek isterim.",
          note: "Dolap, zihin, kamera rulosu, hepsi.",
          scores: { garden: 2, sun: 1, winter: 2 }
        }
      ]
    },
    {
      eyebrow: "Felsefi pozisyon",
      title: "Hayatın anlamına en yakın gelen cümle hangisi?",
      options: [
        {
          title: "Aynı yere uzun uzun bakınca yer değişir.",
          note: "Fenomenoloji ama pencere kenarı versiyonu.",
          scores: { water: 2, mystery: 2, intimacy: 1 }
        },
        {
          title: "Bir şey bitiyorsa, ışık açısını değiştiriyordur.",
          note: "Ben biraz varoluşçu, biraz iyimserim.",
          scores: { sun: 2, drama: 2, motion: 1 }
        },
        {
          title: "Kalabalık da bir manzaradır.",
          note: "Sosyoloji ile optik arasında yaşıyorum.",
          scores: { city: 2, social: 3 }
        },
        {
          title: "Güzellik bazen bakım ister.",
          note: "Sulamak, budamak, beklemek.",
          scores: { garden: 3, intimacy: 1, water: 1 }
        }
      ]
    },
    {
      eyebrow: "Ne alaka departmanı",
      title: "Bir kapı kolu sana gizlice ne söylüyor?",
      options: [
        {
          title: "Dışarıda hava tam karar değiştirmelik.",
          note: "Ceket al, ama dramatik al.",
          scores: { motion: 2, drama: 2, city: 1 }
        },
        {
          title: "Az önce buradan çok zarif biri geçti.",
          note: "Detaylara takılanlar kulübü.",
          scores: { intimacy: 2, social: 1, garden: 1, mystery: 1 }
        },
        {
          title: "Ben aslında bir ay evresiyim.",
          note: "Açıklamıyorum. Hisset.",
          scores: { mystery: 3, water: 1, winter: 1 }
        },
        {
          title: "Beni cilalayan kişi haklıydı.",
          note: "Pratiklik de estetik bir rejimdir.",
          scores: { sun: 1, garden: 2, social: 1 }
        }
      ]
    },
    {
      eyebrow: "Sanat akımı",
      title: "2026 ruh halin hangi güncel akıma yakın?",
      options: [
        {
          title: "Dopamine decor ama içten içe dingin.",
          note: "Renk var, kavga yok.",
          scores: { sun: 2, garden: 2, social: 1 }
        },
        {
          title: "Quiet luxury değil, quiet longing.",
          note: "Az konuşup çok hissettiren şeyler.",
          scores: { intimacy: 3, mystery: 1, water: 1 }
        },
        {
          title: "Post-internet yorgunluğu, analog kaçış.",
          note: "Bildirimleri kapatıp sis izlemek.",
          scores: { winter: 2, mystery: 2, water: 1 }
        },
        {
          title: "Soft launch edilen kaos.",
          note: "Her şey yolunda gibi, değil gibi, güzel gibi.",
          scores: { city: 2, motion: 2, drama: 2 }
        }
      ]
    },
    {
      eyebrow: "Mekan seçimi",
      title: "Bir pazar günü kendini nereye yerleştirirdin?",
      options: [
        {
          title: "Su kenarına, telefonsuz ve az havalı.",
          note: "Kendimle konuşmam gereken yer orası.",
          scores: { water: 3, mystery: 1, intimacy: 1 }
        },
        {
          title: "Kalabalık bir bulvara, gözlemci modunda.",
          note: "Kimseyle buluşmuyorum ama herkes malzemem.",
          scores: { city: 3, social: 2, motion: 1 }
        },
        {
          title: "Bir bahçeye, bitkilerle diplomatik ilişki kurmaya.",
          note: "Yapraklara karşı sorumluluk hissediyorum.",
          scores: { garden: 3, sun: 1, intimacy: 1 }
        },
        {
          title: "Rüzgarlı bir kayalığa, fazla film sahnesi gibi.",
          note: "İçerideki monolog dışarıya taşacak.",
          scores: { drama: 3, motion: 1, winter: 1 }
        }
      ]
    },
    {
      eyebrow: "Sosyal sinyal",
      title: "Bir grupta senin gizli görevin nedir?",
      options: [
        {
          title: "Sessizce tonu ayarlamak.",
          note: "Ortam regülatörü, insan formunda.",
          scores: { intimacy: 2, water: 2, social: 1 }
        },
        {
          title: "En iyi masayı bulmak.",
          note: "Lojistik aşkın en temiz hali.",
          scores: { city: 2, social: 2, sun: 1 }
        },
        {
          title: "Birinin söylemediği şeyi fark etmek.",
          note: "Bazen sezgi, bazen Wi-Fi şifresi gibi.",
          scores: { mystery: 3, intimacy: 2 }
        },
        {
          title: "Herkesi yürüyüşe çıkarmak.",
          note: "Durunca düşünüyoruz; yürüyünce çözüyoruz.",
          scores: { motion: 3, garden: 1, sun: 1 }
        }
      ]
    },
    {
      eyebrow: "Mevsimsel benlik",
      title: "İçine en çok hangi hava durumu yakışıyor?",
      options: [
        {
          title: "Kırılmamış bir sabah ışığı.",
          note: "Çok erken değil, çok geç değil.",
          scores: { sun: 3, garden: 1, water: 1 }
        },
        {
          title: "Kar sonrası garip sessizlik.",
          note: "Beyaz sayfa ama biraz pasif agresif.",
          scores: { winter: 3, mystery: 1, intimacy: 1 }
        },
        {
          title: "Rüzgarlı deniz, kontrollü panik.",
          note: "Duygular dalga boyunda.",
          scores: { drama: 2, motion: 2, water: 2 }
        },
        {
          title: "Sisli şehir, kahve ve karar erteleme.",
          note: "Belirsizlik ama iyi giyinmiş.",
          scores: { city: 2, mystery: 2, winter: 1 }
        }
      ]
    },
    {
      eyebrow: "Estetik refleks",
      title: "Bir fotoğraf çekerken en çok neye yenilirsin?",
      options: [
        {
          title: "Yansımaya.",
          note: "Gerçeğin kibarca ikiye bölünmesi.",
          scores: { water: 3, mystery: 1 }
        },
        {
          title: "İnsanların farkında olmadan kurduğu kompozisyona.",
          note: "Tesadüf sandıkları şey bende arşivlenir.",
          scores: { social: 2, city: 2, motion: 1 }
        },
        {
          title: "Çiçeğin fazla ciddi durmasına.",
          note: "Botanikte gurur meselesi.",
          scores: { garden: 3, sun: 1 }
        },
        {
          title: "Ufuktaki felaket ihtimaline.",
          note: "Bulutlar bana spoiler verir.",
          scores: { drama: 3, winter: 1, mystery: 1 }
        }
      ]
    },
    {
      eyebrow: "Son seçim",
      title: "Sonuç kartında arkandan hangi cümle kalsın?",
      options: [
        {
          title: "Ben kolay anlaşılmam, ama iyi ışıkta yakalanırım.",
          note: "Kişisel marka: kısmi bulutlu.",
          scores: { mystery: 2, sun: 1, intimacy: 2 }
        },
        {
          title: "Yaşadığım her şeyi güzel bir yere koymak isterim.",
          note: "Duygu küratörlüğü.",
          scores: { garden: 2, water: 1, intimacy: 2 }
        },
        {
          title: "Benim huzurum bile biraz hareketlidir.",
          note: "Durgunlukta bile tren sesi.",
          scores: { motion: 3, city: 1, water: 1 }
        },
        {
          title: "Bazen sadece çok iyi bir gün batımıyım.",
          note: "Abartılı ama doğru.",
          scores: { sun: 2, drama: 2, social: 1 }
        }
      ]
    }
  ],
  paintings: [
    {
      id: "impression-sunrise",
      title: "Impression, soleil levant",
      year: "1872",
      category: "Impression, soleil levant by Claude Monet",
      traits: ["sun", "water", "mystery", "motion", "city", "drama"],
      palette: ["#d86f4c", "#8797a6", "#2e6674", "#e0b36b"],
      mood: "sis içinde cesaret",
      astro: "Pluto Kova: eski etiketleri yakıp yeni bir isim koyma",
      philosophy: "fenomenoloji; dünya önce bir izlenim olarak gelir",
      movement: "empresyonizm, doğum anı",
      description:
        "Sen bir şeyin tam başladığı ana benziyorsun. Netlikten çok etkiyle ilgileniyorsun; insanlar ne olduğunu anlamadan sende bir sabah başlıyor."
    },
    {
      id: "water-lily-bridge-met",
      title: "Bridge over a Pond of Water Lilies",
      year: "1899",
      category: "Bridge over a Pond of Water Lilies, MET",
      traits: ["water", "garden", "mystery", "intimacy", "sun"],
      palette: ["#668f73", "#9fbf9d", "#587b8f", "#e2c58a"],
      mood: "kurulmuş huzur",
      astro: "Venüs Balık: yumuşak sınırlar, güçlü sezgi",
      philosophy: "Tao'ya yakın; zorlamadan akmak",
      movement: "geç empresyonizm, bahçe metafiziği",
      description:
        "Duygularını aceleyle anlatmıyorsun; onlar su üstünde açılıyor. Kendini toparlama biçimin dekoratif değil, oldukça derin."
    },
    {
      id: "artist-garden-giverny",
      title: "Le Jardin de l'artiste a Giverny",
      year: "1900",
      category: "Le Jardin de l'artiste à Giverny",
      traits: ["garden", "sun", "intimacy", "social", "mystery"],
      palette: ["#705ba0", "#6d9b64", "#d6a150", "#c56f83"],
      mood: "çiçekli disiplin",
      astro: "Jüpiter Yengeç: güvenli alanları büyütme",
      philosophy: "bakım etiği; sevmek düzenli emek ister",
      movement: "botanik empresyonizm",
      description:
        "İçindeki zarafet kendiliğinden gelmiyor; ona bakıyorsun, yer açıyorsun, ışık veriyorsun. Gösterişsiz ama unutulmayan bir varlığın var."
    },
    {
      id: "woman-parasol",
      title: "La Femme au Parasol",
      year: "1875",
      category: "La Femme au Parasol - Madame Monet et son fils by Claude Monet",
      traits: ["sun", "motion", "social", "intimacy", "garden"],
      palette: ["#a4c6d8", "#f3efd9", "#6a8a59", "#2f4f64"],
      mood: "rüzgarlı karizma",
      astro: "Ay Aslan: sahne istemeden sahne olmak",
      philosophy: "varoluşçuluk; kendini hareket halinde seçmek",
      movement: "açık hava portresi",
      description:
        "Sen dururken bile etrafında bir rüzgar var. İlgi çekmek için uğraşmıyorsun; kompozisyon kendiliğinden sana doğru eğiliyor."
    },
    {
      id: "poppies",
      title: "Les coquelicots",
      year: "1873",
      category: "Les coquelicots by Claude Monet",
      traits: ["garden", "sun", "social", "motion", "intimacy"],
      palette: ["#d45a4a", "#7ea066", "#f1dca6", "#8ab0c2"],
      mood: "nazik coşku",
      astro: "Venüs İkizler: hafiflikte anlam bulma",
      philosophy: "oyuncu pragmatizm; güzel olan ise yarar",
      movement: "kırsal empresyonizm",
      description:
        "Senin iyimserliğin bağırmaz, kırmızı çiçek gibi araya serpilir. Bir grubun içinde fark edilmen geç olabilir ama kalman uzun sürer."
    },
    {
      id: "magpie",
      title: "The Magpie",
      year: "1868-1869",
      category: "The Magpie by Claude Monet",
      traits: ["winter", "mystery", "sun", "intimacy"],
      palette: ["#f5edda", "#d7d0c3", "#b39a67", "#697d85"],
      mood: "kar üstünde sessiz zeka",
      astro: "Satürn Balık: sakinlikten sınav, sabırdan ışık",
      philosophy: "minimalizm; az şey daha fazla boşluk acar",
      movement: "kar manzarasi empresyonizmi",
      description:
        "Sendeki sessizlik boş değil; içinde çok iyi ayarlanmis bir ışık var. Herkes gösterirken sen bekleyerek ikna ediyorsun."
    },
    {
      id: "rouen-facade",
      title: "Cathedrale de Rouen, facade ouest",
      year: "1894",
      category: "Cathédrale de Rouen, façade ouest by Claude Monet (W1351)",
      traits: ["city", "mystery", "sun", "drama", "winter"],
      palette: ["#bba07c", "#8c8fa0", "#ead4a0", "#675b66"],
      mood: "tas kesilmis degisim",
      astro: "Satürn Koç: formun içinde cesaret",
      philosophy: "zaman felsefesi; ayni şey hiç ayni kalmaz",
      movement: "seri resim, optik israr",
      description:
        "Sen ayni soruya her gün baska cevap verenlerdensin. Dışarıdan sabit görünürsün; aslinda içinde ışık surekli yer değiştirir."
    },
    {
      id: "rouen-sun",
      title: "Cathedrale de Rouen, facade au soleil",
      year: "1894",
      category: "Cathédrale de Rouen, façade ouest, au soleil by Claude Monet (W1324)",
      traits: ["sun", "city", "drama", "mystery"],
      palette: ["#e0bd7d", "#c98f76", "#9487a5", "#f4e1b4"],
      mood: "kamusal parilti",
      astro: "Güneş Aslan: gorunmekten korkmayan yapi",
      philosophy: "Platonik gölge oyunu; hakikat ışıkla pazarlık eder",
      movement: "mimari empresyonizm",
      description:
        "Sende teatral bir netlik var. Hangi ortama girsen oranın eski duvarları bile biraz daha kendini göstermek istiyor."
    },
    {
      id: "boulevard-capucines-nelson",
      title: "Boulevard des Capucines",
      year: "1873-1874",
      category: "Boulevard des Capucines by Claude Monet (Nelson-Atkins Museum of Art)",
      traits: ["city", "social", "motion", "mystery", "winter"],
      palette: ["#9a968e", "#d9cbb4", "#58728b", "#2d3035"],
      mood: "kalabalık içinde zihin",
      astro: "Merkür Kova: uzaktan bakip herkesi okumak",
      philosophy: "Simmel şehir felsefesi; mesafe de ilişkidir",
      movement: "modern hayat empresyonizmi",
      description:
        "Kalabalığı seversin ama içine tamamen karışmazsın. Yukarıdan bakmak sende soğukluk değil, güzel bir analiz biçimi."
    },
    {
      id: "boulevard-capucines-pushkin",
      title: "Boulevard des Capucines, Paris",
      year: "1873",
      category: "Boulevard des Capucines by Claude Monet (Pushkin Museum)",
      traits: ["city", "social", "motion", "sun"],
      palette: ["#c8b18c", "#677b8f", "#e3d6bf", "#8d6c57"],
      mood: "şehirle flört",
      astro: "Merkür İkizler: hızlı gözlem, hızlı karar",
      philosophy: "flanorluk; yürümek düşünmenin kamusal hali",
      movement: "Paris modernizmi",
      description:
        "Sen detay toplayan, sonra hiç belli etmeden sonuç çıkaran birisin. Hayatin akışını durdurmadan anlamayı seviyorsun."
    },
    {
      id: "saint-adresse",
      title: "Garden at Sainte-Adresse",
      year: "1867",
      category: "Garden at Sainte-Adresse by Claude Monet",
      traits: ["garden", "water", "social", "sun", "city"],
      palette: ["#255f7d", "#d44d3f", "#f2d08b", "#4c8b6b"],
      mood: "tatil gibi strateji",
      astro: "Venüs Boğa: iyi manzara, iyi masa, iyi sinir",
      philosophy: "epikurculuk; haz incelikli seçimdir",
      movement: "burjuva açık hava resmi",
      description:
        "Keyfi ciddiye alıyorsun. Senin için güzel bir gün tesadüf değil; doğru açı, doğru sandalye ve doğru mesafe meselesi."
    },
    {
      id: "grenouillere",
      title: "La Grenouillere",
      year: "1869",
      category: "La Grenouillère, MET",
      traits: ["water", "social", "motion", "sun", "city"],
      palette: ["#4f7d7d", "#d5b76f", "#2f4a55", "#b7c7b4"],
      mood: "suyun üstünde sosyallik",
      astro: "Jüpiter İkizler: sohbetten rota çıkarma",
      philosophy: "pragmatizm; buluşmak da bir düşünce üretir",
      movement: "erken empresyonist deney",
      description:
        "Sen insanlarla arana tam kararında bir su mesafesi koyuyorsun. Yakınlık var, hareket var, fazla ciddileşmeye gerek yok."
    },
    {
      id: "bain-grenouillere",
      title: "Bain a la Grenouillere",
      year: "1869",
      category: "Bain à la Grenouillère",
      traits: ["water", "motion", "social", "sun"],
      palette: ["#416d6b", "#d0a85e", "#8aa492", "#f2dfb5"],
      mood: "hafta sonu kinetiği",
      astro: "Ay Terazi: ilişkiyi yüzeyde değil dengede tutma",
      philosophy: "bedensel fenomenoloji; suya girmek düşünceyi değiştirir",
      movement: "rekreasyon empresyonizmi",
      description:
        "Senin enerjin durgunluğu sevmez. İnsanları doğru dozda hareket ettirir, sonra bunu hiç bir şey yapmamış gibi gösterirsin."
    },
    {
      id: "parliament-sunset",
      title: "Le Parlement de Londres, soleil couchant",
      year: "1903",
      category: "Le Parlement de Londres, soleil couchant by Claude Monet",
      traits: ["city", "sun", "water", "mystery", "drama"],
      palette: ["#d97a54", "#6d6f9d", "#6b4063", "#e5c485"],
      mood: "politik sis",
      astro: "Pluto Kova: kolektif yapıların ardındaki duygu",
      philosophy: "negatif kapasite; kesinlesmeden kalabilmek",
      movement: "Londra sisi serisi",
      description:
        "Büyük sistemleri bile duygu hava durumu gibi okuyorsun. Sende romantizm var ama kolay lokma değil; sisin içinde kurumlar bile titriyor."
    },
    {
      id: "parliament-storm",
      title: "Le Parlement de Londres, ciel d'orage",
      year: "1904",
      category: "Le Parlement de Londres. Ciel d'orage by Claude Monet",
      traits: ["city", "drama", "water", "mystery", "winter"],
      palette: ["#585976", "#b05b5b", "#d0a568", "#34384a"],
      mood: "fırtına öncesi zeka",
      astro: "Mars Akrep: sessiz ama yoğun hamle",
      philosophy: "stoacılık değil; kontrollü kasvet",
      movement: "atmosferik modernizm",
      description:
        "Kriz anlarında garip biçimde netlesiyorsun. Havan ağır olabilir ama bu ağırlık başkalarına yön duygusu verir."
    },
    {
      id: "london-sun-fog",
      title: "Londres, le Parlement. Trouee de soleil dans le brouillard",
      year: "1904",
      category: "Londres, le Parlement. Trouée de soleil dans le brouillard by Claude Monet",
      traits: ["city", "sun", "mystery", "water"],
      palette: ["#d2a75d", "#9b83a7", "#656f93", "#efd5aa"],
      mood: "sis delici iyimserlik",
      astro: "Jüpiter Aslan: bulutun ortasinda bile sahne acma",
      philosophy: "umut estetiği; kanit yokken bile ışık aramak",
      movement: "sis empresyonizmi",
      description:
        "Sen karışık durumlarda umut bulan değil, umudu üreten kişilerdensin. Bir açıklık yakaladiginda herkesin bakış açısı değişir."
    },
    {
      id: "grand-canal",
      title: "Le Grand Canal, Venice",
      year: "1908",
      category: "Le Grand Canal, Venice by Claude Monet (Wildenstein 1736)",
      traits: ["water", "city", "sun", "mystery", "drama"],
      palette: ["#6d8fa3", "#d7a05f", "#b36d72", "#36566a"],
      mood: "yansimali ihtisam",
      astro: "Venüs Terazi: estetik diplomasi",
      philosophy: "simulakr; yansıma bazen aslından daha dürüstür",
      movement: "Venedik empresyonizmi",
      description:
        "Sen ihtisami seviyorsun ama bagirmayanini. Yansimalar, imalar ve iyi ayarlanmis mesafeler senin doğal dilin."
    },
    {
      id: "palais-contarini",
      title: "Le Palais Contarini",
      year: "1908",
      category: "Le Palais Contarini by Claude Monet (Wildenstein 1766)",
      traits: ["water", "city", "mystery", "intimacy"],
      palette: ["#6c8494", "#c28767", "#dbc7a2", "#4d6071"],
      mood: "sarayın ic sesi",
      astro: "Ay Terazi: güzelliği incitmeden yorumlama",
      philosophy: "hermenuetik; bina da okunur",
      movement: "Venedik geç donem",
      description:
        "Sende asil bir çekingenlik var. Her şeyini anlatmazsın, ama bakan kişi sende daha eski bir hikaye olduğunu anlar."
    },
    {
      id: "argenteuil-bridge",
      title: "Le Pont d'Argenteuil",
      year: "1874",
      category: "Le Pont d'Argenteuil, Claude Monet, musée d'Orsay, 1874",
      traits: ["water", "city", "motion", "sun", "social"],
      palette: ["#4f86a1", "#d4b468", "#e7ddc8", "#476b58"],
      mood: "geçiş halinde ferahlik",
      astro: "Merkür Terazi: iki kıyıyı konusturma",
      philosophy: "esik felsefesi; geçişler kimlik kurar",
      movement: "nehir modernitesi",
      description:
        "Sen arada kalmayi beceriksizlik değil, uzmanlık haline getirmissin. İki dünyayı birbirine bağlarken kendine de yer açıyorsun."
    },
    {
      id: "pont-neuf",
      title: "Le Pont Neuf",
      year: "1871",
      category: "Le Pont Neuf by Claude Monet",
      traits: ["city", "motion", "social", "sun"],
      palette: ["#d0bc92", "#51788b", "#6c6b5f", "#f0d9a5"],
      mood: "kentsel nabiz",
      astro: "Merkür Koç: hızlı geçiş, hızlı sezgi",
      philosophy: "kamusal alan; benlik yolda kurulur",
      movement: "şehir empresyonizmi",
      description:
        "Sen durduğun yerde bile geçit gibisin. İnsanlar senden geçer, sende bir şey fark eder, sonra ayni kişi olarak devam edemez."
    },
    {
      id: "haystacks-sunset",
      title: "Les Meules a Giverny, soleil couchant",
      year: "1891",
      category: "Les Meules à Giverny, soleil couchant (Wildenstein 1213)",
      traits: ["sun", "garden", "drama", "intimacy", "winter"],
      palette: ["#c86f4f", "#d6a84e", "#6c6a8b", "#ead7a2"],
      mood: "gün batiminda direnc",
      astro: "Güneş Boğa: sabit kalip ışık degistirme",
      philosophy: "tekrar felsefesi; ayni şey rituel olunca acilir",
      movement: "Meules serisi",
      description:
        "Sen azim ile romantizmi ayni bedende taşıyorsun. Tekrar ettiğin şeyler sıkıcı değil; sen onları her defasında yeni ışıkla kuruyorsun."
    },
    {
      id: "haystacks-frost",
      title: "Les Meules, effet de gelee blanche",
      year: "1889",
      category: "Les Meules, effet de gelée blanche (Wildenstein 1215)",
      traits: ["winter", "sun", "garden", "intimacy"],
      palette: ["#d8d6c7", "#c4a16f", "#8f8fab", "#f0e3c3"],
      mood: "sogukta altın sabir",
      astro: "Satürn Boğa: yavaş büyüyen guven",
      philosophy: "stoacılık; hava sert olsa da form korunur",
      movement: "don etkisi empresyonizmi",
      description:
        "Kolay parlamazsin; isin isinirsin. Sende sessiz bir dayaniklilik var, kimse bakmiyorken bile kendini ayakta tutarsin."
    },
    {
      id: "haystacks-morning",
      title: "Les Meules, Giverny, effet du matin",
      year: "1891",
      category: "Les Meules, Giverny, effet du matin (Wildenstein 1214)",
      traits: ["sun", "garden", "winter", "mystery"],
      palette: ["#e6c681", "#b6b0a6", "#8296aa", "#f2e3bd"],
      mood: "sabah kararliligi",
      astro: "Ay Başak: küçük rutinlerde büyük ışık",
      philosophy: "ritualizm; tekrar ruhu duzeltir",
      movement: "sabah ışığı arastirmasi",
      description:
        "Senin gücün dramatik karar anlarindan çok, düzenli geri dönüşlerde. Günün ilk ışığı gibi, yavaş ama belirleyicisin."
    },
    {
      id: "haystacks-winter",
      title: "Les meules, hiver",
      year: "1890-1891",
      category: "Les meules, hiver (Wildenstein 1275)",
      traits: ["winter", "garden", "mystery", "intimacy"],
      palette: ["#d5d0c4", "#8f93a3", "#b68e6f", "#f1e6d3"],
      mood: "içeri çekilmiş güç",
      astro: "Satürn Oğlak: sessiz sorumluluk",
      philosophy: "negatif alan; boşluk da bir içeriktir",
      movement: "kis empresyonizmi",
      description:
        "Kendini geri çekmen kaybolmak değil. Sen gucunu toplarken manzara sadeleşir ve asil şekil ortaya çıkar."
    },
    {
      id: "two-haystacks",
      title: "Deux Meules, declin du jour, automne",
      year: "1890-1891",
      category: "Deux Meules, déclin du jour, automne (Wildenstein 1270)",
      traits: ["sun", "drama", "garden", "intimacy"],
      palette: ["#cf7b44", "#6b4d70", "#e0b064", "#4f6648"],
      mood: "son ışıkta ortaklık",
      astro: "Venüs Akrep: yakınlıkta dönüşüm",
      philosophy: "diyalektik; iki şekil birbirini düşündürür",
      movement: "sonbahar Meules serisi",
      description:
        "Tek başına güçlüsün ama doğru eşlik seni bambaşka yapar. Sende günün bitisini bile büyüten bir ikili enerji var."
    },
    {
      id: "water-lilies-harmony-rose",
      title: "Le Bassin aux nympheas, Harmonie rose",
      year: "1900",
      category: "Le Bassin aux nymphéas, Harmonie rose by Claude Monet",
      traits: ["water", "garden", "mystery", "intimacy", "sun"],
      palette: ["#c58b98", "#6e9a83", "#587f8d", "#e2c7a7"],
      mood: "pembe düşünce",
      astro: "Venüs Balık: cozulmekten korkmayan kalp",
      philosophy: "romantik idealizm; duygu da bilgi verir",
      movement: "Nympheas, pembe armoni",
      description:
        "Senin hassasiyetin zayıflık değil; kendi başına bir algı sistemi. Bazı cevapları mantık değil, suyun rengi veriyor."
    },
    {
      id: "water-lilies-1884",
      title: "Le Bassin aux nympheas",
      year: "1899",
      category: "Le Bassin aux nymphéas (Wildenstein 1884)",
      traits: ["water", "garden", "mystery", "intimacy"],
      palette: ["#477c77", "#7ea76f", "#c7a66f", "#4b5d7d"],
      mood: "gizli bahçe mantığı",
      astro: "Ay Yengeç: güvenli derinlik",
      philosophy: "ickinlik; anlam yuzeyin içinde",
      movement: "nilüfer havuzu serisi",
      description:
        "Sen duygularini büyük cumlelerle değil, iyi korunmuş bir havuz gibi taşırsın. Yaklaşan kişi önce kendi yansimasiyla karşılaşır."
    },
    {
      id: "water-lilies-1685",
      title: "Nympheas",
      year: "1907",
      category: "Nymphéas (Wildenstein 1685)",
      traits: ["water", "mystery", "garden"],
      palette: ["#547c8c", "#7b9d73", "#9d7da6", "#d7be8a"],
      mood: "derin yüzey",
      astro: "Neptun Balık: sezginin biraz fazla iyi çalışması",
      philosophy: "post-yapisal su; anlam kayar",
      movement: "soyuta yaklasan Nympheas",
      description:
        "Sende tek bir cevap yok; katman var. Biri seni çözdüm dediği anda su hafifçe kıpırdar ve hikaye baska yere gider."
    },
    {
      id: "nympheas-1729",
      title: "Nympheas",
      year: "1914-1917",
      category: "Nymphéas (Wildenstein 1729)",
      traits: ["water", "garden", "mystery", "drama"],
      palette: ["#3f6f79", "#6e8d68", "#8c6aa2", "#c59c71"],
      mood: "büyük ic manzara",
      astro: "Pluto Kova: kisisel olan kolektif renge dönüşür",
      philosophy: "mistik monizm; su, gok ve benlik karisir",
      movement: "geç Nympheas",
      description:
        "Senin ic dünyan tek kareye sigmaz. Sakin görünürsün ama genişledikçe insanin ölçeğini degistiren bir tarafin var."
    },
    {
      id: "agapanthus",
      title: "Agapanthus Triptych",
      year: "1915-1926",
      category: "Agapanthus triptych (Wildenstein 1975 1976 1977)",
      traits: ["garden", "water", "mystery", "drama", "sun"],
      palette: ["#668e85", "#705d9b", "#b76f88", "#d4b66e"],
      mood: "çiçeklerin kozmolojisi",
      astro: "Jüpiter Balık: sınırların estetik biçimde erimesi",
      philosophy: "panteizm; bahçe evren gibi davranir",
      movement: "geç donem panaromik Monet",
      description:
        "Sen küçük seylere fazla anlam yüklemiyorsun; onlar zaten fazla anlam taşıyor. Bakışında evreni bahçeye sığdıran bir genişlik var."
    },
    {
      id: "chrysanthemums",
      title: "Chrysanthemes",
      year: "1878",
      category: "Chrysantèmes by Claude Monet",
      traits: ["garden", "intimacy", "sun", "mystery"],
      palette: ["#bf6d5e", "#d2aa54", "#6f8f67", "#554b58"],
      mood: "masada sakli gorkem",
      astro: "Venüs Başak: detaydan büyü çıkarma",
      philosophy: "nesne ontolojisi; vazo da olaydir",
      movement: "çiçek natürmortu",
      description:
        "Sen gösteriyi küçük ölçeklerde kuruyorsun. Yakından bakan biri, sende sandığından daha parlak bir disiplin bulur."
    },
    {
      id: "tulip-fields",
      title: "Champs de Tulipes en Hollande",
      year: "1886",
      category: "Champs de Tulipes en Hollande byClaude Monet",
      traits: ["garden", "sun", "social", "motion", "city"],
      palette: ["#d45e5e", "#6c9b5d", "#e4bd5d", "#8bb8ca"],
      mood: "renkli hiz",
      astro: "Jüpiter İkizler: ayni anda çok renkli ihtimal",
      philosophy: "çoğulluk; tek doğru yerine seri halinde açılma",
      movement: "Hollanda peyzaji",
      description:
        "Senin kafanda tek bir yol yok, paralel tarlalar var. Renkli, hızlı ve biraz da bas dondurucu seçeneklerle düşünüyorsun."
    },
    {
      id: "antibes",
      title: "Antibes",
      year: "1888",
      category: "Antibes, Monet",
      traits: ["sun", "water", "garden", "city", "mystery"],
      palette: ["#5c9ab2", "#d5a75b", "#7a9b63", "#e9d8ae"],
      mood: "Akdeniz netligi",
      astro: "Güneş Yay: ufku büyütme istegi",
      philosophy: "yaşama sevinci; açıklık da bir argumandir",
      movement: "Riviera empresyonizmi",
      description:
        "Senin enerjin kapalı odalara fazla geliyor. Uzaklık, sıcaklık ve keskin renkler sende iyi fikirlerin kilidini acar."
    },
    {
      id: "morning-antibes",
      title: "Morning at Antibes",
      year: "1888",
      category: "Morning at Antibes (1888)",
      traits: ["sun", "water", "garden", "mystery", "intimacy"],
      palette: ["#7aa6bd", "#e0b566", "#a0ad73", "#f0dfbd"],
      mood: "sabah akdenizi",
      astro: "Ay Yay: uyaninca bile uzaklara bakma",
      philosophy: "açıklık fenomenolojisi; ufuk düşünceyi büyütür",
      movement: "sabah peyzaji",
      description:
        "Sen kendine alan açıldığında en iyi haline geliyorsun. Fazla baskı seni küçültür; ufuk ise tam tersine konuşturur."
    },
    {
      id: "bordighera",
      title: "Bordighera",
      year: "1884",
      category: "Bordighera by Claude Monet (Wildenstein 854)",
      traits: ["garden", "sun", "drama", "mystery"],
      palette: ["#2f7c72", "#c77854", "#d4ac55", "#66538a"],
      mood: "egzotik yoğunluk",
      astro: "Venüs Akrep: güzelliğin fazla kolay olmaması",
      philosophy: "sublime; güzel olan biraz taşar",
      movement: "Riviera bitki dramasi",
      description:
        "Sen sade bir güzellikten fazlasısın; biraz aşırı, biraz sıcak, biraz da tehlikeli derecede canlısın. Hafiflik sende bile derinleşiyor."
    },
    {
      id: "cliff-pourville",
      title: "Edge of the Cliff at Pourville",
      year: "1882",
      category: "Edge of the Cliff at Pourville (Claude Monet)",
      traits: ["water", "drama", "motion", "sun", "garden"],
      palette: ["#4f91aa", "#d0b16f", "#8aa06b", "#ece0c2"],
      mood: "kenarda ferahlik",
      astro: "Mars Yay: riskle manzara arasinda",
      philosophy: "sinir deneyimi; kenar, bakisi keskinlestirir",
      movement: "Normandiya kiyisi",
      description:
        "Sen riskten tamamen kaçmıyorsun; sadece ona iyi bir manzara istiyorsun. Kenarda durduğunda bile içinde ferah bir yön duygusu var."
    },
    {
      id: "rough-sea-etretat",
      title: "Grosse mer a Etretat",
      year: "1883",
      category: "Grosse mer à Étretat by Claude Monet.",
      traits: ["water", "drama", "motion", "winter", "mystery"],
      palette: ["#406a79", "#cfc4ad", "#8d8078", "#2f4350"],
      mood: "duygusal dalga",
      astro: "Mars Balık: yumuşak görünen fırtına",
      philosophy: "duygu realizmi; dalga geldiyse vardır",
      movement: "Etretat denizleri",
      description:
        "Sakinliğin mutlak değil; bazen çok iyi yönetilen bir dalga. Duygularını saklamaktan çok, onlara ritim vermeyi biliyorsun."
    },
    {
      id: "stormy-sea-etretat",
      title: "Mer agitee a Etretat",
      year: "1883",
      category: "Monet - Mer agitée à Etretat",
      traits: ["water", "drama", "motion", "winter"],
      palette: ["#375463", "#b9b0a2", "#d8c7a7", "#6d767c"],
      mood: "kontrollü kasirga",
      astro: "Mars Koç: dalganin ilk hamlesi",
      philosophy: "kaos teorisi; ritim duzenin akrabasi",
      movement: "deniz empresyonizmi",
      description:
        "Sen fazla durgun ortamlarda eksik kalırsın. Hareket, hatta biraz gerilim, sende gerçek formu ortaya çıkarıyor."
    },
    {
      id: "manneporte",
      title: "Manne-Porte, Etretat",
      year: "1885",
      category: "Manne-Porte, Étretat (1885)",
      traits: ["water", "drama", "mystery", "sun"],
      palette: ["#4b7890", "#cba66a", "#725f6d", "#e6d4ac"],
      mood: "kayada acilan kapı",
      astro: "Pluto Kova: eski kayayi yeni gecide cevirmek",
      philosophy: "esik ontolojisi; geçit bazen taşın icindedir",
      movement: "Etretat kayaliklari",
      description:
        "Sen kapalı görünen yerlerde geçit buluyorsun. Dramatik olabilirsin ama bu drama seni durdurmaz; aksine açıklık yaratir."
    },
    {
      id: "pyramids-port-coton",
      title: "Les Pyramides de Port-Coton, mer sauvage",
      year: "1886",
      category: "Les Pyramides de Port-Coton, mer sauvage (W1084)",
      traits: ["water", "drama", "motion", "mystery"],
      palette: ["#516d82", "#d2c0a8", "#8d766f", "#374b58"],
      mood: "vahsi kompozisyon",
      astro: "Uranus Boğa: doğal formda beklenmedik kirilma",
      philosophy: "sublime; büyük olan seni kucultmez, uyandirir",
      movement: "Belle-Ile kayalari",
      description:
        "Karmaşa sende dekoratif durmuyor; gerçekten büyük. Bir şeyi hafife almak istesen bile içindeki doga kuvveti buna izin vermiyor."
    },
    {
      id: "low-tide-pourville",
      title: "Low Tide at Pourville",
      year: "1882",
      category: "Low Tide at Pourville, near Dieppe, 1882 (Claude Monet)",
      traits: ["water", "sun", "mystery", "intimacy"],
      palette: ["#7fa4b3", "#d6bb7a", "#c8d0bf", "#547782"],
      mood: "çekilmiş su, açık kalan his",
      astro: "Ay Balık: gelgitli ama sezgisel",
      philosophy: "eksilme estetiği; cekilen şey de bicim verir",
      movement: "gelgit peyzaji",
      description:
        "Sen yokluklari da okuyabilen birisin. Bir şey çekildiğinde paniklemiyorsun; geride kalan sekle bakıyorsun."
    },
    {
      id: "petites-dalles",
      title: "Les Petites-Dalles bei Ebbe",
      year: "1884",
      category: "Les Petites-Dalles bei Ebbe by Claude Monet",
      traits: ["water", "winter", "mystery", "motion"],
      palette: ["#7793a0", "#d4c8b7", "#5d6b75", "#b39b7c"],
      mood: "serin gelgit",
      astro: "Satürn Balık: duyguyu yapilandirma",
      philosophy: "liminalite; aralikta kalmak verimlidir",
      movement: "kiyi empresyonizmi",
      description:
        "Senin belirsizlikle ilişkin fena değil. Hatta arada kalmış saatlerde daha berrak düşünüyor, daha doğru goruyorsun."
    },
    {
      id: "boats-etretat",
      title: "Bateaux sur la plage a Etretat",
      year: "1883",
      category: "Bateaux sur la plage à Étretat",
      traits: ["water", "motion", "social", "sun"],
      palette: ["#6d93a3", "#d5b26b", "#9a7562", "#eee0bf"],
      mood: "bekleyen yolculuk",
      astro: "Merkür Yay: valizden önce fikir hazır",
      philosophy: "potansiyel; hareket başlamadan önce de vardır",
      movement: "sahil ve tekne serisi",
      description:
        "Sen hazırlık anlarını seviyorsun. Yola çıkmadan önce bile zihninde rüzgar var; insanlar bunu senden bulaşıcı biçimde kapar."
    },
    {
      id: "hotel-trouville",
      title: "Hotel des Roches Noires, Trouville",
      year: "1870",
      category: "Hôtel des Roches Noires, Trouville by Claude Monet",
      traits: ["city", "water", "social", "motion", "sun"],
      palette: ["#d6c399", "#517a8e", "#b44945", "#f0e0bd"],
      mood: "tatil sosyolojisi",
      astro: "Venüs İkizler: insanlarin arasinda hafif parlamak",
      philosophy: "gösterge bilimi; bayrak bile ruh hali anlatır",
      movement: "sahil modernligi",
      description:
        "Sen sosyal ortamlarda sahneye atlamadan görünürsün. Esinti, konusmalar ve ufak detaylar sende iyi bir hikayeye dönüşür."
    },
    {
      id: "camille-trouville",
      title: "Camille on the Beach at Trouville",
      year: "1870",
      category: "Camille on the Beach at Trouville by Claude Monet",
      traits: ["water", "intimacy", "social", "sun", "motion"],
      palette: ["#d6c7a5", "#6b8da0", "#30323b", "#c78f6f"],
      mood: "rüzgarlı yakınlık",
      astro: "Ay Terazi: mesafeli zarafet",
      philosophy: "bakış etiği; sevgi bazen uzaktan iyi gorur",
      movement: "sahil portresi",
      description:
        "Yakınlığın gösterişli değil, dikkatli. Birini izlerken bile onun alanına saygı duyuyor, duyguyu zarif bir mesafede tutuyorsun."
    },
    {
      id: "apple-tree",
      title: "Apple Tree",
      year: "1879",
      category: "Apple Tree by Claude Monet (Wildenstein 523)",
      traits: ["garden", "sun", "intimacy", "winter"],
      palette: ["#88a874", "#d5c8a3", "#b97d72", "#eef0dc"],
      mood: "meyve vermeden önce",
      astro: "Jüpiter Boğa: yavaş verim, kalıcı tat",
      philosophy: "organik zaman; acele etmeyen şey daha iyi olgunlaşır",
      movement: "bahar agaci peyzaji",
      description:
        "Sende erken hasat edilemeyecek bir kalite var. Acele edilince kapanır, doğru mevsimde ise cömertçe acilirsin."
    },
    {
      id: "meadow-giverny",
      title: "Meadow at Giverny",
      year: "1888",
      category: "Meadow at Giverny by Claude Monet",
      traits: ["garden", "sun", "motion", "intimacy"],
      palette: ["#83a65f", "#d8b75b", "#b95853", "#e8dfbd"],
      mood: "cayirda hafif hiz",
      astro: "Venüs Yay: ferah ve doğal temas",
      philosophy: "açık alan ontolojisi; benlik genişlik ister",
      movement: "Giverny kir peyzaji",
      description:
        "Sen baskı altinda değil, açık alanda kendin oluyorsun. Fazla tanım seni daraltır; genişlik ve renk seni toparlar."
    },
    {
      id: "argenteuil-houses",
      title: "Maisons a Argenteuil",
      year: "1873",
      category: "Maisons à Argenteuil, Claude Monet",
      traits: ["city", "garden", "sun", "social", "water"],
      palette: ["#d4bf8d", "#6e9b7a", "#7c91a8", "#bb6b54"],
      mood: "banliyö huzuru",
      astro: "Ay Boğa: güvenli yer, iyi ışık",
      philosophy: "gündelik hayat felsefesi; ev de manzaradır",
      movement: "Argenteuil donemi",
      description:
        "Sen hayatı büyük olaylardan çok, iyi yerleştirilmiş gündeliklerden kuruyorsun. Ev hissi sende durağan değil, renkli."
    },
    {
      id: "basin-argenteuil",
      title: "Le Bassin d'Argenteuil",
      year: "1872",
      category: "Monet, Claude - Le Bassin d'Argenteuil",
      traits: ["water", "city", "social", "sun", "motion"],
      palette: ["#628ea0", "#d9b868", "#f0dfbb", "#516b5e"],
      mood: "nehir kenari ritmi",
      astro: "Merkür Terazi: ilişkileri akışkan tutma",
      philosophy: "akış felsefesi; kent bile suyla yumuşar",
      movement: "Argenteuil nehri",
      description:
        "Sen sert yapıları yumusatma konusunda iyisin. Dogru sohbet, doğru zamanlama ve biraz su etkisiyle ortam değişir."
    },
    {
      id: "seine-vetheuil",
      title: "La Seine a Vetheuil",
      year: "1880",
      category: "La Seine à Vetheuil by Claude Monet (W481)",
      traits: ["water", "intimacy", "mystery", "garden"],
      palette: ["#6e8fa0", "#9fa783", "#d4bd91", "#556773"],
      mood: "nehirde ic konusma",
      astro: "Ay Balık: yansimada kendini duyma",
      philosophy: "akışkan benlik; sabit kimlik fazla iddiali",
      movement: "Vetheuil nehri",
      description:
        "Sen kendini en iyi akarken anlıyorsun. Netleşmek için sertleşmeye değil, ritmini bulmaya ihtiyacın var."
    },
    {
      id: "creuse-sunset",
      title: "La Vallee de la Creuse, soleil couchant",
      year: "1889",
      category: "La Vallée de la Creuse, soleil couchant",
      traits: ["sun", "drama", "water", "mystery", "winter"],
      palette: ["#cf6f4d", "#6f5d86", "#47707c", "#e0aa64"],
      mood: "vadi içinde yankili son",
      astro: "Güneş Akrep: derine inen ışık",
      philosophy: "romantik sublime; manzara ic dünyayı büyütür",
      movement: "Creuse Vadisi serisi",
      description:
        "Senin duyguların geniş alanda yankılanıyor. Bir şeyi bitirirken bile onu daha anlamlı hale getiren bir son ışık taşıyorsun."
    },
    {
      id: "effet-vent-poplars",
      title: "Effet de vent, serie des Peupliers",
      year: "1891",
      category: "Effet de vent, série des Peupliers by Claude Monet",
      traits: ["motion", "garden", "sun", "mystery"],
      palette: ["#7a9b67", "#d1ac5d", "#7892a0", "#5b6d55"],
      mood: "ruzgarla düşünmek",
      astro: "Uranus İkizler: fikirlerin yaprak gibi yer degistirmesi",
      philosophy: "süreç felsefesi; varlık hareketin izidir",
      movement: "Poplars serisi",
      description:
        "Sen fikirlerini sabitleyince değil, hafifçe sallandıklarında anlarsın. Esneklik sende kararsızlık değil, algı biçimi."
    },
    {
      id: "two-women-boat",
      title: "Deux femmes en barque",
      year: "1887",
      category: "Deux femmes en barque (w1150)",
      traits: ["water", "intimacy", "social", "garden", "mystery"],
      palette: ["#527c74", "#d6c78c", "#7f9b67", "#344b4f"],
      mood: "paylaşılan sessizlik",
      astro: "Venüs Yengeç: yakınlıkta güvenli alan",
      philosophy: "diyalog felsefesi; susmak da ortak cumledir",
      movement: "figurlu nehir peyzaji",
      description:
        "Sen herkesle değil, doğru kisiyle derinleşirsin. En iyi sohbetlerin bazen kelimesiz; suyun üstünde yan yana durmak yeter."
    },
    {
      id: "la-barque",
      title: "La Barque",
      year: "1887",
      category: "La Barque by Claude Monet (W1154)",
      traits: ["water", "intimacy", "motion", "mystery"],
      palette: ["#557f75", "#cdbf83", "#324f4d", "#8da56f"],
      mood: "küçük rota",
      astro: "Ay Balık: duygusal navigasyon",
      philosophy: "yolculuk metafiziği; küçük hareket büyük yön verir",
      movement: "kayik ve nehir",
      description:
        "Sana devasa planlar değil, iyi ayarlanmis küçük rotalar yakışıyor. Az kişi, az ses, çok his."
    },
    {
      id: "luncheon",
      title: "The Luncheon",
      year: "1868-1869",
      category: "The Luncheon (1868) by Claude Monet",
      traits: ["social", "intimacy", "garden", "sun"],
      palette: ["#d1b57e", "#6b8f61", "#b75f51", "#f1e4c8"],
      mood: "ev içi koreografi",
      astro: "Ay Başak: sofrada düzen, kalpte detay",
      philosophy: "gündelik estetik; yemek masası da evrendir",
      movement: "figurlu erken Monet",
      description:
        "Sen samimiyeti büyük itiraflarla değil, doğru düzenlenmiş bir günle kuruyorsun. Sofrada, ışıkta, sandalyenin yerinde bile duygu var."
    },
    {
      id: "le-dejeuner",
      title: "Le dejeuner",
      year: "1873",
      category: "Le déjeuner by Claude Monet",
      traits: ["social", "garden", "intimacy", "sun"],
      palette: ["#7e9a61", "#d7b66d", "#f0dfbd", "#8f6d55"],
      mood: "bahçede aile ritmi",
      astro: "Jüpiter Yengeç: yakın halkayi büyütmek",
      philosophy: "bakım ve zaman; günlük hayat kutsal olabilir",
      movement: "bahçe yaşantısı",
      description:
        "Sende insanlarin rahatladığı bir masa etkisi var. Kalabalik bile yaninda daha evcil, daha yumuşak, daha yaşanabilir olur."
    },
    {
      id: "camille-deathbed",
      title: "Camille Monet on her Deathbed",
      year: "1879",
      category: "Camille Monet on her Deathbed (Claude Monet - Musée d'Orsay)",
      traits: ["intimacy", "drama", "winter", "mystery"],
      palette: ["#8e8f99", "#c9c0b9", "#5d5f6e", "#e0d6ca"],
      mood: "kederin rengi",
      astro: "Satürn Balık: duyguyu taşıyacak form bulmak",
      philosophy: "yas felsefesi; bakmak bazen vedadır",
      movement: "mahrem empresyonizm",
      description:
        "Sen duygunun hafif yerlerinden kaçmıyorsun, ağır olanla da kalabiliyorsun. Bu sende kasvet değil, derin bir sadakat."
    },
    {
      id: "canal-amsterdam",
      title: "Canal in Amsterdam",
      year: "1874",
      category: "Canal in Amsterdam by Monet",
      traits: ["water", "city", "mystery", "motion"],
      palette: ["#6c7f88", "#b89b72", "#465a63", "#d4c5aa"],
      mood: "kanalda düşünce",
      astro: "Merkür Balık: şehir içinde akışkan sezgi",
      philosophy: "harita ve akış; rota da ruh halidir",
      movement: "Hollanda kent peyzaji",
      description:
        "Sen planli gibi gorunup sezgisel hareket edenlerdensin. Kanallar, sokaklar, ara yollar; hepsi zihninin doğal mimarisi."
    },
    {
      id: "leicester-square-night",
      title: "Leicester Square, by night",
      year: "1901",
      category: "Leicester Square, by night (Wildenstein 1615)",
      traits: ["city", "mystery", "social", "drama", "motion"],
      palette: ["#232936", "#c58a53", "#6e5f87", "#d8c08a"],
      mood: "gece neonundan önce",
      astro: "Ay Akrep: kalabaligin karanlik alt yazisi",
      philosophy: "gece fenomenolojisi; görünen şey değişir",
      movement: "Londra gece serisi",
      description:
        "Sen gece olunca daha iyi anlaşılıyorsun. Kalabalik, ışık ve hafif belirsizlik senden gizli bir karizma çıkarıyor."
    },
    {
      id: "tuileries",
      title: "Les Tuileries",
      year: "1876",
      category: "Les Tuileries (esquisse) by Claude Monet",
      traits: ["city", "garden", "social", "sun", "mystery"],
      palette: ["#8e9b72", "#d2b76e", "#6d7188", "#eadcc0"],
      mood: "parkta medeniyet",
      astro: "Venüs Terazi: dogayi nazikce kentlestirmek",
      philosophy: "kamusal güzellik; park bir anlaşmadır",
      movement: "Paris bahçeleri",
      description:
        "Sen doğal olmakla düzenli olmak arasinda iyi bir uzlaşı buluyorsun. Fazla vahsi değil, fazla steril hiç değil."
    },
    {
      id: "jar-peaches",
      title: "Jar of Peaches",
      year: "1866",
      category: "Jar of Peaches by Claude Monet (Galerie Neue Meister)",
      traits: ["intimacy", "sun", "garden"],
      palette: ["#d8905c", "#e4c68f", "#6f7f5d", "#5f4f46"],
      mood: "meyveli yakın plan",
      astro: "Venüs Boğa: dokulu, yenilebilir güzellik",
      philosophy: "maddi haz; nesneler de sevilmek ister",
      movement: "erken natürmort",
      description:
        "Sen büyük jestler yerine iyi seçilmiş ayrıntılarla ikna ediyorsun. Bir şeyi seviyorsan ona gerçekten yakından bakıyorsun."
    },
    {
      id: "pears-grapes",
      title: "Pears and Grapes",
      year: "1880",
      category: "Pears and Grapes by Claude Monet (Hamburger Kunsthalle)",
      traits: ["intimacy", "garden", "sun", "mystery"],
      palette: ["#c0a054", "#7f8a56", "#8f4d58", "#e2cf9a"],
      mood: "olgunlaşmış sakinlik",
      astro: "Jüpiter Boğa: tadın zamanla gelmesi",
      philosophy: "duyusal realizm; anlam bazen kabuktadır",
      movement: "meyve natürmortu",
      description:
        "Senin enerjin olgun ve seçici. Her şeyi hemen anlatmazsın; doğru zamanda, doğru masada kendini açarsın."
    },
    {
      id: "frost-giverny",
      title: "Raureif in Giverny",
      year: "1885",
      category: "MB-Mon-18 Monet Raureif-in-Giverny.jpg",
      traits: ["winter", "garden", "sun", "intimacy"],
      palette: ["#d9d6c8", "#9a9fa6", "#b68b63", "#f1e7cc"],
      mood: "donmus sabah",
      astro: "Satürn Başak: sade kalan şey guclenir",
      philosophy: "arindirma; soguk fazlaligi temizler",
      movement: "Giverny kislari",
      description:
        "Senin netligin bazen soguk algılanabilir, ama aslinda fazla şeyi temizledigin için oyle. Geriye kalan güvenilir."
    },
    {
      id: "snowy-road-honfleur",
      title: "A Cart on the Snowy Road at Honfleur",
      year: "1867",
      category: "A Cart on the Snowy Road at Honfleur",
      traits: ["winter", "motion", "intimacy", "mystery"],
      palette: ["#dcd8cb", "#9b9a8f", "#725f52", "#ece4d1"],
      mood: "karli yol karari",
      astro: "Satürn Yay: yavaş yolda doğru yön",
      philosophy: "yol metaforu; ilerlemek bazen agirlasmaktir",
      movement: "erken kis peyzaji",
      description:
        "Hiz takıntın yok. Gidilecek yere varmak kadar, hangi havada nasıl ilerledigini de önemsiyorsun."
    },
    {
      id: "ice-floes",
      title: "Les Glacons",
      year: "1880",
      category: "Les Glaçons by Claude Monet",
      traits: ["winter", "water", "motion", "mystery"],
      palette: ["#bfc8c4", "#6f8792", "#d5ccb8", "#485d66"],
      mood: "çözülen soğukluk",
      astro: "Satürn Balık: buz tutan duygunun akışa dönmesi",
      philosophy: "geçiş; kati olan da erir",
      movement: "Seine buzlari",
      description:
        "Sen değişimi bazen önce icten yaşarsın. Dışarıdan buz gibi duran şey, yakından bakinca sessizce hareket ediyordur."
    },
    {
      id: "debacle-seine",
      title: "La Debacle de la Seine",
      year: "1880",
      category: "La Débâcle de la Seine",
      traits: ["winter", "water", "drama", "motion", "mystery"],
      palette: ["#aebbc0", "#687f8d", "#d0bca0", "#4f5b65"],
      mood: "çözülme anı",
      astro: "Uranus Boğa: sabit sandigin zeminin kirilmasi",
      philosophy: "dönüşüm; cozulus de yaratıcı olabilir",
      movement: "buz cozumu serisi",
      description:
        "Senin krizlerin yıkımdan ibaret değil; yeni akisin on hazırlığı. Buz kırıldığında panik yerine dikkat kesiliyorsun."
    },
    {
      id: "morning-haze",
      title: "Morning Haze",
      year: "1894",
      category: "Morning Haze (1894)",
      traits: ["mystery", "water", "sun", "intimacy"],
      palette: ["#c9c1aa", "#8d9a9b", "#e0bd75", "#716e82"],
      mood: "belirsiz sabah",
      astro: "Neptun Balık: netlesmeyen seyden anlam alma",
      philosophy: "belirsizlik epistemolojisi; bilmemek de veridir",
      movement: "sisli sabah arastirmasi",
      description:
        "Sen her şeyin hemen netlesmesini istemiyorsun. Bazen iyi cevap, sisin dağılmasını beklerken bulunan cevap."
    },
    {
      id: "fishing-boats-etretat",
      title: "Fishing boats at Etretat",
      year: "1885",
      category: "Fishing boats at Étretat (1885)",
      traits: ["water", "motion", "social", "winter"],
      palette: ["#607f8b", "#c9b18d", "#8d6b59", "#e3d7c1"],
      mood: "is ve deniz",
      astro: "Mars Boğa: emegin ritmi",
      philosophy: "pratik varoluş; güzel olan çalışır da",
      movement: "tekne ve sahil",
      description:
        "Sen estetikten kopmadan is bitirebilenlerdensin. Hayal kurarsın ama küreği de doğru zamanda cekersin."
    },
    {
      id: "fleurs-topinambours",
      title: "Fleurs de topinambours",
      year: "1880",
      category: "Fleurs de topinambours by Claude Monet",
      traits: ["garden", "sun", "motion", "social"],
      palette: ["#d6a832", "#768b4f", "#b15b47", "#f1dfac"],
      mood: "sari israr",
      astro: "Güneş Aslan: varlığını saklamayan çiçek",
      philosophy: "vitalizm; yaşam kendini renkle savunur",
      movement: "çiçek tarlasi empresyonizmi",
      description:
        "Sen içeri girdiginde enerji seviyesi değişir. Bunu her zaman bilerek yapmiyorsun; renklerin zaten konuşuyor."
    },
    {
      id: "villas-bordighera",
      title: "Les villas a Bordighera",
      year: "1884",
      category: "Les villas à Bordighera by Claude Monet (Musée d'Orsay)",
      traits: ["garden", "city", "sun", "drama", "mystery"],
      palette: ["#6c9a6c", "#d89a5d", "#66538a", "#e7d2a3"],
      mood: "bitkiler arasinda mimari",
      astro: "Venüs Aslan: gorkemi dogallastirma",
      philosophy: "organik mimari; ev de peyzajin uzantisi",
      movement: "Bordighera villalari",
      description:
        "Sende medeniyet ile vahsi yeşil yan yana duruyor. Zarif olmak için doğallığından vazgecmiyorsun."
    },
    {
      id: "lilacs-grey",
      title: "Lilas, Temps gris",
      year: "1872-1873",
      category: "Lilas, Temps gris by Claude Monet",
      traits: ["garden", "mystery", "intimacy", "winter"],
      palette: ["#7c7194", "#8da176", "#c9c0af", "#514b55"],
      mood: "gri havada çiçek",
      astro: "Ay Başak: alçak sesli romantizm",
      philosophy: "melankoli estetiği; soluk renk de duygu taşır",
      movement: "gri hava bahçesi",
      description:
        "Sen parlak günlerin insanı olmak zorunda değilsin. Kapalı havada bile zarafet üreten bir ruh halin var."
    },
    {
      id: "houses-falaise-fog",
      title: "Maisons a Falaise, brouillard",
      year: "1885",
      category: "Maisons à Falaise, brouillard by Claude Monet",
      traits: ["city", "mystery", "winter", "water"],
      palette: ["#b9b8aa", "#7f8f91", "#d1c0a5", "#5f646b"],
      mood: "evlerin içinde sis",
      astro: "Neptun Balık: adresi olan belirsizlik",
      philosophy: "evsizlik hissi; mekan bazen soru sorar",
      movement: "sisli yerlesim peyzaji",
      description:
        "Senin içinde adresi belli ama havası belirsiz bir yer var. Bu seni karışık değil, çok katmanli yapıyor."
    }
  ]
};
