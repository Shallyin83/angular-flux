import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
@Injectable()
export class UserActions {
    static REQUEST_USERS = 'REQUEST_USERS';
    loadUsers(filter): Action {
        return {
            type: UserActions.REQUEST_USERS,
            payload: filter
        };
    }
    static LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
    loadUsersSuccess(users): Action {
        return {
            type: UserActions.LOAD_USERS_SUCCESS,
            payload:users
        };
    }
    static ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
    addUserSuccess(user): Action {
        return {
            type: UserActions.ADD_USER_SUCCESS,
            payload: user
        };
    }

    static DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
    deleteUserSuccess(user): Action {
        return {
            type: UserActions.DELETE_USER_SUCCESS,
            payload: user
        };
    }

    static UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
    updateUserSuccess(user): Action {
        return {
            type: UserActions.UPDATE_USER_SUCCESS,
            payload: user
        };
    }
}