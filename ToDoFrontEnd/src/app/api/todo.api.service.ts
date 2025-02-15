import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  create(todoItem: ToDoItem): Observable<void> {
    // return this.http.post<void>('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos', todoItem);
    return this.http.post<void>('https://localhost:5001/api/todos', todoItem);
  }

  update(todoItem: ToDoItem): Observable<void> {
    // return this.http.put<void>(`https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos/${todoItem.id}`, todoItem);
    return this.http.put<void>(`https://localhost:5001/api/todos/${todoItem.id}`, todoItem);
  }

  delete(id: number): Observable<void> {
    // return this.http.delete<void>(`https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos/${id}`);
    return this.http.delete<void>(`https://localhost:5001/api/todos/${id}`);
  }
}
