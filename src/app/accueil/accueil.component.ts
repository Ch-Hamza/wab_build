import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
$posts:any[] = [];
$actual:any[] =[];
  constructor(private dataserv : DataService) { 

    this.dataserv.getData('https://jsonplaceholder.typicode.com/posts').subscribe(  //url back 
      (data : any) => { 
        for (var i=0 ; i<4 ;i++){ //retour back les 4 plus récents 
        this.$posts.push(data[i]) ;
      
      }
        
      console.log(this.$posts);
        
        
        
        
      } ,

(error)=> { console.log(error);
}

    )

    



  }

  ngOnInit() {
  }

}
