import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/model/user';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import { UserActions } from "app/actions/userAction";

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user$: Observable<User[]>;
  userId: number;
  
  constructor(private store: Store<User>,
              private router: Router,
              private userActions: UserActions,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      if(!!this.userId) {
        this.user$ = Observable.combineLatest(
          this.store.select('user'),
          (user: any) => {
            return user.data ? user.data[0] : {};
          }
        );
    
        this.loadUsers();
      } 
    });

    
  }

  loadUsers() {
    this.store.dispatch(this.userActions.loadUsers(this.userId));
  }


  updateUser(user: User) {
    this.store.dispatch({ type: 'UPDATE_USER', payload: user });
    this.router.navigate(['users']);
  }

}
