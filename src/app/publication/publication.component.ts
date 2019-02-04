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
    pages=[];
    n;
    nb;
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
      this.dataService.getPublicationsnum().subscribe(res => {
          if(res[0]['COUNT(id)']%6==0){
              this.n= res[0]['COUNT(id)']/6;}
          else
          {this.n= (res[0]['COUNT(id)']/6)+1;
              this.n=parseInt(this.n);
              console.log(this.n);}
          if(this.n>5){
              this.nb=5;}
          else this.nb=this.n;
          for(let i=1;i<=this.nb;i++){
              this.pages.push(i);
          }
          console.log(this.pages);
      });
    //this.publications = data['publications'];
    this.dataService.getPublicationspage(1).subscribe(res => {
      this.publications = res;
      this.publications.reverse();
      let compteurAnnee = 0;
      this.publications.map(
        (a) => {
          compteurAnnee++;
          a.verif = compteurAnnee % 4 ? false : true;
          return a;
        });
      console.log(this.publications);
    });

  }

  ngOnInit() {
  }
    getpub(i){
        this.dataService.getPublicationspage(i).subscribe(res => {
            this.publications = res;
            this.publications.reverse();
            console.log(this.publications);
        });
        this.pages=[];
        if(this.n-i>=5){
            this.nb=i+5;}
        else{this.nb=this.n;}
        if(i>1){i=i-1;}
        for(i;i<=this.nb;i++){
            this.pages.push(i);
        }
    }
}
