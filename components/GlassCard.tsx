import { ReactNode } from 'react';

interface GlassCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export const GlassCard = ({ title, subtitle, icon, children }: GlassCardProps) => (
  <div className="glass-card neon-border relative overflow-hidden p-6">
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-sm text-white/60">{subtitle}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="mt-4 text-sm text-white/70">{children}</div>
  </div>
);
