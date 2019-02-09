import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';  
import {message} from '../message';
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
  selector: 'app-boite-de-reception',
  templateUrl: './boite-de-reception.component.html',
  styleUrls: ['./boite-de-reception.component.scss']
})
export class BoiteDeReceptionComponent implements OnInit {
  messages ;
  test;
  newsletter=false;
  constructor(private router: Router, private dataService: DataService,private app:AppComponent) {
      app.EspaceAdmin=true;
      this.dataService.getMessages().subscribe(res => {
        this.messages = res;
        console.log(this.messages);
      });
  }

  ngOnInit() {
      if (localStorage.getItem('name') )
      { this.test =true;}
      else this.test=false ;
  }
    newsletterOn(){this.newsletter=true;}
    newsletterOff(){this.newsletter=false;}

}
