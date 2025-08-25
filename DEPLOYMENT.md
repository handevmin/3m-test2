# Vercel 배포 가이드

이 가이드는 3M 제품 분석 웹앱을 Vercel에 배포하는 방법을 설명합니다.

## 사전 준비

1. **GitHub 계정** - 코드를 저장할 리포지토리
2. **Vercel 계정** - 웹사이트 배포 플랫폼  
3. **OpenAI API 키** - 이미지 분석을 위한 API 키

## 단계별 배포 방법

### 1. GitHub 리포지토리 생성

1. GitHub에 새 리포지토리 생성
2. 로컬 폴더를 Git 리포지토리로 초기화:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 3M 제품 분석 웹앱"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Vercel 계정 연결

1. [vercel.com](https://vercel.com)에서 계정 생성
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. 생성한 GitHub 리포지토리 선택

### 3. 환경 변수 설정

Vercel 프로젝트 설정에서 다음 환경 변수를 추가:

```
OPENAI_API_KEY=your_openai_api_key_here
```

**실제 API 키는 별도로 제공받으시기 바랍니다.**

**환경 변수 추가 방법:**
1. Vercel 대시보드에서 프로젝트 선택
2. Settings → Environment Variables
3. Name: `OPENAI_API_KEY`
4. Value: 위의 API 키
5. Environment: Production, Preview, Development 모두 선택
6. "Save" 클릭

### 4. 배포 설정

Vercel이 자동으로 다음을 감지합니다:
- `vercel.json` 파일의 설정
- `api/` 폴더의 서버리스 함수
- 정적 파일들 (HTML, CSS, JS)

### 5. 배포 완료

1. "Deploy" 버튼 클릭
2. 빌드 완료까지 기다리기 (보통 1-2분)
3. 생성된 URL로 접속하여 테스트

## 주요 기능

- **보안**: API 키가 서버리스 함수에 안전하게 숨겨짐
- **HTTPS**: 카메라 API 사용을 위한 보안 연결
- **자동 배포**: GitHub에 푸시할 때마다 자동 배포
- **모바일 최적화**: PWA 준비 완료

## 문제 해결

### 카메라가 작동하지 않는 경우
- HTTPS 연결인지 확인
- 브라우저 카메라 권한 허용 확인

### API 오류가 발생하는 경우
- Vercel 환경 변수 설정 확인
- OpenAI API 키 유효성 확인
- 서버리스 함수 로그 확인

### 배포 실패 시
- `vercel.json` 파일 문법 확인
- `api/analyze.js` 파일 경로 확인
- Vercel 대시보드의 Function Logs 확인

## 추가 설정

### 커스텀 도메인 연결
1. Vercel 프로젝트 Settings → Domains
2. 원하는 도메인 주소 입력
3. DNS 설정 업데이트

### 분석 기능 향상
- 환경 변수에서 모델 변경 가능
- API 응답 캐싱 설정
- 이미지 압축 최적화

## 주의사항

⚠️ **보안**: API 키를 클라이언트 코드에 직접 포함하지 마세요
⚠️ **HTTPS**: 카메라 API 사용 시 반드시 HTTPS 필요
⚠️ **용량**: 이미지 크기는 최대 50MB까지 지원

배포가 완료되면 생성된 Vercel URL을 통해 모바일에서 웹앱을 테스트할 수 있습니다!
