import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
actualites;
  constructor(private Http: HttpClient) { }
getData(url): any {
  return this.Http.get(url);
}

getActualites() {
    return this.Http.get('http://localhost/Back/actualite.php');
    }
getActualite(id) {
      console.log(id);
        return this.Http.get('http://localhost/Back/get_actulite_by_id.php?id=' + id);
    }

isLogged(data :any){
  return this.Http.post('http://localhost/Back/login.php',data);

}


getPhoto (url): any {
  return this.Http.get(url);
}


getPublications(){
  return this.Http.get('http://localhost/Back/publication.php');
}

ajouterPublication(info){
  return this.Http.post("http://localhost/Back/ajouterPublication.php",info);
}

getPublication(id) {
  console.log(id);
    return this.Http.get('http://localhost/Back/get_publication_by_id.php?id=' + id);
}

modifierPublication(info) { 
    return this.Http.post("http://localhost/Back/modifierPublication.php", info);
}

supprimerPublication(id){
  return this.Http.post("http://localhost/Back/supprimerPublication.php/",{'id':id})
}

 
ajouterActualite(info){
  return this.Http.post("http://localhost/Back/ajouterActualite.php",info);
}
modifierActualite(info) { 
  return this.Http.post("http://localhost/Back/modifierActualite.php", info);
}
supprimerActualite(id){
  return this.Http.post("http://localhost/Back/supprimerActualite.php/",{'id':id})
}
}
