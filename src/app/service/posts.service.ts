import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Modeluser} from '../modelUser/modeluser';
// import {ModolPost} from '../modolPost/modolPost';
//
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<ModolPost[]> {

    return   this.http.get<ModolPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
