import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/classes/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css'],
})
export class AllTodoComponent implements OnInit {
  constructor(private TODO_SERVICE: TodoService) {}

  todos: Todo;
  deteled: Todo;

  ngOnInit(): void {
    this.TODO_SERVICE.getAllTask().subscribe((data) => {
      // console.log(data);
      this.todos = data;
    });
  }

  deleteTodo(id: number): any {
    this.TODO_SERVICE.deleteTask(id).subscribe((data) => {
      this.deteled = data;
    });
  }
}
