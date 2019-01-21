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


getPhoto (url): any {
  return this.Http.get(url);
}
}
