'use client';

import Link from 'next/link';
import { LogIn, LogOut, Store, Info } from 'lucide-react';
import { useMemo, useState } from 'react';

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useMemo(() => ({ name: '게스트', avatar: 'https://avatars.githubusercontent.com/u/1?v=4' }), []);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#050915]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="rounded-full bg-white/10 px-2 py-1 text-xs uppercase tracking-wide">Selling Form</span>
          <span className="text-white/80">더 허브</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm text-white/70">
          <Link className="pill" href="/">
            Hub
          </Link>
          <Link className="pill" href="/shop">
            Shop
          </Link>
          <Link className="pill" href="/about">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {loggedIn ? (
            <button
              onClick={() => setLoggedIn(false)}
              className="pill flex items-center gap-2 text-sm"
              aria-label="구글 로그아웃"
            >
              <LogOut className="h-4 w-4" /> 로그아웃
            </button>
          ) : (
            <button
              onClick={() => setLoggedIn(true)}
              className="pill flex items-center gap-2 text-sm"
              aria-label="구글 로그인"
            >
              <LogIn className="h-4 w-4" /> 구글 로그인
            </button>
          )}
          {loggedIn && (
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm">
              <img src={user.avatar} alt="avatar" className="h-8 w-8 rounded-full border border-white/10" />
              <span className="text-white/80">{user.name}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
