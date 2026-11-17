export type Source = {
  id: string;
  title: string;
  url: string;
  publisher: string;
};

export const sources: Source[] = [
  {
    id: "bm-timeline",
    title: "Cronologia do Egito antigo",
    publisher: "British Museum",
    url: "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt/timeline-ancient-egypt",
  },
  {
    id: "ucl-chronology",
    title: "Cronologia egípcia",
    publisher: "University College London — Digital Egypt",
    url: "https://www.ucl.ac.uk/museums-static/digitalegypt/chronology/index.html",
  },
  {
    id: "unesco-pyramids",
    title: "Mênfis e sua necrópole: de Gizé a Dahshur",
    publisher: "UNESCO — Patrimônio Mundial",
    url: "https://whc.unesco.org/en/list/86/",
  },
  {
    id: "unesco-thebes",
    title: "Antiga Tebas e sua necrópole",
    publisher: "UNESCO — Patrimônio Mundial",
    url: "https://whc.unesco.org/en/list/87/",
  },
  {
    id: "unesco-nubia",
    title: "Monumentos núbios de Abu Simbel a Philae",
    publisher: "UNESCO — Patrimônio Mundial",
    url: "https://whc.unesco.org/en/list/88/",
  },
  {
    id: "bm-gods",
    title: "Deuses e deusas do Egito antigo",
    publisher: "British Museum",
    url: "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt/ancient-egyptian-gods-and-goddesses",
  },
  {
    id: "ucl-myths",
    title: "Deuses criadores e mitos egípcios",
    publisher: "University College London — Digital Egypt",
    url: "https://www.ucl.ac.uk/museums-static/digitalegypt/religion/deitiescreation.html",
  },
  {
    id: "arce-hyksos",
    title: "Os hicsos: arqueologia, memória e conflito",
    publisher: "American Research Center in Egypt",
    url: "https://arce.org/resource/hyksos/",
  },
  {
    id: "arce-kadesh",
    title: "A batalha de Kadesh",
    publisher: "American Research Center in Egypt",
    url: "https://arce.org/event/battle-kadesh/",
  },
  {
    id: "met-hatshepsut",
    title: "Hatshepsut: uma faraó reavaliada",
    publisher: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/perspectives/hatshepsut-female-pharaoh-egypt",
  },
  {
    id: "britannica-cleopatra",
    title: "Cleópatra VII",
    publisher: "Encyclopaedia Britannica",
    url: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt",
  },
];

export type TimelineEra = {
  id: string;
  label: string;
};

export const timelineEras: TimelineEra[] = [
  { id: "all", label: "Toda a linha do tempo" },
  { id: "origins", label: "Origens e unificação" },
  { id: "old-kingdom", label: "Reino Antigo" },
  { id: "middle-kingdom", label: "Reino Médio e transições" },
  { id: "new-kingdom", label: "Novo Reino" },
  { id: "late-antiquity", label: "Períodos tardios" },
  { id: "later-egypt", label: "Egito medieval e moderno" },
];

export type TimelineEvent = {
  id: string;
  date: string;
  sortYear: number;
  period: string;
  era: string;
  title: string;
  summary: string;
  kind: string;
  sourceIds: string[];
  keywords: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "vale-do-nilo",
    date: "c. 5500–3100 a.C.",
    sortYear: -5500,
    period: "Pré-dinástico",
    era: "origins",
    title: "Comunidades do vale do Nilo",
    summary:
      "Ao longo do rio, comunidades agrícolas se consolidam e desenvolvem práticas funerárias, artesanato e redes de troca. A cronologia dos períodos mais antigos é aproximada.",
    kind: "Sociedade",
    sourceIds: ["bm-timeline", "ucl-chronology"],
    keywords: ["agricultura", "nilo", "origens", "pré-dinástico", "comunidades"],
  },
  {
    id: "narmer",
    date: "c. 3100 a.C.",
    sortYear: -3100,
    period: "Período Dinástico Inicial",
    era: "origins",
    title: "Narmer e a unificação política",
    summary:
      "Narmer é associado a um dos primeiros governos sobre o Alto e o Baixo Egito. A Paleta de Narmer registra a imagem real da conquista e da realeza.",
    kind: "Faraós",
    sourceIds: ["bm-timeline", "ucl-chronology"],
    keywords: ["narmer", "paleta", "unificação", "rei", "dinastia"],
  },
  {
    id: "djoser",
    date: "c. 2650 a.C.",
    sortYear: -2650,
    period: "Reino Antigo · III dinastia",
    era: "old-kingdom",
    title: "A pirâmide escalonada de Djoser",
    summary:
      "Em Saqqara, o complexo funerário de Djoser marca um momento decisivo na arquitetura monumental em pedra e na forma das tumbas reais.",
    kind: "Monumentos",
    sourceIds: ["unesco-pyramids", "ucl-chronology"],
    keywords: ["djoser", "saqqara", "pirâmide", "pedra", "tumba"],
  },
  {
    id: "giza",
    date: "c. 2600–2500 a.C.",
    sortYear: -2560,
    period: "Reino Antigo · IV dinastia",
    era: "old-kingdom",
    title: "As pirâmides de Gizé",
    summary:
      "Khufu, Khafre e Menkaure são associados às grandes pirâmides do planalto de Gizé. A Grande Pirâmide de Khufu é a única maravilha do mundo antigo ainda existente.",
    kind: "Monumentos",
    sourceIds: ["bm-timeline", "unesco-pyramids"],
    keywords: ["gizé", "giza", "khufu", "quéops", "khafre", "quéfren", "pirâmides", "esfinge"],
  },
  {
    id: "mentuhotep",
    date: "c. 2055 a.C.",
    sortYear: -2055,
    period: "Reino Médio · XI dinastia",
    era: "middle-kingdom",
    title: "Mentuhotep II reunifica o Egito",
    summary:
      "Depois de um período de governos regionais, o rei de Tebas Mentuhotep II volta a governar as Duas Terras sob uma autoridade central.",
    kind: "Faraós",
    sourceIds: ["bm-timeline", "ucl-chronology"],
    keywords: ["mentuhotep", "tebas", "reunificação", "reino médio"],
  },
  {
    id: "hyksos",
    date: "c. 1650–1550 a.C.",
    sortYear: -1650,
    period: "Segundo Período Intermediário",
    era: "middle-kingdom",
    title: "Os hicsos governam parte do Delta",
    summary:
      "Governantes chamados hicsos controlam o norte do Egito. Evidências de Avaris revelam uma história de migração, convivência cultural e disputa política, não uma simples narrativa de invasão.",
    kind: "Conflitos e contatos",
    sourceIds: ["arce-hyksos", "ucl-chronology"],
    keywords: ["hicsos", "hyksos", "avarís", "delta", "invasão", "migração", "guerra"],
  },
  {
    id: "ahmose",
    date: "c. 1550 a.C.",
    sortYear: -1550,
    period: "Início do Novo Reino · XVIII dinastia",
    era: "new-kingdom",
    title: "Ahmose e o início do Novo Reino",
    summary:
      "Os reis tebanos encerram o domínio hicso e inauguram uma fase de expansão. A arqueologia mostra que a população do Delta tinha raízes mais complexas do que sugerem os relatos reais posteriores.",
    kind: "Transição política",
    sourceIds: ["bm-timeline", "arce-hyksos"],
    keywords: ["ahmose", "novo reino", "hicsos", "tebas", "delta"],
  },
  {
    id: "hatshepsut",
    date: "c. 1479–1458 a.C.",
    sortYear: -1479,
    period: "Novo Reino · XVIII dinastia",
    era: "new-kingdom",
    title: "O reinado de Hatshepsut",
    summary:
      "Hatshepsut governa por mais de duas décadas. Seu reinado é lembrado pela estabilidade, pelo comércio e pelo complexo funerário de Deir el-Bahri.",
    kind: "Faraós",
    sourceIds: ["met-hatshepsut"],
    keywords: ["hatshepsut", "mulher", "faraó", "deir el-bahri", "comércio", "rainha"],
  },
  {
    id: "kadesh",
    date: "c. 1275 a.C.",
    sortYear: -1275,
    period: "Novo Reino · XIX dinastia",
    era: "new-kingdom",
    title: "A batalha de Kadesh",
    summary:
      "Ramsés II enfrenta o Império Hitita na atual Síria. Inscrições egípcias proclamam uma vitória real; a interpretação do resultado continua debatida entre historiadores.",
    kind: "Guerras e diplomacia",
    sourceIds: ["arce-kadesh"],
    keywords: ["kadesh", "cades", "ramsés", "hititas", "guerra", "batalha", "síria", "carros"],
  },
  {
    id: "fim-novo-reino",
    date: "c. 1069 a.C.",
    sortYear: -1069,
    period: "Terceiro Período Intermediário",
    era: "late-antiquity",
    title: "O fim do Novo Reino",
    summary:
      "A autoridade se fragmenta e diferentes centros de poder passam a disputar o governo. A história egípcia continua, mas já não sob o mesmo império centralizado.",
    kind: "Transição política",
    sourceIds: ["ucl-chronology", "bm-timeline"],
    keywords: ["terceiro período intermediário", "fim", "novo reino", "dinastia"],
  },
  {
    id: "persas",
    date: "525 a.C.",
    sortYear: -525,
    period: "Primeiro Período Persa",
    era: "late-antiquity",
    title: "O Egito sob domínio persa",
    summary:
      "O império aquemênida incorpora o Egito. O país atravessa períodos de governo estrangeiro e de retomada de dinastias locais.",
    kind: "Impérios e conquistas",
    sourceIds: ["ucl-chronology"],
    keywords: ["persas", "aquemênida", "conquista", "império", "525"],
  },
  {
    id: "alexandre",
    date: "332 a.C.",
    sortYear: -332,
    period: "Período Macedônico",
    era: "late-antiquity",
    title: "Alexandre conquista o Egito",
    summary:
      "A conquista macedônica abre uma nova etapa. Depois dela, a dinastia ptolemaica governa o Egito por quase três séculos.",
    kind: "Impérios e conquistas",
    sourceIds: ["ucl-chronology"],
    keywords: ["alexandre", "macedônia", "ptolomeu", "ptolomaico", "conquista", "332"],
  },
  {
    id: "cleopatra",
    date: "30 a.C.",
    sortYear: -30,
    period: "Fim do Período Ptolemaico",
    era: "late-antiquity",
    title: "Cleópatra VII e a anexação romana",
    summary:
      "Após a morte de Cleópatra VII, o Egito passa ao domínio romano. A cultura e as instituições locais continuam a se transformar ao longo dos séculos.",
    kind: "Faraós e impérios",
    sourceIds: ["britannica-cleopatra", "ucl-chronology"],
    keywords: ["cleópatra", "cleopatra", "roma", "romanos", "ptolomaico", "30"],
  },
  {
    id: "era-islamica",
    date: "c. 640 d.C.",
    sortYear: 640,
    period: "Período Islâmico",
    era: "later-egypt",
    title: "Uma nova era política e cultural",
    summary:
      "A conquista árabe inicia uma nova etapa. O Cairo, fundado séculos depois, torna-se um centro decisivo da história egípcia e regional.",
    kind: "História e cultura",
    sourceIds: ["ucl-chronology", "unesco-pyramids"],
    keywords: ["islâmico", "árabe", "cairo", "fustat", "medieval"],
  },
  {
    id: "otomanos",
    date: "1517",
    sortYear: 1517,
    period: "Período Otomano",
    era: "later-egypt",
    title: "O Egito torna-se parte do Império Otomano",
    summary:
      "A conquista otomana integra o Egito a uma rede imperial que conecta o Mediterrâneo, o Oriente Médio e o norte da África.",
    kind: "Impérios e conquistas",
    sourceIds: ["ucl-chronology"],
    keywords: ["otomano", "império", "1517", "osman"],
  },
  {
    id: "muhammad-ali",
    date: "1805",
    sortYear: 1805,
    period: "Período de Muhammad Ali",
    era: "later-egypt",
    title: "Reformas e centralização no século XIX",
    summary:
      "Muhammad Ali assume o governo e promove mudanças militares e administrativas. A cronologia da UCL identifica 1805 como início do período khedival.",
    kind: "História moderna",
    sourceIds: ["ucl-chronology"],
    keywords: ["muhammad ali", "moderno", "reformas", "khedival", "1805"],
  },
  {
    id: "republica",
    date: "1953",
    sortYear: 1953,
    period: "República do Egito",
    era: "later-egypt",
    title: "A república é proclamada",
    summary:
      "Após o fim da monarquia, o Egito torna-se uma república. É o início de uma etapa contemporânea, distinta da longa história faraônica.",
    kind: "História contemporânea",
    sourceIds: ["ucl-chronology"],
    keywords: ["república", "1953", "monarquia", "contemporâneo", "moderno"],
  },
];

export const gods = [
  {
    name: "Rá",
    title: "Sol e criação",
    description:
      "A força solar aparece em diferentes tradições de criação. Rá percorre o céu em sua barca e se relaciona com a renovação diária da vida.",
    symbol: "☼",
    color: "sun",
  },
  {
    name: "Osíris",
    title: "Renascimento e além-vida",
    description:
      "Ligado à fertilidade e ao mundo dos mortos, Osíris torna-se juiz dos falecidos e símbolo de renovação após a morte.",
    symbol: "𓀭",
    color: "river",
  },
  {
    name: "Ísis",
    title: "Proteção e magia",
    description:
      "Deusa protetora e mãe de Hórus, Ísis é associada à cura, ao poder mágico e à proteção da família e do trono.",
    symbol: "𓊨",
    color: "rose",
  },
  {
    name: "Hórus",
    title: "Céu e realeza",
    description:
      "Representado como falcão ou homem com cabeça de falcão, Hórus está ligado à realeza e à proteção do faraó.",
    symbol: "𓅃",
    color: "blue",
  },
  {
    name: "Anúbis",
    title: "Ritos funerários",
    description:
      "Com cabeça de chacal, Anúbis protege a necrópole e se associa à preparação dos mortos e às passagens para o além.",
    symbol: "𓃢",
    color: "ink",
  },
  {
    name: "Ma’at",
    title: "Verdade e equilíbrio",
    description:
      "A deusa e princípio da ordem cósmica é representada por uma pluma. No julgamento dos mortos, o coração é comparado à pluma de Ma’at.",
    symbol: "𓆄",
    color: "sand",
  },
];

export const pharaohs = [
  {
    name: "Narmer",
    dates: "c. 3100 a.C.",
    epithet: "Um dos primeiros reis das Duas Terras",
    description:
      "A Paleta de Narmer registra um rei que submete inimigos e é associado à unificação do Alto e do Baixo Egito.",
    symbol: "I",
    sourceIds: ["bm-timeline"],
  },
  {
    name: "Hatshepsut",
    dates: "c. 1479–1458 a.C.",
    epithet: "Faraó da XVIII dinastia",
    description:
      "Seu longo reinado é associado a estabilidade, comércio e ao complexo funerário de Djeser-Djeseru em Deir el-Bahri.",
    symbol: "𓁐",
    sourceIds: ["met-hatshepsut"],
  },
  {
    name: "Ramsés II",
    dates: "c. 1279–1213 a.C.",
    epithet: "Rei da XIX dinastia",
    description:
      "Seu reinado ficou marcado por grandes projetos monumentais e pela campanha contra os hititas em Kadesh, celebrada em inscrições reais.",
    symbol: "𓇳",
    sourceIds: ["arce-kadesh", "unesco-nubia"],
  },
  {
    name: "Cleópatra VII",
    dates: "69–30 a.C.",
    epithet: "Última soberana da dinastia ptolemaica",
    description:
      "Governou no Mediterrâneo helenístico, em meio à expansão de Roma. Após sua morte, o Egito foi anexado ao domínio romano.",
    symbol: "VII",
    sourceIds: ["britannica-cleopatra", "ucl-chronology"],
  },
];

export const monuments = [
  {
    id: "giza-monument",
    name: "Gizé",
    era: "Reino Antigo · IV dinastia",
    description:
      "Pirâmides, mastabas, templos e a Grande Esfinge formam uma paisagem funerária ligada à antiga capital de Mênfis.",
    image: "/images/great-pyramid.jpg",
    alt: "A Grande Pirâmide de Khufu vista de perto sob o céu azul",
    credit: "Douwe C. van der Zee · CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg",
    imageLicense: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceIds: ["unesco-pyramids"],
  },
  {
    id: "karnak-monument",
    name: "Karnak",
    era: "Tebas · Novo Reino",
    description:
      "Um grande complexo de santuários, pátios e colunatas, ampliado por sucessivas gerações de governantes em Tebas.",
    image: "/images/karnak-hypostyle.jpg",
    alt: "Ruínas e colunas do templo de Karnak, em Luxor",
    credit: "Vyacheslav Argenberg · CC BY 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Luxor,_Egypt,_Karnak.jpg",
    imageLicense: "https://creativecommons.org/licenses/by/4.0/",
    sourceIds: ["unesco-thebes"],
  },
  {
    id: "abu-simbel-monument",
    name: "Abu Simbel",
    era: "Núbia · reinado de Ramsés II",
    description:
      "Templos escavados na rocha, hoje parte dos Monumentos Núbios. No século XX, foram deslocados para escapar da inundação do lago Nasser.",
    image: "/images/abu-simbel.jpg",
    alt: "Fachada monumental do Grande Templo de Abu Simbel com quatro estátuas de Ramsés II",
    credit: "MrSnooks · CC BY-SA 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Abu_Simbel,_Egypt.jpg",
    imageLicense: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceIds: ["unesco-nubia"],
  },
];

export const topicSearchItems = [
  {
    id: "topic-history",
    title: "História e períodos",
    description: "Veja a trajetória do vale do Nilo à república contemporânea.",
    href: "#historia",
    keywords: "história períodos civilizações dinastias antiguidade moderno egito cronologia",
  },
  {
    id: "topic-mythology",
    title: "Mitologia e deuses",
    description: "Explore Rá, Osíris, Ísis, Hórus, Anúbis e Ma’at.",
    href: "#mitologia",
    keywords: "mitologia mitos religião deuses deusas rá ra osíris ísis horus hórus anúbis maat maat criação",
  },
  {
    id: "topic-pharaohs",
    title: "Faraós e governantes",
    description: "Conheça reis e rainhas que marcaram diferentes dinastias.",
    href: "#faraos",
    keywords: "faraós faraó rei rainha narmer hatshepsut ramsés cleópatra cleopatra governo",
  },
  {
    id: "topic-monuments",
    title: "Pirâmides e monumentos",
    description: "Descubra Gizé, Karnak, Abu Simbel e as necrópoles.",
    href: "#monumentos",
    keywords: "pirâmide pirâmides templo túmulo tumba construção monumento gizé giza karnak abu simbel esfinge",
  },
  {
    id: "topic-conflicts",
    title: "Guerras e relações",
    description: "Conflitos, alianças e encontros entre povos vizinhos.",
    href: "#conflitos",
    keywords: "guerra guerras batalha conflito hicsos hititas kadesh relações diplomacia nubia núbia",
  },
];
