import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {};
  test = false;
  onSubmit() {
    this.test = true;
    alert('votre message est envoyé\n\n merci pour votre interet \n\n')
    console.log(this.model)
    this.dataService.addMessage(this.model).subscribe(res => { console.log(res) });
  }

  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;


  }


  ngOnInit() {
  }

}
