export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "사용하는 언어 및 프레임워크",
    items: [
      "Java 17 / 21",
      "Spring Boot 3",
      "Spring Framework 6",
      "Spring Security",
      "Spring AMQP",
      "JPA / Hibernate",
      "QueryDSL",
      "MyBatis",
      "TypeScript",
      "React 19",
    ],
  },
  {
    title: "데이터베이스 · 메시징",
    items: [
      "MySQL",
      "낙관적 / 비관적 락",
      "조건부 원자 UPDATE",
      "UNIQUE 제약 기반 멱등",
      "HikariCP",
      "RabbitMQ",
      "Transactional Outbox",
      "DLQ",
    ],
  },
  {
    title: "테스트 · 관측",
    items: ["JUnit 5", "MockMvc", "실 DB 통합 테스트", "k6", "JFR", "p6spy"],
  },
  {
    title: "개발 도구",
    items: ["IntelliJ", "Git / GitHub", "Gradle", "Maven", "Docker", "WildFly", "Vercel"],
  },
];
