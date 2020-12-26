import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from 'src/services/todo.service';
import { AppUtil } from 'src/util/app-util';
import { AppRoutingModule } from '../app-routing.module';
import { AddTodoComponent } from '../Components/Todo-Comp/add-todo/add-todo.component';
import { AllTodoComponent } from '../Components/Todo-Comp/all-todo/all-todo.component';
import { AppFooterComponent } from '../Components/Todo-Comp/app-footer/app-footer.component';
import { AppHeaderComponent } from '../Components/Todo-Comp/app-header/app-header.component';
import { AppSidebarComponent } from '../Components/Todo-Comp/app-sidebar/app-sidebar.component';
import { DeleteTodoComponent } from '../Components/Todo-Comp/delete-todo/delete-todo.component';
import { HomeComponent } from '../Components/Todo-Comp/home/home.component';
import { NavbarComponent } from '../Components/Todo-Comp/navbar/navbar.component';
import { OneTodoComponent } from '../Components/Todo-Comp/one-todo/one-todo.component';
import { PagenotfoundComponent } from '../Components/Todo-Comp/pagenotfound/pagenotfound.component';
import { UpdateTodoComponent } from '../Components/Todo-Comp/update-todo/update-todo.component';

@NgModule({
  declarations: [
    AllTodoComponent,
    OneTodoComponent,
    UpdateTodoComponent,
    DeleteTodoComponent,
    AddTodoComponent,
    AppSidebarComponent,
    HomeComponent,
    PagenotfoundComponent,
    AppFooterComponent,
    AppHeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    AllTodoComponent,
    OneTodoComponent,
    UpdateTodoComponent,
    DeleteTodoComponent,
    AddTodoComponent,
    AppSidebarComponent,
    HomeComponent,
    PagenotfoundComponent,
    AppFooterComponent,
    AppHeaderComponent,
    NavbarComponent,
  ],
  providers: [TodoService, AppUtil],
})
export class TodoAppModule {}
