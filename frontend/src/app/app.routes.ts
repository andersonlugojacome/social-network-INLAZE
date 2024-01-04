import { RouterModule, Routes } from '@angular/router';
//creo todas la rutas que voy a utilizar login, register, wall, post-card

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WallComponent } from './components/wall/wall.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wall', component: WallComponent },
  { path: 'post/:id', component: PostCardComponent },
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  // si es una ruta que no existe, redirecciona a wall
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

