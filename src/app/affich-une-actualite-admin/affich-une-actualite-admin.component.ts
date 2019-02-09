import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {actualite} from '../actualite';
@Component({
  selector: 'app-affich-une-actualite-admin',
  templateUrl: './affich-une-actualite-admin.component.html',
  styleUrls: ['./affich-une-actualite-admin.component.scss']
})
export class AffichUneActualiteAdminComponent implements OnInit {

  model = new actualite();
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
   console.log(id);
   this.dataService.getActualite(id).subscribe(res => {
       this.model = res[0];
       console.log(this.model);
   });
  }

}
