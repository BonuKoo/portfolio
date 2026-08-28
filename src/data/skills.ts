export type Skill = {
  label: string;
  color: string; // shields.io badge 배경색 (# 없이)
  logo?: string; // simple-icons 슬러그. 없으면 로고 없는 라벨 배지
  logoColor?: string; // 기본 white
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

const navy = "16233A";

export const skillGroups: SkillGroup[] = [
  {
    title: "사용하는 언어 및 프레임워크",
    items: [
      { label: "Java", color: "007396", logo: "openjdk" },
      { label: "Spring Boot", color: "6DB33F", logo: "springboot" },
      { label: "Spring Framework", color: "6DB33F", logo: "spring" },
      { label: "Spring Security", color: "6DB33F", logo: "spring" },
      { label: "Spring AMQP", color: "6DB33F", logo: "spring" },
      { label: "Hibernate", color: "59666C", logo: "hibernate" },
      { label: "JPA", color: navy },
      { label: "QueryDSL", color: navy },
      { label: "MyBatis", color: navy },
      { label: "React", color: "61DAFB", logo: "react", logoColor: "black" },
    ],
  },
  {
    title: "데이터베이스 · 메시징",
    items: [
      { label: "MySQL", color: "4479A1", logo: "mysql" },
      { label: "RabbitMQ", color: "FF6600", logo: "rabbitmq" },
    ],
  },
  {
    title: "테스트 · 관측",
    items: [
      { label: "k6", color: "7D64FF", logo: "k6" },
      { label: "JFR", color: navy },
      { label: "p6spy", color: navy },
    ],
  },
  {
    title: "개발 도구",
    items: [
      { label: "IntelliJ IDEA", color: "000000", logo: "intellijidea" },
      { label: "GitHub", color: "181717", logo: "github" },
      { label: "Docker", color: "2496ED", logo: "docker" },
      { label: "WildFly", color: navy },
      { label: "Vercel", color: "000000", logo: "vercel" },
    ],
  },
];
