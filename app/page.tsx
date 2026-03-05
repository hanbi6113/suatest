import Link from 'next/link';
import { creatorDesigns, ottDesigns } from '@/lib/design-data';

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="landing-hero">
        <div className="landing-copy">
          <span className="eyebrow">ANIVERSE DESIGN LAB</span>
          <h1>애니메이션 OTT + 작가 제작 플랫폼 시안 모음</h1>
          <p>
            첫 화면에서 바로 각 시안으로 이동할 수 있게 만들었어. OTT는 보는 경험 중심,
            작가 페이지는 만드는 경험 중심으로 완전히 다르게 구성했어.
          </p>
        </div>
        <div className="landing-panel">
          <div className="landing-orb one" />
          <div className="landing-orb two" />
          <div className="landing-orb three" />
          <div className="landing-card">
            <strong>총 10개 시안</strong>
            <span>OTT 5개 + Creator 5개</span>
          </div>
        </div>
      </section>

      <section className="selector-section">
        <div className="section-title">
          <h2>OTT 시안</h2>
          <p>넷플릭스/티빙처럼 바로 보는 구조지만, 각각 분위기와 브랜딩이 전혀 다르게 보이도록 설계했어.</p>
        </div>
        <div className="selector-grid">
          {ottDesigns.map((design) => (
            <Link key={design.id} href={`/ott/${design.id}`} className="selector-card">
              <span className="selector-number">0{design.number}</span>
              <strong>{design.title}</strong>
              <p>{design.concept}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="selector-section">
        <div className="section-title">
          <h2>작가 페이지 시안</h2>
          <p>업로드, 제작, 편집, 커뮤니티, 발행 흐름이 잘 보이도록 구성했어. 각 시안은 성격이 겹치지 않게 나눴어.</p>
        </div>
        <div className="selector-grid">
          {creatorDesigns.map((design) => (
            <Link key={design.id} href={`/creator/${design.id}`} className="selector-card">
              <span className="selector-number">0{design.number}</span>
              <strong>{design.title}</strong>
              <p>{design.concept}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
