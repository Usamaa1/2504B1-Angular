import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  

  title = input<string>('');
  body = input<string>('');
}
