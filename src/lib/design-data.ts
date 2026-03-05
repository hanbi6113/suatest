export type DesignCategory = 'ott' | 'creator';

export type DesignItem = {
  id: string;
  number: number;
  slug: string;
  title: string;
  concept: string;
  keywords: string[];
  accent: string;
};

export const ottDesigns: DesignItem[] = [
  {
    id: '1',
    number: 1,
    slug: 'cinema-noir',
    title: 'OTT 시안 1 · Cinema Noir',
    concept: '프리미엄 극장형. 어두운 무대, 강한 타이포, 넓은 히어로 비주얼 중심.',
    keywords: ['Premium', 'Cinematic', 'Dark', 'Immersive'],
    accent: 'gold',
  },
  {
    id: '2',
    number: 2,
    slug: 'glass-minimal',
    title: 'OTT 시안 2 · Glass Minimal',
    concept: '초미니멀 럭셔리. 여백, 밝은 톤, 유리 패널과 깨끗한 정보 구조.',
    keywords: ['Minimal', 'Clean', 'Light', 'Luxury'],
    accent: 'silver',
  },
  {
    id: '3',
    number: 3,
    slug: 'neon-grid',
    title: 'OTT 시안 3 · Neon Grid',
    concept: 'SF 인터랙션형. 네온 라인, 카드 격자, 실험적인 미래 UI.',
    keywords: ['Sci-Fi', 'Neon', 'Interactive', 'Bold'],
    accent: 'violet',
  },
  {
    id: '4',
    number: 4,
    slug: 'editorial-artbook',
    title: 'OTT 시안 4 · Editorial Artbook',
    concept: '화보집/설정집형. 잡지 편집 레이아웃, 긴 텍스트와 커버 감성 중심.',
    keywords: ['Editorial', 'Artbook', 'Story', 'Elegant'],
    accent: 'cream',
  },
  {
    id: '5',
    number: 5,
    slug: 'aurora-stage',
    title: 'OTT 시안 5 · Aurora Stage',
    concept: '몽환적이고 특이한 콘셉트. 오로라 빛감, 둥근 레이어, 감성 중심.',
    keywords: ['Dreamy', 'Soft', 'Magical', 'Unique'],
    accent: 'mint',
  },
];

export const creatorDesigns: DesignItem[] = [
  {
    id: '1',
    number: 1,
    slug: 'maker-workbench',
    title: '작가 시안 1 · Maker Workbench',
    concept: '만드는 흐름이 잘 보이는 워크스페이스형. 업로드 → 편집 → 발행.',
    keywords: ['Workflow', 'Dashboard', 'Build', 'Practical'],
    accent: 'blue',
  },
  {
    id: '2',
    number: 2,
    slug: 'challenge-square',
    title: '작가 시안 2 · Challenge Square',
    concept: '베스트도전 감성의 커뮤니티형. 공개 피드, 인기 작품, 도전 탭 강조.',
    keywords: ['Community', 'Feed', 'Discovery', 'Friendly'],
    accent: 'pink',
  },
  {
    id: '3',
    number: 3,
    slug: 'pro-studio-console',
    title: '작가 시안 3 · Pro Studio Console',
    concept: '복잡하고 전문적인 제작 스튜디오형. 타임라인과 파이프라인 강조.',
    keywords: ['Complex', 'Professional', 'Timeline', 'Control'],
    accent: 'green',
  },
  {
    id: '4',
    number: 4,
    slug: 'atelier-portfolio',
    title: '작가 시안 4 · Atelier Portfolio',
    concept: '예쁘고 정제된 포트폴리오형. 작가 브랜딩과 작품 소개가 중심.',
    keywords: ['Beautiful', 'Portfolio', 'Elegant', 'Brand'],
    accent: 'peach',
  },
  {
    id: '5',
    number: 5,
    slug: 'node-lab',
    title: '작가 시안 5 · Node Lab',
    concept: '특이하고 실험적인 제작 실험실형. 장면 블록을 연결하는 UI.',
    keywords: ['Experimental', 'Node', 'Creative', 'Unique'],
    accent: 'cyan',
  },
];

export const allDesignIds = {
  ott: ottDesigns.map((item) => item.id),
  creator: creatorDesigns.map((item) => item.id),
};

export function getDesignById(category: DesignCategory, id: string) {
  const list = category === 'ott' ? ottDesigns : creatorDesigns;
  return list.find((item) => item.id === id) ?? null;
}
