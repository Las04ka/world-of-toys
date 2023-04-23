import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './components/shop/shop.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
  {
    path: ':id',
    component: ProductPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [ShopComponent, ProductPageComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatProgressSpinnerModule,
    NgxSliderModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
  ],
})
export class ShopModule {}
