'use client';

import { useMemo, useState } from 'react';
import { products } from '../../lib/products';
import { ProductCategory, ProductSubCategory } from '../../types/product';
import { ProductGrid } from '../../components/ProductGrid';
import { ProductModal } from '../../components/ProductModal';
import { useModal } from '../../hooks/useModal';

const categorySub: Record<ProductCategory, ProductSubCategory[]> = {
  DETAIL: ['패션', '건설', '브랜딩', '인테리어', '게이밍'],
  SITE: ['디지털', '음향', '게이밍', '스마트폰']
};

export default function ShopPage() {
  const [category, setCategory] = useState<ProductCategory>('SITE');
  const [subCategory, setSubCategory] = useState<ProductSubCategory | undefined>(undefined);
  const { open, product, onOpen, onClose } = useModal();

  const subs = useMemo(() => categorySub[category], [category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">Shop</p>
          <h2 className="text-3xl font-black">템플릿 필터링</h2>
        </div>
        <div className="flex gap-2">
          <button
            className={`pill ${category === 'DETAIL' ? 'bg-white/20' : ''}`}
            onClick={() => {
              setCategory('DETAIL');
              setSubCategory(undefined);
            }}
          >
            DETAIL
          </button>
          <button
            className={`pill ${category === 'SITE' ? 'bg-white/20' : ''}`}
            onClick={() => {
              setCategory('SITE');
              setSubCategory(undefined);
            }}
          >
            SITE
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {subs.map((sub) => (
          <button
            key={sub}
            className={`pill ${subCategory === sub ? 'bg-white/25 text-white' : ''}`}
            onClick={() => setSubCategory(sub === subCategory ? undefined : sub)}
          >
            {sub}
          </button>
        ))}
      </div>
      <ProductGrid products={products} category={category} subCategory={subCategory} onSelect={onOpen} />
      <ProductModal open={open} product={product} onClose={onClose} />
    </div>
  );
}
