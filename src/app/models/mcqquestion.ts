import { Mcqoption } from './mcqoption';

export class Mcqquestion {
    id: number;
    questions: string;
    questionsTypeId: number;
    mcqoption: Mcqoption[];
    answered: boolean;
  questionTypeId: number;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questions = data.questions;
        this.questionsTypeId = data.questionsTypeId;
        this.mcqoption = [];
        data.mcqoption.forEach(o => {
            this.mcqoption.push(new Mcqoption(o));
        });
    }
}
