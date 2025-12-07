'use client';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { useCallback, useState } from 'react';
import { Product } from '../types/product';
import { buildPreviewHtml } from '../utils/sanitize';

const extractCss = (html: string) => {
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  const css = styleMatch ? styleMatch[1].trim() : '';
  const stripped = styleMatch ? html.replace(styleMatch[0], '') : html;
  return { css, stripped };
};

const buildReadme = (title: string) => `# ${title}\n\n1. index.html 파일을 열고 문구를 원하는 언어로 수정하세요.\n2. 색상은 style.css 의 --primary 값을 변경하면 일괄 적용됩니다.\n3. 이미지 위치에 📷 주석을 남겨 두었으니, 스크린샷을 덮어쓰기만 하면 됩니다.\n4. 배경 이미지는 인라인 스타일로 지정되어 있어 바로 교체 가능합니다.`;

export const useDownload = () => {
  const [isAdMode, setIsAdMode] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);

  const triggerDownload = useCallback(async (product: Product, accent: string) => {
    setIsAdMode(true);
    setIsPreparing(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const htmlWithColor = buildPreviewHtml(product.code, accent);
    const { css, stripped } = extractCss(htmlWithColor);

    const zip = new JSZip();
    const readme = buildReadme(product.title);

    zip.file('index.html', stripped);
    zip.file('style.css', css);
    zip.file('README.txt', readme);

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${product.id}.zip`);

    setIsAdMode(false);
    setIsPreparing(false);
  }, []);

  return { isAdMode, isPreparing, triggerDownload };
};
