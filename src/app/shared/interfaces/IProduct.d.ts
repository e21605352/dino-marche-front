import type { productType } from '../../types/productType';

export interface IProductItem {
  id?: string;
  image: string;
  name: string;
  alias: string;
  description: string;
  rate: number;
  reviewsNumber: number;
  price: number;
  type: productType;
}

export interface IProduct {
  products: IProductItem[];
}
