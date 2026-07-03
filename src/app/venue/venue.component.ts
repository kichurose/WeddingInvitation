import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CountdownComponent],
  template: `<section id="venue">
      <div class="card venue-card">
        <div class="venue-header">
          <div class="ornament-top">✦</div>
         
           <div class="date-card">
          <div class="venue-invite">Your presence is awaited at their marriage</div>
         
          <button class="date-btn">16 | JULY | 2026<br>11:00 AM</button>
        </div>
          <div class="venue-icon"><i class="fas fa-church"></i></div>
          <div class="venue-title"><strong>St. Antony's Church</strong></div>
          <div class="venue-divider"></div>
          <div class="venue-sub">
            Vaduthala, Kochi
            <div class="venue-dove"><i class="fas fa-dove"></i></div>
          </div>
          <div class="ornament-bottom">✦</div>
        </div>
             <div class="actions">
          <a class="btn large" target="_blank" href="https://maps.app.goo.gl/VmMq9Mt9EZk7qfWp6">Get Directions</a>
        </div>

         <div class="section-divider">
          <i class="fas fa-clover"></i>
        </div>

        <div class="count-wrap">
          <div class="count-title">Countdown to Wedding</div>
          <div class="count-inner">
            <app-countdown></app-countdown>
          </div>
        </div>

        <div class="section-divider">
          <i class="fas fa-clover"></i>
        </div>

        <div class="venue-verse">
          <p>“I have found the one whom my soul loves.”</p>
          <span>Song of Solomon 3:4</span>
        </div>

        <div class="corner-flowers">
          <i class="fas fa-leaf flower-corner tl"></i>
          <i class="fas fa-leaf flower-corner tr"></i>
          <i class="fas fa-leaf flower-corner bl"></i>
          <i class="fas fa-leaf flower-corner br"></i>
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
      
      .venue-card{position:relative;border-radius:0;background:transparent;box-shadow:none;border:none;padding:0}

      .venue-header{width:100%;text-align:center;padding:8px 0 18px;animation:fadeUp .8s ease both;position:relative}
      .ornament-top{font-size:1.5rem;color:#d7cfe5;margin-bottom:8px;letter-spacing:0.2em}
      .header-flowers{display:flex;justify-content:center;gap:24px;margin:6px 0;animation:fadeUp .8s ease both 0.08s}
      .header-flowers i{font-size:1.4rem;color:#9b7fa8;opacity:0.8}
      .flower-left{transform:rotate(-20deg)}
      .flower-right{transform:rotate(20deg)}
      .venue-icon{font-size:48px;color:#7d6487;margin:8px 0;display:block;animation:fadeIn .8s ease both 0.1s;opacity:0}
      .venue-title{font-family:Cinzel,serif;font-size:32px;color:#7d6487;font-weight:800;margin:12px 0;animation:fadeUp .8s ease both 0.2s;opacity:0}
      .venue-divider{width:60px;height:2px;background:linear-gradient(90deg,transparent,#d7cfe5,transparent);margin:10px auto;animation:fadeUp .8s ease both 0.3s;opacity:0}
      .venue-sub{font-family:Poppins,sans-serif;color:#7d6487;margin-top:10px;line-height:1.8;animation:fadeUp .8s ease both 0.4s;opacity:0}
      .venue-dove{margin-top:8px;font-size:1.3rem;display:block;animation:fadeUp .8s ease both 0.5s;opacity:0}
      .ornament-bottom{font-size:1.5rem;color:#d7cfe5;margin-top:8px;letter-spacing:0.2em;animation:fadeUp .8s ease both 0.6s;opacity:0}

      .section-divider{width:80%;height:1px;background:linear-gradient(90deg,transparent,#e0d5e8,transparent);margin:16px auto;opacity:0.6;display:flex;justify-content:center;align-items:center}
      .section-divider i{color:#9b7fa8;font-size:1rem;opacity:0.7;margin:0 8px;position:relative;top:-1px}

      .corner-flowers{position:absolute;inset:0;pointer-events:none;overflow:hidden}
      .flower-corner{position:absolute;font-size:1.6rem;color:#9b7fa8;opacity:0.6}
      .flower-corner.tl{top:12px;left:16px;transform:rotate(-15deg)}
      .flower-corner.tr{top:12px;right:16px;transform:rotate(15deg) scaleX(-1)}
      .flower-corner.bl{bottom:12px;left:16px;transform:rotate(25deg)}
      .flower-corner.br{bottom:12px;right:16px;transform:rotate(-25deg) scaleX(-1)}

      .count-wrap{width:100%;display:flex;flex-direction:column;align-items:center;margin:20px 0;animation:fadeUp .8s ease both 0.5s;opacity:0}
      .count-title{font-size:1rem;font-weight:700;color:#7d6487;margin-bottom:12px;text-transform:uppercase;letter-spacing:.14em}
      .count-inner{width:100%;max-width:720px;background:#f4eff9;border:1px solid #d7cfe5;border-radius:28px;padding:18px;box-shadow:0 18px 40px rgba(125,100,135,.12)}
      .count .box{width:110px;padding:18px;border-radius:22px;animation:slideUp .6s ease both;opacity:0}
      .count .box span{font-size:36px;color:#7d6487}
      .count small{color:#7d6487}

      .date-card{width:100%;max-width:720px;margin:20px auto;display:grid;gap:12px;justify-items:center;animation:fadeUp .8s ease both 0.3s;opacity:0}
      .venue-invite{font-style:italic;color:#7d6487;font-size:1rem;line-height:1.6}
      .venue-verse{margin-top:12px;text-align:center;max-width:640px;padding:0 12px}
      .venue-verse p{font-family:"Great Vibes",cursive;font-size:1.2rem;line-height:1.4;color:#5c4f6d;margin:0 0 4px}
      .venue-verse span{font-size:.9rem;color:#7d6487;letter-spacing:.08em;text-transform:uppercase}
      .date-btn{min-width:320px;padding:20px 24px;border:none;border-radius:20px;background:linear-gradient(135deg,rgba(125,100,135,.08),rgba(125,100,135,.12));box-shadow:0 8px 20px rgba(125,100,135,.12);font-family:Cinzel,serif;font-weight:700;font-size:1.2rem;color:#7d6487;text-align:center;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease,background .2s ease}
      .date-btn:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(125,100,135,.2);background:linear-gradient(135deg,rgba(125,100,135,.14),rgba(125,100,135,.18))}

      .actions{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:18px;max-width:720px;animation:fadeUp .8s ease both 0.7s;opacity:0}
      .btn.large{padding:16px 40px;border-radius:40px;font-size:1.05rem;background:#7d6487;color:#fff;box-shadow:0 10px 28px rgba(125,100,135,.18);transition:transform .2s ease,box-shadow .2s ease}
      .btn.large:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(125,100,135,.26)}
      .small-actions{display:flex;gap:10px}
      .icon-btn{width:52px;height:52px;border-radius:999px;border:none;background:rgba(125,100,135,.12);box-shadow:0 8px 20px rgba(92,79,109,.06);cursor:pointer;font-size:18px;color:#7d6487}

      @keyframes fadeIn{
        from{opacity:0}
        to{opacity:1}
      }
      @keyframes slideUp{
        from{opacity:0;transform:translateY(10px)}
        to{opacity:1;transform:translateY(0)}
      }
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
