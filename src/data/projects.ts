export type Project = {
  id: string;
  title: string;
  summary: string;
  image?: string; // public/ 기준 경로. 없으면 "사진 준비 중" 플레이스홀더 표시
  period?: string[]; // 제작 기간 — 여러 차수로 나뉘면 항목을 추가
  headcount?: string; // 제작 인원
  stack?: string[]; // 기술 스택
  github?: string;
  detail?: ProjectDetail; // 상세 페이지 본문. 없으면 summary 만 보여주는 기본 템플릿 사용
};

export type DetailItem = string | { text: string; sub: string[] };

export type DetailSection = {
  heading: string;
  items: DetailItem[];
  images?: { src: string; caption: string }[];
};

export type ProjectDetail = {
  overview: string;
  note?: string;
  sections: DetailSection[];
};

// TODO: core-mq, myerp, myerp-spring, MyLoggingLibrary 도 정리되는 대로 이 형식으로 추가
export const projects: Project[] = [
  {
    id: "bonapetit",
    title: "Bonapetit",
    summary: "근처에 사는 사람들끼리 간단하게 소모임을 만들 수 있는 커뮤니케이션 서비스입니다.",
    image: "/projects/bonapetit.png",
    period: ["2024.09 - 2024.10"],
    headcount: "3인",
    github: "https://github.com/BonuKoo/Bonapetit",
    detail: {
      overview:
        "근처에 사는 사람들끼리 간단하게 소모임을 만들 수 있는 커뮤니케이션 서비스입니다.",
      note: "기능별 상세 설명은 정리되는 대로 추가할 예정입니다.",
      sections: [
        {
          heading: "기술 스택",
          items: [
            { text: "프론트엔드", sub: ["HTML, JavaScript, Thymeleaf, Vue, Bootstrap"] },
            { text: "백엔드", sub: ["Java, Spring Boot, Spring Data JPA, MyBatis"] },
            { text: "데이터베이스", sub: ["MySQL, Redis"] },
            { text: "기타", sub: ["OAuth2 (Kakao/Naver/Google), WebSocket"] },
            { text: "인프라", sub: ["AWS, Jenkins"] },
          ],
        },
      ],
    },
  },
  {
    id: "bookstore",
    title: "BookStore",
    summary: "도서 판매 e-commerce 주제 프로젝트입니다.",
    image: "/projects/bookstore/book-list.png",
    period: ["2024.07 - 2024.08", "2025.08 - 2025.09"],
    headcount: "1인",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA", "QueryDSL", "MySQL"],
    github: "https://github.com/BonuKoo/BookStore",
    detail: {
      overview:
        "Spring Boot 기반 온라인 서점(이커머스) 프로젝트입니다. 구현된 기능은 크게 8개 영역으로 나뉩니다.",
      note: "아래 화면은 HTML/CSS 등 바닐라 JS 및 Thymeleaf로 작업한 프론트엔드입니다.",
      sections: [
        {
          heading: "1. 회원 / 인증",
          items: [
            "회원가입: 아이디 중복확인(팝업), 우편번호 검색(다음 API), 프로필/주소 입력",
            "로그인: 폼 로그인과 REST(JSON) 로그인 두 방식 모두 지원 (`LoginController`, `RestApiController`)",
            "프로필: 조회, 수정, 회원 탈퇴",
          ],
          images: [
            { src: "/projects/bookstore/id-duplicate-check.png", caption: "아이디 중복 확인" },
            { src: "/projects/bookstore/available.png", caption: "사용 가능 아이디" },
            { src: "/projects/bookstore/username-length.png", caption: "아이디 길이 검증" },
            { src: "/projects/bookstore/password.png", caption: "비밀번호 검증" },
            { src: "/projects/bookstore/password-mismatch.png", caption: "비밀번호 불일치 검증" },
            { src: "/projects/bookstore/postal-code.png", caption: "우편번호 검색 (다음 API)" },
          ],
        },
        {
          heading: "2. 관리자 / 권한 관리",
          items: [
            {
              text: "Spring Security 기반이지만 권한 체계를 DB로 동적 관리하는 구조가 특징",
              sub: [
                "`Role`, `RoleHierarchy`(ROLE_ADMIN > ROLE_MANAGER > ROLE_USER 상속 구조), `Resources`(URL별 필요 권한)를 DB에 저장하고 애플리케이션 시작 시 `SetupDataLoader`가 초기 데이터를 심음",
                "관리자 페이지에서 역할·URL 리소스·권한 매핑을 코드 재배포 없이 등록/수정 가능 (`RoleController`, `ResourcesController`)",
              ],
            },
            "회원 관리, 관리자 대시보드 제공 (`UserManagementController`, `AdminDashboardController`)",
          ],
        },
        {
          heading: "3. 게시판",
          items: [
            "글 CRUD, 파일 첨부(이미지 미리보기·첨부파일 다운로드), 댓글 CRUD (`BoardController`, `ReplyController`)",
          ],
        },
        {
          heading: "4. 도서 검색",
          items: [
            "카카오 도서 검색 API로 목록/상세 조회 (`/search-books`, `/bookDetail`) — 원래 네이버 API를 썼으나 2026-07-31 서비스 종료로 최근 전환",
            "네이버 구현은 참고용으로 보존(비활성), 알라딘 Open API는 장애 대비 예비 구현으로 준비됨",
          ],
          images: [
            { src: "/projects/bookstore/book-list.png", caption: "도서 목록" },
            { src: "/projects/bookstore/book-detail.png", caption: "도서 상세" },
          ],
        },
        {
          heading: "5. 장바구니 — 두 가지 구현이 공존",
          items: [
            "RDB 기반(`CartController`, `CartService`): 일반적인 장바구니 담기/조회",
            "Redis 기반(`RedisCartController`, `RedisCartService`): 사용자별 해시로 장바구니를 Redis에 저장해 빠른 담기/수정/삭제 처리",
            "동기화 스케줄러(`CartSyncScheduler`): 9분마다 Redis에 쌓인 장바구니를 스캔해 DB로 반영",
          ],
        },
        {
          heading: "6. 주문 / 결제",
          items: [
            "주문서 작성 → 제출, 총 금액 계산 (`OrderController`, `RestOrderController`)",
            "토스페이먼츠 연동: 체크아웃 → 결제 승인(`TossPaymentController#confirm`) → 성공/실패 페이지, Feign 클라이언트로 토스 API 호출",
          ],
        },
        {
          heading: "7. 재고 동시성 제어",
          items: [
            "`LettuceLockStockFacade` + `RedisLockRepository`: 여러 사용자가 동시에 같은 책을 주문할 때 Redis 분산 락으로 재고 차감을 직렬화 (spin-lock 방식, 락 획득까지 100ms 간격 재시도)",
          ],
        },
        {
          heading: "8. 인프라 / 모니터링",
          items: [
            "Actuator + Micrometer/Prometheus로 메트릭 노출",
            "p6spy로 SQL 쿼리 로깅",
            "Spring Cloud OpenFeign으로 카카오/토스 등 외부 API를 선언적으로 연동",
          ],
        },
      ],
    },
  },
];
