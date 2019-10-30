import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const baseUrl = `${environment.apiServer}/todos`;

@Injectable({
  providedIn: 'root'
})
export class TodosHttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl);
  }

  create(title: string) {
    return this.http.post<Todo>(baseUrl, { title, completed: false });
  }


}
