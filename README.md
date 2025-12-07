# fucshsine

프로젝트 "Selling Form" 소스 코드입니다. Next.js 14, TypeScript, Tailwind CSS 기반으로 글라스모피즘 랜딩과 샵 페이지, 모달 미리보기/ZIP 다운로드 로직이 포함되어 있습니다.

## GitHub에 적용(푸시)하는 방법
1. **새 저장소 만들기**: GitHub에서 빈 저장소를 생성하고 URL(예: `https://github.com/USER/REPO.git`)을 복사합니다.
2. **원격 추가**: 로컬에서 원격을 등록합니다.
   ```bash
   git remote add origin https://github.com/USER/REPO.git
   ```
3. **브랜치 이름 확인**: 기본 브랜치가 `main`/`master`와 다른 경우 맞춰서 푸시합니다.
4. **커밋 후 푸시**:
   ```bash
   git add .
   git commit -m "초기 프로젝트 업로드"
   git push -u origin work   # 현재 브랜치가 work라면
   ```
   기본 브랜치로 보내려면 `git push -u origin main`처럼 브랜치명을 교체하세요.
5. **GitHub에서 확인**: 푸시가 완료되면 GitHub 저장소에서 코드와 커밋을 확인할 수 있습니다.

## 개발/실행
```bash
npm install
npm run dev
```

## 빌드
```bash
npm run build
```
