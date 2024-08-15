import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent implements OnInit{
// @Input()  carNames:string[] = []
carNames:string[] = [];

constructor (private carService:CarService){

}
ngOnInit(): void {
  this.carService.carNames$.subscribe((names)=> {
    this.carNames = names;
  })
    
}


}
