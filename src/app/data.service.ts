import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


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
    return this.Http.get('http://www.hamzachebil.tn/Back/actualite.php');
  }
  getActualitespage(i) {
    return this.Http.get('http://www.hamzachebil.tn/Back/actualitepage.php?i=' + i);
  }
  getActualitesnum() {
    return this.Http.get('http://www.hamzachebil.tn/Back/actualitenum.php');
  }
  getActualite(id) {
    console.log(id);
    return this.Http.get('http://www.hamzachebil.tn/Back/get_actulite_by_id.php?id=' + id);
  }
  getPublications() {
    return this.Http.get('http://www.hamzachebil.tn/Back/publication.php');
  }
  getPublication(id) {
    console.log(id);
    return this.Http.get('http://www.hamzachebil.tn/Back/get_pub_by_id.php?id=' + id);
  }
  getPublicationsnum() {
    return this.Http.get('http://www.hamzachebil.tn/Back/publicationnum.php');
  }
  getPublicationspage(i) {
    return this.Http.get('http://www.hamzachebil.tn/Back/publicationpage.php?i=' + i);
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
    return this.Http.post<string>('http://www.hamzachebil.tn/Back/get_responseContact.php', body.toString(), { headers, responseType: "text" as 'json' });
  }
  addNewsletter(obj) {
    let body = new URLSearchParams();
    body.set('email', obj.email);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    return this.Http.post<string>('http://www.hamzachebil.tn/Back/addNewsletter.php', body.toString(), { headers, responseType: "text" as 'json' });
  }
  getContact() {
    return this.Http.get('http://www.hamzachebil.tn/Back/contact.php');
  }

  isLogged(data: any) {
    return this.Http.post('http://www.hamzachebil.tn/Back/login.php', data);

  }


  getPhoto(url): any {
    return this.Http.get(url);
  }


  ajouterPublication(info) {
    return this.Http.post("http://www.hamzachebil.tn/Back/ajouterPublication.php", info);
  }


  modifierPublication(info) {
    return this.Http.post("http://www.hamzachebil.tn/Back/modifierPublication.php", info);
  }

  supprimerPublication(id) {
    return this.Http.post("http://www.hamzachebil.tn/Back/supprimerPublication.php/", { 'id': id })
  }


  ajouterActualite(info) {
    return this.Http.post("http://www.hamzachebil.tn/Back/ajouterActualite.php", info);
  }
  modifierActualite(info) {
    return this.Http.post("http://www.hamzachebil.tn/Back/modifierActualite.php", info);
  }
  supprimerActualite(id) {
    return this.Http.post("http://www.hamzachebil.tn/Back/supprimerActualite.php/", { 'id': id })
  }

  getInfoContact(id) {
    return this.Http.get('http://www.hamzachebil.tn/Back/infocontact.php?id=' + id);
  }
  modifierInfoContact(info) {
    return this.Http.post("http://www.hamzachebil.tn/Back/modifierInfoContact.php", info);
  }
  getMessages() {
    return this.Http.get('http://www.hamzachebil.tn/Back/messages.php');
  }
  getMails() {
    return this.Http.get('http://www.hamzachebil.tn/Back/mails.php');
  }
  getMessage(id) {
    return this.Http.get('http://www.hamzachebil.tn/Back/getmessage.php?id=' + id);
  }
  getMessagespage(id) {
    return this.Http.get('http://www.hamzachebil.tn/Back/messagespage.php?id=' + id);
  }
  getMessagessnum() {
    return this.Http.get('http://www.hamzachebil.tn/Back/messagesnum.php');
  }
  getMailspage(id) {
    return this.Http.get('http://www.hamzachebil.tn/Back/mailspage.php?id=' + id);
  }
  getMailsnum() {
    return this.Http.get('http://www.hamzachebil.tn/Back/mailsnum.php');
  }
  addImage(fd) {
    return this.Http.post('http://www.hamzachebil.tn/Back/addFile.php', fd, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }
}
