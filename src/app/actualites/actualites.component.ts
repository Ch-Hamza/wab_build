import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/contenu.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  actualites;
  constructor(private router: Router) {
    this.actualites = data['actualites'];
  }

  ngOnInit() {
  }
}
