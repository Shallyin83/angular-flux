import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { UserSectionComponent } from './user-section/user-section.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routes';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,        
        UsersRoutes,
    ],
    declarations: [
        UsersComponent,
        UserSectionComponent,
        UserDetailComponent,
        AddUserComponent
    ],
})
export class UsersModule { }
