import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BoutonComponent } from './components/bouton/bouton.component';

@NgModule({
  declarations: [BoutonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, BoutonComponent],
})
export class SharedModule {}
