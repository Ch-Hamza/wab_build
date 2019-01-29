import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/contenu.json';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { delay } from 'q';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  /*date;
  description;
  lien_pdf;
  getDetails(id) {
  
    const details = data['publications'].filter(detail => {
      if (detail.id == id) {
        this.date = detail.date;
        this.description = detail.description;
        this.lien_pdf= detail.lien_pdf;
        
      }
    });
  }*/


  publications;
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
    //this.publications = data['publications'];
    this.dataService.getPublications().subscribe(res => {
      this.publications = res;
      console.log(this.publications);
    });
    let compteurAnnee = 0;
    this.publications.map(
      (a) => {
        compteurAnnee++;
        a.verif = compteurAnnee % 4 ? false : true;
        return a;
      });
  }

  ngOnInit() {
  }

}
