import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.httpGetContacts().subscribe((response: any) => {
      this.contacts = response;
      console.log(response);
    });
  }
}
