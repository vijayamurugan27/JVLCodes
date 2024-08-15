 import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  carName: string = '';

  // @Output() carAdded = new EventEmitter<string>();

  constructor(private carService:CarService){

  }

  onSubmit(){
    console.log(this.carName);
    //// for sending the value outside.
    // this.carAdded.emit(this.carName);


    //// Sendiong the value using car service.
    this.carService.addCarName(this.carName);

    this.carName = '';
  }

}
