import { OnState } from "./OnState";
import { State } from "./State";

export class PlugState extends State {   

    get typeState() : string{
        return "ScreenCharging";
    }
    public pressButton() : State{
        throw new Error("Boutton non utilisable");
    }
}