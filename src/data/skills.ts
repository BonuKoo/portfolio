export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Language",
    items: ["Java 17 / 21", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot 3",
      "Spring Framework 6",
      "Spring Security",
      "MyBatis",
      "JPA / Hibernate",
      "QueryDSL",
      "Gradle / Maven",
    ],
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "낙관적 / 비관적 락",
      "조건부 원자 UPDATE",
      "UNIQUE 제약 기반 멱등",
      "HikariCP",
    ],
  },
  {
    title: "Infra / Messaging",
    items: ["RabbitMQ", "Transactional Outbox", "DLQ", "Docker", "WildFly", "Vercel"],
  },
  {
    title: "Test / 관측",
    items: ["JUnit 5", "MockMvc", "Testcontainers 없는 실 DB 통합테스트", "k6", "JFR", "p6spy"],
  },
  {
    title: "Frontend",
    items: ["React 19", "Next.js", "Vite", "Tailwind CSS", "Vanilla JS"],
  },
];
