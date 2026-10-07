import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { NavComponent } from './nav-component/nav-component';

@Component({
  imports: [RouterOutlet, FirstComponent, NavComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('firstProject');
}
