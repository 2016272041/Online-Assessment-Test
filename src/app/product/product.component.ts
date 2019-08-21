import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FileUploader } from 'ng-file-upload';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ProductService: ProductService) { }
  private files = [];
  private url = 'http://localhost:8080/upload';
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});

    this.ProductService.showFileNames().subscribe(response => {
      for (let i = 0; i < response.json().length; i++) {
        this.files[i] = {
          filename: response.json() [i].filename,
          originalname: response.json() [i].originalname,
          contentType: response.json() [i].contentType
        };
      }
    });
  }

  downloadPdf(filename, contentType) {
    this.ProductService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    );
  }
}
