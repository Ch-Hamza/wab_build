import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-modif-publication',
  templateUrl: './modif-publication.component.html',
  styleUrls: ['./modif-publication.component.scss']
})
export class ModifPublicationComponent implements OnInit {
formOnOff=false;
  constructor(private app:AppComponent) {
    app.EspaceAdmin=true;
  }

  ngOnInit() {
  }
    formOn(){
        this.formOnOff=true;
    }

    formOff(){
        this.formOnOff=false;
    }
}
