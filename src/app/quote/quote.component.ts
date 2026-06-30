import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  template: `
    <section class="quote-page">
      <div class="quote-card">
        <img src="/assets/them.png" alt="Thematic decorative image" class="quote-image" />
        <p class="quote-text">“Therefore what God has joined together,<br>let no one separate.”</p>
        <p class="quote-author">Mark 10:9</p>
        <button class="btn" (click)="revealVenue.emit()">Reveal Venue</button>
      </div>
    </section>
  `
})
export class QuoteComponent {
  @Output() revealVenue = new EventEmitter<void>();
}
