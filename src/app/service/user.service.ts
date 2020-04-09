import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeluser} from '../modelUser/modeluser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Modeluser[]> {

    return   this.http.get<Modeluser[]>(`https://jsonplaceholder.typicode.com/users`);
    }
  }
