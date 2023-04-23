import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { ICategory, IProduct } from 'src/app/shop/interfaces/product';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  slug: string;
  productData!: Observable<IProduct>;
  quantity = new FormControl(1);
  constructor(
    private shopService: ShopService,
    activeRoute: ActivatedRoute,
  ) {
    this.slug = activeRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.productData = this.shopService.getProductBySlug(this.slug);
  }

  arrToString(arr: ICategory[]): string {
    return arr.map((category) => category.name).join(', ');
  }

  decreaseQuantity() {
    this.quantity.setValue(this.quantity.value! - 1);
  }

  increaseQuantity() {
    this.quantity.setValue(this.quantity.value! + 1);
  }

  onAddingToCart() {
    this.shopService
      .addToCart(this.slug, +this.quantity.value!).subscribe();
  }

  onInput(event: any) {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    value = value.substring(0, 3); // Limit to 3 digits
    event.target.value = value;
  }
}
