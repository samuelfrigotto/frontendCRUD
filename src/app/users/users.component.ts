import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import User from '../types/user';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];
  userService = inject(UserService);
  ngOnInit(){
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
      console.log(this.users);
    });
  }

  delete(id:string){
    const ok=confirm("Você tem certeza que quer DELETAR a sua conta?");
    if(ok){
      this.userService.deleteUser(id).subscribe((result)=>{
        alert('Usuário Deletado com Sucesso.');
        this.users=this.users.filter(u=>u._id != id);
      });
    }
  }

}
