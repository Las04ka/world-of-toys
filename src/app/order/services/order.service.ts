import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderDetails } from 'src/app/order/interfaces/order-details';
import { IOrderResponse } from 'src/app/order/interfaces/order-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  stripePromise!: Promise<any>;
  constructor(private http: HttpClient) {}

  makeOrder(orderDetails: IOrderDetails): Observable<IOrderResponse> {
    return this.http.post<IOrderResponse>(
      `${environment.apiUrl}/orders/create`,
      orderDetails,
    );
  }
}
