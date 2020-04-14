import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Modeluser} from '../modelUser/modeluser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  @Input()
  user: Modeluser[];
  @Output()
  emitter = new EventEmitter();
  constructor( private router: Router , private activatedRoute: ActivatedRoute) { }


  navigate(user: Modeluser) {

    this.emitter.emit(user);
    this.router.navigate([user.id , 'posts'] ,
      {
        state: {user} ,
        queryParams: {idofuser: user.id} ,
        relativeTo: this.activatedRoute,
      });
  }
}
