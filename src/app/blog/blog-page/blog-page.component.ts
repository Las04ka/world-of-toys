import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog/blog.service';
import { IBlogData } from 'src/app/blog/interfaces/blog-data';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent {
  blogData!: IBlogData;
  date = Date.now();
  constructor(blogService: BlogService, route: ActivatedRoute) {
    blogService.getPostBySlug(route.snapshot.params['slug']).subscribe((el) => {
      this.blogData = el;
    });
  }
}
