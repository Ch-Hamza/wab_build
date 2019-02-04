import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';  
import {actualite} from '../actualite';
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
  selector: 'app-modif-actualite',
  templateUrl: './modif-actualite.component.html',
  styleUrls: ['./modif-actualite.component.scss']
})
export class ModifActualiteComponent implements OnInit {
formOnOff=false;
actualites;
test ;
selectedFile: File

  constructor(private router: Router, private dataService: DataService,private app:AppComponent  ) {
      app.EspaceAdmin=true;
      this.dataService.getActualites().subscribe(res => {
        this.actualites = res;
        console.log(this.actualites);
      });
    
  }
  
  ngOnInit() { 
    console.log(this.app.Adminn);
    console.log(localStorage.getItem('name'),"hhhh");
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test);
    
    
    
  }
   
formOn(){
    this.formOnOff=true;
}

formOff(){
        this.formOnOff=false;
    }

    goBack(){
      this.router.navigate(['/admin']);
    }

    model = new actualite();
    ajouterActualite(){
      this.dataService
        .ajouterActualite(this.model)
        .subscribe(()=> this.goBack());
  }

    supprimerActualite(id){
      this.dataService
        .supprimerActualite(id)
        .subscribe(()=> this.goBack());
        
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {

    this.selectedFile = event.target.files[0];
    const fd =new FormData ;
    console.log(this.selectedFile);
    
    fd.append('image', this.selectedFile, this.selectedFile.name);
     this.dataService.addImage(fd).subscribe(res =>{
        console.log(res);
    console.log("coucou");
    }

     )
     console.log(11);
     console.log(fd);
     
     
  }}




}
