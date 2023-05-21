import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { NgxStripeModule } from 'ngx-stripe';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment.development';
import { OrderDetailsComponent } from './order-details/order-details.component';
const routes: Routes = [
  {
    path: '',
    component: OrderDetailsComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatInputModule,
    NgxStripeModule.forRoot(environment.stripePublicKey),
  ],
})
export class OrderModule {}
