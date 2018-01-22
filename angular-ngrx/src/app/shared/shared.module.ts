import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { UserActions } from "app/actions/userAction";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailContainerComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';

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
        UserFormComponent
    ],
    exports: [
        UserListComponent,
        UserDetailContainerComponent,
        UserFormComponent,
        RouterModule
    ],
      providers: [UserActions, UserService],
})
export class SharedModule { }
