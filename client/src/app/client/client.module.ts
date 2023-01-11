import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientService } from './services/client.service';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientComponent } from './components/client/client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },
  { path: 'edit-client/:id', component: EditClientComponent },
  { path: 'add-client', component: AddClientComponent },
];

@NgModule({
  declarations: [
    AddClientComponent,
    ClientFormComponent,
    ClientComponent,
    EditClientComponent,
    ClientsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [ClientService],
})
export class ClientModule {}
