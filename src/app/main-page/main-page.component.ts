import { Component } from '@angular/core';
import { IProduct } from 'src/app/shop/interfaces/product';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  products?: IProduct[];

  constructor(private shopService: ShopService) {
    this.shopService.getAllProducts().subscribe((el) => (this.products = el));
  }
}
