import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { LoginComponent } from './components/login/login.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { ProfileComponent } from './components/profile/profile.component';
// Agrego las rutas, posts, login, register, profile, logout, , 
const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/add', component: PostsFormComponent },
  { path: 'posts/edit/:id', component: PostsFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UsersFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: UsersFormComponent },

  { path: '', redirectTo: '/posts', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
