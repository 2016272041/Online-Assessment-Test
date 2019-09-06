export interface Dataaccess {
    id: number;
    questions1: string;
    questions2: string;
    questions3: string;
    createdAt: Date;
    updatedAt: Date;
    option1: any;
    option2: any;
    option3: any;
    option4: any;
}
export interface Dataaccess {
    questions: Array<Dataaccess>;
}
