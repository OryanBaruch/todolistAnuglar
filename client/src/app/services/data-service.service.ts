import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import TodoInterface from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    public http:HttpClient
  ) { }

  public BASE_URL=`http://localhost:4500/todos`
  public todos:TodoInterface
  public selectedID:String
  public completed:Boolean=false


  public fetchTodos=()=>{
    return this.http.get(`${this.BASE_URL}`).subscribe(
      (res:any)=>{
        this.todos=res
        console.log(this.todos)
      },
      (err:any)=>{
        console.log({err})
      }
    )
  }
  
  public addTodo=(body)=>{
    console.log(body)
    return this.http.post(`${this.BASE_URL}/add`,body).subscribe(
      (res:any)=>{
        this.todos=res
      },
      (err:any)=>{
        console.log(err)
      }
    )
  }

  public removeTodo=(id)=>{
    return this.http.delete(`${this.BASE_URL}/remove-todo/${id}`,).subscribe(
      (res:any)=>{
        console.log(this.selectedID)
        this.todos=res
      },
      (err:any)=>{
        console.log(err)
      }
    )
  }

  public handleCompleteTodoById=(_id, body)=>{
    return this.http.put(`${this.BASE_URL}/mark-todo/${_id}`, body).subscribe(
      (res:any)=>{
        for (let i = 0; i < this.todos.length; i++) {
          this.todos[i].complete=!this.todos[i].complete
        }
      },
      (err:any)=>{
        console.log(err)
      }
    )
  }
  // public handleCompleteTodo=(body)=>{
  //   console.log(body)
  //   return this.http.put(`${this.BASE_URL}/mark-todo`, body).subscribe(
  //     (res:any)=>{
  //       this.completed=!this.completed
  //     },
  //     (err:any)=>{
  //       console.log(err)
  //     }
  //   )
  // }


}
