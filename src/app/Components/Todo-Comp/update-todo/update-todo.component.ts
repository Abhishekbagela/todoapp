import { Todo } from 'src/classes/todo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
  updateform: FormGroup;
  todo: Todo;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.updateform = formBuilder.group({
      task: ['', Validators.required],
      taskdate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  updateTodo(): void {
    const td = new Todo();
    td.task = this.updateform.value.task;
    td.taskDate = this.updateform.value.taskdate;

    this.todoService.updateTask(td).subscribe((data) => {
      this.todo = data;
    });
  }
}
