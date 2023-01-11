import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ClientModule } from '../client/client.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ClientModule, SharedModule],
})
export class CoreModule {}
