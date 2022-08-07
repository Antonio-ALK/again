import { Component } from "@angular/core";





@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent {

    name: string =  "ironman";
    age : number = 45;

    obtainName(): string{
        return `${this.name}  ${this.age}`;
    }

    get upperCaseName(): string {
        return this.name.toUpperCase();
    }

    changeName(): void {
        this.name = "Spiderman";
    }

    changeAge():void{
        this.age = 30;
    }

    


}