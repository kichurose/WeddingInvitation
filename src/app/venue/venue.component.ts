import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CountdownComponent],
  template: `<section id="venue">
      <div class="card venue-card">
        <div class="venue"><strong>St. Antony's Church</strong><br>Vaduthala</div>
        <div class="venue-date">
          <span class="date-main">July 16, 2026</span>
          <div class="date-sub">Thursday, 11:00 AM</div>
        </div>
        <a class="btn" target="_blank" href="https://maps.app.goo.gl/VmMq9Mt9EZk7qfWp6">📍 Get Directions</a>
        <h3>Countdown</h3>
        <app-countdown></app-countdown>
      </div>
    </section>`
  ,
  styles: [
    `
      .venue { font-family: Arial, Helvetica, sans-serif; }
      .venue strong { font-family: Georgia, 'Times New Roman', serif; font-weight: 700; font-size: 1.05em; }
      #venue {
        background-image: linear-gradient(135deg, rgba(255,255,255,.82), rgba(244,236,230,.7)), url('/assets/them.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 48px 24px;
      }
      .venue-date {
        display: inline-block;
        background: #f2eef7; /* match countdown box background */
        border: 1px solid #d7cfe5;
        color: #7d6487; /* countdown accent color */
        padding: 0.5rem 0.75rem;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(92,79,109,0.06);
        margin: 0.5rem 0;
      }
      .venue-date .date-main { display:block; font-weight:800; font-size:1.06em; }
      .venue-date .date-sub { display:block; font-weight:600; font-size:0.92em; color:#6b6177; margin-top:0.25rem; }
    `
  ]
})
export class VenueComponent {}
