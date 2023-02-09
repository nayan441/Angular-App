import { Component } from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styles: [
  ]
})
export class HelperComponent {


  // title = "Name"
  // firstName = "nayan"
  // lastName = "yadav"

  getName(firstName:string , lastName: string){
    alert(firstName + "  "+ lastName)
  }

  getEvent(inputs:string ){
    console.warn(inputs)

  }

}
