import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { IFilters } from 'src/app/shop/interfaces/filters';

import { IProduct } from 'src/app/shop/interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.apiUrl + '/shop');
  }
  getProductBySlug(slug: string): Observable<IProduct> {
    return this.http.get<IProduct>(environment.apiUrl + '/shop/' + slug);
  }
  getFilters(): Observable<IFilters> {
    return this.http.get<IFilters>(environment.apiUrl + '/shop/categories');
  }
  addToCart(slug: string, num?: number): Observable<any> {
    return this.http
      .get<any>(
        environment.apiUrl + '/cart',
      )
  }
}
