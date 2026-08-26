export const profile = {
  // TODO: 아래 정보를 실제 정보로 교체하세요.
  name: "이름",
  location: "서울특별시",
  email: "evlogiaseio@gmail.com",
  github: "https://github.com/BonuKoo",
  githubHandle: "github.com/BonuKoo",

  headline: "측정하고 나서 결론 내리는 백엔드 개발자",
  intro:
    "자료로 읽은 정답을 그대로 쓰지 않고, 직접 만들어 실패해보고 수치로 확인한 뒤 선택합니다.",
} as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
