import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'people', component: PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
