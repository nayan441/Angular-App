import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title:string = "Todo-List App"
  listItem:any[]=[]
  getData(item){
    this.listItem.push({id:this.listItem.length, name:item})
    console.warn(this.listItem);
  
  }
  getId(id)
  {
    console.log(id);
    this.listItem= this.listItem.filter((x)=> x.id!==id)
    
  }

}
