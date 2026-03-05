import { DesignItem } from '@/lib/design-data';
import { IntroBlock, MetricCard, PreviewShell, SectionTitle, StepCard } from '@/components/shared';

export function CreatorShowcase({ design }: { design: DesignItem }) {
  return (
    <PreviewShell categoryLabel="작가/제작자 디자인" design={design} backHref="/">
      {design.id === '1' && <MakerWorkbench design={design} />}
      {design.id === '2' && <ChallengeSquare design={design} />}
      {design.id === '3' && <ProStudioConsole design={design} />}
      {design.id === '4' && <AtelierPortfolio design={design} />}
      {design.id === '5' && <NodeLab design={design} />}
    </PreviewShell>
  );
}

function MakerWorkbench({ design }: { design: DesignItem }) {
  return (
    <div className="theme maker-workbench">
      <section className="hero hero-split">
        <div className="hero-copy">
          <IntroBlock
            eyebrow="BUILD YOUR ANIMATION"
            title={design.title}
            description="작가가 작품을 올리고, 컷을 나누고, 보이스와 모션을 만들고, 마지막에 발행하는 흐름이 한눈에 보이는 실전형 대시보드야."
            tags={design.keywords}
          />
          <div className="cta-row">
            <button className="solid-button">새 프로젝트 만들기</button>
            <button className="outline-button">샘플 템플릿 보기</button>
          </div>
        </div>
        <div className="panel-board">
          <div className="board-card tall">
            <span>프로젝트 상태</span>
            <strong>파일 업로드 완료</strong>
          </div>
          <div className="board-card">
            <span>장면 분할</span>
            <strong>24 scenes</strong>
          </div>
          <div className="board-card">
            <span>AI 모션</span>
            <strong>Queued</strong>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="제작 플로우" description="작가 페이지는 만드는 경험이 가장 중요하니까 단계가 중심이 되도록 구성했어" />
        <div className="step-grid three">
          <StepCard step="01" title="원작 업로드" description="웹툰 컷, 대본, 캐릭터 설정을 먼저 넣는 단계" />
          <StepCard step="02" title="장면 편집" description="컷 분할, 카메라 무빙, 대사 타이밍 조정" />
          <StepCard step="03" title="배포" description="OTT 미리보기와 공개 일정까지 연결" />
        </div>
      </section>
    </div>
  );
}

function ChallengeSquare({ design }: { design: DesignItem }) {
  return (
    <div className="theme challenge-square">
      <section className="playful-hero">
        <IntroBlock
          eyebrow="OPEN CREATOR COMMUNITY"
          title={design.title}
          description="네이버웹툰 베스트도전처럼 누구나 도전할 수 있는 느낌이지만, 애니메이션 제작 특화 요소를 넣은 커뮤니티형 시안이야."
          tags={design.keywords}
        />
        <div className="community-banner">
          <div className="community-box big">이번 주 급상승 제작자</div>
          <div className="community-box">도전 애니 공모전</div>
          <div className="community-box">피드백 1,280+</div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="도전 작품 피드" description="친근하고 대중적인 느낌으로 접근성을 높이는 구조" />
        <div className="feed-grid">
          {['학원물 애니', '로판 티저', '퇴마 판타지', '일상 숏애니'].map((item) => (
            <article key={item} className="feed-card">
              <div className="feed-thumb" />
              <strong>{item}</strong>
              <span>좋아요 · 댓글 · 응원하기</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProStudioConsole({ design }: { design: DesignItem }) {
  return (
    <div className="theme pro-studio-console">
      <section className="console-shell">
        <div className="console-main">
          <IntroBlock
            eyebrow="PRODUCTION CONTROL"
            title={design.title}
            description="이건 일부러 복잡하게 만든 버전이야. 전문 제작 툴처럼 타임라인, 렌더 상태, 캐릭터 자산, 사운드 트랙을 한 번에 보게 했어."
            tags={design.keywords}
          />
          <div className="timeline-box">
            <div className="timeline-track" />
            <div className="timeline-track short" />
            <div className="timeline-track tiny" />
          </div>
        </div>
        <div className="console-side">
          <MetricCard label="렌더 큐" value="18" />
          <MetricCard label="캐릭터 에셋" value="74" />
          <MetricCard label="사운드 트랙" value="12" />
          <MetricCard label="오류 감지" value="02" />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="스튜디오 패널" description="복잡하고 전문적인 화면을 좋아할 때 어울리는 시안" />
        <div className="studio-grid">
          <div className="studio-card wide-card">씬 보드</div>
          <div className="studio-card">보이스 레이어</div>
          <div className="studio-card">카메라 경로</div>
          <div className="studio-card">감정 태그</div>
        </div>
      </section>
    </div>
  );
}

function AtelierPortfolio({ design }: { design: DesignItem }) {
  return (
    <div className="theme atelier-portfolio">
      <section className="atelier-hero">
        <div className="atelier-left">
          <IntroBlock
            eyebrow="CREATOR BRANDING"
            title={design.title}
            description="예쁘고 정제된 시안이야. 제작 기능은 숨기지 않되, 작가 소개와 대표작, 세계관 무드보드가 아름답게 보이는 방향으로 잡았어."
            tags={design.keywords}
          />
        </div>
        <div className="atelier-right">
          <div className="muse-card large">대표작 미리보기</div>
          <div className="muse-row">
            <div className="muse-card">캐릭터 시트</div>
            <div className="muse-card">배경 무드보드</div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="작가 소개 섹션" description="브랜드가 중요한 작가, 스튜디오, 프리미엄 크리에이터에 잘 어울리는 스타일" />
        <div className="atelier-text-box">
          <p>
            애니메이션 제작 플랫폼이지만, 첫인상은 작가의 미감과 정체성이 느껴지게 하는 게 핵심이야.
            그래서 포트폴리오 사이트와 제작 툴의 중간 지점을 노렸어.
          </p>
        </div>
      </section>
    </div>
  );
}

function NodeLab({ design }: { design: DesignItem }) {
  return (
    <div className="theme node-lab">
      <section className="node-hero">
        <IntroBlock
          eyebrow="EXPERIMENTAL BUILD LAB"
          title={design.title}
          description="장면을 카드가 아니라 블록처럼 연결하는 실험적인 UI야. 스토리 → 캐릭터 감정 → 보이스 → 모션 → 배포가 연결선으로 보이는 느낌을 줘."
          tags={design.keywords}
        />
        <div className="node-map">
          <div className="node-pill">원작</div>
          <div className="node-pill">스토리보드</div>
          <div className="node-pill">음성</div>
          <div className="node-pill">애니메이션</div>
          <div className="node-pill">공개</div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle title="실험실 로그" description="정형화된 대시보드가 아닌, 특이하고 기억에 남는 제작 UI" />
        <div className="lab-notes">
          <div className="lab-card">장면 연결 성공률 96%</div>
          <div className="lab-card">캐릭터 감정 태그 32개</div>
          <div className="lab-card">자동 립싱크 추천 활성화</div>
        </div>
      </section>
    </div>
  );
}
