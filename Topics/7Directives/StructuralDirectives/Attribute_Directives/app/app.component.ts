import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myAngularApp';

  movies = [
    'Zootopia', 'Batman vs superman', 'Harry Potter', 'X-men', 'Final Destination'
  ]


  //// for structural directive - ngIF.
  ShowME: Boolean = false;
  showMe(){
    this.ShowME = true;
  }
  showMeNot(){
    this.ShowME = false;
  }
//// for using ngIf using the IF condition.
  showME1: Boolean = false;
  

  ///// for Attribute Directives.
  applyRed = false

}
