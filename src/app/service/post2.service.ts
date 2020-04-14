import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModolComment} from '../modolComment/modolComment';

@Injectable({
  providedIn: 'root'
})
export class Post2Service {
  constructor(private http: HttpClient) { }

  getPost2(id): Observable<ModolComment[]> {
    return   this.http.get<ModolComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
