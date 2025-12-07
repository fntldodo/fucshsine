import { Product } from '../types/product';

const baseCard = (title: string, accent: string) => `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <style>
    :root { --primary: ${accent}; }
    body { font-family: 'Pretendard', system-ui, sans-serif; margin:0; padding:0; background:#0f1629; color:#e8edf7; }
    .wrap { display:grid; place-items:center; min-height:100vh; padding:32px; }
    .card { width:100%; max-width:640px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.12); border-radius:18px; padding:32px; box-shadow:0 24px 60px rgba(0,0,0,0.35); position:relative; overflow:hidden; }
    .card::after { content:'📷 여기에 스크린샷을 붙여두면 구매자가 구조를 이해하기 쉬워요!'; position:absolute; bottom:12px; right:12px; font-size:12px; color:#9fb2d8; }
    .pill { display:inline-block; padding:8px 12px; border-radius:999px; background:var(--primary); color:#0f1629; font-weight:700; letter-spacing:0.4px; }
    .title { margin:18px 0 8px; font-size:28px; font-weight:800; letter-spacing:-0.4px; }
    .text { line-height:1.6; color:#b7c4e1; }
    .cta { margin-top:18px; display:inline-flex; align-items:center; gap:10px; padding:12px 18px; border-radius:14px; background:linear-gradient(135deg, var(--primary), #7cf3a0); color:#0f1629; border:none; font-weight:800; cursor:pointer; box-shadow:0 10px 30px rgba(0,0,0,0.4); }
    .cta:hover { transform:translateY(-2px); }
  </style>
</head>
<body>
  <div class="wrap">
    <article class="card">
      <span class="pill">네온 테마</span>
      <h1 class="title">${title}</h1>
      <p class="text">📷 주요 섹션마다 코멘트를 추가해 두세요. 색상만 바꿔도 완전히 다른 무드의 템플릿을 만들 수 있습니다.</p>
      <button class="cta">지금 확인하기</button>
    </article>
  </div>
</body>
</html>`;

const digitalCard = (title: string, accent: string) => `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <style>
    :root { --primary: ${accent}; }
    * { box-sizing: border-box; }
    body { margin:0; display:grid; place-items:center; min-height:100vh; background:#050a12; font-family:'Pretendard', system-ui, sans-serif; color:#d9e4ff; }
    .phone { width:320px; height:640px; border-radius:36px; padding:24px; background:linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.12); position:relative; overflow:hidden; box-shadow:0 30px 70px rgba(0,0,0,0.6); }
    .notch { width:120px; height:32px; background:#0b1324; border-radius:20px; position:absolute; top:16px; left:50%; transform:translateX(-50%); }
    .battery { position:absolute; top:32px; right:28px; width:68px; height:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.4); overflow:hidden; }
    .battery__fill { height:100%; width:72%; background:var(--primary); animation:pulse 2s infinite; }
    @keyframes pulse { 0% { width:70%; } 50% { width:90%; } 100% { width:70%; } }
    .screen { margin-top:48px; display:flex; flex-direction:column; gap:18px; }
    .title { font-size:24px; font-weight:800; letter-spacing:-0.3px; }
    .chip { display:inline-flex; gap:8px; align-items:center; padding:10px 14px; border-radius:12px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); }
    .cta { margin-top:auto; padding:14px 16px; border-radius:16px; border:none; background:var(--primary); color:#050a12; font-weight:900; letter-spacing:0.2px; cursor:pointer; }
    .note { font-size:12px; color:#8fa3c7; line-height:1.5; }
  </style>
</head>
<body>
  <div class="phone">
    <div class="notch"></div>
    <div class="battery"><div class="battery__fill"></div></div>
    <div class="screen">
      <span class="chip">📷 제품 포인트</span>
      <h1 class="title">${title}</h1>
      <p class="note">버튼/텍스트 색상을 --primary 로 통일했습니다. 색상만 교체해도 새로운 브랜드 데모를 만들 수 있어요.</p>
      <button class="cta">바로 사용하기</button>
    </div>
  </div>
</body>
</html>`;

export const products: Product[] = [
  {
    id: 'p1',
    title: '네온 게이밍 UI',
    description: '게이머를 위한 몰입형 네온 인터페이스',
    category: 'SITE',
    subCategory: '게이밍',
    price: 0,
    accentColor: '#5CF0FF',
    code: digitalCard('네온 게이밍 UI', '#5CF0FF')
  },
  {
    id: 'p2',
    title: '패션 룩북 디테일',
    description: '스타일링 포인트를 강조한 상세 페이지',
    category: 'DETAIL',
    subCategory: '패션',
    price: 12,
    accentColor: '#FF7BCD',
    code: baseCard('패션 룩북 디테일', '#FF7BCD')
  },
  {
    id: 'p3',
    title: '건설 현장 브리핑',
    description: '안전 체크리스트가 포함된 브리핑 레이아웃',
    category: 'DETAIL',
    subCategory: '건설',
    price: 10,
    accentColor: '#7CF3A0',
    code: baseCard('건설 현장 브리핑', '#7CF3A0')
  },
  {
    id: 'p4',
    title: '스마트폰 소개 페이지',
    description: '제품 디바이스를 강조하는 인터랙티브 템플릿',
    category: 'SITE',
    subCategory: '스마트폰',
    price: 0,
    accentColor: '#93E5FF',
    code: digitalCard('스마트폰 소개 페이지', '#93E5FF')
  },
  {
    id: 'p5',
    title: '디지털 서비스 랜딩',
    description: 'SaaS 느낌의 깨끗한 랜딩 페이지',
    category: 'SITE',
    subCategory: '디지털',
    price: 15,
    accentColor: '#7DDFFF',
    code: baseCard('디지털 서비스 랜딩', '#7DDFFF')
  },
  {
    id: 'p6',
    title: '오디오 브랜드 사이트',
    description: '음향 제품 톤앤매너를 담은 레이아웃',
    category: 'SITE',
    subCategory: '음향',
    price: 9,
    accentColor: '#FFCF73',
    code: baseCard('오디오 브랜드 사이트', '#FFCF73')
  },
  {
    id: 'p7',
    title: '브랜딩 원페이지',
    description: '브랜드 컬러를 전면에 내세운 원페이지',
    category: 'DETAIL',
    subCategory: '브랜딩',
    price: 11,
    accentColor: '#C9A8FF',
    code: baseCard('브랜딩 원페이지', '#C9A8FF')
  },
  {
    id: 'p8',
    title: '인테리어 포트폴리오',
    description: '사진과 도면을 함께 보여주는 인테리어 디테일',
    category: 'DETAIL',
    subCategory: '인테리어',
    price: 13,
    accentColor: '#FFA27B',
    code: baseCard('인테리어 포트폴리오', '#FFA27B')
  },
  {
    id: 'p9',
    title: '게이밍 헤드셋 상세',
    description: '배터리 게이지를 포함한 제품 상세',
    category: 'DETAIL',
    subCategory: '게이밍',
    price: 0,
    accentColor: '#71F9D1',
    code: digitalCard('게이밍 헤드셋 상세', '#71F9D1')
  },
  {
    id: 'p10',
    title: '디지털 마케팅 랜딩',
    description: '캠페인 전환을 높이는 CTA 배치',
    category: 'SITE',
    subCategory: '디지털',
    price: 14,
    accentColor: '#7DD1FF',
    code: baseCard('디지털 마케팅 랜딩', '#7DD1FF')
  }
];
