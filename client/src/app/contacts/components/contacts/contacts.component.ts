import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactsService.httpGetContacts().subscribe((response: any) => {
      this.contacts = response;
      console.log(response);
    });
  }

  onDeleteContact(contactId: number) {
    this.contactsService
      .httpRemoveContact(contactId)
      .subscribe((response) => (this.contacts = response.data));
  }

  goToAddContact() {
    this.router.navigateByUrl('/add-contact');
  }
}
