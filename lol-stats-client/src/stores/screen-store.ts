import { makeAutoObservable } from "mobx";
import { ScreenType } from "./screen-components";

interface Route {
    type: ScreenType,
    [key: string]: any,
    state?: any 
}

class ScreenStore {
    currentScreen: Route[] = [{type: "home"}]

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    go(route: Route){
        this.currentScreen.push(route);
    }

    back() {
        if(this.currentScreen.length > 1){
            this.currentScreen.pop();
        }
    }

    get screen(): Route {
        return this.currentScreen[this.currentScreen.length - 1]
    }
}

export const screenStore = new ScreenStore();