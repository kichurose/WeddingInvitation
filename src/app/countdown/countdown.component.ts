import { Component, OnDestroy, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgIf],
  template: `
    <ng-container *ngIf="!past(); else celebration">
      <div class="count">
        <div class="box"><span>{{ days() }}</span><small>Days</small></div>
        <div class="box"><span>{{ hours() }}</span><small>Hours</small></div>
        <div class="box"><span>{{ minutes() }}</span><small>Minutes</small></div>
        <div class="box"><span>{{ seconds() }}</span><small>Seconds</small></div>
      </div>
    </ng-container>
    <ng-template #celebration>
      <h3>❤️ Today is the Wedding Day ❤️</h3>
    </ng-template>
  `
})
export class CountdownComponent implements OnDestroy {
  private target = new Date('2026-07-16T11:00:00').getTime();
  private intervalId = 0;

  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);
  past = signal(false);

  constructor() {
    this.update();
    this.intervalId = window.setInterval(() => this.update(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private update() {
    const diff = this.target - Date.now();
    if (diff < 0) {
      this.past.set(true);
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      return;
    }

    this.past.set(false);
    this.days.set(Math.floor(diff / 86400000));
    this.hours.set(Math.floor((diff % 86400000) / 3600000));
    this.minutes.set(Math.floor((diff % 3600000) / 60000));
    this.seconds.set(Math.floor((diff % 60000) / 1000));
  }
}
