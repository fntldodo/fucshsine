import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => (
  <button
    className="glass-card flex w-full flex-col items-start gap-2 p-5 text-left transition hover:-translate-y-1 hover:shadow-neon"
    onClick={() => onSelect(product)}
  >
    <div className="flex w-full items-center justify-between">
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{product.category}</span>
      <span className="text-xs text-white/60">{product.subCategory}</span>
    </div>
    <h3 className="text-lg font-bold text-white">{product.title}</h3>
    <p className="text-sm text-white/60">{product.description}</p>
    <div className="mt-2 flex items-center justify-between w-full text-sm text-white/80">
      <span>가격: {product.price === 0 ? '무료' : `${product.price} USD`}</span>
      <span className="text-[10px] uppercase tracking-[0.2em]">미리보기 · 다운로드</span>
    </div>
  </button>
);
