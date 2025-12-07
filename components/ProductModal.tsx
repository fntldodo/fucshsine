'use client';

import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types/product';
import { DeviceToggle, ViewMode } from './DeviceToggle';
import { ColorPicker } from './ColorPicker';
import { buildPreviewHtml } from '../utils/sanitize';
import { useDownload } from '../hooks/useDownload';
import { AdOverlay } from './AdOverlay';

interface ProductModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}

const deviceWidth: Record<ViewMode, string> = {
  desktop: '100%',
  tablet: '800px',
  mobile: '420px'
};

export const ProductModal = ({ open, product, onClose }: ProductModalProps) => {
  const [mode, setMode] = useState<ViewMode>('desktop');
  const [color, setColor] = useState('#6AE4FF');
  const { isAdMode, triggerDownload } = useDownload();

  useEffect(() => {
    if (product?.accentColor) setColor(product.accentColor);
  }, [product]);

  const preview = useMemo(() => {
    if (!product) return '';
    return buildPreviewHtml(product.code, color);
  }, [product, color]);

  if (!open || !product) return null;

  const width = deviceWidth[mode];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <AdOverlay active={isAdMode} />
      <div
        className="glass-card relative w-full max-w-6xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
          onClick={onClose}
          aria-label="모달 닫기"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid gap-4 p-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">{product.subCategory}</p>
                <h3 className="text-2xl font-bold">{product.title}</h3>
              </div>
              <DeviceToggle mode={mode} onChange={setMode} />
            </div>
            <div className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4">
              <iframe
                title={`${product.title} 미리보기`}
                srcDoc={preview}
                className="h-[520px] rounded-xl border border-white/10 bg-white"
                style={{ width }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">즉시 색상 변경과 다운로드가 가능합니다.</p>
            <ColorPicker value={color} onChange={setColor} />
            <div className="space-y-2 text-sm text-white/70">
              <p>· 링크 태그는 버튼으로 자동 변환되어 iframe 안에서 안전하게 미리볼 수 있습니다.</p>
              <p>· ZIP 파일에는 index.html, style.css, README.txt 가 포함됩니다.</p>
              <p>· 배경 이미지는 인라인 스타일로 유지되어 초보자도 쉽게 교체할 수 있습니다.</p>
            </div>
            <button
              className="pill w-full justify-center bg-gradient-to-r from-[#6AE4FF] to-[#B881FF] text-base font-bold text-[#0B1224]"
              onClick={() => triggerDownload(product, color)}
            >
              3초 후 다운로드 시작
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
