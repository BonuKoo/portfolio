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
      { label: "JPA", color: navy },
      { label: "QueryDSL", color: navy },
      { label: "MyBatis", color: navy },
      { label: "React", color: "61DAFB", logo: "react", logoColor: "black" },
      { label: "HTML", color: "E34F26", logo: "html5" },
      { label: "CSS", color: "1572B6", logo: "css3" },
    ],
  },
  {
    title: "데이터베이스 · 메시징",
    items: [
      { label: "MySQL", color: "4479A1", logo: "mysql" },
      { label: "RabbitMQ", color: "FF6600", logo: "rabbitmq" },
      { label: "Redis", color: "DC382D", logo: "redis" },
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
      { label: "Jenkins", color: "D24939", logo: "jenkins" },
      { label: "AWS", color: "232F3E", logo: "amazonaws" },
    ],
  },
];
