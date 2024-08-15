import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})


export class AppComponent {

  ////ngOnChangesFirstChange 
  title = 'hello';
  

  //ngOnChanges

  itemList = [
    {id:1, name:'Apple'},
    {id:2, name:'Mango'},
    {id:3, name:'Orange'},
    {id:4, name:'Pine Apple'},
    {id:5, name:'Sappota'},
  ]

}


