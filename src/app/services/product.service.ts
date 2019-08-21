import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
    private productUrl = 'http://localhost:8080/api/product';
    constructor(private http: HttpClient) { }
    getproduct (): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl);
    }
    getProduct(id: number): Observable<Product> {
        const url = `${this.productUrl}/${id}`;
        return this.http.get<Product>(url);
    }
    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.productUrl, product, httpOptions);
    }
    deleteProduct(product: Product | number): Observable<Product> {
        const id = typeof product === 'number' ? product : product.id;
        const url = `${this.productUrl}/${id}`;

        return this.http.delete<Product>(url, httpOptions);
    }
    updateProduct(product: Product): Observable<any> {
        return this.http.put(this.productUrl, product, httpOptions);
    }
}
