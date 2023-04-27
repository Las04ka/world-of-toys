import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICartItem } from 'src/app/cart/interfaces/cart-item';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCart(): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(`${environment.apiUrl}/cart`);
  }

  updateQuantity(slug: string, quantity: number) {
    return this.http.put(`${environment.apiUrl}/cart`, {
      slug: slug,
      quantity: quantity,
    });
  }

  deleteItem(slug: string) {
    return this.http.delete(`${environment.apiUrl}/cart`, {
      body: { slug: slug },
    });
  }
}
