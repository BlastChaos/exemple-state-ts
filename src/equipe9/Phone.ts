import { OffState } from './offState';
import { PlugState } from './PlugState';
import {State} from './State';
export class Phone {


    private _number:string;
    stateActuel:State;
    constructor(number:string) {
        this._number = number;
        this.stateActuel = new OffState();
    }

    get number(): string {
        return this._number;
    }

    get state(): string {
        return this.stateActuel.typeState;
    }

    public plug(plug: boolean): any {
        if (plug) {
            this.stateActuel = new PlugState();
        }else{
            this.stateActuel = new OffState();
        }
    }

    public pressButton(){
        this.stateActuel = this.stateActuel.pressButton();
    }

}