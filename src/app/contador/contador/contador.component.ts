import { Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    <h1>hola mundo</h1>


<button (click)="acumular(1)">+1</button>

<span>{{numero}}</span>

<button (click)="acumular(-1)">-1</button>

<br>
<hr>

<button (click)="acumular2(1)">+5</button>

<span>{{base}}</span>

<button (click)="acumular2(-1)">-5</button>
    
    
    `
})

export class ContadorComponent {

    title = 'bases';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor:number){
      this.numero += valor;
    }
  
    acumular2(valor:number){
      valor>0 ? this.base += 5: this.base -=5;
    }
}
