import { Component } from '@angular/core';
import { Users } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {

  user: Users = {
    fullName: '',
    age: 0,
    email: '',
    password: ''
  };
  
  edit: boolean = false;
  constructor(private usersService: UsersService, private router: Router, private activateRoute: ActivatedRoute ) { }


  onSubmit() {
    //console.log(this.user);
    this.usersService.registerUser(this.user)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          console.log(error);
        });
   

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.users, null, 4));
  }
  onEdit() {
    delete this.user.createdAt;

    if (this.user._id) {
      this.usersService.updateUser(this.user._id.toString() , this.user)
        .subscribe(
          (response: any) => {
            console.log(response);
            this.router.navigate(['/users']);
          },
          (error: any) => {
            console.log(error);
          });
    }
  }
  onCanCel() {
    this.router.navigate(['/users']);
   
  }


}
