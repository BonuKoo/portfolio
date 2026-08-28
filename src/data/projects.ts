export type Project = {
  id: string;
  title: string;
  summary: string;
  image?: string; // public/ 기준 경로. 없으면 "사진 준비 중" 플레이스홀더 표시
  period?: string; // 제작 기간
  headcount?: string; // 제작 인원
  stack?: string[]; // 기술 스택
  github?: string;
};

// TODO: core-mq, myerp, myerp-spring, MyLoggingLibrary 도 정리되는 대로 이 형식으로 추가
export const projects: Project[] = [
  {
    id: "bonapetit",
    title: "Bonapetit",
    summary: "근처에 사는 사람들끼리 간단하게 소모임을 만들 수 있는 커뮤니케이션 서비스입니다.",
    image: "/projects/bonapetit.png",
    period: "2024.09 - 2024.10",
    // TODO: 제작 인원 확인 후 채우기
    stack: [
      "HTML",
      "JavaScript",
      "Thymeleaf",
      "Vue",
      "Bootstrap",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MyBatis",
      "MySQL",
      "Redis",
      "OAuth2 (Kakao/Naver/Google)",
      "WebSocket",
      "AWS",
      "Jenkins",
    ],
    github: "https://github.com/BonuKoo/Bonapetit",
  },
  {
    id: "bookstore",
    title: "BookStore",
    summary: "도서 판매 e-commerce 주제 프로젝트입니다.",
    period: "2026.05 - 2026.08",
    headcount: "1인",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA", "QueryDSL", "MySQL"],
    github: "https://github.com/BonuKoo/BookStore",
  },
];
