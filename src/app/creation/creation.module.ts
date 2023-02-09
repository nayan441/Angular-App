import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatButtonModule} from '@angular/material/button';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    TodoListComponent,
    ChildComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    TodoListComponent,
    MatButtonModule,
    ChildComponent,
  ]
})
export class CreationModule { }
