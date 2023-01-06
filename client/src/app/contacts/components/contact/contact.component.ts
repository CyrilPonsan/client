import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Output() contactToRemoveId = new EventEmitter<number>();
  @Input() contact!: Contact;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContactToRemove(contactId: number) {
    this.contactToRemoveId.emit(contactId);
  }

  goToEditContact(contactId: number): void {
    this.router.navigate(['/edit-contact', contactId]);
  }
}
