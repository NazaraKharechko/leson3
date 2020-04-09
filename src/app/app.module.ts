import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import { HollowComponent } from './hollow/hollow.component';
import { AllUsersComponent } from './all-users/all-users.component';
import {UserResolveService} from './service/user-resolve.service';
import { AllPostComponent } from './all-post/all-post.component';
import {PostResolveServiceService} from './service/post-resolve-service.service';


const routes: Routes = [
  {path: 'users' , component: AllUsersComponent , resolve: {allUsers: UserResolveService} },
  {path: '' , component: HollowComponent },
  {path: 'post' , component: AllPostComponent , resolve: {allPost: PostResolveServiceService} },
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostComponent,
    HollowComponent,
    AllUsersComponent,
    AllPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
