import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    UserProfileComponent
  ],
    imports: [
        CommonModule,
        MatIconModule
    ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
