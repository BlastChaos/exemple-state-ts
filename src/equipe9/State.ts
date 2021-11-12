export abstract class State {
    get typeState() : string{
        throw new Error("Pas implémenté");
    }
    public abstract pressButton() : State;
}