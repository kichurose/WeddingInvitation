import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  template: `
    <section class="hero hero-with-image">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-subtitle">With hearts full of joy</p>
        <h1>Mathew<br>&<br>Riya</h1>
        <p class="hero-message">are inviting you to celebrate the joyous union of our lives and hearts.</p>
        <button class="btn" (click)="openInvitation.emit()">View Invitation</button>
      </div>
    </section>
  `
})
export class LandingComponent {
  @Output() openInvitation = new EventEmitter<void>();
}
