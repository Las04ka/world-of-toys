import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MainPageComponent } from './main-page.component';

import { SharedModule } from 'src/app/shared/shared.module';

// register Swiper custom elements
register();

@NgModule({
  declarations: [MainPageComponent],
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainPageModule {}
