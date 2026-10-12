import { Component } from '@angular/core';
import { ReuseExample } from '../reuse-example/reuse-example';
import { Card } from '../card/card';
import { MCard } from '../m-card/m-card';
import { MStepper } from '../m-stepper/m-stepper';

@Component({
  imports: [ReuseExample, Card, MCard, MStepper],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
