import * as ko from "knockout";
import { LoginComponent } from "./login";

export class ComponentBootstrap {
    static registerComponent = () => {
        ko.components.register("login", new LoginComponent());
    }
}