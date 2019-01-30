import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {publication} from '../publication';
import * as data from '../../assets/contenu.json';
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../data.service';
import {
  delay
} from 'q';

@Component({
  selector: 'app-modif-publication',
  templateUrl: './modif-publication.component.html',
  styleUrls: ['./modif-publication.component.scss']
})
export class ModifPublicationComponent implements OnInit {
formOnOff=false;
publications;
  constructor(private router: Router, private dataService: DataService,private app:AppComponent) {
    app.EspaceAdmin=true;
    this.dataService.getPublications().subscribe(res => {
      this.publications = res;
      console.log(this.publications);
    });
  }

  ngOnInit() {
  }
    formOn(){
        this.formOnOff=true;
    }

    formOff(){
        this.formOnOff=false;
    }
    model = new publication();
    ajouterPublication(){
      this.dataService
        .ajouterPublication(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/pub']);
  }
  supprimerPublication(id){
    this.dataService
      .supprimerPublication(id)
      .subscribe(()=> this.goBack());
      
}
}
 
