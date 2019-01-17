import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {};

  onSubmit() {

    alert('votre message est envoyé\n\n merci pour votre interet \n\n')
  }
  constructor() { }

  ngOnInit() {
  }

}
