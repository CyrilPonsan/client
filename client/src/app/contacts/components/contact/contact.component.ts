import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact!: Contact;
  ngOnInit(): void {}
}
