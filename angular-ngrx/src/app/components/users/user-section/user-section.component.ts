import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'app/shared/model/user';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import { UserActions } from "app/actions/userAction";


@Component({
  selector: 'user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSectionComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<User>,
    private userActions: UserActions) {

  }

  ngOnInit() {
    this.users$ = Observable.combineLatest(
      this.store.select('user'),
      (users: any) => {
        return users.data ? users.data : [];
      }
    );

    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(this.userActions.loadUsers(''));
  }

  deleteUser(user: User) {
    this.store.dispatch({ type: 'DELETE_USER', payload: user });
  }


}
