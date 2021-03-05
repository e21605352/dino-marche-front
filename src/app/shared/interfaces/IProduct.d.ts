import type { productType } from '../../types/productType';
import type { IReview } from './IReview';

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
  reviews?: IReview[];
}

export interface IProduct {
  products: IProductItem[];
}

