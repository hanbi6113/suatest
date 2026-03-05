import Link from 'next/link';
import type { ReactNode } from 'react';
import { DesignItem } from '@/lib/design-data';

type PreviewShellProps = {
  categoryLabel: string;
  design: DesignItem;
  backHref: string;
  children: ReactNode;
};

export function PreviewShell({ categoryLabel, design, backHref, children }: PreviewShellProps) {
  return (
    <main className="preview-page">
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

export function PosterCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <article className="poster-card">
      <div className="poster-thumb" />
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
