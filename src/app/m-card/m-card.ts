import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-m-card',
  styleUrl: './m-card.css',
  templateUrl: './m-card.html',
})
export class MCard {}
