import { Component, OnInit } from '@angular/core';
import {ModolPost} from '../modolPost/modolPost';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
post: ModolPost[];
  constructor(private activateRouter: ActivatedRoute ) {
    console.log(this.activateRouter.snapshot.data);
    this.post = this.activateRouter.snapshot.data.allPost as ModolPost[];
  }

  ngOnInit(): void {
  }

}
