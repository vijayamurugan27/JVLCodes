import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent,
    FormComponent,
    CommonModule, FormsModule, ListComponent],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})


export class AppComponent {
///// for sharing data between components.

carNames:string[] = [];

onCarAdded_1(carName:string){
  console.log(carName,'From APP');
  this.carNames.push(carName);
}






  /////for pipes.
  toDate = new Date();

  items = ['item1', 'item2', 'item3', 'item4', 'item5'];
  price: number=480;













  ////////////Directives.
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
