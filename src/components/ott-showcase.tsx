import { DesignItem } from '@/lib/design-data';
import { getImageStyle, IntroBlock, MetricCard, PosterCard, PreviewShell, SectionTitle } from '@/components/shared';

const posters = [
  ['흑백의 계절', '로맨스 · 12화'],
  ['심연 도시', '스릴러 · 10화'],
  ['유리별 항해', '판타지 · 16화'],
  ['붉은 기록보관소', '미스터리 · 8화'],
];

export function OttShowcase({ design }: { design: DesignItem }) {
  return (
    <PreviewShell categoryLabel="OTT 디자인" design={design} backHref="/">
      {design.id === '1' && <OttCinemaNoir design={design} />}
      {design.id === '2' && <OttGlassMinimal design={design} />}
      {design.id === '3' && <OttNeonGrid design={design} />}
      {design.id === '4' && <OttEditorial design={design} />}
      {design.id === '5' && <OttAurora design={design} />}
    </PreviewShell>
  );
}

function OttCinemaNoir({ design }: { design: DesignItem }) {
  return (
    <div className="theme cinema-noir">
      <section className="hero hero-noir">
        <div className="hero-copy wide">
          <IntroBlock
            eyebrow="PREMIUM OTT EXPERIENCE"
            title={design.title}
            description="메인 작품을 영화처럼 크게 보여주고, 바로 재생 버튼이 중심에 오는 구조야. 넷플릭스처럼 바로 볼 수 있지만 더 무대 같은 느낌을 주도록 만들었어."
            tags={design.keywords}
          />
          <div className="cta-row">
            <button className="solid-button">지금 재생</button>
            <button className="outline-button">예고편 보기</button>
          </div>
        </div>
        <div className="hero-panel spotlight">
          <div className="feature-frame" style={getImageStyle(0, 'dark')}>
            <span className="live-pill">NOW STREAMING</span>
            <h3>검은 새벽의 아리아</h3>
            <p>웹소설 원작을 프리미엄 극장형 애니메이션으로 감상하는 메인 구역.</p>
          </div>
        </div>
      </section>

      <section className="metrics-row">
        <MetricCard label="실시간 시청자" value="128K" />
        <MetricCard label="완주율" value="91%" />
        <MetricCard label="오늘 공개" value="6 EP" />
      </section>

      <section className="content-section">
        <SectionTitle title="지금 가장 뜨는 작품" description="큰 화면과 긴 카드가 잘 어울리는 프리미엄형 레이아웃" />
        <div className="poster-grid four">
          {posters.map(([title, subtitle], index) => (
            <PosterCard key={title} title={title} subtitle={subtitle} imageIndex={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function OttGlassMinimal({ design }: { design: DesignItem }) {
  return (
    <div className="theme glass-minimal">
      <section className="hero hero-split soft-light">
        <div className="hero-copy">
          <IntroBlock
            eyebrow="MINIMAL STREAMING"
            title={design.title}
            description="화이트/실버 계열의 미니멀 톤으로, 작품 자체를 갤러리처럼 보여주는 방식이야. 정보는 정리되고 시선은 분산되지 않게 설계했어."
            tags={design.keywords}
          />
          <div className="inline-stats">
            <span>신작 24</span>
            <span>큐레이션 8</span>
            <span>추천 정확도 94%</span>
          </div>
        </div>
        <div className="glass-stack">
          <div className="glass-card large image-card" style={getImageStyle(1, 'light')}>
            <span>Editor's Pick</span>
            <strong>유리별 항해</strong>
          </div>
          <div className="glass-card image-card" style={getImageStyle(2, 'light')}>
            <span>Continue</span>
            <strong>Episode 07</strong>
          </div>
          <div className="glass-card image-card" style={getImageStyle(0, 'light')}>
            <span>For You</span>
            <strong>차분한 판타지</strong>
          </div>
        </div>
      </section>

      <section className="content-section narrow-section">
        <SectionTitle title="오늘의 큐레이션" description="작품 썸네일도 군더더기 없이 정갈하게 정리된 버전" />
        <div className="poster-strip">
          {posters.map(([title, subtitle], index) => (
            <PosterCard key={title} title={title} subtitle={subtitle} imageIndex={index + 1} tone="light" />
          ))}
        </div>
      </section>
    </div>
  );
}

function OttNeonGrid({ design }: { design: DesignItem }) {
  return (
    <div className="theme neon-grid">
      <section className="hero hero-grid">
        <div className="grid-copy">
          <IntroBlock
            eyebrow="FUTURE STREAM UI"
            title={design.title}
            description="네온 라인, 격자 배치, 상태 표시가 많은 미래형 구조야. 일반 OTT보다 더 게임 런처 같은 인상을 줘서 색다른 느낌이 강해."
            tags={design.keywords}
          />
        </div>
        <div className="grid-monitor">
          <div className="monitor-main image-card" style={getImageStyle(2, 'vivid')}>
            <span>ACTIVE CHANNEL</span>
            <strong>심연 도시</strong>
            <p>장르 탐색 / 감상 진행률 / 출시 일정이 한 화면에 묶여 있어.</p>
          </div>
          <div className="monitor-mini image-card" style={getImageStyle(0, 'vivid')}>79% watched</div>
          <div className="monitor-mini image-card" style={getImageStyle(1, 'vivid')}>4 releases today</div>
          <div className="monitor-mini image-card" style={getImageStyle(2, 'vivid')}>Neon Thriller Pack</div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="GRID CHANNELS" description="카드들이 격자형으로 쌓여 인터랙션이 강한 시안" />
        <div className="tech-grid">
          {posters.map(([title, subtitle], index) => (
            <article key={title} className="tech-card">
              <div className="tech-thumb" style={getImageStyle(index, 'vivid')} />
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function OttEditorial({ design }: { design: DesignItem }) {
  return (
    <div className="theme editorial-artbook">
      <section className="editorial-hero">
        <div className="editorial-cover" style={getImageStyle(1, 'paper')} />
        <div className="editorial-copy">
          <IntroBlock
            eyebrow="EDITORIAL VIEW"
            title={design.title}
            description="홈페이지라기보다 설정집이나 아트북을 넘기는 느낌을 주는 시안이야. 작품 소개를 카드보다 글과 레이아웃으로 보여줘서 브랜딩이 강해져."
            tags={design.keywords}
          />
        </div>
      </section>

      <section className="editorial-columns">
        <article className="editorial-text">
          <h3>Cover Story</h3>
          <p>
            첫 화면부터 서비스보다 작품 세계관이 먼저 느껴지게 설계했어. 그래서 흔한 OTT보다
            더 예술적이고 소장하고 싶은 브랜드 인상을 줄 수 있어.
          </p>
        </article>
        <article className="editorial-list">
          <h3>이번 달 선정작</h3>
          <ul>
            {posters.map(([title, subtitle], index) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{subtitle} · img{(index % 3) + 1}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}

function OttAurora({ design }: { design: DesignItem }) {
  return (
    <div className="theme aurora-stage">
      <section className="hero aurora-hero">
        <div className="hero-copy">
          <IntroBlock
            eyebrow="DREAM LIKE OTT"
            title={design.title}
            description="오로라 같은 빛과 둥근 레이어를 써서 몽환적인 감상을 만드는 시안이야. 기존 OTT보다 훨씬 감성적이고 부드러운 느낌이라 차별화가 커."
            tags={design.keywords}
          />
          <div className="soft-badges">
            <span>몰입형 감상</span>
            <span>감성 큐레이션</span>
            <span>독립 애니 특화</span>
          </div>
        </div>
        <div className="orbital-stage">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orb orb-c" />
          <div className="floating-panel image-card" style={getImageStyle(0, 'vivid')}>
            <strong>별비 내리는 밤</strong>
            <p>마음 상태에 맞춰 작품을 추천하는 감성 중심 메인 카드</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="감정 기반 추천" description="장르가 아니라 분위기로 작품을 찾게 만드는 구조" />
        <div className="mood-row">
          <div className="mood-card image-card" style={getImageStyle(0, 'vivid')}>잔잔한 밤</div>
          <div className="mood-card image-card" style={getImageStyle(1, 'vivid')}>따뜻한 위로</div>
          <div className="mood-card image-card" style={getImageStyle(2, 'vivid')}>환상 모험</div>
          <div className="mood-card image-card" style={getImageStyle(1, 'vivid')}>아련한 로맨스</div>
        </div>
      </section>
    </div>
  );
}
