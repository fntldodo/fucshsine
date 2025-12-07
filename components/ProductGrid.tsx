import { Product, ProductCategory, ProductSubCategory } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  category: ProductCategory;
  subCategory?: ProductSubCategory;
  onSelect: (product: Product) => void;
}

export const ProductGrid = ({ products, category, subCategory, onSelect }: ProductGridProps) => {
  const filtered = products.filter((item) => item.category === category && (!subCategory || item.subCategory === subCategory));

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map((item) => (
        <ProductCard key={item.id} product={item} onSelect={onSelect} />
      ))}
    </div>
  );
};
