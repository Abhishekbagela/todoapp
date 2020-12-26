import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/classes/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css'],
})
export class DeleteTodoComponent implements OnInit {
  todo: Todo;
  deleteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.deleteForm = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  deleteTask(): any {
    return this.todoService
      .deleteTask(this.deleteForm.value.id)
      .subscribe((data) => {
        this.todo = data;
      });
  }
}
