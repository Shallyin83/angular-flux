import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { Action } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { UserService } from "../shared/services/user.service";
import { UserActions } from "app/actions/userAction";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private userActions: UserActions
    ) { }

    @Effect()
    loadUsers$: Observable<Action> = this.actions$
        .ofType('REQUEST_USERS')
        .switchMap(action => this.userService.loadUsers(action.payload))
        .map((users: any) => this.userActions.loadUsersSuccess(users)
        );

    @Effect() addUser$ = this.actions$
        .ofType('ADD_USER')
        .map(action => action.payload)
        .switchMap(user => this.userService.addUser(user))
        .map(user => this.userActions.addUserSuccess(user));


    @Effect() deleteUser$ = this.actions$
        .ofType('DELETE_USER')
        .map(action => action.payload)
        .switchMap(user => this.userService.deleteUser(user))
        .map(user => this.userActions.deleteUserSuccess(user));
}