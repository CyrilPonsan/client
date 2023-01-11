import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}
  onNewClient(newContact: any): void {
    this.clientService
      .httpAddClient(newContact.prenom, newContact.nom)
      .subscribe((response: Client) => this.router.navigateByUrl('/clients'));
  }
}
