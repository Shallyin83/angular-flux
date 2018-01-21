import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from 'app/shared/model/user';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import { UserActions } from "app/actions/userAction";


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {

  users$: Observable<User[]>;
  userId: number;
  constructor(private store: Store<User>,
    private userActions: UserActions,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
    });

    this.users$ = Observable.combineLatest(
      this.store.select('user'),
      (users: any) => {
        return users.data ? users.data[0] : {};
      }
    );

    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(this.userActions.loadUsers(this.userId));
  }

  deleteUser(user: User) {
    this.store.dispatch({ type: 'DELETE_USER', payload: user });
    this.router.navigate(['/users']);
  }
}
