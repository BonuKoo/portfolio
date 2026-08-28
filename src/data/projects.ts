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
    id: "bookstore",
    title: "BookStore — 결제 동시성·정합성 개선",
    period: "2026.05 - 2026.08",
    summary:
      "네이버 도서 API 기반 e-commerce 개인 프로젝트. 결제 확정 흐름을 단일 서버에서 여러 서버로 나눠 처리하는 과정에서 마주친 동시성·정합성 문제를, 직접 부딪히고 실측해가며 해결했습니다.",
    bullets: [
      "JWT 검증마다 JwtParser 를 새로 만들며 생긴 락 경합(컨텍스트 스위치 100회, 블로킹 4분 6초)을 JFR 로 진단하고 싱글톤 빈으로 제거",
      "p6spy 로 checkout 의 N+1 을 찾아 Fetch Join·DTO 프로젝션으로 개선, k6 평균 응답 지연 약 36% 단축 (14,000ms → 9,000ms)",
      "재고 차감 락 전략 4종(낙관적·비관적·원자 UPDATE·큐 직렬화)을 같은 조건에서 벤치마크 — 고경합에서 낙관적 락이 성공 1건당 13.7회 재시도하는 것을 실측",
      "멱등키를 order_id 로 두고 DB UNIQUE 제약을 최종 방어선으로 삼아, 재시도·더블클릭에도 주문이 정확히 한 번만 생성되도록 설계",
      "Saga 보상 트랜잭션을 직접 만들어 부분 보상·격리성 붕괴 한계를 확인한 뒤, Outbox + 이벤트 기반 정산으로 재설계",
    ],
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA", "QueryDSL", "MySQL", "k6", "JFR", "p6spy"],
    links: [
      { label: "Backend", href: "https://github.com/BonuKoo/BookStore" },
      { label: "Frontend", href: "https://github.com/BonuKoo/BookStore_frontend" },
    ],
  },
  {
    id: "core-mq",
    title: "core-mq — 물리 PC 3대 분산 메시지 파이프라인",
    period: "2026.07 - 2026.08",
    summary:
      "결제 확정 이벤트를 정산·원장·알림 워커로 확장한 분산 파이프라인. 학습을 위해 Docker Compose 대신 실제 물리 PC 3대로 환경을 구성해 인프라 이슈까지 겪어보는 것을 목표로 했습니다.",
    bullets: [
      "이중 쓰기 문제를 Transactional Outbox 로 차단 — 발행 전 DB 에 먼저 기록하고 실패 시 자동 재발행",
      "한 메시지가 5만 회 넘게 재전달된 사고를 겪고, Manual ACK + DLQ 로 실패 즉시 격리하도록 정책 변경",
      "멱등 컨슈머의 되돌릴 범위를 도메인별로 다르게 설계 (정산은 판매자 단위, 원장은 항목 단위)",
      "브로커 강제 차단·컨슈머 다운 장애를 주입해 유실 0건과 자동 복구를 확인",
      "k6 부하 실험으로 커넥션 풀 한계를 발견 (동시 20건에서 성공률 0.33%) — 기능 테스트만으로는 안 보이는 한계를 확인",
    ],
    stack: ["Java 21", "Spring AMQP", "RabbitMQ", "Transactional Outbox", "DLQ", "MySQL", "k6"],
    links: [
      { label: "settlement", href: "https://github.com/BonuKoo/BookStore_settlement" },
      { label: "ledger", href: "https://github.com/BonuKoo/BookStore_ledger" },
      { label: "notify", href: "https://github.com/BonuKoo/BookStore_Slack" },
    ],
  },
  {
    id: "myerp",
    title: "myerp — 건축자재 도소매 ERP",
    period: "2026.08",
    summary:
      "거래처·재고·매입·매출 전표를 다루는 간이 ERP. 계층별 TDD 로 개발했고, 매출 전표의 재고 동시 차감을 낙관적/비관적 락 두 가지로 직접 구현해 비교했습니다.",
    bullets: [
      "인증(JWT)부터 매입·매출 전표, 인사 도메인까지 백엔드·프론트를 모두 완결",
      "재고 차감에 낙관적/비관적 락 두 전략을 전략 패턴으로 분리 구현",
      "동시성 통합 테스트(ExecutorService)로 실제 MySQL 데드락을 발견하고 원인을 규명해 수정",
      "전표 등록/취소를 재고 증감 + 이력 기록까지 하나의 트랜잭션으로 묶어 부분 반영을 차단",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Security", "MyBatis", "MySQL", "React"],
    links: [{ label: "GitHub", href: "https://github.com/BonuKoo/MyERP" }],
  },
  {
    id: "myerp-spring",
    title: "myerp-spring — Spring Boot → Spring Framework / WAR 이관",
    period: "2026.08",
    summary:
      "같은 ERP 를 Spring Boot 없이 순수 Spring Framework + Maven + WAR 로 이관해 WildFly 에 배포했습니다. Boot 가 대신 해주던 일을 하나씩 직접 채우며 확인했습니다.",
    bullets: [
      "테스트 416개 전부 통과, WildFly 41 실제 배포·기동까지 검증",
      "requestMatchers 가 같은 컨텍스트의 mvcHandlerMappingIntrospector 를 요구한다는 점 때문에, 컨텍스트를 나누지 않고 단일 컨텍스트로 재구성",
      "@EnableTransactionManagement(proxyTargetClass = true) 등 Boot 의 자동 설정을 직접 채움",
      "프론트엔드 전 화면을 바닐라 JS 로 재작성",
    ],
    stack: ["Java 17", "Spring Framework 6", "MyBatis", "Maven", "WildFly", "Vanilla JS"],
    links: [],
  },
  {
    id: "mylogger",
    title: "MyLoggingLibrary — 응답 코드별 로그 수집 스타터",
    period: "2026.08",
    summary:
      "HTTP 응답을 2XX/3XX/4XX/5XX 로 분류해 수집하고, 필요에 따라 Elasticsearch + Kibana 로 시각화하는 Spring Boot 스타터입니다.",
    bullets: [
      "자동 설정(AutoConfiguration)으로 의존성 추가만으로 동작하도록 구성",
      "요청·응답 본문에서 민감 정보를 마스킹한 뒤 기록하도록 기본값 설계",
      "Gradle + YAML 기반으로 포팅하며 Spring Boot 3 → 4 에서 깨지는 지점을 정리",
    ],
    stack: ["Java", "Spring Boot Starter", "Gradle", "Elasticsearch", "Kibana"],
    links: [{ label: "GitHub", href: "https://github.com/BonuKoo/MyLoggingLibrary" }],
  },
];
