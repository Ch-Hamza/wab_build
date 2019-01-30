import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  actualites;
  publications;
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
  getPublications() {
    return this.Http.get('http://localhost/Back/publication.php');
  }
  getPublication(id) {
    console.log(id);
    return this.Http.get('http://localhost/Back/get_pub_by_id.php?id=' + id);
  }
  addMessage(obj) {

    let body = new URLSearchParams();
    body.set('lastName', obj.lastName);
    body.set('firstName', obj.firstName);
    body.set('phone', obj.phone);
    body.set('email', obj.email);
    body.set('subject', obj.subject);
    body.set('message', obj.message);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://localhost/Back/get_responseContact.php', body.toString(), { headers, responseType: "text" as 'json' });
  }
  addNewsletter(obj) {
    let body = new URLSearchParams();
    body.set('email', obj.email);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://localhost/Back/addNewsletter.php', body.toString(), { headers, responseType: "text" as 'json' });
  }

  isLogged(data: any) {
    return this.Http.post('http://localhost/Back/login.php', data);

  }


  getPhoto(url): any {
    return this.Http.get(url);
  }
}
