"""
Generate professional PDF resume for 강재연 (Jaeyeon Kang)
- 역량 강조형 + Critical Path 원칙 적용
- 1순위: 이름/타이틀/핵심 수치 (15초 티저)
- 2순위: 핵심 역량(Skills) + 경력 + 프로젝트
- 3순위: 학력
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ── Fonts ──
pdfmetrics.registerFont(TTFont("Malgun", "C:/Windows/Fonts/malgun.ttf"))
pdfmetrics.registerFont(TTFont("MalgunBold", "C:/Windows/Fonts/malgunbd.ttf"))

# ── Colors ──
BLACK = HexColor("#1e293b")
DARK = HexColor("#334155")
MID = HexColor("#64748b")
LIGHT = HexColor("#94a3b8")
ACCENT = HexColor("#2563eb")
ACCENT_LIGHT = HexColor("#dbeafe")
LINE = HexColor("#e2e8f0")
BG_HEADER = HexColor("#f8fafc")
WHITE = HexColor("#ffffff")

# ── Page Setup ──
WIDTH, HEIGHT = A4
MARGIN_L = 22 * mm
MARGIN_R = 22 * mm
MARGIN_T = 18 * mm
MARGIN_B = 15 * mm
CONTENT_W = WIDTH - MARGIN_L - MARGIN_R


def draw_wrapped_text(c, text, x, y, font, size, color, max_width, leading=None):
    """Draw text with character-level wrapping, return new y position."""
    if leading is None:
        leading = size * 1.5
    c.setFont(font, size)
    c.setFillColor(color)

    lines = []
    current_line = ""
    for char in text:
        test = current_line + char
        if c.stringWidth(test, font, size) > max_width:
            lines.append(current_line)
            current_line = char
        else:
            current_line = test
    if current_line:
        lines.append(current_line)

    for line in lines:
        if y < MARGIN_B + 8 * mm:
            c.showPage()
            y = HEIGHT - MARGIN_T
        c.setFont(font, size)
        c.setFillColor(color)
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_bullet(c, text, x, y, max_width):
    """Draw a bullet point item with blue dot."""
    c.setFillColor(ACCENT)
    c.circle(x + 2, y + 2, 1.3, fill=1, stroke=0)
    y = draw_wrapped_text(c, text, x + 8, y, "Malgun", 8, DARK, max_width - 8, leading=12)
    return y


def draw_section_header(c, title, y):
    """Draw a section header with accent underline."""
    y = check_page(c, y, 22)
    y -= 4
    c.setFont("MalgunBold", 12)
    c.setFillColor(BLACK)
    c.drawString(MARGIN_L, y, title)
    y -= 4
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.5)
    c.line(MARGIN_L, y, MARGIN_L + 28, y)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(MARGIN_L + 28, y, WIDTH - MARGIN_R, y)
    y -= 12
    return y


def check_page(c, y, needed=25):
    """Check if we need a new page."""
    if y < MARGIN_B + needed:
        c.showPage()
        return HEIGHT - MARGIN_T
    return y


def generate():
    c = canvas.Canvas("resume_kangjy.pdf", pagesize=A4)
    c.setTitle("강재연 이력서 - Frontend & AI Product Engineer")
    c.setAuthor("강재연 Jaeyeon Kang")

    y = HEIGHT - MARGIN_T

    # ═══════════════════════════════════════════════
    # 1순위: HEADER — 15초 티저 영역
    # ═══════════════════════════════════════════════

    # Header background box
    header_top = y + 10
    header_bottom = y - 78
    c.setFillColor(BG_HEADER)
    c.rect(0, header_bottom, WIDTH, header_top - header_bottom, fill=1, stroke=0)

    # Name
    c.setFont("MalgunBold", 26)
    c.setFillColor(BLACK)
    c.drawString(MARGIN_L, y, "강재연")

    # Contact info (right-aligned)
    c.setFont("Malgun", 8.5)
    c.setFillColor(MID)
    c.drawRightString(WIDTH - MARGIN_R, y + 6, "bellaglittery@gmail.com")
    c.drawRightString(WIDTH - MARGIN_R, y - 6, "010-7560-1791")
    c.drawRightString(WIDTH - MARGIN_R, y - 18, "github.com/Jaeyeon-Kang")
    y -= 16

    # Title
    c.setFont("MalgunBold", 11)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN_L, y, "Frontend Engineer  |  AI Product Engineer")
    y -= 14

    # Tagline
    c.setFont("Malgun", 8)
    c.setFillColor(LIGHT)
    c.drawString(MARGIN_L, y, "thisiscodingblog.tistory.com  /  medium.com/@mirrorloop")
    y -= 18

    # ── Key Metrics Bar (Critical Path 핵심 수치) ──
    metrics = [
        ("4+", "년 경력"),
        ("10+", "프로젝트"),
        ("22K", "Lines 트레이딩"),
        ("Zenodo", "연구 등재"),
    ]
    metric_w = CONTENT_W / len(metrics)
    mx = MARGIN_L
    for num, label in metrics:
        # Metric number
        c.setFont("MalgunBold", 14)
        c.setFillColor(ACCENT)
        nw = c.stringWidth(num, "MalgunBold", 14)
        c.drawString(mx, y, num)
        # Metric label
        c.setFont("Malgun", 7.5)
        c.setFillColor(MID)
        c.drawString(mx + nw + 3, y + 1, label)
        mx += metric_w

    y -= 14
    # Header bottom line
    c.setStrokeColor(BLACK)
    c.setLineWidth(0.8)
    c.line(MARGIN_L, y, WIDTH - MARGIN_R, y)
    y -= 14

    # ── Quote ──
    quote = '"복잡한 비즈니스를 직관적인 인터페이스로, AI를 실제 제품으로"'
    c.setFont("MalgunBold", 9)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN_L, y, quote)
    y -= 14

    # About (compact 2-line)
    about_1 = "Next.js 기반 MICE 플랫폼과 스마트관광 웹앱을 설계·개발하며, 하이브리드 지도 시스템·실시간 데이터 동기화 등 기술 난제를 해결해온 프론트엔드 엔지니어입니다."
    y = draw_wrapped_text(c, about_1, MARGIN_L, y, "Malgun", 8.5, DARK, CONTENT_W, leading=12.5)
    about_2 = "RAG 챗봇, 알고리즘 트레이딩(2.2만 라인), AI 페르소나 연구(Zenodo 등재)까지 — 프론트엔드를 넘어 AI를 실제 서비스로 구현하는 데 집중하고 있습니다."
    y = draw_wrapped_text(c, about_2, MARGIN_L, y, "Malgun", 8.5, DARK, CONTENT_W, leading=12.5)
    y -= 6

    # ═══════════════════════════════════════════════
    # 2순위-A: SKILLS (역량 강조형 — 상단 배치)
    # ═══════════════════════════════════════════════
    y = draw_section_header(c, "Skills", y)

    skills = [
        ("Frontend", "React.js, Next.js, TypeScript, HTML/CSS, Tailwind CSS, Zustand, React Query"),
        ("Backend & Infra", "Node.js, Python/FastAPI, MySQL/PostgreSQL, Docker, GitLab CI/CD"),
        ("Desktop & Tools", "Electron.js, Git, Figma"),
        ("AI & Data", "OpenAI/Gemini API, RAG/Vector Search, Prompt Engineering"),
    ]

    col_w = CONTENT_W / 2 - 6
    col1_x = MARGIN_L
    col2_x = MARGIN_L + CONTENT_W / 2 + 6

    # Row 1: Frontend + Backend & Infra
    row_y = y
    for i, (cat, items) in enumerate(skills[:2]):
        x = col1_x if i == 0 else col2_x
        c.setFont("MalgunBold", 8)
        c.setFillColor(ACCENT)
        c.drawString(x, row_y, cat)
        draw_wrapped_text(c, items, x, row_y - 11, "Malgun", 7.5, DARK, col_w, leading=11)

    y = row_y - 36

    # Row 2: Desktop & Tools + AI & Data
    row_y = y
    for i, (cat, items) in enumerate(skills[2:]):
        x = col1_x if i == 0 else col2_x
        c.setFont("MalgunBold", 8)
        c.setFillColor(ACCENT)
        c.drawString(x, row_y, cat)
        draw_wrapped_text(c, items, x, row_y - 11, "Malgun", 7.5, DARK, col_w, leading=11)

    y = row_y - 28

    # ═══════════════════════════════════════════════
    # 2순위-B: CAREER
    # ═══════════════════════════════════════════════
    y = draw_section_header(c, "Career", y)

    careers = [
        {
            "period": "2024.11 - 현재",
            "company": "이즈피엠피 (EZPMP)",
            "position": "Senior Frontend Developer",
            "desc": "스마트관광 웹앱(인제군)과 MICE 행사 플랫폼(O2MEET)의 프론트엔드 설계·개발, 레거시 시스템 Next.js 마이그레이션 주도",
        },
        {
            "period": "2022.03 - 2024.11",
            "company": "아우라네트웍",
            "position": "Frontend Developer",
            "desc": "콜센터 인프라(CTI, 통계, 소프트폰) 및 Electron 기반 데스크탑 앱(메신저, 소프트폰) 프론트엔드 개발",
        },
    ]

    for career in careers:
        y = check_page(c, y, 28)
        c.setFont("MalgunBold", 9.5)
        c.setFillColor(BLACK)
        c.drawString(MARGIN_L, y, career["company"])
        c.setFont("Malgun", 8)
        c.setFillColor(ACCENT)
        c.drawRightString(WIDTH - MARGIN_R, y, career["period"])
        y -= 12
        c.setFont("Malgun", 8)
        c.setFillColor(MID)
        c.drawString(MARGIN_L, y, career["position"])
        y -= 12
        y = draw_wrapped_text(c, career["desc"], MARGIN_L, y, "Malgun", 8, DARK, CONTENT_W, leading=11.5)
        y -= 8

    # ═══════════════════════════════════════════════
    # 2순위-C: PROJECTS — 실무
    # ═══════════════════════════════════════════════
    y = draw_section_header(c, "Projects  — 실무", y)

    work_projects = [
        {
            "title": "인제군 스마트관광 웹앱",
            "period": "2024.11 - 현재",
            "desc": "모바일 중심 레거시 관광 앱을 PC/모바일 대응 Next.js 웹앱으로 전면 재설계",
            "achievements": [
                "Next.js(App Router) + TypeScript 기반 아키텍처 설계부터 배포까지 전 과정 주도",
                "네이버 지도 SDK + Tmap API 결합 하이브리드 지도/길찾기 시스템 구현",
                "PC/Mobile View 컴포넌트 아키텍처 완전 분리, 플랫폼별 최적화 UX",
                "React Query·Zustand 서버 상태 구조화 + 디바운스·메모이제이션 성능 최적화",
            ],
            "tech": "Next.js, TypeScript, React Query, Zustand, Naver Map SDK, Tmap API",
        },
        {
            "title": "오투미트(O2MEET) MICE 행사 플랫폼",
            "period": "2024.11 - 현재",
            "desc": "행사 운영사(BO)/참가자(FO)용 MICE 통합 플랫폼",
            "achievements": [
                "BO 설정을 FO 웹사이트로 렌더링하는 파이프라인 구현, 행사별 템플릿 커스터마이징",
                "입장권 판매·예매·정산 흐름 구현, MyBatis + SQL 기반 트랜잭션 로직",
            ],
            "tech": "JavaScript, HTML/CSS, MyBatis, MySQL, PG Payment API",
        },
        {
            "title": "사내 채팅 어플리케이션",
            "period": "2023.09 - 2023.12",
            "desc": "고객사 대상 데스크탑 채팅 솔루션",
            "achievements": [
                "Electron 크로스 플랫폼 채팅 앱 — 아키텍처 설계, WebSocket 실시간 통신, 배포까지 일괄 담당",
            ],
            "tech": "Electron.js, React.js, WebSocket",
        },
        {
            "title": "유화증권 소프트폰 구축",
            "period": "2023.06 - 2023.08",
            "desc": "금융권 폰패드 인증 시스템 데스크탑 앱",
            "achievements": [
                "파워빌더 시스템 연동 Electron 폰패드 인증 앱 (ARS 암호화, 시스템 트레이, 자동실행)",
            ],
            "tech": "Electron.js, Node.js",
        },
        {
            "title": "CTI 콜센터 관리자 페이지",
            "period": "2022.03 - 2024.11",
            "desc": "엔터프라이즈 콜센터 솔루션 웹 관리자 페이지",
            "achievements": [
                "Spring MVC 리팩토링 유지보수성 30% 개선, Kendo UI 그리드 최적화 및 신규 기능 20+ 개발",
            ],
            "tech": "JavaScript, Spring, MySQL",
        },
    ]

    for proj in work_projects:
        y = check_page(c, y, 38)
        c.setFont("MalgunBold", 9)
        c.setFillColor(BLACK)
        c.drawString(MARGIN_L, y, proj["title"])
        c.setFont("Malgun", 7.5)
        c.setFillColor(ACCENT)
        c.drawRightString(WIDTH - MARGIN_R, y, proj["period"])
        y -= 11
        y = draw_wrapped_text(c, proj["desc"], MARGIN_L, y, "Malgun", 8, MID, CONTENT_W, leading=11)
        y -= 2
        for ach in proj["achievements"]:
            y = check_page(c, y, 15)
            y = draw_bullet(c, ach, MARGIN_L + 2, y, CONTENT_W - 2)
        y -= 1
        c.setFont("Malgun", 7)
        c.setFillColor(LIGHT)
        c.drawString(MARGIN_L, y, proj["tech"])
        y -= 12

    # ═══════════════════════════════════════════════
    # PROJECTS — 사이드
    # ═══════════════════════════════════════════════
    y = check_page(c, y, 40)
    y = draw_section_header(c, "Projects  — 사이드", y)

    side_projects = [
        {
            "title": "4J - 행사장 수용인원 자동계산",
            "period": "2026.01",
            "desc": "AI 기반 행사장 수용인원 자동 계산 및 실시간 혼잡도 모니터링",
            "achievements": [
                "Google Gemini AI 도면 분석 — 부스/출입구/면적 자동 추정 및 유형별 수용인원 계산",
                "5단계 혼잡도 시각화 + 경고 알림 실시간 모니터링 시스템",
            ],
            "tech": "Google Gemini AI, Next.js, TypeScript, Material UI",
        },
        {
            "title": "AI 기반 알고리즘 트레이딩 시스템",
            "period": "2024.06 - 현재",
            "desc": "2.2만 라인 규모의 풀스택 알고리즘 트레이딩 시스템",
            "achievements": [
                "NumPy 벡터화 백테스팅 속도 100x 개선, Redis 캐싱 API 비용 60% 절감",
                "Docker Compose 12개 마이크로서비스 오케스트레이션 + Health Check 자가치유",
                "3.5년 시뮬레이션: CAGR 48.4%, Max DD -32.6%",
            ],
            "tech": "Python, FastAPI, Celery, Docker, Redis, PostgreSQL, OpenAI API",
        },
        {
            "title": "VectorMind — AI 문서 검색 챗봇 (RAG)",
            "period": "2025.01 - 현재",
            "desc": "PDF/DOCX/TXT 문서 기반 RAG 챗봇",
            "achievements": [
                "SSE 기반 스트리밍 답변 UX + 파라미터 튜닝 패널 구현",
                "90개 파라미터 Grid Search 최적 설정 도출, 토큰 비용 47% 절감",
            ],
            "tech": "Next.js, React, TypeScript, Tailwind CSS, OpenAI API",
        },
    ]

    for proj in side_projects:
        y = check_page(c, y, 35)
        c.setFont("MalgunBold", 9)
        c.setFillColor(BLACK)
        c.drawString(MARGIN_L, y, proj["title"])
        c.setFont("Malgun", 7.5)
        c.setFillColor(ACCENT)
        c.drawRightString(WIDTH - MARGIN_R, y, proj["period"])
        y -= 11
        y = draw_wrapped_text(c, proj["desc"], MARGIN_L, y, "Malgun", 8, MID, CONTENT_W, leading=11)
        y -= 2
        for ach in proj["achievements"]:
            y = check_page(c, y, 15)
            y = draw_bullet(c, ach, MARGIN_L + 2, y, CONTENT_W - 2)
        y -= 1
        c.setFont("Malgun", 7)
        c.setFillColor(LIGHT)
        c.drawString(MARGIN_L, y, proj["tech"])
        y -= 12

    # ═══════════════════════════════════════════════
    # RESEARCH
    # ═══════════════════════════════════════════════
    y = check_page(c, y, 35)
    y = draw_section_header(c, "Research & Publications", y)

    c.setFont("MalgunBold", 9)
    c.setFillColor(BLACK)
    c.drawString(MARGIN_L, y, "GPT Recursive Persona Experiment: Convergent Simulacra")
    c.setFont("Malgun", 7.5)
    c.setFillColor(ACCENT)
    c.drawRightString(WIDTH - MARGIN_R, y, "2025.04")
    y -= 11
    y = draw_wrapped_text(c, "GPT-4 재귀적 프롬프팅을 통한 AI 페르소나 수렴 현상 실험 연구 (Zenodo 등재)", MARGIN_L, y, "Malgun", 8, MID, CONTENT_W, leading=11)
    y -= 2

    research_ach = [
        "다중 페르소나 구조화 대화로 AI 자아가 '수렴된 시뮬라크르'임을 증명",
        "Python 자동화 재귀 대화 스크립트 + 정서적 스캐폴딩 프롬프트 엔지니어링 설계",
        "Zenodo 등재 + 오픈소스(MirrorLoop) 공개  |  DOI: 10.5281/zenodo.15236400",
    ]
    for ach in research_ach:
        y = check_page(c, y, 15)
        y = draw_bullet(c, ach, MARGIN_L + 2, y, CONTENT_W - 2)
    y -= 4

    # ═══════════════════════════════════════════════
    # 3순위: EDUCATION
    # ═══════════════════════════════════════════════
    y = check_page(c, y, 45)
    y = draw_section_header(c, "Education", y)

    educations = [
        ("2024.08 - 2024.10", "구글 스터디잼", "Gemini x GCP 생성형 AI 과정 — GCP 스킬 뱃지 8개 획득"),
        ("2021.11 - 2022.02", "코드캠프 4기", "프론트엔드 개발 과정 수료 — React 기반 팀 프로젝트"),
        ("2018.08 - 2020.07", "CUNY Hunter College", "Film & Media 전공 (2년 수료)"),
        ("2013.03 - 2017.02", "국민대학교", "한국역사학과 졸업"),
    ]

    for period, school, desc in educations:
        y = check_page(c, y, 15)
        c.setFont("MalgunBold", 8.5)
        c.setFillColor(BLACK)
        c.drawString(MARGIN_L, y, school)
        c.setFont("Malgun", 7.5)
        c.setFillColor(ACCENT)
        c.drawRightString(WIDTH - MARGIN_R, y, period)
        y -= 10
        y = draw_wrapped_text(c, desc, MARGIN_L, y, "Malgun", 7.5, MID, CONTENT_W, leading=10)
        y -= 5

    # ── Save ──
    c.save()
    print("PDF generated: resume_kangjy.pdf")


if __name__ == "__main__":
    generate()
