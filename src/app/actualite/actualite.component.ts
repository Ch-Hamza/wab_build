import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as data from '../../assets/contenu.json';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  actualite =  { id : '' , titre: '' , contenu: '', date : ''};
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
   let id = this.activatedRoute.snapshot.params['id'];
   console.log(id);
   for(let actualitee of data['actualites']){
     console.log(actualitee.id);
        if(actualitee.id==id){
          this.actualite=actualitee;
          break;
        }
      }
  }
}
