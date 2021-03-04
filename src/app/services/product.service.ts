import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IProductItem as Product } from '../shared/interfaces/IProduct.d';
import { productType } from '../types/productType';

const baseUrl = `${environment.baseUrl}/product`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Récupération de tous les produits.
   */
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  /**
   * Récupération de tous les produits d'un certain type.
   * @param type
   */
  getProductTypes(type: productType): Observable<Product[]> {
    const params = new HttpParams().set('type', type);
    return this.http.get<Product[]>(`${baseUrl}`, { params });
  }

  /**
   * Récupération d'un produit.
   * @param id ID du produit à récupérer.
   */
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }
}
