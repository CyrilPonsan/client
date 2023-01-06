import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Output() newContact = new EventEmitter<any>();
  @Input() contact!: Contact;
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.contact);

    this.contactForm = this.formBuilder.group({
      prenom: [null, [Validators.required]],
      nom: [null, Validators.required],
    });
    if (this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contact = {
        prenom: this.contactForm.value.prenom,
        nom: this.contactForm.value.nom,
      };
      this.newContact.emit(contact);
    }
  }
}
