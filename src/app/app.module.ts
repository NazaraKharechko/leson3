import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import { HollowComponent } from './hollow/hollow.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllPostComponent } from './all-post/all-post.component';
import { ComentComponent } from './coment/coment.component';
import {UserResolveService} from './service/user-resolve-service.service';


const routes: Routes = [
  {path: '' , component: HollowComponent },
  {path: 'users' , component: AllUsersComponent , resolve: {allUsers: UserResolveService}
  , children: [{path: ':id/posts' , component: AllPostComponent}] },
 {path: 'post' , component: PostComponent  , children:[{path: ':id/cement', component: ComentComponent }] },
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostComponent,
    HollowComponent,
    AllUsersComponent,
    AllPostComponent,
    ComentComponent
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
