import { Component, OnInit } from '@angular/core';
import { Register } from 'src/classes/register';
import { AuthService } from 'src/services/auth-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationform: FormGroup;

  ngOnInit(): void {}

  constructor(private formBuilder: FormBuilder, private service: AuthService) {
    this.registrationform = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      gender: new FormControl(),
      dob: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(): void {
    const user = new Register();
    user.name = this.registrationform.value.fullName;
    user.email = this.registrationform.value.email;
    user.gender = this.registrationform.value.gender;
    user.dob = this.registrationform.value.dob;
    user.pass = this.registrationform.value.password;

    this.service.register(user).subscribe((data) => {
      return data;
    });
  }
}
