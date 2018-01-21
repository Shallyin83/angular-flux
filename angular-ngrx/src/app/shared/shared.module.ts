import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { UserActions } from "app/actions/userAction";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailContainerComponent } from './components/user-detail/user-detail.component';
import { AddUserContainerComponent } from './components/add-user/add-user.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        UserListComponent,
        UserDetailContainerComponent,
        AddUserContainerComponent
    ],
    exports: [
        UserListComponent,
        UserDetailContainerComponent,
        AddUserContainerComponent,
        RouterModule
    ],
      providers: [UserActions, UserService],
})
export class SharedModule { }
