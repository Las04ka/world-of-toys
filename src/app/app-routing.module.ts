import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { PurchaseFailComponent } from 'src/app/purchase-fail/purchase-fail.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { SuccessPurchaseComponent } from 'src/app/success-purchase/success-purchase.component';
import { UserPageComponent } from 'src/app/user-page/user-page.component';

import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'about', component: AboutUsComponent },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  { path: 'user', component: UserPageComponent },
  { path: 'success', component: SuccessPurchaseComponent },
  { path: 'cancel', component: PurchaseFailComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
