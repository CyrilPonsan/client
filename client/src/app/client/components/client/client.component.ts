import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  @Output() clientToRemoveId = new EventEmitter<number>();
  @Input() client!: Client;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClientToRemove(clientId: number) {
    this.clientToRemoveId.emit(clientId);
  }

  goToEditClient(clientId: number): void {
    this.router.navigate(['/edit-client', clientId]);
  }
}
