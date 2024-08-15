import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myAngularApp';
}
