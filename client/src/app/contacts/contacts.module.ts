import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsService } from './services/contacts.service';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: 'add-contact', component: AddContactComponent },
];

@NgModule({
  declarations: [
    ContactsComponent,
    ContactComponent,
    AddContactComponent,
    ContactFormComponent,
    EditContactComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [ContactsService],
})
export class ContactsModule {}
