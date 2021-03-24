import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    public DataService:DataServiceService,
    public FormBuilder:FormBuilder
  ) { }
  public todoForm:FormGroup

  ngOnInit(): void {
    this.todoForm=this.FormBuilder.group({
      content:['', Validators.required]
    })
  }

  handleAddTodo=()=>{
    this.DataService.addTodo(this.todoForm.value)
  }

}
