import { Component } from '@angular/core';
import { ReuseExample } from '../reuse-example/reuse-example';
import { Card } from '../card/card';

@Component({
  imports: [ReuseExample, Card],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
