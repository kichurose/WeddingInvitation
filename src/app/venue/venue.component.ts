import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CountdownComponent],
  template: `<section id="venue">
      <div class="card venue-card">
        <div class="venue-header">
          <div class="venue-icon"><i class="fas fa-church"></i></div>
          <div class="venue-title"><strong>St. Antony's Church</strong></div>
          <div class="venue-sub">
            Vaduthala, Kerala, India
            <div class="venue-dove"><i class="fas fa-dove"></i></div>
          </div>
        </div>

       

        <div class="date-card">
          <button class="date-btn">July 16, 2026, Thursday
          <br>11:00 AM</button>

        
        </div> <div class="count-wrap">
          <div class="count-title">Countdown to Wedding</div>
          <div class="count-inner">
            <app-countdown></app-countdown>
          </div>
        </div>

        <div class="actions">
          <a class="btn large" target="_blank" href="https://maps.app.goo.gl/VmMq9Mt9EZk7qfWp6">Get Directions</a>
        </div>
      </div>
    </section>`
  ,
  styles: [
    `
      .venue { font-family: Arial, Helvetica, sans-serif; }
      .venue strong { font-family: Georgia, 'Times New Roman', serif; font-weight: 700; }
      #venue {
        padding: 28px 18px 48px;
      }

      .venue-header{width:100%;text-align:center;padding:8px 0 18px}
      .venue-icon{font-size:32px;color:#7d6487;margin-bottom:8px}
      .venue-title{font-family:Cinzel,serif;font-size:32px;color:#7d6487;font-weight:800}
      .venue-sub{font-family:Poppins,sans-serif;color:#7d6487;margin-top:6px;line-height:1.5}
      .venue-dove{margin:10px auto 0;font-size:1.3rem;display:inline-flex;justify-content:center}

      .count-wrap{width:100%;display:flex;flex-direction:column;align-items:center;margin:20px 0}
      .count-title{font-size:1rem;font-weight:700;color:#7d6487;margin-bottom:12px;text-transform:uppercase;letter-spacing:.14em}
      .count-inner{width:100%;max-width:720px;background:#f4eff9;border:1px solid #d7cfe5;border-radius:28px;padding:18px;box-shadow:0 18px 40px rgba(125,100,135,.12)}
      /* enlarge countdown boxes */
      .count .box{width:110px;padding:18px;border-radius:22px}
      .count .box span{font-size:36px;color:#7d6487}
      .count small{color:#7d6487}

      .date-card{width:100%;max-width:720px;margin:20px auto;display:grid;gap:12px;justify-items:center}
      .date-btn{min-width:320px;padding:18px 22px;border:none;border-radius:20px;background:rgba(125,100,135,.08);box-shadow:0 8px 20px rgba(125,100,135,.12);font-family:Cinzel,serif;font-weight:700;color:#7d6487;text-align:center;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}
      .date-btn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(125,100,135,.18)}

      .actions{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:18px;max-width:720px}
      .btn.large{padding:16px 36px;border-radius:40px;font-size:1.05rem;background:#7d6487;color:#fff}
      .small-actions{display:flex;gap:10px}
      .icon-btn{width:52px;height:52px;border-radius:999px;border:none;background:rgba(125,100,135,.12);box-shadow:0 8px 20px rgba(92,79,109,.06);cursor:pointer;font-size:18px;color:#7d6487}
    `
  ]
})
export class VenueComponent {
  copyLink() {
    const url = 'http://kalyanam.enna.ariyo.in/';
    navigator.clipboard.writeText(url).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    });
  }
}
