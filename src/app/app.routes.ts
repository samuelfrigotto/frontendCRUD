import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';

export const routes: Routes = [

  {path:"", component: UsersComponent},
  {path:"users", component: UsersComponent},
  {path:"users/add", component: UserFormComponent},
  {path:"users/:id", component: UserFormComponent}

];
