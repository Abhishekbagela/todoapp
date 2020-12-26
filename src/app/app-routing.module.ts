import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth-Comp/login/login.component';
import { RegistrationComponent } from './Components/Auth-Comp/registration/registration.component';
import { AddTodoComponent } from './Components/Todo-Comp/add-todo/add-todo.component';
import { AllTodoComponent } from './Components/Todo-Comp/all-todo/all-todo.component';
import { DeleteTodoComponent } from './Components/Todo-Comp/delete-todo/delete-todo.component';
import { HomeComponent } from './Components/Todo-Comp/home/home.component';
import { OneTodoComponent } from './Components/Todo-Comp/one-todo/one-todo.component';
import { PagenotfoundComponent } from './Components/Todo-Comp/pagenotfound/pagenotfound.component';
import { UpdateTodoComponent } from './Components/Todo-Comp/update-todo/update-todo.component';

const routes: Routes = [
  // Default
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'add', component: AddTodoComponent },
  { path: 'all', component: AllTodoComponent },
  { path: 'one', component: OneTodoComponent },
  { path: 'delete', component: DeleteTodoComponent },
  { path: 'update', component: UpdateTodoComponent },

  // 404
  { path: '**', component: PagenotfoundComponent },

  // Child routes
  {
    path: 'login',
    component: LoginComponent,

    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
    ],
  },
  {
    path: '',
    component: HomeComponent,

    children: [{ path: 'home', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
