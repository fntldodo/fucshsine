export const injectColor = (code: string, color: string) => code.replace(/--primary:\s*#[0-9a-fA-F]{3,6}/g, `--primary: ${color}`);

export const neutralizeAnchors = (code: string) =>
  code.replace(/<\s*a([^>]*)>(.*?)<\s*\/a>/gi, '<button $1>$2</button>');

export const buildPreviewHtml = (code: string, color: string) => {
  const withColor = injectColor(code, color);
  return neutralizeAnchors(withColor);
};
