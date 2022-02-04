import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contacts';

const AUTH_API = 'http://192.168.100.126:9000/ebm/contacts/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //header: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  add(name: string, email: string, phoneno: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'add',
      {
        name,
        email,
        phoneno,
      },
      httpOptions
    );
  }

  //Return list of all lease details
  all(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(AUTH_API + 'all');
  }
}
