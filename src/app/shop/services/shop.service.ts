import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

import { IFilters } from 'src/app/shop/interfaces/filters';
import { IProduct } from 'src/app/shop/interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService,
  ) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.apiUrl + '/shop');
  }
  getProductBySlug(slug: string): Observable<IProduct> {
    return this.http.get<IProduct>(environment.apiUrl + '/shop/' + slug);
  }
  getFilters(): Observable<IFilters> {
    return this.http.get<IFilters>(environment.apiUrl + '/shop/categories');
  }
  addToCart(slug: string, num: string): Observable<void> {
    return this.http
      .post<void>(environment.apiUrl + '/cart/add-product', {
        slug: slug,
        quantity: num,
      })
      .pipe(
        tap(() =>
          this.snackbarService.openSnackBar('Successfully added to cart'),
        ),
      );
  }
}
