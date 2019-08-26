import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productservice: ProductService) { }
  private files = [];
  private url = 'http://localhost:8080/upload';
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});

    this.productservice.showFileNames().subscribe(response => {
      for (let i = 0; i < response.json().length; i++) {
        this.files[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].contentType
        };
      }
    });
  }

  downloadPdf(filename, contentType) {
    this.productservice.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }
    );
  }
}
