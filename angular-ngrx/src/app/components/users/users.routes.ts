import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserSectionComponent,
      },
      {
        path: 'new',
        component: AddUserComponent,
      },
      {
        path: 'edit/:userId',
        component: EditUserComponent,
      },
      {
        path: 'detail/:userId',
        component: UserDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutes { }
