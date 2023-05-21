import { AfterViewInit, Component } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import { IBlogData } from 'src/app/blog/interfaces/blog-data';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements AfterViewInit {
  blogs!: IBlogData[];
  date = Date.now();
  constructor(blogService: BlogService) {
    blogService.getPosts().subscribe((el) => (this.blogs = el));
  }
  ngAfterViewInit() {
    console.log(this.blogs);
  }
}
