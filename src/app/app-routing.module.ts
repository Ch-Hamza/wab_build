import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from 'src/app/cabinet/cabinet.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ActualiteComponent } from 'src/app/actualite/actualite.component';
import {ActualitesComponent} from './actualites/actualites.component';
import {ServicesComponent} from './services/services.component';
const routes: Routes = [
  
  {path : 'cabinet' , component : CabinetComponent} ,
  {path : '' , component : AccueilComponent},
  {path : 'actualites' , component : ActualitesComponent},
  {path : 'actualites/actualite1' , component : ActualiteComponent},
  {path : 'services' , component : ServicesComponent}


   
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
