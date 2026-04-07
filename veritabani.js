/**
 * koko.app — Almanca Kelime Veritabanı
 * Bu dosya varsayılan verileri içerir.
 * Admin panelinden yapılan değişiklikler localStorage'a kaydedilir
 * ve bu varsayılan veriler yerine kullanılır.
 *
 * Yapı:
 *   VERITABANI[levelId] = {
 *     harfler: [...],   // Alfabe harfleri
 *     kelimeler: [...], // Kelimeler
 *     cumleler: [...]   // Cümleler & deyimler
 *   }
 *
 * Her giriş: { de, tr, phonetic?, article?, type? }
 */

const VERITABANI = {

  /* ═══════════════════════════════════════════════════
     A1.1 — Temel Başlangıç
  ═══════════════════════════════════════════════════ */
  a11: {
    harfler: [
      { de: "a",  tr: "a (harf)",   phonetic: "[aː]",          type: "harf" },
      { de: "b",  tr: "be",         phonetic: "[beː]",          type: "harf" },
      { de: "c",  tr: "ce",         phonetic: "[tseː]",         type: "harf" },
      { de: "d",  tr: "de",         phonetic: "[deː]",          type: "harf" },
      { de: "e",  tr: "e (harf)",   phonetic: "[eː]",           type: "harf" },
      { de: "f",  tr: "ef",         phonetic: "[ɛf]",           type: "harf" },
      { de: "g",  tr: "ge",         phonetic: "[ɡeː]",          type: "harf" },
      { de: "h",  tr: "ha",         phonetic: "[haː]",          type: "harf" },
      { de: "i",  tr: "i (harf)",   phonetic: "[iː]",           type: "harf" },
      { de: "j",  tr: "jot",        phonetic: "[jɔt]",          type: "harf" },
      { de: "k",  tr: "ka",         phonetic: "[kaː]",          type: "harf" },
      { de: "l",  tr: "el",         phonetic: "[ɛl]",           type: "harf" },
      { de: "m",  tr: "em",         phonetic: "[ɛm]",           type: "harf" },
      { de: "n",  tr: "en",         phonetic: "[ɛn]",           type: "harf" },
      { de: "o",  tr: "o (harf)",   phonetic: "[oː]",           type: "harf" },
      { de: "p",  tr: "pe",         phonetic: "[peː]",          type: "harf" },
      { de: "q",  tr: "ku",         phonetic: "[kuː]",          type: "harf" },
      { de: "r",  tr: "er",         phonetic: "[ɛʁ]",           type: "harf" },
      { de: "s",  tr: "es",         phonetic: "[ɛs]",           type: "harf" },
      { de: "t",  tr: "te",         phonetic: "[teː]",          type: "harf" },
      { de: "u",  tr: "u (harf)",   phonetic: "[uː]",           type: "harf" },
      { de: "v",  tr: "fau",        phonetic: "[faʊ]",          type: "harf" },
      { de: "w",  tr: "ve",         phonetic: "[veː]",          type: "harf" },
      { de: "x",  tr: "iks",        phonetic: "[ɪks]",          type: "harf" },
      { de: "y",  tr: "üpsilon",    phonetic: "[ˈʏpsilɔn]",    type: "harf" },
      { de: "z",  tr: "zet",        phonetic: "[tsɛt]",         type: "harf" },
      { de: "ä",  tr: "a umlaut",   phonetic: "[ɛː]",           type: "harf" },
      { de: "ö",  tr: "o umlaut",   phonetic: "[øː]",           type: "harf" },
      { de: "ü",  tr: "ü umlaut",   phonetic: "[yː]",           type: "harf" },
      { de: "ß",  tr: "es-zet",     phonetic: "[ɛsˈtsɛt]",     type: "harf" }
    ],
    kelimeler: [
      { de: "null",     tr: "sıfır",    phonetic: "[nʊl]" },
      { de: "eins",     tr: "bir",      phonetic: "[aɪns]" },
      { de: "zwei",     tr: "iki",      phonetic: "[tsvaɪ]" },
      { de: "drei",     tr: "üç",       phonetic: "[dʁaɪ]" },
      { de: "vier",     tr: "dört",     phonetic: "[fiːɐ]" },
      { de: "fünf",     tr: "beş",      phonetic: "[fʏnf]" },
      { de: "sechs",    tr: "altı",     phonetic: "[zɛks]" },
      { de: "sieben",   tr: "yedi",     phonetic: "[ˈziːbən]" },
      { de: "acht",     tr: "sekiz",    phonetic: "[axt]" },
      { de: "neun",     tr: "dokuz",    phonetic: "[nɔɪn]" },
      { de: "zehn",     tr: "on",       phonetic: "[tseːn]" },
      { de: "zwanzig",  tr: "yirmi",    phonetic: "[ˈtsvantsɪç]" },
      { de: "dreißig",  tr: "otuz",     phonetic: "[ˈdʁaɪsɪç]" },
      { de: "hundert",  tr: "yüz",      phonetic: "[ˈhʊndɐt]" },
      { de: "tausend",  tr: "bin",      phonetic: "[ˈtaʊzənt]" },
      { de: "rot",      tr: "kırmızı",  phonetic: "[ʁoːt]" },
      { de: "blau",     tr: "mavi",     phonetic: "[blaʊ]" },
      { de: "grün",     tr: "yeşil",    phonetic: "[ɡʁyːn]" },
      { de: "gelb",     tr: "sarı",     phonetic: "[ɡɛlp]" },
      { de: "schwarz",  tr: "siyah",    phonetic: "[ʃvaʁts]" },
      { de: "weiß",     tr: "beyaz",    phonetic: "[vaɪs]" },
      { de: "grau",     tr: "gri",      phonetic: "[ɡʁaʊ]" },
      { de: "braun",    tr: "kahverengi", phonetic: "[bʁaʊn]" },
      { de: "ja",       tr: "evet",     phonetic: "[jaː]" },
      { de: "nein",     tr: "hayır",    phonetic: "[naɪn]" },
      { de: "und",      tr: "ve",       phonetic: "[ʊnt]" },
      { de: "aber",     tr: "ama / fakat", phonetic: "[ˈaːbɐ]" },
      { de: "nicht",    tr: "değil",    phonetic: "[nɪçt]" },
      { de: "hier",     tr: "burada",   phonetic: "[hiːɐ]" },
      { de: "dort",     tr: "orada",    phonetic: "[dɔʁt]" },
      { de: "jetzt",    tr: "şimdi",    phonetic: "[jɛtst]" },
      { de: "sehr",     tr: "çok",      phonetic: "[zeːɐ]" },
      { de: "alles",    tr: "her şey",  phonetic: "[ˈalɐs]" },
      { de: "die Mutter",    tr: "anne",         phonetic: "[ˈmʊtɐ]",      article: "die" },
      { de: "der Vater",     tr: "baba",         phonetic: "[ˈfaːtɐ]",     article: "der" },
      { de: "der Bruder",    tr: "erkek kardeş", phonetic: "[ˈbʁuːdɐ]",    article: "der" },
      { de: "die Schwester", tr: "kız kardeş",   phonetic: "[ˈʃvɛstɐ]",    article: "die" },
      { de: "das Kind",      tr: "çocuk",        phonetic: "[kɪnt]",        article: "das" },
      { de: "der Großvater", tr: "büyükbaba",    phonetic: "[ˈɡʁoːsˌfaːtɐ]", article: "der" },
      { de: "die Großmutter",tr: "büyükanne",    phonetic: "[ˈɡʁoːsˌmʊtɐ]", article: "die" },
      { de: "der Montag",    tr: "Pazartesi",    phonetic: "[ˈmoːntaːk]",   article: "der" },
      { de: "der Dienstag",  tr: "Salı",         phonetic: "[ˈdiːnstaːk]",  article: "der" },
      { de: "der Mittwoch",  tr: "Çarşamba",     phonetic: "[ˈmɪtvɔx]",    article: "der" },
      { de: "der Donnerstag",tr: "Perşembe",     phonetic: "[ˈdɔnɐstaːk]", article: "der" },
      { de: "der Freitag",   tr: "Cuma",         phonetic: "[ˈfʁaɪtaːk]",  article: "der" },
      { de: "der Samstag",   tr: "Cumartesi",    phonetic: "[ˈzamstaːk]",   article: "der" },
      { de: "der Sonntag",   tr: "Pazar",        phonetic: "[ˈzɔntaːk]",   article: "der" }
    ],
    cumleler: [
      { de: "Hallo",               tr: "Merhaba",              phonetic: "[haˈloː]",                    type: "cümle" },
      { de: "Guten Morgen",        tr: "Günaydın",             phonetic: "[ˈɡuːtən ˈmɔʁɡən]",          type: "cümle" },
      { de: "Guten Tag",           tr: "İyi günler",           phonetic: "[ˈɡuːtən taːk]",              type: "cümle" },
      { de: "Gute Nacht",          tr: "İyi geceler",          phonetic: "[ˈɡuːtə naxt]",               type: "cümle" },
      { de: "Auf Wiedersehen",     tr: "Hoşça kal",            phonetic: "[aʊf ˈviːdɐˌzeːən]",         type: "cümle" },
      { de: "Tschüss",             tr: "Görüşürüz",            phonetic: "[tʃʏs]",                      type: "cümle" },
      { de: "Danke",               tr: "Teşekkür ederim",      phonetic: "[ˈdaŋkə]",                   type: "cümle" },
      { de: "Bitte",               tr: "Rica ederim / Lütfen", phonetic: "[ˈbɪtə]",                    type: "cümle" },
      { de: "Entschuldigung",      tr: "Pardon / Özür dilerim",phonetic: "[ɛntˈʃʊldɪɡʊŋ]",            type: "cümle" },
      { de: "Es tut mir leid",     tr: "Üzgünüm",              phonetic: "[ɛs tuːt miːɐ laɪt]",        type: "cümle" },
      { de: "Wie geht es Ihnen",   tr: "Nasılsınız (resmi)",   phonetic: "[viː ɡeːt ɛs ˈiːnən]",      type: "cümle" },
      { de: "Mir geht es gut",     tr: "İyiyim",               phonetic: "[miːɐ ɡeːt ɛs ɡuːt]",       type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     A1.2 — Başlangıç
  ═══════════════════════════════════════════════════ */
  a12: {
    harfler: [],
    kelimeler: [
      { de: "das Brot",      tr: "ekmek",      phonetic: "[bʁoːt]",      article: "das" },
      { de: "die Butter",    tr: "tereyağı",   phonetic: "[ˈbʊtɐ]",      article: "die" },
      { de: "der Käse",      tr: "peynir",     phonetic: "[ˈkɛːzə]",     article: "der" },
      { de: "das Ei",        tr: "yumurta",    phonetic: "[aɪ]",          article: "das" },
      { de: "die Milch",     tr: "süt",        phonetic: "[mɪlç]",       article: "die" },
      { de: "der Apfel",     tr: "elma",       phonetic: "[ˈapfəl]",     article: "der" },
      { de: "die Banane",    tr: "muz",        phonetic: "[baˈnaːnə]",   article: "die" },
      { de: "das Fleisch",   tr: "et",         phonetic: "[flaɪʃ]",      article: "das" },
      { de: "der Fisch",     tr: "balık",      phonetic: "[fɪʃ]",        article: "der" },
      { de: "das Wasser",    tr: "su",         phonetic: "[ˈvasɐ]",      article: "das" },
      { de: "der Kaffee",    tr: "kahve",      phonetic: "[kaˈfeː]",     article: "der" },
      { de: "der Tee",       tr: "çay",        phonetic: "[teː]",        article: "der" },
      { de: "das Haus",      tr: "ev",         phonetic: "[haʊs]",       article: "das" },
      { de: "die Wohnung",   tr: "daire",      phonetic: "[ˈvoːnʊŋ]",   article: "die" },
      { de: "das Zimmer",    tr: "oda",        phonetic: "[ˈtsɪmɐ]",    article: "das" },
      { de: "die Küche",     tr: "mutfak",     phonetic: "[ˈkʏçə]",     article: "die" },
      { de: "der Tisch",     tr: "masa",       phonetic: "[tɪʃ]",        article: "der" },
      { de: "der Stuhl",     tr: "sandalye",   phonetic: "[ʃtuːl]",      article: "der" },
      { de: "das Bett",      tr: "yatak",      phonetic: "[bɛt]",        article: "das" },
      { de: "das Fenster",   tr: "pencere",    phonetic: "[ˈfɛnstɐ]",   article: "das" },
      { de: "die Tür",       tr: "kapı",       phonetic: "[tyːɐ]",       article: "die" },
      { de: "das Buch",      tr: "kitap",      phonetic: "[buːx]",       article: "das" },
      { de: "der Kopf",      tr: "baş",        phonetic: "[kɔpf]",       article: "der" },
      { de: "das Auge",      tr: "göz",        phonetic: "[ˈaʊɡə]",     article: "das" },
      { de: "die Nase",      tr: "burun",      phonetic: "[ˈnaːzə]",    article: "die" },
      { de: "der Mund",      tr: "ağız",       phonetic: "[mʊnt]",       article: "der" },
      { de: "die Hand",      tr: "el",         phonetic: "[hant]",        article: "die" },
      { de: "der Fuß",       tr: "ayak",       phonetic: "[fuːs]",        article: "der" },
      { de: "das Herz",      tr: "kalp",       phonetic: "[hɛʁts]",       article: "das" },
      { de: "das Haar",      tr: "saç",        phonetic: "[haːɐ]",        article: "das" }
    ],
    cumleler: [
      { de: "Ich heiße …",                    tr: "Benim adım …",                   phonetic: "[ɪç ˈhaɪsə]",             type: "cümle" },
      { de: "Ich komme aus der Türkei",        tr: "Türkiye'den geliyorum",           phonetic: "[ɪç ˈkɔmə aʊs]",          type: "cümle" },
      { de: "Wie alt bist du",                 tr: "Kaç yaşındasın",                  phonetic: "[viː alt bɪst duː]",       type: "cümle" },
      { de: "Ich bin zwanzig Jahre alt",       tr: "Ben yirmi yaşındayım",            phonetic: "[ɪç bɪn ˈtsvantsɪç]",     type: "cümle" },
      { de: "Ich spreche ein bisschen Deutsch",tr: "Biraz Almanca konuşuyorum",       phonetic: "[ɪç ˈʃpʁɛçə aɪn ˈbɪsçən]",type: "cümle" },
      { de: "Wo wohnst du",                    tr: "Nerede oturuyorsun",              phonetic: "[voː voːnst duː]",          type: "cümle" },
      { de: "Ich bin Student",                 tr: "Ben öğrenciyim",                  phonetic: "[ɪç bɪn ʃtuˈdɛnt]",        type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     B1.1 — Orta Alt
  ═══════════════════════════════════════════════════ */
  b11: {
    harfler: [],
    kelimeler: [
      { de: "die Meinung",       tr: "görüş / fikir",       phonetic: "[ˈmaɪnʊŋ]",        article: "die" },
      { de: "der Grund",         tr: "neden / sebep",        phonetic: "[ɡʁʊnt]",           article: "der" },
      { de: "die Lösung",        tr: "çözüm",               phonetic: "[ˈløːzʊŋ]",         article: "die" },
      { de: "das Problem",       tr: "sorun",               phonetic: "[pʁoˈbleːm]",       article: "das" },
      { de: "die Erfahrung",     tr: "deneyim",             phonetic: "[ɛɐˈfaːʁʊŋ]",      article: "die" },
      { de: "die Möglichkeit",   tr: "olasılık / imkân",    phonetic: "[ˈmøːklɪçkaɪt]",   article: "die" },
      { de: "der Unterschied",   tr: "fark",                phonetic: "[ˈʊntɐˌʃiːt]",     article: "der" },
      { de: "die Entwicklung",   tr: "gelişme",             phonetic: "[ɛntˈvɪklʊŋ]",     article: "die" },
      { de: "neben",             tr: "yanında",             phonetic: "[ˈneːbən]" },
      { de: "zwischen",          tr: "arasında",            phonetic: "[ˈtsvɪʃən]" },
      { de: "hinter",            tr: "arkasında",           phonetic: "[ˈhɪntɐ]" },
      { de: "über",              tr: "üzerinde",            phonetic: "[ˈyːbɐ]" },
      { de: "unter",             tr: "altında",             phonetic: "[ˈʊntɐ]" },
      { de: "links",             tr: "solda",               phonetic: "[lɪŋks]" },
      { de: "rechts",            tr: "sağda",               phonetic: "[ʁɛçts]" },
      { de: "erklären",          tr: "açıklamak",           phonetic: "[ɛɐˈklɛːʁən]" },
      { de: "verstehen",         tr: "anlamak",             phonetic: "[fɛɐˈʃteːən]" },
      { de: "beschreiben",       tr: "tanımlamak",          phonetic: "[bəˈʃʁaɪbən]" },
      { de: "vergleichen",       tr: "karşılaştırmak",      phonetic: "[fɛɐˈɡlaɪçən]" }
    ],
    cumleler: [
      { de: "Meiner Meinung nach ist das richtig",         tr: "Benim görüşüme göre bu doğru",       phonetic: "[ˈmaɪnɐ ˈmaɪnʊŋ naːx]",   type: "cümle" },
      { de: "Ich stimme dir zu",                           tr: "Sana katılıyorum",                   phonetic: "[ɪç ˈʃtɪmə diːɐ tsuː]",   type: "cümle" },
      { de: "Ich habe das nicht verstanden",               tr: "Bunu anlayamadım",                   phonetic: "[ɪç ˈhaːbə das nɪçt]",     type: "cümle" },
      { de: "Ich lerne Deutsch seit einem Jahr",           tr: "Bir yıldır Almanca öğreniyorum",     phonetic: "[ɪç ˈlɛʁnə ˈdɔɪtʃ zaɪt]", type: "cümle" },
      { de: "Könnten Sie das bitte wiederholen",           tr: "Bunu tekrar edebilir misiniz lütfen",phonetic: "[ˈkœntən ziː das ˈbɪtə]",  type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     B1.2 — Orta
  ═══════════════════════════════════════════════════ */
  b12: {
    harfler: [],
    kelimeler: [
      { de: "die Freude",      tr: "sevinç",    phonetic: "[ˈfʁɔɪdə]",      article: "die" },
      { de: "die Trauer",      tr: "üzüntü",    phonetic: "[ˈtʁaʊɐ]",       article: "die" },
      { de: "die Angst",       tr: "korku",     phonetic: "[aŋst]",          article: "die" },
      { de: "die Wut",         tr: "öfke",      phonetic: "[vuːt]",          article: "die" },
      { de: "die Hoffnung",    tr: "umut",      phonetic: "[ˈhɔfnʊŋ]",      article: "die" },
      { de: "die Überraschung",tr: "sürpriz",   phonetic: "[ˈyːbɐˌʁaʃʊŋ]", article: "die" },
      { de: "das Vertrauen",   tr: "güven",     phonetic: "[fɛɐˈtʁaʊən]",   article: "das" },
      { de: "die Sehnsucht",   tr: "özlem",     phonetic: "[ˈzeːnzʊxt]",    article: "die" },
      { de: "sich freuen",     tr: "sevinmek",  phonetic: "[zɪç ˈfʁɔɪən]" },
      { de: "zweifeln",        tr: "şüphelenmek",phonetic: "[ˈtsvaɪfəln]" }
    ],
    cumleler: [
      { de: "Obwohl es schwer ist, gebe ich nicht auf", tr: "Zor olsa da pes etmiyorum",           phonetic: "[ɔpˈvoːl ɛs ʃveːɐ ɪst]", type: "cümle" },
      { de: "Je mehr ich übe, desto besser werde ich", tr: "Ne kadar çok çalışırsam o kadar iyi olurum", phonetic: "[jeː meːɐ ɪç ˈyːbə]", type: "cümle" },
      { de: "Ich hätte gern einen Kaffee",              tr: "Bir kahve isterdim",                  phonetic: "[ɪç ˈhɛtə ɡɛʁn ˈaɪnən]", type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     C1.1 — İleri Alt
  ═══════════════════════════════════════════════════ */
  c11: {
    harfler: [],
    kelimeler: [
      { de: "die Ambiguität",  tr: "muğlaklık",                phonetic: "[ambɪɡuɪˈtɛːt]",   article: "die" },
      { de: "die Nuance",      tr: "nüans",                    phonetic: "[nuˈɑ̃ːsə]",         article: "die" },
      { de: "die Empathie",    tr: "empati",                   phonetic: "[ɛmpaˈtiː]",        article: "die" },
      { de: "die Resilienz",   tr: "psikolojik dayanıklılık",  phonetic: "[ʁeˈzɪliɛnts]",    article: "die" },
      { de: "implizieren",     tr: "ima etmek",                phonetic: "[ɪmplɪˈtsiːʁən]" },
      { de: "widersprechen",   tr: "karşı çıkmak",             phonetic: "[ˈviːdɐˌʃpʁɛçən]" },
      { de: "analysieren",     tr: "analiz etmek",             phonetic: "[analyˈziːʁən]" },
      { de: "differenzieren",  tr: "farklılaştırmak",          phonetic: "[dɪfɛˈʁɛntsɪˌʁeːn]" }
    ],
    cumleler: [
      { de: "Es lässt sich nicht leugnen, dass Globalisierung tiefgreifende Veränderungen bewirkt hat", tr: "Küreselleşmenin derin değişimlere yol açtığı inkâr edilemez", phonetic: "[ɛs lɛst zɪç nɪçt]", type: "cümle" },
      { de: "Trotz aller Fortschritte bleiben viele Fragen offen", tr: "Tüm ilerlemelere rağmen pek çok soru yanıtsız kalmaktadır", phonetic: "[tʁoːts ˈalɐ ˈfɔʁtʃʁɪtə]", type: "cümle" },
      { de: "Ich würde argumentieren, dass diese Maßnahme kontraproduktiv ist", tr: "Bu önlemin işe yaramaz olduğunu savunurum", phonetic: "[ɪç ˈvʏʁdə aʁɡumɛnˈtiːʁən]", type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     C1.2 — İleri
  ═══════════════════════════════════════════════════ */
  c12: {
    harfler: [],
    kelimeler: [
      { de: "die Nachhaltigkeit", tr: "sürdürülebilirlik",                phonetic: "[ˈnaːxˌhaltɪçkaɪt]",  article: "die" },
      { de: "die Weltanschauung", tr: "dünya görüşü",                     phonetic: "[ˈvɛltˌanʃaʊʊŋ]",    article: "die" },
      { de: "das Heimweh",        tr: "sıla özlemi",                       phonetic: "[ˈhaɪmveː]",          article: "das" },
      { de: "die Schadenfreude",  tr: "başkasının mutsuzluğuna sevinme",   phonetic: "[ˈʃaːdənˌfʁɔɪdə]",  article: "die" },
      { de: "der Zeitgeist",      tr: "dönemin ruhu",                      phonetic: "[ˈtsaɪtˌɡaɪst]",     article: "der" },
      { de: "hinterfragen",       tr: "sorgulamak",                        phonetic: "[ˈhɪntɐˌfʁaːɡən]" },
      { de: "berücksichtigen",    tr: "göz önünde bulundurmak",            phonetic: "[bəˈʁʏkzɪçtɪɡən]" }
    ],
    cumleler: [
      { de: "Was auf den ersten Blick simpel erscheint, erweist sich bei näherer Betrachtung als äußerst komplex", tr: "İlk bakışta basit görünen şey yakından incelendiğinde son derece karmaşık olduğunu ortaya koyar", phonetic: "[vas aʊf deːn ˈɛʁstən blɪk]", type: "cümle" },
      { de: "Die Kunst liegt darin, die richtige Balance zwischen Theorie und Praxis zu finden", tr: "Asıl beceri, teori ile pratik arasında doğru dengeyi bulmaktadır", phonetic: "[diː kʊnst liːkt daˈʁɪn]", type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     C2.1 — Ustalık Alt
  ═══════════════════════════════════════════════════ */
  c21: {
    harfler: [],
    kelimeler: [
      { de: "die Akribie",         tr: "titizlik / hassaslık",       phonetic: "[akʁiˈbiː]",              article: "die" },
      { de: "die Gleichgültigkeit",tr: "ilgisizlik / kayıtsızlık",   phonetic: "[ˈɡlaɪçˌɡʏltɪçkaɪt]",   article: "die" },
      { de: "das Aufbegehren",     tr: "isyan / başkaldırı",         phonetic: "[ˈaʊfbəˌɡeːʁən]",        article: "das" },
      { de: "verfeinern",          tr: "rafine etmek",                phonetic: "[fɛɐˈfaɪnɐn]" },
      { de: "entlarven",           tr: "ifşa etmek / maskesini düşürmek", phonetic: "[ɛntˈlaʁfən]" },
      { de: "in Frage stellen",    tr: "sorgulamak",                  phonetic: "[ɪn ˈfʁaːɡə ˈʃtɛlən]" }
    ],
    cumleler: [
      { de: "Es wäre verfehlt, diese Entwicklung auf einen einzigen Faktor zurückzuführen", tr: "Bu gelişmeyi tek bir faktöre bağlamak hatalı olur", phonetic: "[ɛs ˈvɛːʁə fɛɐˈfeːlt]", type: "cümle" },
      { de: "Wir bewegen uns hier auf sehr dünnem Eis", tr: "Burada çok ince bir buzun üzerinde yürüyoruz (mecaz)", phonetic: "[viːɐ bəˈveːɡən ʊns hiːɐ]", type: "cümle" },
      { de: "Man muss das Ganze im Kontext betrachten", tr: "Bütünü bağlamı içinde değerlendirmek gerekir", phonetic: "[man mʊs das ˈɡantsə]", type: "cümle" }
    ]
  },

  /* ═══════════════════════════════════════════════════
     C2.2 — Ustalık
  ═══════════════════════════════════════════════════ */
  c22: {
    harfler: [],
    kelimeler: [],
    cumleler: [
      { de: "Ohne Fleiß kein Preis",                    tr: "Emeksiz yemek olmaz",                             phonetic: "[ˈoːnə flaɪs kaɪn pʁaɪs]",            type: "deyim" },
      { de: "Aller Anfang ist schwer",                  tr: "Her başlangıç zordur",                            phonetic: "[ˈalɐ ˈanfaŋ ɪst ʃveːɐ]",              type: "deyim" },
      { de: "Übung macht den Meister",                  tr: "İnsan ustalığı pratikle kazanır",                 phonetic: "[ˈyːbʊŋ maxt deːn ˈmaɪstɐ]",            type: "deyim" },
      { de: "Der Apfel fällt nicht weit vom Stamm",     tr: "Elma ağacın dibine düşer",                       phonetic: "[deːɐ ˈapfəl fɛlt nɪçt vaɪt]",          type: "deyim" },
      { de: "Morgenstund hat Gold im Mund",             tr: "Erken kalkan yol alır",                           phonetic: "[ˈmɔʁɡənʃtʊnt hat ɡɔlt ɪm mʊnt]",       type: "deyim" },
      { de: "Ende gut, alles gut",                      tr: "Son gülen iyi güler",                             phonetic: "[ˈɛndə ɡuːt ˈalɐs ɡuːt]",               type: "deyim" },
      { de: "Wer wagt, gewinnt",                        tr: "Göze alan kazanır",                               phonetic: "[veːɐ vaːkt ɡəˈvɪnt]",                   type: "deyim" },
      { de: "Die Sprache ist das Haus des Seins",       tr: "Dil, varlığın evidir (Heidegger)",                phonetic: "[diː ˈʃpʁaːxə ɪst das haʊs]",            type: "cümle" },
      { de: "Grenzen meiner Sprache bedeuten die Grenzen meiner Welt", tr: "Dilimin sınırları dünyamın sınırlarıdır (Wittgenstein)", phonetic: "[ˈɡʁɛntsən ˈmaɪnɐ ˈʃpʁaːxə]", type: "cümle" },
      { de: "Das Geheimnis des Könnens liegt im Wollen",tr: "Yapabilmenin sırrı istemekte yatar",              phonetic: "[das ɡəˈhaɪmnɪs dɛs ˈkœnəns]",           type: "cümle" }
    ]
  }

};

/* Bölümler: her seviyedeki harfler + kelimeler + cumleler düz bir dizi olarak */
function veriGetir(levelId) {
  const lv = VERITABANI[levelId];
  if (!lv) return [];
  return [...(lv.harfler || []), ...(lv.kelimeler || []), ...(lv.cumleler || [])];
}
