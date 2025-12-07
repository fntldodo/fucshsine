'use client';

import { useCallback, useState } from 'react';
import { Product } from '../types/product';

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  const onOpen = useCallback((item: Product) => {
    setProduct(item);
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
    setProduct(null);
  }, []);

  return { open, product, onOpen, onClose };
};
