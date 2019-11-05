export class Mcqoption {
    id: number;
    questionsId: number;
    questions: string;
    isAnswer: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionsId = data.questionsId;
        this.questions = data.questions;
        this.isAnswer = data.isAnswer;
    }
}
