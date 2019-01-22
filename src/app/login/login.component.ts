import { Component, OnInit, Injectable } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import {
  DataService
} from '../data.service';
import { error } from '@angular/compiler/src/util';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable()
export class LoginComponent implements OnInit {
  login: any = {
    username : '',
    password : '',
    tos:''
  };

  data : any ={
    username:'',
  
    password:''
  }
  submitted =false;
  success = false;
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private dataserv : DataService , private router : Router) { 
  
  }
  


  ngOnInit() {
    this.messageForm = this.formBuilder.group({
			username:[ '',Validators.required],
			password:['', Validators.required]
		});


  }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
this.data.username=this.login.username ;
this.data.password=this.login.password;

console.log(this.data);

this.dataserv.isLogged(this.data).subscribe(
  (res :any) => {
    console.log(res);
    console.log(res.success);
    if (res.success==true){
   localStorage.setItem('name',this.data.password);
  console.log("test");
  console.log(localStorage.getItem('name'));
this.router.navigate(['/cabinet'])    
}
    else alert ('eeeeeeeey');
    
    
   },
  (error) => {
    console.log(error);
  }

)


}

}
