import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgFoComponent } from './ng-if-ng-fo/ng-if-ng-fo.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

const routes: Routes = [
  {
    path: 'primeiro-componente',
    component: DataBindingComponent,
    title: 'Primeiro componente',
  },
  {
    path: 'segundo-component',
    component: SegundoComponenteComponent,
    title: 'Segundo Componente'
  },
  {
    path: 'teste',
    component: NgIfNgFoComponent,
    title: 'NgIf-NgFor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
