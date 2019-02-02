import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from 'src/app/cabinet/cabinet.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ActualiteComponent } from 'src/app/actualite/actualite.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ServicesComponent } from './services/services.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {ModifActualiteComponent} from './modif-actualite/modif-actualite.component';
import {ModifPublicationComponent} from './modif-publication/modif-publication.component';
import {ModifContactUsComponent} from './modif-contact-us/modif-contact-us.component';
import {BoiteDeReceptionComponent} from './boite-de-reception/boite-de-reception.component';
import { from } from 'rxjs';
import { GardServiceService } from './gard-service.service';
const routes: Routes = [

  { path: 'cabinet', component: CabinetComponent },
  { path: '', component: AccueilComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'actualites/:id', component: ActualiteComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: ModifActualiteComponent },
  { path: 'pub', component: ModifPublicationComponent /*, canActivate : [GardServiceService] */},
  { path: 'boite', component: BoiteDeReceptionComponent },
  { path: 'modifcontact', component: ModifContactUsComponent },
  {path :'**' ,redirectTo:''}





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
