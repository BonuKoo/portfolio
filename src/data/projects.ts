export type Project = {
  id: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "myerp",
    title: "myerp — 건축자재 도소매 ERP",
    period: "2026.08",
    summary:
      "거래처·재고·매입·매출 전표를 다루는 간이 ERP. 계층별 TDD로 개발했고, 매출 전표의 재고 동시 차감을 낙관적/비관적 락 두 가지로 직접 구현해 비교했다.",
    bullets: [
      "인증(JWT)부터 매입·매출 전표까지 4단계를 백엔드·프론트 모두 완결",
      "재고 차감에 낙관적/비관적 락 두 전략을 전략 패턴으로 분리 구현",
      "동시성 통합 테스트(ExecutorService)로 실제 MySQL 데드락을 발견하고 원인을 규명해 수정",
      "전표 등록/취소를 재고 증감 + 이력 기록까지 하나의 트랜잭션으로 묶어 부분 반영 차단",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Security", "MyBatis", "MySQL", "React"],
    links: [{ label: "GitHub", href: "https://github.com/BonuKoo/MyERP" }],
  },
  {
    id: "myerp-spring",
    title: "myerp-spring — Spring Boot → Spring Framework / WAR 이관",
    period: "2026.08",
    summary:
      "같은 ERP를 Spring Boot 없이 순수 Spring Framework + Maven + WAR 로 이관해 WildFly 에 배포했다. Boot 가 대신 해주던 일을 하나씩 직접 채우며 확인했다.",
    bullets: [
      "테스트 416개 전부 통과, WildFly 41 실제 배포·기동까지 검증",
      "requestMatchers 가 같은 컨텍스트의 mvcHandlerMappingIntrospector 를 요구한다는 점 때문에, 컨텍스트를 나누지 않고 단일 컨텍스트로 재구성",
      "@EnableTransactionManagement(proxyTargetClass = true) 등 Boot 의 자동 설정을 하나씩 직접 채움",
      "프론트엔드 전 화면을 바닐라 JS 로 재작성",
    ],
    stack: ["Java 17", "Spring Framework 6", "MyBatis", "Maven", "WildFly"],
    links: [],
  },
];
