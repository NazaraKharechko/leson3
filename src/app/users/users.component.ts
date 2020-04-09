import {Component, Input, OnInit} from '@angular/core';
import {Modeluser} from '../modelUser/modeluser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  @Input()
  user: Modeluser[];
  constructor() { }



}
