import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {publication} from '../publication'; 
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../data.service';   

@Component({
  selector: 'app-modif-publication',
  templateUrl: './modif-publication.component.html',
  styleUrls: ['./modif-publication.component.scss']
})
export class ModifPublicationComponent implements OnInit {
formOnOff=false;
test;
publications;
    pages=[];
    n;
    nb;
constructor(private router: Router, private dataService: DataService,private app:AppComponent) {
    app.EspaceAdmin=true;
    this.dataService.getPublicationsnum().subscribe(res => {
        if(res[0]['COUNT(id)']%8==0){
            this.n= res[0]['COUNT(id)']/8;}
        else
        {this.n= (res[0]['COUNT(id)']/8)+1;
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
    this.dataService.getPublicationspage(1).subscribe(res => {
        this.publications = res;
        this.publications.reverse();
        console.log(this.publications);
    });

    /*this.dataService.getPublications().subscribe(res => {
      this.publications = res;
      console.log(this.publications);
    });*/
  }

  ngOnInit() {
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
    model = new publication();
    ajouterPublication(){
      this.dataService
        .ajouterPublication(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/pub']);
  }
  supprimerPublication(id){
    if(confirm("Voulez vous vraiment supprimer cette publication") ){
    this.dataService
      .supprimerPublication(id)
      .subscribe(()=> this.goBack());
      location.reload();
    }
}
    getpub(i){
        this.dataService.getPublicationspage(i).subscribe(res => {
            this.publications = res;
            this.publications.reverse();
            console.log(this.publications);
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
}
 
