import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBaseService } from '../interfaces/IBaseService';
import { IEntity } from '../interfaces/IEntity';

@Injectable({
  providedIn: 'root'
})

export class BaseService<T extends IEntity<string>> implements IBaseService<T> {

  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<T> {
    return this.http.get<T>(this.baseUrl);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item);
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + item.id, item);
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id);
  }

}
