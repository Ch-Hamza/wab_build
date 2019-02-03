import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  test;
  constructor(private app:AppComponent) {
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test);
  }

  ngOnInit() {
    
  }
Admin(){
    this.app.EspaceAdmin=true;
    }
logout(){
      this.app.Adminn=false;
      localStorage.clear();
}
}
