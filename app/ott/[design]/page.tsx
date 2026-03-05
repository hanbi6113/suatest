import { notFound } from 'next/navigation';
import { OttShowcase } from '@/components/ott-showcase';
import { allDesignIds, getDesignById } from '@/lib/design-data';

export function generateStaticParams() {
  return allDesignIds.ott.map((design) => ({ design }));
}

export default async function OttDesignPage({
  params,
}: {
  params: Promise<{ design: string }>;
}) {
  const { design: designId } = await params;
  const design = getDesignById('ott', designId);

  if (!design) {
    notFound();
  }

  return <OttShowcase design={design} />;
}
