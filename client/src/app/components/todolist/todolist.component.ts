import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(
    public DataService:DataServiceService
  ) { }

  ngOnInit(): void {
    this.fetchTodos()
  }

  fetchTodos=()=>{
    this.DataService.fetchTodos()
  }

}
