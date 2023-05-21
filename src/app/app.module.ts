import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { TokenInterceptor } from 'src/app/shared/interceptors/token.interceptor';
import { UserPageModule } from 'src/app/user-page/user-page.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainPageModule } from './main-page/main-page.module';
import { SuccessPurchaseComponent } from './success-purchase/success-purchase.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PurchaseFailComponent } from './purchase-fail/purchase-fail.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavBarComponent, SuccessPurchaseComponent, AboutUsComponent, PurchaseFailComponent],
  imports: [
    UserPageModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatMenuModule,
    MatSnackBarModule,
    MainPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
