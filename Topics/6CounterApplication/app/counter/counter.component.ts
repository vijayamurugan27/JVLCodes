import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;
  onIncrement(){
    this.count++;
  }


  //// For normal decrement function.  
//   onDecrement(){
//     this.count--
 
// }


//// This is for not going below zero function.
  onDecrement(){
    if (this.count > 0) {
    this.count--;
  }
}

}
