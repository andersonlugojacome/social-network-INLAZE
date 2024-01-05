import { Component } from '@angular/core';
import { Users } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: Users = {
    fullName: '',
    age: 0,
    email: '',
    password: ''
  };
  constructor(private usersService: UsersService, private router: Router, private activateRoute: ActivatedRoute ) { }

// hago el onSubmit para verificar que es un usuario registrado y que la contraseña es correcta y si es así que me redirija a la página de posts
  onSubmit() {
    this.usersService.loginUser(this.user.email, this.user.password)
    .subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        const user = localStorage.getItem('user')?.toString();
        if (user) {
          this.router.navigate(['/profile', user]);
        }
      },
      (error: any) => {
        console.log(error);
      });
  }
  onCanCel() {
    this.router.navigate(['/Login']);
   
  }


}
