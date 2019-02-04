import {
  Component,
  OnInit
} from '@angular/core';
import { AppComponent } from '../app.component';
import * as data from '../../assets/contenu.json';
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
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  actualites;
  pages=[];
  n;
  nb;
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
      this.dataService.getActualitesnum().subscribe(res => {
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
    this.dataService.getActualitespage(1).subscribe(res => {
      this.actualites = res;
      this.actualites.reverse();
      console.log(this.actualites);
    });
  }

  ngOnInit() { }
    getact(i){
    this.dataService.getActualitespage(i).subscribe(res => {
            this.actualites = res;
            this.actualites.reverse();
            console.log(this.actualites);
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

