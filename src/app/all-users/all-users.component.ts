import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {Modeluser} from '../modelUser/modeluser';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
 users: Modeluser[];
  constructor( private activateRouter: ActivatedRoute) {
   this.users = this.activateRouter.snapshot.data.allUsers as Modeluser[];
   console.log(this.activateRouter.snapshot.data);
  }

  ngOnInit(): void {
  }

}
