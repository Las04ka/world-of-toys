import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogData } from 'src/app/blog/interfaces/blog-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IBlogData[]> {
    return this.http.get<IBlogData[]>(`${environment.apiUrl}/blog`);
  }

  getPostBySlug(slug: string): Observable<IBlogData> {
    return this.http.get<IBlogData>(`${environment.apiUrl}/blog/${slug}`);
  }
}
