import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from 'src/app/cabinet/cabinet.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ActualiteComponent } from 'src/app/actualite/actualite.component';
const routes: Routes = [
  
  {path : 'cabinet' , component : CabinetComponent} ,
  {path : '' , component : AccueilComponent},
  {path : 'actualite' , component : ActualiteComponent}


   
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
