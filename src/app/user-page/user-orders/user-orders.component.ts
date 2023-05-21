import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/user-page/interfaces/order';
import { UserPageService } from 'src/app/user-page/user-page.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  orders: IOrder[] = [];

  constructor(private userPageService: UserPageService) {}

  ngOnInit(): void {
    this.userPageService.getAllOrders().subscribe((el) => (this.orders = el));
  }
}
