import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { SimpleMessageComponent } from "./simple-message/simple-message.component";
import { HelloComponent } from "./hello/hello.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule, SimpleMessageComponent, HelloComponent],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})

 

export class AppComponent {

}
