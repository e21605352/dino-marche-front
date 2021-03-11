import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenManager } from '../authentication/tokenManager/TokenManager';
import { IProductItems, IProduct } from '../shared/interfaces/IProduct.d';
import { IReview } from '../shared/interfaces/IReview';
import { productType } from '../types/productType';

const baseUrl = `${environment.baseUrl}/product`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private token: string;

  constructor(private http: HttpClient, private tokenManager: TokenManager) {
    this.token = tokenManager.retrieve() || '';
  }

  /**
   * Récupération de tous les produits.
   */
  getAll(): Observable<IProductItems> {
    return this.http.get<IProductItems>(baseUrl);
  }

  /**
   * Récupération de tous les produits d'un certain type.
   * @param type
   */
  getProductTypes(type: productType): Observable<IProductItems> {
    const params = new HttpParams().set('type', type);
    return this.http.get<IProductItems>(`${baseUrl}`, { params });
  }

  /**
   * Récupération d'un produit.
   * @param id ID du produit à récupérer.
   */
  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${baseUrl}/${id}`);
  }

  postReview(id: string, review: IReview): Observable<IReview> {
    const headers = { Authorization: this.token };
    const options = {
      headers: headers
    };

    return this.http.post<IReview>(
      `${baseUrl}/${id}/feedback`,
      review,
      options
    );
  }
}
