import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { SimpleMessageComponent } from "./simple-message/simple-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule, SimpleMessageComponent],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})

 

export class AppComponent implements DoCheck{
title_1 = "Hello";
previous_title = 'Hello';

ngDoCheck(): void {
    console.log('Change')
    //// for application on ngDoCheck

    if (this.title_1 !== this.previous_title){
      console.log('Title property Changed', this.title_1);
      this.previous_title = this.title;

    }


}


/////// for ng OnInit
//export class AppComponent implements OnInit{


  ////ngOnInit

  message = '';
  ngOnInit(): void {
    this.message = "welcomne to ANGULAR COURSE.";
      
  }



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


