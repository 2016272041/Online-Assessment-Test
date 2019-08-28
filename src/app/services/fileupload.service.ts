import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fileupload } from '../models/fileupload';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})

export class FileuploadService {
    private fileuploadUrl = 'http://localhost:8080/api/fileupload';
    constructor(private http: HttpClient) { }

    getfileupload (): Observable<Fileupload[]> {
        return this.http.get<Fileupload[]>(this.fileuploadUrl);
    }

    getFileupload(type: string): Observable<Fileupload> {
        const url = `${this.fileuploadUrl}/${type}`;
        return this.http.get<Fileupload>(url);
    }

    uploadFileupload (fileupload: Fileupload): Observable<Fileupload> {
        return this.http.post<Fileupload>(this.fileuploadUrl, fileupload, httpOptions);
    }

    filechangeFileupload(fileupload: Fileupload): Observable<any> {
       return this.http.put(this.fileuploadUrl, fileupload, httpOptions);
    }
}
