import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {publication} from '../publication';
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
  selector: 'app-modifier-une-publication',
  templateUrl: './modifier-une-publication.component.html',
  styleUrls: ['./modifier-une-publication.component.scss']
})
export class ModifierUnePublicationComponent implements OnInit {
  test;
  model = new publication();
  constructor(private router: Router, private dataService: DataService,private app:AppComponent, private activatedRoute: ActivatedRoute) { 
    app.EspaceAdmin=true;
    
  }

  ngOnInit() {
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test);
    let id = this.activatedRoute.snapshot.params['id'];
   console.log(id);
   this.dataService.getPublication(id).subscribe(res => {
       this.model = res[0];
       console.log(this.model);  
   });
  }
  modifierPublication(){

    this.dataService
        .modifierPublication(this.model)
        .subscribe(()=> this.goBack());
       console.log(this.model);

      }
       goBack(){
        this.router.navigate(['/pub']);
      }
    }
 
