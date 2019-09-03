import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fileupload } from './fileuopload';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class UploadFileService {
    private filesUrl = 'http://localhost:8080/api/files';
    constructor(private http: HttpClient) { }

    pushFileToStorage(files: File): Observable<HttpEvent<{}>> {
        const formdata: FormData = new FormData();

        formdata.append('files', files);

        const req = new HttpRequest('POST', 'http://localhost:8080/api/files/upload', formdata, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.http.request(req);
    }

    getFiles(): Observable<any> {
        return this.http.get('http://localhost:8080/api/files/all');
    }
}
