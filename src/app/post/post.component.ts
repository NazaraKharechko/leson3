import {Component, Input, OnInit} from '@angular/core';
import {ModolPost} from '../modolPost/modolPost';
import {Post2Service} from '../service/post2.service';
import {ActivatedRoute, Router} from '@angular/router';
import {POSTService} from '../service/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  @Input()
  post: ModolPost[];
  constructor(private service: POSTService , private router: Router , private activatedRoute: ActivatedRoute) {
    this.service.getPost().subscribe(value => {this.post = value ; console.log(value); });
  }

  comments(post: ModolPost) {
    this.router.navigate([post.id , 'comments'] ,
      {
        state: {post} ,
        queryParams: {postId: post.id} ,
        relativeTo: this.activatedRoute,
      });
  }
}
