import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/classes/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  msg: string;
  addTodoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.addTodoForm = formBuilder.group({
      task: ['', Validators.required],
      taskDate: ['', Validators.required],
    });
  }

  public addTodo(): any {
    const todo = new Todo();
    todo.task = this.addTodoForm.value.task;
    todo.taskDate = new Date(this.addTodoForm.value.taskDate);
    this.todoService.addTask(todo).subscribe((data) => {
      this.msg = data;
    });
  }
}
