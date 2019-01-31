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
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
      this.dataService.getActualitesnum().subscribe(res => {
        if(res[0]['COUNT(id)']%6==0){
         this.n= res[0]['COUNT(id)']/6;}
        else this.n= res[0]['COUNT(id)']/6+1;
          for(let i=1;i<=this.n;i++){
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
    }
}

