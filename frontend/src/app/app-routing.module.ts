import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
// Agrego las rutas, posts, login, register, profile, logout, , 
const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/add', component: PostsFormComponent },
  { path: 'posts/edit/:id', component: PostsFormComponent },
  // { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  // { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  // { path: 'profile', loadChildren: () => import('./auth/profile/profile.module').then(m => m.ProfileModule) },
  // { path: 'logout', loadChildren: () => import('./auth/logout/logout.module').then(m => m.LogoutModule) },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
