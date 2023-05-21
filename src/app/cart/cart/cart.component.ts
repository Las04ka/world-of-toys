import { Component } from '@angular/core';
import { debounceTime, Subject, tap } from 'rxjs';
import { ICartItem } from 'src/app/cart/interfaces/cart-item';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems!: ICartItem[];
  subject: Subject<{ slug: string; num: number }> = new Subject();
  price = 0;

  constructor(private cartService: CartService) {
    cartService.getCart().subscribe((el) => {
      this.cartItems = el;
      el.forEach((item) => {
        this.price += item.price * item.quantity;
      });
    });
    this.subject.pipe(debounceTime(300)).subscribe((el) => {
      this.cartService.updateQuantity(el.slug, el.num).subscribe();
      this.price = 0;
      this.cartItems.forEach(
        (item) => (this.price += item.price * item.quantity),
      );
    });
  }

  decreaseQuantity(item: ICartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
    this.subject.next({ slug: item.slug, num: item.quantity });
  }

  onInput(item: ICartItem) {
    this.subject.next({ slug: item.slug, num: item.quantity });
  }

  increaseQuantity(item: ICartItem) {
    item.quantity++;
    this.subject.next({ slug: item.slug, num: item.quantity });
  }

  onClose(slug: string) {
    this.cartService
      .deleteItem(slug)
      .pipe(
        tap(() => {
          const index = this.cartItems.findIndex((item) => item.slug === slug);
          this.cartItems.splice(index, 1);
        }),
      )
      .subscribe();
  }

}
