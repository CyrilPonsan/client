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
}
