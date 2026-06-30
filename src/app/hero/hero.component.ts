import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <h1>Mathew<br>&<br>Riya</h1>
      <p>Together with our families,<br>we joyfully invite you to celebrate our wedding.</p>
      <button class="btn" (click)="openInvitation.emit()">Open Invitation</button>
    </section>
  `
})
export class HeroComponent {
  @Output() openInvitation = new EventEmitter<void>();
}
