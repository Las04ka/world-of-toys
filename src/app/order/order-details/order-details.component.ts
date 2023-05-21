import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loadStripe } from '@stripe/stripe-js';
import { IOrderDetails } from 'src/app/order/interfaces/order-details';
import { OrderService } from 'src/app/order/services/order.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  orderDetails!: IOrderDetails;
  stripePromise = loadStripe(environment.stripePublicKey);
  recipientDto: FormGroup = new FormGroup({
    firstname: new FormControl('Денис', [Validators.required]),
    patronymic: new FormControl('Валерійович', [Validators.required]),
    lastname: new FormControl('Костюк', [Validators.required]),
    phoneNumber: new FormControl(991234567, [
      Validators.required,
      Validators.minLength(9),
    ]),
  });
  addressDto: FormGroup = new FormGroup({
    country: new FormControl('Україна', [Validators.required]),
    settlement: new FormControl('Ужгород', [Validators.required]),
    region: new FormControl('Закарпаття', [Validators.required]),
    street: new FormControl('Минайська', [Validators.required]),
    buildingNumber: new FormControl(32, [Validators.required]),
    flatNumber: new FormControl(null),
  });

  constructor(private orderService: OrderService, private http: HttpClient) {}

  order() {
    this.orderDetails = {
      recipientDto: {
        ...this.recipientDto.value,
        countryCode: 'UA',
      },
      addressDto: this.addressDto.value,
      shippingOptionDto: {
        shippingMethod: 'COURIER',
        shippingType: 'STANDARD',
      },
    };
    this.orderService.makeOrder(this.orderDetails).subscribe(async (el) => {
      const payment = {
        name: 'Toys',
        currency: 'uah',
        // amount on cents *10 => to be on dollar
        amount: el.totalPrice * 100,
        quantity: '1',
        cancelUrl: 'http://localhost:4200/cancel',
        successUrl: 'http://localhost:4200/success',
      };

      const stripe = await this.stripePromise;

      // this is a normal http calls for a backend api
      this.http
        .post(`${environment.apiUrl}/orders/payment`, payment)
        .subscribe((data: any) => {
          stripe?.redirectToCheckout({
            sessionId: data.id,
          });
        });
    });
  }

  onBuildingNumberInput(value: string) {
    const filteredValue = value.replace(/[^0-9]/g, '');
    this.addressDto.controls['buildingNumber'].setValue(filteredValue);
  }

  onFlatNumberInput(value: string) {
    const filteredValue = value.replace(/[^0-9]/g, '');
    this.addressDto.controls['flatNumber'].setValue(filteredValue);
  }

  onPhoneNumberInput(value: string) {
    const filteredValue = value.replace(/[^0-9]/g, '');
    this.recipientDto.controls['phoneNumber'].setValue(filteredValue);
  }
}
