import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shop/interfaces/product';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent {
  @Input() productData!:IProduct;
}
