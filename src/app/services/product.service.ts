import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  constructor(private http: Http) { }
product: Product[];
    downloadPDF(filename, filetype): any {
    return this.http.get('http://127.0.0.1:3000/file/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  showFileNames() {
    return this.http.get('http://127.0.0.1:3000/files');
  }

  uploadAll(observable: Product[]) {
    return this.productservice.getProduct();
  }
}
