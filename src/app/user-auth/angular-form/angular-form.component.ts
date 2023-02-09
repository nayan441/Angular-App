import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';


@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent {
title: string = "Basic Form"
userData:any = {}
display= false
toggle(){
this.display = !this.display
}

getData(data:NgForm){
  console.warn(data)
  this.userData = data
}
}
