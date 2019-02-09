import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {StorageServiceModule} from 'angular-webstorage-service';
import{MDBBootstrapModule} from 'angular-bootstrap-md';
//import {NgxImageZoomModule} from 'ngx-image-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';
import { ModifActualiteComponent } from './modif-actualite/modif-actualite.component';
import { ModifPublicationComponent } from './modif-publication/modif-publication.component';
import { ModifContactUsComponent } from './modif-contact-us/modif-contact-us.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { BoiteDeReceptionComponent } from './boite-de-reception/boite-de-reception.component';
import { ModifierUnePublicationComponent } from './modifier-une-publication/modifier-une-publication.component';
import { ModifierUneActualiteComponent } from './modifier-une-actualite/modifier-une-actualite.component';
 
import { GardServiceService } from './gard-service.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    ActualitesComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    CabinetComponent,
    AccueilComponent,
    LoginComponent,
    PublicationComponent,
    ContactComponent,
    ModifActualiteComponent,
    ModifPublicationComponent,
    ModifContactUsComponent,
    HeaderAdminComponent,
    BoiteDeReceptionComponent,
    ModifierUnePublicationComponent,
    ModifierUneActualiteComponent 
  ],
  imports: [
     
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule , 
    ReactiveFormsModule, 
    StorageServiceModule,
    MDBBootstrapModule.forRoot()
   // NgxImageZoomModule.forRoot()
   
    
  ],
  schemas : [NO_ERRORS_SCHEMA],
  providers: [  GardServiceService,DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
