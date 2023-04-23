import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [CartComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class CartModule {}
