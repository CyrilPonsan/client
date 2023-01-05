import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { Contact } from '../core/models/contact.model';
import { ContactsService } from './services/contacts.service';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  declarations: [ContactsComponent, ContactComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ContactsService],
})
export class ContactsModule {}
