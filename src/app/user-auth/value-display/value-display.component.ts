import { Component } from '@angular/core';

@Component({
  selector: 'app-value-display',
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.css']
})
export class ValueDisplayComponent {
  title = "Counter"
  show =true
  initialValue:number = 0

  counter(type:string){

  type === 'add'? this.initialValue++:this.initialValue--
  
  }

}
