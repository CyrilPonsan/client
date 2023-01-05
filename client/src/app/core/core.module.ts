import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsModule } from '../contacts/contacts.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ContactsModule],
})
export class CoreModule {}
