import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-modif-contact-us',
  templateUrl: './modif-contact-us.component.html',
  styleUrls: ['./modif-contact-us.component.scss']
})
export class ModifContactUsComponent implements OnInit {
test;
  constructor(private app:AppComponent) {
    app.EspaceAdmin=true;
  }

  ngOnInit() {
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test);
  }

}
