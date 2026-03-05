# Aniverse Design Lab

웹툰/웹소설 기반 애니메이션 플랫폼을 가정한 **OTT 5개 시안 + 작가/일반인 제작 플랫폼 5개 시안** 프로젝트입니다.

## 포함된 시안

### OTT
- 시안 1: Cinema Noir
- 시안 2: Glass Minimal
- 시안 3: Neon Grid
- 시안 4: Editorial Artbook
- 시안 5: Aurora Stage

### Creator / B2C
- 시안 1: Maker Workbench
- 시안 2: Challenge Square
- 시안 3: Pro Studio Console
- 시안 4: Atelier Portfolio
- 시안 5: Node Lab

## 기술 스택
- Next.js (App Router)
- TypeScript
- CSS (global styles)

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 아래 주소로 접속:

```bash
http://localhost:3000
```

## 새 프로젝트를 직접 만드는 순서

```bash
npx create-next-app@latest aniverse-design-lab --typescript --app
```

그 다음 기존 파일을 이 프로젝트 파일들로 교체하면 됩니다.

## GitHub 연결

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin 깃허브레포주소
git push -u origin main
```

## 폴더 구조

```bash
app/
  creator/
    [design]/page.tsx
  ott/
    [design]/page.tsx
  globals.css
  layout.tsx
  page.tsx
src/
  components/
    creator-showcase.tsx
    ott-showcase.tsx
    shared.tsx
  lib/
    design-data.ts
```

## 커스터마이징 포인트
- `src/lib/design-data.ts` : 시안 제목, 설명, 키워드 변경
- `src/components/ott-showcase.tsx` : OTT 각 시안 레이아웃 변경
- `src/components/creator-showcase.tsx` : 작가 페이지 각 시안 레이아웃 변경
- `app/globals.css` : 전체 분위기/색감/간격 수정

## 주의
이 프로젝트는 **시안 확인용 디자인 프로젝트**입니다.
실서비스로 확장할 때는 아래 기능을 추가하면 좋습니다.

- 로그인 / 회원가입
- 작품 업로드 API
- 영상 플레이어 연동
- 결제 / 구독
- 댓글 / 좋아요 / 랭킹
- AI 애니메이션 생성 파이프라인 연결
