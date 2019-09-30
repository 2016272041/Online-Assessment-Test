import { Userregs } from './userregs';
import { Deserializable } from 'deserialize';
import { Ability, AbilityBuilder } from '@casl/ability';

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

export function defineAbilitiesFor(role) {
    const { can, rules } = AbilityBuilder.extract();

    if (role === 'admin') {
        can('manage', 'all');
    } else {
        can('read', 'all');
        can('manage', 'Todo', {assign: 'me'});
    }
    return rules;
}
