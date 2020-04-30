import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../domain/tarefa';

const API = `${environment.url}/tarefas`;

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Tarefa>> {
    return this.http.get<Array<Tarefa>>(API);
  }

  public save(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(API, tarefa);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API}/${id}`);
  }

}
