import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { Options } from 'selenium-webdriver/ie';

const httpOptions = {
  hearders: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  [x: string]: any;
  private blogUrl = 'http://localhost:8080/api/blog';
  constructor(private http: HttpClient) { }

  getblog (): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl);
  }

  getBlog (id: number): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url);
  }

  addBlog (blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogUrl, blog );
  }

  deleteBlog (blog: Blog | number): Observable<Blog> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this.blogUrl}/${id}`;

    return this.http.delete<Blog>(url);
  }

  updateBlogform (blogform: Blog): Observable<any> {
    return this.http.put(this.blogUrl, blogform );
  }
}
