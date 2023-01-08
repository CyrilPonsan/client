import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss'],
})
export class BoutonComponent {
  @Output() action = new EventEmitter<void>();
  @Input() label!: string;

  onAction(): void {
    this.action.emit();
  }
}
