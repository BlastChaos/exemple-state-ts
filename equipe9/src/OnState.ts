import { OffState } from "./OffState";
import { State } from "./State";

export class OnState extends State {   

    get typeState() : string{
        return "ScreenOn";
    }

    public pressButton() : State{
        return new OffState();
    }
}