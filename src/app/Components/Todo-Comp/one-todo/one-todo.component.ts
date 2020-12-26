import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/classes/todo';
import { TodoService } from 'src/services/todo.service';
import { AppUtil } from 'src/util/app-util';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css'],
})
export class OneTodoComponent implements OnInit {
  todo: Todo;
  onetodo: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private todoService: TodoService,
    private appUtil: AppUtil
  ) {
    this.onetodo = formbuilder.group({
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getTask($event): any {
    this.todoService.getOneTask(this.onetodo.value.id).subscribe((data) => {
      this.clear($event);
      this.todo = data;
    });
    console.log('data from get one api : ' + this.todo);
  }

  clear($event): any {
    this.todo = this.appUtil.clearAll(this.todo);
  }
}
