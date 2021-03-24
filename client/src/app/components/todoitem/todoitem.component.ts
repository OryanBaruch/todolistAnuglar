import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todos
  constructor(
    public DataService:DataServiceService
  ) { }

  ngOnInit(): void {
  }
public handleDelete=(id)=>{
  this.DataService.removeTodo(id)
}

}
