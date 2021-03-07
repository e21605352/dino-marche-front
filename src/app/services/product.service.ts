import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductItem, IProducts } from '../shared/interfaces/IProduct.d';
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
  getAll(): Observable<IProducts> {
    return this.http.get<IProducts>(baseUrl);
  }

  /**
   * Récupération de tous les produits d'un certain type.
   * @param type
   */
  getProductTypes(type: productType): Observable<IProducts> {
    const params = new HttpParams().set('type', type);
    return this.http.get<IProducts>(`${baseUrl}`, { params });
  }

  /**
   * Récupération d'un produit.
   * @param id ID du produit à récupérer.
   */
  getProduct(id: string): Observable<IProductItem> {
    return this.http.get<IProductItem>(`${baseUrl}/${id}`);
  }
}
