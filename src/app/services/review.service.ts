import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenManager } from '../authentication/tokenManager/TokenManager';
import { IReview } from '../shared/interfaces/IReview';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private token: string;

  constructor(private http: HttpClient, private tokenManager: TokenManager) {
    this.token = tokenManager.retrieve() || '';
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
