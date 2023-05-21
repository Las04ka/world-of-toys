import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  { path: ':slug', component: BlogPageComponent },
];
@NgModule({
  declarations: [BlogListComponent, BlogPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes), MatGridListModule, MatProgressSpinnerModule,],
})
export class BlogModule {}
