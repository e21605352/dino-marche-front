import type { productType } from '../../types/productType';
import type { IReview } from './IReview';

export interface IProductItem {
  id?: string;
  images: string[];
  name: string;
  alias: string;
  description: string;
  rate: number;
  reviewsNumber: number;
  price: number;
  type: productType;
}

export interface IProduct extends IProductItem {
  reviews: IReview[];
}

export interface IProductItems {
  products: IProductItem[];
}

export type IProductListItems = IProductItem[];
