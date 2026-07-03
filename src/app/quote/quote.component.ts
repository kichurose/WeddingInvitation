import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  template: `
    <section class="quote-page">
      <div class="quote-card">
        <img src="assets/shared image.png" alt="Thematic decorative image" class="quote-image" />
        <p class="quote-text">“Therefore what God has joined together,<br>let no one separate.”</p>
        <p class="quote-author">Mark 10:9</p>
        <div class="name-grid">
          <div class="name-card groom">
            <h3>Mathew Francis Paul</h3>
            <p>S/o Mr. C P George Lawrence & Mrs. Tressa K P</p>
            <p>Chalaveetil, Ancy Lane, Vaduthala</p>
          </div>
          <div class="name-card bride">
            <h3>Riya Maria Solomon</h3>
            <p>D/o Late A J Solomon & Mrs. Elizabeth Solomon</p>
            <p>Arakkal House, St Martin Road, Palarivattom</p>
          </div>
        </div>
        <button class="btn" (click)="revealVenue.emit()">Reveal Venue</button>
      </div>
    </section>
  `
  ,
  styles: [
    `
      .name-grid{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px}
      .name-card{flex:1 1 260px;min-width:240px;max-width:360px;text-align:left;background:rgba(255,255,255,.95);border:1px solid #e9e0eb;border-radius:20px;padding:20px;box-shadow:0 16px 30px rgba(92,79,109,.08)}
      .name-card h3{font-family:Cinzel,serif;font-size:1.1rem;margin:0 0 10px;color:#5c4f6d}
      .name-card p{margin:0 0 8px;color:#7d6487;line-height:1.6}
      .name-card.groom h3,
      .name-card.bride h3{font-family:"Great Vibes",cursive;font-size:1.7rem;margin-bottom:10px;color:#5c4f6d}

      @media (max-width: 640px){
        .name-grid{flex-direction:column;gap:8px}
        .name-card{padding:24px;max-height:fit-content}
        .name-card h3{font-size:1.1rem;margin:0 0 4px;line-height:1.1}
        .name-card p{font-size:.75rem;margin:0 0 3px;line-height:1.1}
      }
    `
  ]
})
export class QuoteComponent {
  @Output() revealVenue = new EventEmitter<void>();
}
