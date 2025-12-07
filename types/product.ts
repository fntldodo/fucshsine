export type ProductCategory = 'DETAIL' | 'SITE';

export type ProductSubCategory =
  | '패션'
  | '건설'
  | '디지털'
  | '음향'
  | '게이밍'
  | '스마트폰'
  | '브랜딩'
  | '인테리어';

export interface Product {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  subCategory: ProductSubCategory;
  price: number;
  code: string;
  accentColor?: string;
}
