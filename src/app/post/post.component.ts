import {Component, Input, OnInit} from '@angular/core';
// import {ModolPost} from '../modolPost/modolPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  @Input()
  post: ModolPost[];
  constructor() { }


}
