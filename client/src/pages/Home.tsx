import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Compass,
  Crown,
  Landmark,
  Menu,
  Search,
  Shield,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  gods,
  monuments,
  pharaohs,
  sources,
  timelineEras,
  timelineEvents,
  topicSearchItems,
} from "@/data/egyptContent";

type SearchResult = {
  id: string;
  title: string;
  description: string;
  href: string;
  keywords: string;
  kind: string;
};

const allSearchResults: SearchResult[] = [
  ...topicSearchItems.map((item) => ({ ...item, kind: "Tema" })),
  ...timelineEvents.map((event) => ({
    id: event.id,
    title: event.title,
    description: `${event.date} · ${event.period}. ${event.summary}`,
    href: `#timeline-event-${event.id}`,
    keywords: [event.title, event.date, event.period, event.kind, ...event.keywords].join(" "),
    kind: "Linha do tempo",
  })),
  ...gods.map((god) => ({
    id: `deity-${god.name.toLowerCase()}`,
    title: god.name,
    description: `${god.title}. ${god.description}`,
    href: "#mitologia",
    keywords: `${god.name} ${god.title} ${god.description} deuses mitologia`,
    kind: "Mitologia",
  })),
  ...pharaohs.map((pharaoh) => ({
    id: `pharaoh-${pharaoh.name.toLowerCase().replaceAll(" ", "-")}`,
    title: pharaoh.name,
    description: `${pharaoh.dates} · ${pharaoh.epithet}. ${pharaoh.description}`,
    href: "#faraos",
    keywords: `${pharaoh.name} ${pharaoh.dates} ${pharaoh.epithet} ${pharaoh.description} faraó faraós`,
    kind: "Faraós",
  })),
  ...monuments.map((monument) => ({
    id: monument.id,
    title: monument.name,
    description: `${monument.era}. ${monument.description}`,
    href: "#monumentos",
    keywords: `${monument.name} ${monument.era} ${monument.description} monumento pirâmide templo`,
    kind: "Monumento",
  })),
];

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function SourceLink({ sourceId, compact = false }: { sourceId: string; compact?: boolean }) {
  const source = sources.find((item) => item.id === sourceId);
  if (!source) return null;
  return (
    <a className={compact ? "source-link source-link-compact" : "source-link"} href={source.url} target="_blank" rel="noreferrer">
      <span>{source.publisher}</span>
      <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  );
}

function NileMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`nile-mark${compact ? " nile-mark-compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 54 54" fill="none">
        <circle cx="27" cy="17" r="8" />
        <path d="M27 25v18M17 32h20M14 38c4-3 8-3 13 0s9 3 13 0M14 44c4-3 8-3 13 0s9 3 13 0" />
      </svg>
    </span>
  );
}

function SectionIntro({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`section-intro section-intro-${tone}`}>
      <div className="section-index"><span>{index}</span><i /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedEra, setSelectedEra] = useState("all");
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredEvents = useMemo(
    () => timelineEvents.filter((event) => selectedEra === "all" || event.era === selectedEra),
    [selectedEra],
  );
  const searchResults = useMemo(() => {
    const term = normalizeText(query);
    if (term.length < 2) return [];
    return allSearchResults
      .filter((item) => normalizeText(`${item.title} ${item.description} ${item.keywords}`).includes(term))
      .slice(0, 7);
  }, [query]);

  function focusSearch() {
    searchRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => searchRef.current?.focus(), 350);
  }

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "")) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        focusSearch();
      } else if (event.key === "/") {
        event.preventDefault();
        focusSearch();
      }
    };
    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Egito, voltar ao início" onClick={closeMobileNav}>
          <NileMark />
          <span className="brand-copy"><strong>EGITO</strong><small>atlas de história</small></span>
        </a>
        <button className="mobile-menu-button" type="button" aria-label={mobileNavOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen((open) => !open)}>
          {mobileNavOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav${mobileNavOpen ? " main-nav-open" : ""}`} aria-label="Navegação principal">
          <a href="#historia" onClick={closeMobileNav}>História</a>
          <a href="#mitologia" onClick={closeMobileNav}>Mitologia</a>
          <a href="#faraos" onClick={closeMobileNav}>Faraós</a>
          <a href="#monumentos" onClick={closeMobileNav}>Monumentos</a>
          <a href="#conflitos" onClick={closeMobileNav}>Guerras</a>
          <button className="nav-search" type="button" onClick={() => { focusSearch(); closeMobileNav(); }} aria-label="Ir para busca">
            <Search size={17} /><span>Buscar</span><kbd>/</kbd>
          </button>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero-section" id="inicio">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-dot" /> UM ATLAS DE HISTÓRIA · DESDE c. 3100 a.C.</div>
            <h1>O Egito é<br /><em>muito mais</em><br />que pirâmides.</h1>
            <p className="hero-lede">Uma civilização moldada pelo Nilo, atravessada por impérios e contada em milhares de histórias.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#timeline">Percorrer a linha do tempo <ArrowRight size={16} /></a>
              <a className="text-link" href="#explorar">Escolher um tema <ArrowDown size={15} /></a>
            </div>
            <div className="hero-search-wrap">
              <label className="search-field" htmlFor="site-search">
                <Search size={19} aria-hidden="true" />
                <input
                  id="site-search"
                  ref={searchRef}
                  type="search"
                  placeholder="Busque um faraó, deus, lugar ou evento…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  autoComplete="off"
                  aria-label="Buscar no atlas"
                  aria-controls="search-results"
                  aria-expanded={query.trim().length >= 2}
                />
                <kbd>⌘ K</kbd>
              </label>
              {searchResults.length > 0 && (
                <div className="search-results" id="search-results" role="region" aria-label="Resultados da busca">
                  <div className="search-results-header"><span>RESULTADOS</span><button type="button" onClick={() => setQuery("")} aria-label="Limpar busca"><X size={14} /></button></div>
                  {searchResults.map((result) => (
                    <a
                      className="search-result"
                      href={result.href}
                      key={result.id}
                      onClick={(event) => {
                        if (result.kind !== "Linha do tempo") {
                          setQuery("");
                          return;
                        }
                        event.preventDefault();
                        const matchingEvent = timelineEvents.find((item) => item.id === result.id);
                        if (!matchingEvent) return;
                        setSelectedEra(matchingEvent.era);
                        setQuery("");
                        window.requestAnimationFrame(() => {
                          window.requestAnimationFrame(() => {
                            const target = document.getElementById(`timeline-event-${result.id}`);
                            if (!target) return;
                            window.history.replaceState(null, "", result.href);
                            target.scrollIntoView({ behavior: "smooth", block: "center" });
                          });
                        });
                      }}
                    >
                      <span><strong>{result.title}</strong><small>{result.description}</small></span>
                      <span className="search-result-meta">{result.kind}<ArrowUpRight size={14} /></span>
                    </a>
                  ))}
                </div>
              )}
              {query.trim().length >= 2 && searchResults.length === 0 && (
                <div className="search-results search-no-results" id="search-results" role="status">Nenhum resultado por aqui. Tente outro nome ou período.</div>
              )}
            </div>
            <p className="search-hint">Pesquise entre períodos, personagens, monumentos e acontecimentos.</p>
          </div>
          <div className="hero-art" aria-label="A Grande Pirâmide de Khufu, em Gizé">
            <div className="hero-image-frame">
              <img src="/images/great-pyramid.jpg" alt="A Grande Pirâmide de Khufu ocupa o horizonte do deserto de Gizé" fetchPriority="high" />
              <div className="image-grain" aria-hidden="true" />
              <div className="hero-image-caption"><span>01 / GIZÉ</span><span>PLANALTO DE MÊNFIS</span></div>
            </div>
            <div className="hero-stamp"><NileMark compact /><span>UMA<br />HISTÓRIA<br />EM MOVIMENTO</span></div>
            <div className="hero-art-note"><span>—</span> Nilo, deserto e tempo</div>
          </div>
          <div className="hero-bottomline"><span>DO VALE DO NILO AO EGITO CONTEMPORÂNEO</span><span>ROLE PARA EXPLORAR <ChevronDown size={14} /></span></div>
        </section>

        <section className="intro-strip" aria-label="Sobre o atlas">
          <div><span className="stat-number">07<span> mil+</span></span><span className="stat-label">anos de comunidades humanas<br />às margens do Nilo</span></div>
          <div><span className="stat-number">30<span>+</span></span><span className="stat-label">dinastias na longa<br />história faraônica</span></div>
          <div className="intro-strip-copy"><p>Uma história longa, com várias capitais, dinastias e formas de viver. Este atlas organiza os fios para você encontrar o seu próximo caminho.</p><a href="#historia">Conheça os períodos <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="explore-section page-section" id="explorar">
          <SectionIntro index="01" eyebrow="COMECE POR AQUI" title="Uma história. Muitos caminhos." description="Escolha uma porta de entrada — e siga as conexões." />
          <div className="topic-grid">
            <a className="topic-card topic-card-large topic-sand" href="#historia">
              <span className="topic-number">01 / PANORAMA</span><span className="topic-icon"><Compass size={25} /></span>
              <h3>O Egito<br />em perspectiva</h3><p>Períodos, dinastias e mudanças de poder do vale do Nilo ao presente.</p>
              <span className="topic-arrow"><ArrowUpRight size={18} /></span>
            </a>
            <a className="topic-card topic-river" href="#mitologia">
              <span className="topic-number">02 / CRENÇAS</span><span className="topic-icon"><Sun size={24} /></span>
              <h3>Deuses<br />e mitos</h3><p>Forças divinas, símbolos e narrativas que não cabem em uma só versão.</p>
              <span className="topic-arrow"><ArrowUpRight size={18} /></span>
            </a>
            <a className="topic-card topic-rose" href="#faraos">
              <span className="topic-number">03 / PODER</span><span className="topic-icon"><Crown size={24} /></span>
              <h3>Faraós<br />e governantes</h3><p>Quem governou, como construiu autoridade e o que deixou para trás.</p>
              <span className="topic-arrow"><ArrowUpRight size={18} /></span>
            </a>
            <a className="topic-card topic-stone" href="#monumentos">
              <span className="topic-number">04 / PATRIMÔNIO</span><span className="topic-icon"><Landmark size={24} /></span>
              <h3>Pedra, templo<br />e memória</h3><p>Pirâmides, santuários, tumbas e paisagens sagradas.</p>
              <span className="topic-arrow"><ArrowUpRight size={18} /></span>
            </a>
            <a className="topic-card topic-ink" href="#conflitos">
              <span className="topic-number">05 / FRONTEIRAS</span><span className="topic-icon"><Shield size={24} /></span>
              <h3>Guerras,<br />encontros e poder</h3><p>Conflitos e trocas com povos vizinhos — além da versão dos reis.</p>
              <span className="topic-arrow"><ArrowUpRight size={18} /></span>
            </a>
          </div>
        </section>

        <section className="timeline-section page-section" id="timeline">
          <div className="timeline-heading-row">
            <SectionIntro index="02" eyebrow="UMA CRONOLOGIA PARA EXPLORAR" title="A linha do tempo" description="Do nascimento dos primeiros Estados às transformações do Egito moderno." tone="dark" />
            <div className="timeline-note"><span className="timeline-note-mark">≈</span><p>Datas antigas são aproximadas e podem variar entre cronologias. A arqueologia continua refinando o que sabemos.</p><SourceLink sourceId="ucl-chronology" compact /></div>
          </div>
          <div className="timeline-filter-label"><span>FILTRAR POR PERÍODO</span><span>{filteredEvents.length} MARCOS</span></div>
          <div className="era-filters" role="group" aria-label="Filtrar linha do tempo por período">
            {timelineEras.map((era) => (
              <button key={era.id} type="button" className={`era-filter${selectedEra === era.id ? " is-active" : ""}`} aria-pressed={selectedEra === era.id} onClick={() => setSelectedEra(era.id)}>
                {era.label}<span>{era.id === "all" ? timelineEvents.length : timelineEvents.filter((event) => event.era === era.id).length}</span>
              </button>
            ))}
          </div>
          <div className="timeline-list">
            {filteredEvents.map((event, index) => (
              <article className="timeline-entry" id={`timeline-event-${event.id}`} key={event.id}>
                <div className="timeline-date"><span>{event.date}</span><i aria-hidden="true" /></div>
                <div className="timeline-card">
                  <div className="timeline-card-top"><span>{event.period}</span><span className="timeline-kind">{event.kind}</span></div>
                  <h3>{event.title}</h3><p>{event.summary}</p>
                  <div className="timeline-source-row">{event.sourceIds.slice(0, 2).map((sourceId) => <SourceLink key={sourceId} sourceId={sourceId} compact />)}</div>
                </div>
                <span className="timeline-counter">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
            {filteredEvents.length === 0 && <p className="empty-state">Nenhum marco encontrado neste período.</p>}
          </div>
        </section>

        <section className="history-section page-section" id="historia">
          <SectionIntro index="03" eyebrow="O PANORAMA" title="Mais do que uma sucessão de dinastias." description="O rótulo “Egito antigo” cobre milênios. Para entender as continuidades, vale também notar as rupturas: capitais que mudam, governos estrangeiros, novas religiões e uma vida cotidiana em transformação." />
          <div className="history-ribbon">
            <article><span>01 · c. 5500–2686 a.C.</span><h3>Formação</h3><p>Comunidades do Nilo, primeiros governantes e consolidação das Duas Terras.</p></article>
            <article><span>02 · c. 2686–1650 a.C.</span><h3>Reinos</h3><p>Reino Antigo, períodos intermediários e Reino Médio: centralização e novos centros regionais.</p></article>
            <article><span>03 · c. 1550–332 a.C.</span><h3>Império e transições</h3><p>Novo Reino, dinastias tardias e fases de governo persa e macedônico.</p></article>
            <article><span>04 · 332 a.C. em diante</span><h3>Egito em conexão</h3><p>Períodos ptolemaico, romano, islâmico, otomano e a formação do país contemporâneo.</p></article>
          </div>
          <p className="history-caveat"><BookOpen size={17} /> A periodização ajuda a orientar, mas não transforma uma história complexa em fronteiras perfeitamente nítidas. <SourceLink sourceId="ucl-chronology" compact /></p>
        </section>

        <section className="mythology-section page-section" id="mitologia">
          <div className="mythology-header">
            <SectionIntro index="04" eyebrow="COSMOLOGIA E VIDA COTIDIANA" title="Um mundo povoado por forças divinas." description="Os deuses assumiam formas humanas, animais ou híbridas. Suas relações mudavam de acordo com a cidade, o templo e o período." tone="dark" />
            <div className="myth-quote"><span>“</span><p>Não existe um único relato egípcio que reúna todas as versões da criação. Há constelações de deuses, episódios e tradições locais.</p><SourceLink sourceId="ucl-myths" compact /></div>
          </div>
          <div className="god-grid">
            {gods.map((god, index) => (
              <article className={`god-card god-${god.color}`} key={god.name}>
                <div className="god-card-top"><span className="god-symbol" aria-hidden="true">{god.symbol}</span><span>0{index + 1}</span></div>
                <h3>{god.name}</h3><p className="god-title">{god.title}</p><p className="god-description">{god.description}</p>
              </article>
            ))}
          </div>
          <div className="mythology-footnote"><span>CAMADAS DE SIGNIFICADO</span><p>Deuses também podiam se fundir, mudar de forma ou adquirir novos sentidos. As fontes materiais e escritas mostram uma religião diversa, que evoluiu durante muitos séculos.</p><SourceLink sourceId="bm-gods" /></div>
        </section>

        <section className="pharaoh-section page-section" id="faraos">
          <div className="pharaoh-topline"><SectionIntro index="05" eyebrow="PESSOAS E PODER" title="Quatro nomes. Muitos modos de governar." description="O título de faraó atravessa épocas muito diferentes. Estes perfis são pontos de partida, não uma lista completa." /><div className="pharaoh-side-note"><Sparkles size={16} /><span>O poder real era político, ritual e visual.</span></div></div>
          <div className="pharaoh-grid">
            {pharaohs.map((pharaoh, index) => (
              <article className="pharaoh-card" key={pharaoh.name}>
                <div className={`pharaoh-medallion pharaoh-medallion-${index}`}><span>{pharaoh.symbol}</span><i /></div>
                <div className="pharaoh-meta"><span>{pharaoh.dates}</span><span>0{index + 1}</span></div>
                <h3>{pharaoh.name}</h3><p className="pharaoh-epithet">{pharaoh.epithet}</p><p className="pharaoh-description">{pharaoh.description}</p>
                <div className="pharaoh-sources">{pharaoh.sourceIds.map((sourceId) => <SourceLink key={sourceId} sourceId={sourceId} compact />)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="monuments-section page-section" id="monumentos">
          <div className="monuments-heading"><SectionIntro index="06" eyebrow="ARQUITETURA E PAISAGEM" title="Monumentos que também contam histórias." description="Construir era um ato político, religioso e comunitário. Pedra, pintura e localização ajudam a ler quem encomendou cada obra — e para quem ela foi feita." /><a className="section-inline-link" href={sources.find((source) => source.id === "unesco-pyramids")?.url} target="_blank" rel="noreferrer">Patrimônio mundial <ArrowUpRight size={16} /></a></div>
          <div className="monument-grid">
            {monuments.map((monument, index) => (
              <article className={`monument-card monument-card-${index}`} key={monument.id}>
                <div className="monument-image-wrap"><img src={monument.image} alt={monument.alt} loading="lazy" /><span className="monument-index">0{index + 1}</span><a className="image-open" href={monument.imageSource} target="_blank" rel="noreferrer" aria-label={`Ver créditos da imagem de ${monument.name}`}><ArrowUpRight size={18} /></a></div>
                <div className="monument-copy"><span className="monument-era">{monument.era}</span><h3>{monument.name}</h3><p>{monument.description}</p><SourceLink sourceId={monument.sourceIds[0]} compact /><a className="image-credit" href={monument.imageSource} target="_blank" rel="noreferrer">Foto: {monument.credit} · licença</a></div>
              </article>
            ))}
          </div>
          <p className="photo-note">Fotografias licenciadas sob Creative Commons e atribuídas aos respectivos autores. Consulte a ficha da imagem para os termos completos.</p>
        </section>

        <section className="conflict-section page-section" id="conflitos">
          <div className="conflict-heading"><SectionIntro index="07" eyebrow="GUERRAS, CONTATOS E DISPUTAS" title="A guerra também era uma narrativa." description="Campanhas militares aparecem em relevos e inscrições reais. Esses registros são fontes históricas valiosas — e também discursos sobre poder." tone="dark" /><div className="conflict-aside"><span className="conflict-mark">↗</span><p>Leia as fontes com duas perguntas: o que o texto diz — e quem queria que essa versão fosse lembrada?</p></div></div>
          <div className="conflict-grid">
            <article className="conflict-card conflict-kadesh"><div className="conflict-card-overline"><span>c. 1275 a.C.</span><span>EGITO × HITITAS</span></div><h3>Kadesh</h3><p>Uma grande batalha de carros de guerra entre Ramsés II e Muwatalli II. O registro egípcio a apresenta como triunfo do faraó; a leitura do resultado é debatida.</p><SourceLink sourceId="arce-kadesh" /></article>
            <article className="conflict-card conflict-hyksos"><div className="conflict-card-overline"><span>c. 1650–1550 a.C.</span><span>DELTA DO NILO</span></div><h3>Os hicsos</h3><p>Houve conflitos entre governantes tebanos e reis hicsos. A arqueologia de Avaris, porém, mostra migração e convivência ao longo de gerações — não apenas uma invasão súbita.</p><SourceLink sourceId="arce-hyksos" /></article>
            <article className="conflict-note-card"><Shield size={21} /><h3>Conflito e troca coexistiam.</h3><p>O Egito travou guerras e também negociou, comerciou e compartilhou tecnologias com seus vizinhos. Fronteiras eram zonas de contato.</p><a href="#timeline">Ver os marcos na cronologia <ArrowRight size={15} /></a></article>
          </div>
        </section>

        <section className="sources-section page-section" id="fontes">
          <div className="sources-intro"><span className="sources-icon"><BookOpen size={20} /></span><div><p className="eyebrow">LEITURAS PARA CONTINUAR</p><h2>As fontes também fazem parte da história.</h2><p>O conteúdo deste atlas é uma introdução. Explore as cronologias e pesquisas das instituições abaixo para aprofundar cada tema.</p></div></div>
          <div className="sources-list">
            {sources.map((source, index) => (
              <a className="source-row" href={source.url} target="_blank" rel="noreferrer" key={source.id}><span className="source-row-index">{String(index + 1).padStart(2, "0")}</span><span className="source-row-title"><strong>{source.title}</strong><small>{source.publisher}</small></span><ArrowUpRight size={17} /></a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio"><NileMark /><span className="brand-copy"><strong>EGITO</strong><small>atlas de história</small></span></a>
        <p>Uma história milenar, contada em muitas vozes.</p>
        <a href="#inicio" className="back-to-top">VOLTAR AO TOPO <ArrowUpRight size={14} /></a>
        <div className="footer-bottom"><span>EGITO · ATLAS DE HISTÓRIA</span><span>DATAS ANTIGAS APROXIMADAS · FONTES NO CONTEXTO</span><a href="#fontes">FONTES E CRÉDITOS</a></div>
      </footer>
    </div>
  );
}
