import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient : HttpClient) {}

  getAllTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>
    ('${environment.apiUrl}/tasks');
  }

  create(task: Task): Observable<Task> {
    return this.httpClient.post<Task>
    ('${environment.apiUrl}/tasks', task);
  }

  update(task: Task): Observable<Task> {
    return this.httpClient.put<Task>
    ('${environment.apiUrl}/tasks/${task.id}', task);
  }

  delete(id: string){
    return this.httpClient.delete
    ('${environment.apiUrl}/tasks/${id}');
  }
}
