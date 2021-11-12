import { OnState } from "./OnState";
import { State } from "./State";

export class OffState extends State {   

    get typeState() : string{
        return "ScreenOff";
    }
    public pressButton() : State{
        return new OnState();
    }
}