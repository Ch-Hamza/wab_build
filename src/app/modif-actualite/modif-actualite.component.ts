import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-modif-actualite',
  templateUrl: './modif-actualite.component.html',
  styleUrls: ['./modif-actualite.component.scss']
})
export class ModifActualiteComponent implements OnInit {
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
