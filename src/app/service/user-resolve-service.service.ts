import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Modeluser} from '../modelUser/modeluser';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<Modeluser[]>{

  constructor(private  userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Modeluser[]> | Promise<Modeluser[]> | Modeluser[] {
    return this.userService.getUsers();
  }
}
