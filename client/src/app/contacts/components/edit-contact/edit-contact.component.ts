import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contact!: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId !== null) {
      this.contactsService
        .httpGetContactById(+contactId)
        .subscribe((response) => (this.contact = response));
    }
  }

  onContactToUpdate(contactToUpdate: any): void {
    this.contactsService
      .httpUpdateContact(
        contactToUpdate.prenom,
        contactToUpdate.nom,
        this.contact.id
      )
      .subscribe((response) => this.router.navigateByUrl('/contacts'));
  }
}
