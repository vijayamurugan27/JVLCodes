import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{                             
  @Input() items:any[] = [];
  @Input() title = '';
  
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['items']){
        console.log('Items property Changed', changes['items'])
      }

      if (changes['title']){
        console.log('Title property Changed', changes['title'])
      }
    //// for advanced functionalitites on ngOnChangesFirstChange
    if (changes['title']){
      console.log('Title property Changed', changes['title'].previousValue)
    }



  }
}
