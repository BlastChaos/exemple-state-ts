import { OnState } from "./OnState";
import { State } from "./State";

export class OffState extends State {   

    get typeState() : string{
        return "screenOff";
    }
    public pressButton() : State{
        return new OnState();
    }
}