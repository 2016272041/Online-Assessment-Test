export class Asslist {

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
  static complete: boolean;
    id: number;
    username: string;
    testsid: number;
    questionsid: number;
    complete: false;
}
