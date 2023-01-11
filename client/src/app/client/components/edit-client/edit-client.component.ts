import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit {
  client!: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId !== null) {
      console.log(clientId);

      this.clientService
        .httpGetClientById(+clientId)
        .subscribe((response) => (this.client = response));
    }
  }

  onContactToUpdate(clientToUpdate: any): void {
    this.clientService
      .httpUpdateClient(
        clientToUpdate.prenom,
        clientToUpdate.nom,
        this.client.id
      )
      .subscribe((response) => this.router.navigateByUrl('/contacts'));
  }
}
