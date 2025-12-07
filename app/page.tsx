import { ArrowRight, Sparkles, Layout, Layers } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '../components/GlassCard';

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass">
        <div className="absolute inset-0 opacity-40 blur-3xl" style={{ backgroundImage: 'var(--aurora, radial-gradient(circle, rgba(106,228,255,0.25), transparent 45%))' }} />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Selling Form · The Hub
          </div>
          <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
            글라스모피즘과 네온이 만난 <br /> HTML/CSS 템플릿 허브
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            디테일(DETAIL)과 사이트(SITE) 두 축으로 구성된 카탈로그에서 원하는 테마를 골라 미리보기, 색상 변경, 다운로드까지 한 번에 진행하세요.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="pill">모바일 1컬럼 · 태블릿 2컬럼 · PC 4컬럼</span>
            <span className="pill">네온 글라스 UI</span>
            <span className="pill">Firebase 구글 로그인 플레이스홀더</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="pill flex items-center gap-2 bg-white text-[#0B1224]">
              바로 샵으로 이동 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="pill flex items-center gap-2">
              프로젝트 소개 <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <GlassCard title="Product Details" subtitle="DETAIL" icon={<Layers className="h-5 w-5 text-[#6AE4FF]" />}>
          섹션별 캡션과 📷 주석을 포함한 상세 페이지 템플릿. 배경 이미지를 인라인으로 유지하여 초보자도 쉽게 교체 가능합니다.
        </GlassCard>
        <GlassCard title="Website Layouts" subtitle="SITE" icon={<Layout className="h-5 w-5 text-[#B881FF]" />}>
          네온 글라스 효과와 인터랙션이 포함된 랜딩/레이아웃 모음. 디바이스 시뮬레이터와 색상 토글이 지원됩니다.
        </GlassCard>
      </section>
    </div>
  );
}
