import { Userregs } from './userregs';
import { Deserializable } from 'deserialize';

export class Admin implements Deserializable {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public password: string;
    public userregs: Userregs[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.userregs = input.userregs.map(userregs => new Userregs().deserialize(userregs));

        return this;
    }

    getAlluserregs() {
        return this.id + '' + this.id;
    }
}
