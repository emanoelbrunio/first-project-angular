import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  numero: number = 0

  obtemNumero(numero: number){
    this.numero = numero;
  } 
}
