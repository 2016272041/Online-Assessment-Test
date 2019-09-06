import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions } from './questions';
import { Dataaccess } from '../models/dataaccess';
import { map } from 'rxjs/operators/map';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class DataAccessService {
    constructor(private client: HttpClient) {}

    getQuestions() {
        this.client.get(`${DataAccessService}/questions.json`)
        .subscribe( (data) => console.log(JSON.stringify(data)));

        this.client.get(`${DataAccessService}/questiona.json`)
        .subscribe( (data) => {
            const questions: Array<any> = data && data['questions'];
            // tslint:disable-next-line:no-shadowed-variable
            console.log(questions && questions.map((questions) => ({
                'id': questions['id'] || '',
                'questions1': questions['questions1'] || '',
                'questions2': questions['questions2'] || '',
                'questions3': questions['questions3'] || '',
                'createdAt': questions['createdAt'] || '',
                'updatedAt': questions['updatedAt'] || '',
                'option1': questions['option1'] || '',
                'option2': questions['option2'] || '',
                'option3': questions['option3'] || '',
                'option4': questions['option4'] || ''
            })));
        });

        this.client.get<Questions>(`${DataAccessService}/questions.json`)
        .subscribe(
            (data) => {
                data.questions.map (questions => console.log('Hello ${questions.id}'));
                            },
            error => console.log(error)
        );
        this.client.get<Dataaccess>('${DataAccessService}/dataaccessservice.json')
        .subscribe(
            (data) => {
                data.questions.map (questions => console.log('Hello ${questions.id}'));
            },
            error => console.log(error)
        );
    }

    getquestions() {
        return this.client.get<Questions>(`${DataAccessService}/questions.js`);

    }

    getdataaccess() {
        return this.client.get<Dataaccess>(`${DataAccessService}/dataaccess.js`);
    }
}


