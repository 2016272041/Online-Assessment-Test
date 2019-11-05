import { McqquizConfig } from './mcqquiz-config';
import { Mcqquestion } from './mcqquestion';
import { Questions } from '../services/questions';

export class Mcqquiz {
    id: number;
    questions: string;
    description: string;
    config: McqquizConfig;
    mcqquestion: Mcqquestion[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.questions = data.questions;
            this.description = data.description;
            this.config = new McqquizConfig(data.config);
            this.mcqquestion = [];
            data.mcqquestion.forEach(q => {
                this.mcqquestion.push(new Mcqquestion(q));
            });
        }
    }
}
