import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
$photos : Object;
  constructor(private dataserv : DataService) {
 this.dataserv.getPhoto("https://jsonplaceholder.typicode.com/photos").subscribe(
(data : any) => {this.$photos = data ;
  console.log(this.$photos); }



 )


   }

  ngOnInit() {
  }

}
