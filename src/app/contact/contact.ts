import { Component } from '@angular/core';
import { ReuseExample } from '../reuse-example/reuse-example';
import { Card } from '../card/card';

@Component({
  imports: [ReuseExample,Card],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {}
