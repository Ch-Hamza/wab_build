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
    pages=[];
    n;
    nb;
  constructor(private router: Router, private dataService: DataService,private app:AppComponent  ) {
      app.EspaceAdmin=true;
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
      /*this.dataService.getActualites().subscribe(res => {
        this.actualites = res;
        console.log(this.actualites);
      });*/
    
  }
  
  ngOnInit() { 
    console.log(this.app.Adminn);
    console.log(localStorage.getItem('name'),"hhhh");
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test);
  }
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
        location.reload();
  }

    supprimerActualite(id){
      if(confirm("Voulez vous vraiment supprimer cette actualité") ){
      this.dataService
        .supprimerActualite(id)
        .subscribe(()=> this.goBack());
        location.reload();
      }
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
