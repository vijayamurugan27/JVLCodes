import { AfterContentInit, Component, ContentChildren, contentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-simple-message',
  standalone: true,
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.css'
})
export class SimpleMessageComponent implements AfterContentInit{
 @ContentChildren('messageContent') messageElements!:QueryList<ElementRef>

 ngAfterContentInit(): void {
     this.messageElements.forEach(elements =>{
      console.log("Project content", elements.nativeElement.textContent)
     }
     )
 }

}
