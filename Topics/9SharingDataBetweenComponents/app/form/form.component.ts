import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  @Output() carAdded = new EventEmitter<string>();

  onSubmit(){
    console.log(this.carName);
    //// for sending the value outside.
    this.carAdded.emit(this.carName);

    this.carName = '';
  }

}
