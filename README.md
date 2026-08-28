# Portfolio

백엔드 개발자 포트폴리오 사이트. Next.js App Router 기반 정적 페이지 한 장이며, Vercel 에 배포합니다.

레이아웃은 좌측 고정 사이드바 + 단순 섹션 구성(Introduction / SkillSet / Portfolio / Contact)이고,
색상은 딥 네이비(#16233a) 사이드바 + 아이보리(#fffaf0) 본문입니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 정적 빌드 확인
```

## 내용 수정

화면 컴포넌트를 건드릴 필요 없이 `src/data` 의 세 파일만 고치면 됩니다.

| 파일 | 내용 |
|---|---|
| `src/data/profile.ts` | 이름·역할·연락처, 인사말, 좌우명, Overall Experiences 타임라인, 네비게이션 섹션 |
| `src/data/projects.ts` | Portfolio 섹션의 프로젝트 카드 (제목·기간·요약·상세 항목·기술 스택·링크) |
| `src/data/skills.ts` | SkillSet 섹션의 그룹별 태그 |

## 구조

```
src/
  app/            layout.tsx (폰트/메타데이터), page.tsx (섹션 조립), globals.css (색상 토큰)
  components/     Sidebar(스크롤 스파이) · Section(공통 헤딩) · Introduction · Skills · Projects · Contact
  data/           위 표의 세 파일
```

## 스택

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Vercel
