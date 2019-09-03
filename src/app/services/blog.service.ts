import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../models/blogs';

const httpOptions = {
  hearders: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  [x: string]: any;
  private blogUrl = 'http://localhost:8080/api/blogs';
  constructor(private http: HttpClient) { }

  getblogs (): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(this.blogUrl);
  }

  getBlogs (id: number): Observable<Blogs> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blogs>(url);
  }

  addBlogs (blogs: Blogs): Observable<Blogs> {
    return this.http.post<Blogs>(this.blogUrl, blogs );
  }

  deleteBlogs (blogs: Blogs | number): Observable<Blogs> {
    const id = typeof blogs === 'number' ? blogs : blogs.id;
    const url = `${this.blogUrl}/${id}`;

    return this.http.delete<Blogs>(url);
  }

  updateBlogform (blogform: Blogs): Observable<any> {
    return this.http.put(this.blogUrl, blogform );
  }
}
