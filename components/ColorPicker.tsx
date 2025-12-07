interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => (
  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 text-sm">
    <span className="text-white/70">메인 포인트 색상</span>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-16 cursor-pointer rounded-lg bg-transparent"
      aria-label="색상 선택"
    />
    <span className="rounded-md bg-black/40 px-2 py-1 text-xs text-white/70">{value}</span>
  </div>
);
