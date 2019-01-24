import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-modif-contact-us',
  templateUrl: './modif-contact-us.component.html',
  styleUrls: ['./modif-contact-us.component.scss']
})
export class ModifContactUsComponent implements OnInit {

  constructor(private app:AppComponent) {
    app.EspaceAdmin=true;
  }

  ngOnInit() {
  }

}
