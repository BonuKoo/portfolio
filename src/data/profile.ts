export const profile = {
  // TODO: 실명으로 표기하려면 name 을 바꾸세요. (사이드바 / 메타데이터에 그대로 노출됩니다)
  name: "BonuKoo",
  role: "Backend Developer",
  location: "서울특별시",
  email: "evlogiaseio@gmail.com",
  github: "https://github.com/BonuKoo",
  githubHandle: "github.com/BonuKoo",

  greeting: "안녕하세요. 측정하고 나서 결론 내리는 백엔드 개발자입니다.",
  intro:
    "자료로 읽은 정답을 그대로 쓰지 않습니다. 직접 만들어 실패해보고, 수치로 확인한 뒤에 선택합니다. 동시성과 정합성 문제를 다룰 때는 락 전략을 네 가지로 나눠 벤치마크했고, 분산 메시지 파이프라인은 Docker 대신 물리 PC 3대로 구성해 방화벽·절전 같은 진짜 인프라 문제까지 겪어봤습니다.",
  motto: "직접 만들어 실패해보고, 수치로 확인한 뒤에 결정한다.",
} as const;

export const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "skillset", label: "SkillSet" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
] as const;

export type Experience = {
  title: string;
  period: string;
  description: string;
};

// TODO: 인턴 / 교육과정 / 수상 등 실제 이력이 있다면 여기에 추가하세요.
export const experiences: Experience[] = [
  {
    title: "분산 메시지 파이프라인 (core-mq)",
    period: "2026.07 - 2026.08",
    description:
      "Outbox + DLQ + 멱등 컨슈머로 결제 확정 이벤트를 유실·중복 없이 완결시키는 파이프라인을 물리 PC 3대에 직접 구성했습니다. 브로커 강제 차단과 컨슈머 다운을 주입해 유실 0건과 자동 복구를 확인했습니다.",
  },
  {
    title: "BookStore — 결제 동시성·정합성 개선",
    period: "2026.05 - 2026.08",
    description:
      "네이버 도서 API 기반 e-commerce 개인 프로젝트. JFR·p6spy·k6로 병목을 측정해 응답 지연을 약 36% 줄였고, Saga 보상 트랜잭션의 한계를 직접 겪은 뒤 Outbox + 이벤트 기반으로 재설계했습니다.",
  },
  {
    title: "myerp — 건축자재 도소매 ERP",
    period: "2026.08",
    description:
      "계층별 TDD로 개발한 간이 ERP. 재고 동시 차감을 낙관적/비관적 락 두 가지로 구현해 비교했고, 같은 도메인을 Spring Framework + WAR 로 이관해 WildFly 배포까지 검증했습니다.",
  },
  {
    title: "Payment — Java / Spring MVC 결제 시스템",
    period: "2025.06",
    description:
      "토스페이먼츠 결제 연동을 처음 다룬 프로젝트. 이때 남은 결제 확정 흐름에 대한 의문이 이후 BookStore 의 멱등성·Outbox 설계로 이어졌습니다.",
  },
];
