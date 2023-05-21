import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    UserNavComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterLink
    ],
  exports: [
    UserNavComponent
  ]
})
export class UserNavModule { }
