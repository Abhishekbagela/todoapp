import { Todo } from 'src/classes/todo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  todo: Todo;

  constructor(
    private AUTH_SERVICE: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): any {
    console.log('Clicked');
    this.AUTH_SERVICE.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe((data) => {
      this.todo = data;
    });
  }
}
