import { notFound } from 'next/navigation';
import { CreatorShowcase } from '@/components/creator-showcase';
import { allDesignIds, getDesignById } from '@/lib/design-data';

export function generateStaticParams() {
  return allDesignIds.creator.map((design) => ({ design }));
}

export default async function CreatorDesignPage({
  params,
}: {
  params: Promise<{ design: string }>;
}) {
  const { design: designId } = await params;
  const design = getDesignById('creator', designId);

  if (!design) {
    notFound();
  }

  return <CreatorShowcase design={design} />;
}
