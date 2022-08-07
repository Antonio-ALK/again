import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["rambo", "jopi", "conan", "danko"];
  borrado: string = '';
  eraseHero(): void{
    const borrados = this.heroes.pop() || " ";
    this.borrado = borrados;
  }

}
