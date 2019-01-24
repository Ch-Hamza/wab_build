import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private app:AppComponent) { }

  ngOnInit() {
  }
Site(){
    this.app.EspaceAdmin=false;
}
}
