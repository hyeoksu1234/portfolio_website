# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev    # 로컬 개발 서버 실행 (http://localhost:5173)
npm start      # npm run dev와 동일
```

Python 내장 HTTP 서버를 사용하므로 Python 3가 설치되어 있어야 함.

## 아키텍처

빌드 과정이나 프레임워크 없이 순수 HTML/CSS/JS로 구성된 정적 포트폴리오 웹사이트.

### 페이지 구조
- **index.html** - 홈페이지 (애니메이션 히어로 섹션, 스킬 시각화, 사진 섹션)
- **projects.html** - 프로젝트 갤러리 (카테고리 필터링: Design, Development, PD)
- **about.html** - 소개 페이지
- **design/*.html** - 개별 프로젝트 상세 페이지 (11개 프로젝트)

### CSS 구성
- **styles.css** - 홈페이지 (index.html)
- **styles2.css** - 프로젝트 페이지
- **styles3.css** - 소개 페이지
- **styles-detail.css** - 프로젝트 상세 페이지

### JavaScript
- **sketch.js** - 홈페이지 인터랙션: 햄버거 메뉴, 모바일 글자 간격 애니메이션, 스킬 도트 시각화
- **sketch2.js** - 프로젝트 페이지: 햄버거 메뉴, 카테고리 필터링 및 그룹화된 "All" 뷰

### 외부 의존성
- p5.js (v1.4.2, CDN) - 포함되어 있으나 캔버스 기능은 현재 미사용

### 프로젝트 카테고리
`data-category` 속성으로 분류: `design`, `dev`, `pd`. "All" 뷰에서는 Design → Development → PD 순서로 그룹화하여 표시.
