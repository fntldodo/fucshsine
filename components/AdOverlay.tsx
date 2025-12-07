interface AdOverlayProps {
  active: boolean;
}

export const AdOverlay = ({ active }: AdOverlayProps) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-black/70 backdrop-blur-xl">
      <div className="glass-card max-w-md text-center">
        <p className="text-sm text-white/70">광고 모드 시뮬레이션 · 3초 후 다운로드 진행</p>
        <h3 className="mt-3 text-2xl font-bold">잠시만 기다려 주세요</h3>
        <p className="mt-2 text-white/60">프리미엄 템플릿을 위한 ZIP 파일을 준비 중입니다.</p>
      </div>
    </div>
  );
};
