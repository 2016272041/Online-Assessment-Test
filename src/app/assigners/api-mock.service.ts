import { Injectable } from '@angular/core';
import { Asslist } from './asslist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

    constructor() {}

    public getAllAsslist(): Observable<Asslist[]> {
        return Observable.of([
            new Asslist({id: 'number', username: 'string', testid: 'number', questionsid: 'number', complete: false})
        ]);
    }

    public createAsslsist(asslist: Asslist): Observable<Asslist> {
        return Observable.of(
            new Asslist({id: 'number', username: 'string', testid: 'number', questionsid: 'number', complete: false})
        );
    }

    public getAsslistById(asslistId: number): Observable<Asslist> {
        return Observable.of(
            new Asslist({id: 'number', username: 'string', testid: 'number', questionsid: 'number', complete: false})
        );
    }

    public updateAsslist(asslist: Asslist): Observable<Asslist> {
        return Observable.of(
            new Asslist({id: 'number', username: 'string', testsid: 'number', questionsid: 'number', complete: false})
        );
    }

    public deleteAsslistById(asslistId: number): Observable<null> {
        return null;
    }
}
