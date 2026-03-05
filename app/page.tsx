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
