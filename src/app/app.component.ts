import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeluser} from './modelUser/modeluser';
import {UserService} from './service/user.service';
import {ModolPost} from './modolPost/modolPost';
import {PostsService} from './service/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1{background:silver}  div{border: 2px solid darkslategrey }{solid-color: #333333}`]
})
export class AppComponent {
  title = 'leson1';
  users: Modeluser[];
  post: ModolPost[];
  constructor(private userService: UserService , private postsService: PostsService) {
  this.userService.getUsers().subscribe(value => {console.log(value) ; this.users = value} );
  this.postsService.getPost().subscribe( value => {this.post = value ; console.log(value)});
  }
}
