import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/classes/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private BASE_URL = 'http://localhost:8080/todoapp/todos';

  constructor(private http: HttpClient) {}

  // Add
  addTask(todo: Todo): Observable<any> {
    return this.http.post(this.BASE_URL, todo);
  }

  // Get
  getOneTask(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    // console.log('ID : ' + id);
    return this.http.get(this.BASE_URL + '/todo', { params });
  }

  // Get All
  getAllTask(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  // Update
  updateTask(todo: Todo): Observable<any> {
    return this.http.put(this.BASE_URL + '/update', todo);
  }

  // Delete
  deleteTask(id: number): Observable<any> {
    return this.http.delete(this.BASE_URL + '/delete' + '/' + id);
  }
}
