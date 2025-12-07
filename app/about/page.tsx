export default function AboutPage() {
  return (
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-[0.2em] text-white/60">About</p>
      <h2 className="text-3xl font-black">프로젝트 설명</h2>
      <p className="text-white/70">
        Selling Form 은 구매자가 HTML/CSS 템플릿을 쉽고 빠르게 내려받을 수 있도록 설계된 네온 글라스 인터페이스입니다.
        구글 로그인(플레이스홀더), 카테고리 필터, 디바이스 미리보기, 색상 커스터마이징, ZIP 다운로드까지 한 화면에서 경험할 수 있습니다.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-white/70">
        <li>샘플 데이터 10종을 DETAIL, SITE 두 축으로 구성</li>
        <li>iframe 내 anchor 태그를 버튼으로 치환하여 보안 강화</li>
        <li>3초 광고 모드 시뮬레이션 후 JSZip + FileSaver 로 묶어 다운로드</li>
        <li>README.txt 에 📷 가이드를 포함해 비개발자도 쉽게 편집</li>
      </ul>
    </div>
  );
}
