import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/user-page/interfaces/order';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserPageService {
  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(environment.apiUrl + '/orders/user');
  }
}
