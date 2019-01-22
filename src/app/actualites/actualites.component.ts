import {
  Component,
  OnInit
} from '@angular/core';
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
  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getActualites().subscribe(res => {
      this.actualites = res;
      console.log(this.actualites);
    });
  }

  ngOnInit() {}
}
