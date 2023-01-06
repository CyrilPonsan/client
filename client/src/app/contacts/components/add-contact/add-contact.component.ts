import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onNewContact(newContact: any): void {
    this.contactsService
      .httpAddContact(newContact.prenom, newContact.nom)
      .subscribe((response: Contact) => this.router.navigateByUrl('/contacts'));
  }
}
