import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { QuoteComponent } from './quote/quote.component';
import { AppNav } from './nav/app-nav.component';
import { VenueComponent } from './venue/venue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, AppNav, LandingComponent, QuoteComponent, VenueComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('invitation');
  protected readonly showInvitation = signal(false);
  protected readonly showQuote = signal(false);
  protected readonly showVenue = signal(false);
}
