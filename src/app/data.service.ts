import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import {HttpClient} from '@angular/common/http';

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
}
