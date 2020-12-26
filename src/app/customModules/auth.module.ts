import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/services/auth-service.service';
import { AppUtil } from 'src/util/app-util';
import { AppRoutingModule } from '../app-routing.module';
import { ChangepasswordComponent } from '../Components/Auth-Comp/changepassword/changepassword.component';
import { ForgotpasswordComponent } from '../Components/Auth-Comp/forgotpassword/forgotpassword.component';
import { LoginComponent } from '../Components/Auth-Comp/login/login.component';
import { RegistrationComponent } from '../Components/Auth-Comp/registration/registration.component';
import { TodoAppModule } from './todoapp.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TodoAppModule,
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
  ],
  providers: [AppUtil, AuthService],
})
export class AuthModule {}
