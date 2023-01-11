import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  @Output() newclient = new EventEmitter<any>();
  @Input() client!: Client;
  clientForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.client);

    this.clientForm = this.formBuilder.group({
      prenom: [null, [Validators.required]],
      nom: [null, Validators.required],
    });
    if (this.client) {
      this.clientForm.patchValue(this.client);
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const client = {
        prenom: this.clientForm.value.prenom,
        nom: this.clientForm.value.nom,
      };
      this.newclient.emit(client);
    }
  }
}
