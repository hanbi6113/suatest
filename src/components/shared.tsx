import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { DesignItem } from '@/lib/design-data';

type PreviewShellProps = {
  categoryLabel: string;
  design: DesignItem;
  backHref: string;
  children: ReactNode;
};

const demoImages = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

export function getDemoImage(index: number) {
  return demoImages[index % demoImages.length];
}

export function getImageStyle(
  index: number,
  tone: 'dark' | 'light' | 'vivid' | 'paper' = 'dark',
): CSSProperties {
  const image = getDemoImage(index);

  const overlays = {
    dark: 'linear-gradient(180deg, rgba(6, 8, 16, 0.18), rgba(6, 8, 16, 0.7))',
    light: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.62))',
    vivid: 'linear-gradient(180deg, rgba(77, 24, 129, 0.28), rgba(7, 14, 30, 0.7))',
    paper: 'linear-gradient(180deg, rgba(245, 236, 219, 0.18), rgba(88, 58, 25, 0.2))',
  };

  return {
    backgroundImage: `${overlays[tone]}, url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
}

export function PreviewShell({ categoryLabel, design, backHref, children }: PreviewShellProps) {
  return (
    <main className={`preview-page preview-${design.slug}`}>
      <div className="preview-topbar">
        <Link href={backHref} className="ghost-link">
          ← 메인으로
        </Link>
        <div className="preview-meta">
          <span className="chip subtle">{categoryLabel}</span>
          <span className="chip">{design.slug}</span>
        </div>
      </div>
      {children}
    </main>
  );
}

export function IntroBlock({
  eyebrow,
  title,
  description,
  tags,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <section className="intro-block">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="chip-row">
        {tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function PosterCard({
  title,
  subtitle,
  imageIndex = 0,
  tone = 'dark',
}: {
  title: string;
  subtitle: string;
  imageIndex?: number;
  tone?: 'dark' | 'light' | 'vivid' | 'paper';
}) {
  return (
    <article className="poster-card">
      <div className="poster-thumb" style={getImageStyle(imageIndex, tone)} />
      <div className="poster-copy">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </article>
  );
}

export function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <article className="step-card">
      <span className="step-badge">{step}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
