import { Monitor, Smartphone, Tablet } from 'lucide-react';
import clsx from 'clsx';

export type ViewMode = 'desktop' | 'tablet' | 'mobile';

interface DeviceToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const DeviceToggle = ({ mode, onChange }: DeviceToggleProps) => {
  const buttonClass = (target: ViewMode) =>
    clsx('pill flex items-center gap-2 text-sm', {
      'bg-white/20 text-white': mode === target
    });

  return (
    <div className="flex items-center gap-2">
      <button className={buttonClass('desktop')} onClick={() => onChange('desktop')}>
        <Monitor className="h-4 w-4" /> 데스크톱
      </button>
      <button className={buttonClass('tablet')} onClick={() => onChange('tablet')}>
        <Tablet className="h-4 w-4" /> 태블릿
      </button>
      <button className={buttonClass('mobile')} onClick={() => onChange('mobile')}>
        <Smartphone className="h-4 w-4" /> 모바일
      </button>
    </div>
  );
};
