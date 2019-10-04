import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Http, Response } from '@angular/http';
import { Asslist } from './asslist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiBase;

@Injectable()
export class ApiService {
    updateAsslist(asslist: Asslist): Observable<Asslist> {
        throw new Error('Method not implemented.');
    }

    constructor( private http: Http) { }

    public getAllAsslist(): Observable<Asslist[]> {
        return this.http
            .get(API_URL + '/asslist')
            .map(response => {
                const asslists = response.json();
                return asslists.map((asslist) => new Asslist(asslist));
            })
            .catch(this.handleError);
    }

    public createAsslist(asslist: Asslist): Observable<Asslist> {
        return this.http
            .post(API_URL + '/asslists', asslist)
            .map(response => {
                return new Asslist(response.json());
            })
            .catch(this.handleError);
    }

    public getAsslsistById(asslistId: number): Observable<Asslist> {
        return this.http
            .get(API_URL + '/asslists' + asslistId)
            .map(response => {
                return new Asslist(response.json());
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
