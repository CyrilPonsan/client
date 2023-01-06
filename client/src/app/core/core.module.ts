import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsModule } from '../contacts/contacts.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ContactsModule, SharedModule],
})
export class CoreModule {}
