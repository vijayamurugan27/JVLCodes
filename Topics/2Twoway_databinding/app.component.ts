import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
// template: '<h1> Hello world</h1> and my title is {{title}}',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //string interpolation.
  title = 'myAngularApp';
  getName(){
    return 'jvl codes';
  }
  //two way data binding
  fullname:string = 'Testing input';

}