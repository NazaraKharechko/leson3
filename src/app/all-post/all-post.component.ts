import { Component, OnInit } from '@angular/core';
import {ModolPost} from '../modolPost/modolPost';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../service/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
post: ModolPost[];
  constructor(private activateRouter: ActivatedRoute , private postsService: PostsService , private route: Router) {

    this.post = this.activateRouter.snapshot.data.allPost as ModolPost[];

    this.activateRouter.params.subscribe( params => this.postsService.getPost(params.id)
      .subscribe(value => this.post = value));




    // this.activateRouter.queryParams.subscribe(queryParams => this.postsService.getPost(queryParams.idofuser)
    //   .subscribe(value => console.log(value)));
    //
    // this.postsService.getPost(this.route.getCurrentNavigation().extras.state.user.id)
    // .subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
