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

export type DetailGroup = { label: string; items: DetailItem[] };

export type DetailSection = {
  heading: string;
  items?: DetailItem[]; // 단순 목록
  groups?: DetailGroup[]; // 문제 인식/해결 과정/결과 처럼 소제목이 있는 묶음(케이스 스터디용)
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
        "근처에 사는 사람들끼리 간단하게 소모임을 만들 수 있는 커뮤니케이션 서비스입니다. 사용자는 Kakao, Naver, Google 계정으로 간편하게 로그인할 수 있습니다.",
      note: "배포 페이지(bonappetit.pe.kr)는 현재 운영이 종료된 상태입니다.",
      sections: [
        {
          heading: "사용 방법",
          items: [
            "소셜 로그인을 통한 회원가입: 카카오, 네이버, 구글 계정을 사용해 간편하게 회원가입을 할 수 있습니다.",
            "팀 생성 또는 가입: 새로운 팀을 생성하거나, 지역 기반으로 다른 팀을 검색하여 가입할 수 있습니다.",
            "가입된 팀 리스트 및 개설한 팀 리스트 조회: 프로필 조회로 가입된 팀 리스트를 확인합니다.",
            "실시간 채팅방 기능",
          ],
          images: [
            { src: "/projects/bonapetit.png", caption: "1. 소셜 로그인 / 회원가입" },
            { src: "/projects/bonapetit/team-create-join.png", caption: "2. 팀 생성 또는 가입" },
            { src: "/projects/bonapetit/team-list.png", caption: "3. 가입·개설한 팀 리스트 조회" },
            { src: "/projects/bonapetit/chat.png", caption: "4. 실시간 채팅방" },
          ],
        },
        {
          heading: "기능",
          items: [
            { text: "프로필 관리", sub: ["회원가입", "로그인", "정보수정 (닉네임)"] },
            { text: "실시간 채팅", sub: ["입장 시 알람", "실시간 전송", "실시간 수신", "퇴장"] },
            { text: "Team", sub: ["모임 형성", "모임 가입", "모임 강퇴", "모임 탈퇴"] },
            { text: "공지사항", sub: ["공지사항 조회", "공지사항 수정", "공지사항 삭제"] },
          ],
        },
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
        {
          heading: "담당 구현 기능",
          items: [
            "실시간 채팅 — STOMP over WebSocket + Redis Pub/Sub 기반 다중 서버 메시지 브로커 설계",
            "WebSocket 다중 서버 확장 — SockJS 연결 불안정을 Nginx Sticky Session으로 안정화",
            "JPA/MyBatis 분리 — 단일 DataSource 위에서 도메인별로 JPA와 MyBatis를 나눠 적용",
            {
              text: "Redis 기반 Session 통합으로 인스턴스 간 Session 일관성을 확보",
              sub: [
                "인스턴스가 여러 개 운영되면서 발생할 수 있는 Session 불일치 문제를 해결하기 위해, Redis의 Session을 공통 인스턴스에서 관리하도록 구성했습니다.",
              ],
            },
          ],
        },
        {
          heading: "DevOps",
          items: [
            "Jenkins를 활용한 배포 자동화 파이프라인 설정",
            { text: "AWS EC2를 활용한 서버 배포", sub: ["성능 개선을 위한 Scale-out"] },
          ],
        },
        {
          heading: "협업",
          items: [
            "Github Flow를 도입했습니다.",
            {
              text: "Git Message Convention을 형성하고 준수했습니다.",
              sub: [
                "특정 날짜, 메서드를 기입해서 병합 과정에서 오류 발생 시 오류 원인을 파악하기 쉽도록 설계했습니다.",
              ],
            },
          ],
        },
        {
          heading: "2-1. 다중 서버 환경 실시간 채팅 — WebSocket 수평 확장",
          groups: [
            {
              label: "문제 인식",
              items: [
                {
                  text: "서버를 다중 인스턴스로 확장하자, 같은 채팅방 사용자라도 서로 다른 인스턴스에 접속해 있으면 메시지가 도달하지 않는 문제가 발생했습니다.",
                  sub: [
                    "SimpleBroker는 인스턴스 로컬 세션에만 메시지를 전달하는 구조",
                    "SockJS의 HTTP 폴백 요청이 여러 인스턴스 간 분산되며 세션 어피니티가 깨져, 연결이 반복적으로 끊김",
                  ],
                },
              ],
            },
            {
              label: "해결 과정",
              items: [
                {
                  text: "메시지 계층: Redis Pub/Sub 도입",
                  sub: [
                    "로컬 브로커 대신 Redis 채널에 발행하고, RedisMessageListenerContainer로 모든 인스턴스의 RedisSubscriber가 수신한 뒤 각자의 STOMP 구독자에게 전달",
                  ],
                },
                {
                  text: "연결 계층: Nginx Sticky Session 적용",
                  sub: ["동일 클라이언트를 항상 같은 인스턴스로 라우팅"],
                },
                {
                  text: "부가: 채팅방/세션 상태를 Redis Hash 구조로 공유",
                  sub: ["채팅방 목록, 세션과 방 매핑, 접속자 수를 저장해서 인스턴스 간 상태 불일치 제거"],
                },
              ],
            },
            {
              label: "결과",
              items: [
                "서버를 수평 확장해도 같은 채팅방의 모든 사용자가 접속 서버와 무관하게 메시지를 실시간으로 동일하게 수신",
                "SockJS 폴백 상황에서도 세션 어피니티가 유지되어 연결 유실 없이 채팅 지속",
                "세션·메시지·채팅 상태를 서버 메모리 대신 Redis로 분리하고, 메시지 브로드캐스트는 Pub/Sub으로 이전하여 인스턴스 추가만으로 수평 확장 가능한 구조를 확보했습니다.",
              ],
            },
          ],
        },
        {
          heading: "2-2. 도메인 특성에 따른 JPA 및 MyBatis 혼용 설계",
          groups: [
            {
              label: "배경",
              items: [
                {
                  text: "도메인별로 요구되는 데이터 접근 방식이 상반됐습니다.",
                  sub: [
                    "팀-계정 다대다 관계 조회 및 OAuth2 계정 동기화 → SQL을 직접 짜서 세밀하게 통제해야 함 → MyBatis가 유리",
                    "목록/검색 등 반복적인 CRUD → 개발 생산성과 연관관계 탐색 편의성이 중요 → JPA가 유리",
                  ],
                },
                "대안을 비교한 뒤, 하나의 DB에서 JPA와 MyBatis를 함께 쓰기로 선택 — 인프라를 복잡하게 만들지 않으면서 도메인별 최적 기술을 적용",
              ],
            },
            {
              label: "핵심 구현",
              items: [
                {
                  text: "하나의 DataSource 위에 두 기술을 함께 설정",
                  sub: ["JPA (EntityManagerFactory + JpaTransactionManager)", "MyBatis (SqlSessionFactory)"],
                },
                "`@EnableJpaRepositories` / `@MapperScan` 으로 두 기술을 패키지 단위로 분리",
              ],
            },
            {
              label: "결과",
              items: [
                "같은 DataSource를 공유해 두 기술의 작업이 하나의 트랜잭션 안에서 일관되게 처리됩니다.",
                "“데이터 접근 패턴과 통제 필요성에 따라 기술을 선택한다”는 기준을 확립했습니다.",
              ],
            },
          ],
        },
        {
          heading: "2-3. Redis 휘발성 문제 — Team 데이터 영속화",
          groups: [
            {
              label: "문제 인식",
              items: [
                "Team 정보를 Redis에 저장해 빠르게 조회했지만, 서버가 종료되면 메모리 기반인 Redis 데이터가 함께 휘발되는 문제가 있었습니다.",
              ],
            },
            {
              label: "해결 과정",
              items: [
                "관계형 데이터베이스에 동일한 구조를 함께 유지하도록 설계해, 서버가 재기동될 때 저장된 데이터를 Redis로 다시 불러오도록 변경했습니다.",
              ],
            },
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
