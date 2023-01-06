import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/contact.model';

@Injectable()
export class ContactsService {
  apiUrl: string = 'http://localhost:3000/v1/contacts';
  constructor(private http: HttpClient) {}

  httpGetContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/`);
  }

  httpRemoveContact(contactId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${contactId}`);
  }

  httpAddContact(prenom: string, nom: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, { prenom, nom });
  }

  httpGetContactById(contactId: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${contactId}`);
  }

  httpUpdateContact(
    prenom: string,
    nom: string,
    contactId: number
  ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${contactId}`, { prenom, nom });
  }
}
