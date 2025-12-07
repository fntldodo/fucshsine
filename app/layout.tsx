import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'Selling Form | 더 허브',
  description: '네온 글라스모피즘 기반의 웹사이트 템플릿 스토어'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
