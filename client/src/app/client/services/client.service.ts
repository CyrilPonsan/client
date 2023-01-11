import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client.model';

@Injectable()
export class ClientService {
  apiUrl: string = 'http://localhost:3000/v1/client';
  constructor(private http: HttpClient) {}

  httpGetClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/`);
  }

  httpRemoveClient(ClientId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${ClientId}`);
  }

  httpAddClient(prenom: string, nom: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, { prenom, nom });
  }

  httpGetClientById(ClientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${ClientId}`);
  }

  httpUpdateClient(
    prenom: string,
    nom: string,
    ClientId: number
  ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${ClientId}`, { prenom, nom });
  }
}
