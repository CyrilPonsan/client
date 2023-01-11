import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients!: Client[];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.httpGetClients().subscribe((response: any) => {
      this.clients = response;
    });
  }

  onDeleteClient(contactId: number) {
    this.clientService
      .httpRemoveClient(contactId)
      .subscribe((response) => (this.clients = response.data));
  }

  goToAddClient() {
    this.router.navigateByUrl('/add-client');
  }
}
