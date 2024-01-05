import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  
    users: Users[] = [
    ];
    constructor(private usersService: UsersService, private router: Router ) { }
  
    ngOnInit() {
      this.getAllUsers();
    
    }

    getAllUsers() {
      this.usersService.getUsers().subscribe(
        res => {
          this.users = res;
        },
        err => console.log(err)
      );
    }


    onSubmit() {
      console.log(this.users);
      
  
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.users, null, 4));
    }
    onDelete(id: string) {
  
      //agregamos un alert para confirmar la eliminacion del post
    }
    updateProfile() {
      // this.usersService.updateUser(id).subscribe(
      //   res => {
      //     console.log(res);
      //     this.getUsers();
      //   },
      //   err => console.log(err)
      // );
    }
    goBack() {
      // lo envio a la ruta de posts
     this.router.navigate(['/posts']);
    }

}
