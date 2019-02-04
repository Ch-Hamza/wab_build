import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import{Router} from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})

export class HeaderAdminComponent implements OnInit {
  test : any ;
  constructor(private app:AppComponent,private router:Router) { }

  ngOnInit() {
    if (localStorage.getItem['name'] )
    { this.test =true}
    else this.test=false ;
  }
Site(){
    this.app.EspaceAdmin=false;
}
logout(){
        this.app.Adminn=false;
        localStorage.clear();
        this.router.navigate(['/cabinet']) ;
    }
}
