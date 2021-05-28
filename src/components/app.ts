import * as ko from "knockout";
import { ComponentBootstrap } from "./component.bootstrap";
import '../assets/styles/style.css';
class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        ComponentBootstrap.registerComponent();
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
}

ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"),document.getElementById("app"));