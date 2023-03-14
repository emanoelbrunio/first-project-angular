import { Component } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  images: any
  erro: any
  constructor(private crudService: CrudService) {

    this.getter();

  }

  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;

        console.log('data: ', data);
        console.log('var: ', this.images);
        
      }, (error: any) => {
        this.erro = error;
        console.error("error: ", error);
        
    })
  }
}
