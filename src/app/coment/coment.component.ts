import { Component, OnInit } from '@angular/core';
import {ModolComment} from '../modolComment/modolComment';
import {ActivatedRoute, Router} from '@angular/router';
import {Post2Service} from '../service/post2.service';
import {ModolPost} from '../modolPost/modolPost';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
comment: ModolComment[];
  constructor(private activateRouter: ActivatedRoute , private postsService: Post2Service , private route: Router) {
    this.activateRouter.params.subscribe( params => console.log(params));
  }

  ngOnInit(): void {
  }

}
