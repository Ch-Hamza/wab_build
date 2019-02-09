import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {message} from '../message';
@Component({
  selector: 'app-affich-un-message-admin',
  templateUrl: './affich-un-message-admin.component.html',
  styleUrls: ['./affich-un-message-admin.component.scss']
})
export class AffichUnMessageAdminComponent implements OnInit {

  model = new message();
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.dataService.getMessage(id).subscribe(res => {
        this.model = res[0];
        console.log(this.model);
    });
  }

}
