import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http : HttpClient) { }

  
getData(url) : any {
  return this.Http.get(url);
}


getPhoto (url):any {
  return this.Http.get(url);
}
}
