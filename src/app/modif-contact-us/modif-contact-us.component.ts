import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {infocontact} from '../infocontact';
import * as data from '../../assets/contenu.json';
import {ActivatedRoute} from '@angular/router';
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
  selector: 'app-modif-contact-us',
  templateUrl: './modif-contact-us.component.html',
  styleUrls: ['./modif-contact-us.component.scss']
})
export class ModifContactUsComponent implements OnInit {
  model = new infocontact();
  test;
  constructor(private router: Router, private dataService: DataService,private app:AppComponent, private activatedRoute: ActivatedRoute) {
    app.EspaceAdmin=true;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.dataService.getInfoContact(id).subscribe(res => {
        this.model = res[0];
        console.log(this.model);  
    });
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test);
  }
  modifierInfoContact(){

    this.dataService
        .modifierInfoContact(this.model)
        .subscribe(()=> this.goBack());
       console.log(this.model);

      }
       goBack(){
        this.router.navigate(['/modifcontact']);
      }
}
