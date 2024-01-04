import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    // Aquí puedes implementar la lógica de inicio de sesión
    // Usando this.user.email y this.user.password
  }

}
