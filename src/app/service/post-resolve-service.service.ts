import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostsService} from './posts.service';
import {Observable} from 'rxjs';
import {ModolPost} from '../modolPost/modolPost';

@Injectable({
  providedIn: 'root'
})
export class PostResolveServiceService implements Resolve<ModolPost[]>{
  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModolPost[]> | Promise<ModolPost[]> | ModolPost[] {
    return this.postsService.getPost();
  }
}
