# 3M 제품 분석 웹앱

모바일 카메라로 촬영한 사진에서 3M 제품을 자동으로 식별하고 SKU를 매칭하는 웹 애플리케이션입니다.

## 주요 기능

- 모바일 카메라를 통한 실시간 사진 촬영
- OpenAI Vision API를 활용한 3M 제품 자동 식별
- 150여 개의 3M 제품 데이터베이스와 SKU 자동 매칭
- 모바일 최적화된 반응형 UI

## 사용 방법

1. 웹 브라우저에서 `index.html` 파일을 열어주세요
2. "카메라 시작" 버튼을 눌러 카메라 권한을 허용하세요
3. 3M 제품이 잘 보이도록 카메라를 맞추고 "사진 촬영" 버튼을 누르세요
4. "제품 분석하기" 버튼을 눌러 AI 분석을 시작하세요
5. 분석 결과를 표 형태로 확인하세요

## 요구사항

- HTTPS 환경 (카메라 API 사용 시 필요)
- 모던 웹 브라우저 (Chrome, Safari, Firefox 등)
- 인터넷 연결 (OpenAI API 호출 시 필요)

## 배포

### Vercel 배포 (권장)
이 프로젝트는 Vercel에 최적화되어 있습니다:
- 서버리스 함수를 통한 안전한 API 키 관리
- 자동 HTTPS 적용
- 모바일 최적화 CDN

자세한 배포 방법은 [DEPLOYMENT.md](DEPLOYMENT.md)를 참조하세요.

### 로컬 개발
```bash
# Vercel CLI 설치 (선택사항)
npm i -g vercel

# 로컬 개발 서버 실행
vercel dev
```

## 분석 기준

- 제품 포장에 "3M" 또는 "Scotch-Brite" 브랜드 로고가 명확히 보여야 합니다
- 포장, 색상, 수량이 다르면 각각 별도의 제품으로 인식됩니다
- 가장 유사한 제품의 SKU를 자동으로 매칭합니다

## 지원 제품 카테고리

- 사무메모 (Post-it, 플래그 등)
- 사무테이프 (스카치 테이프 등)
- 수정테이프
- 학습기타 (이어플러그 등)
- 접착행거 (코맨드 제품 등)
- 롤클리너
- 변기솔
- 청소포
- 작업용장갑
- 공구용테이프
- 접착제
- 고무장갑
- 위생용품
- 수세미
- 행주
- 치실
- 스팟패치
- 기타 3M 제품

## 파일 구조

```
3m 테스트2/
├── api/
│   └── analyze.js      # Vercel 서버리스 함수 (OpenAI API 호출)
├── index.html          # 메인 웹 페이지
├── app.js              # 클라이언트 JavaScript 로직
├── package.json        # 프로젝트 설정
├── vercel.json         # Vercel 배포 설정
├── .gitignore          # Git 제외 파일
├── README.md           # 프로젝트 설명
└── DEPLOYMENT.md       # Vercel 배포 가이드
```

## 기술 스택

- HTML5 + CSS3 (반응형 디자인)
- JavaScript (ES6+)
- Web API (getUserMedia, Canvas)
- OpenAI Vision API (GPT-4.1-mini)
