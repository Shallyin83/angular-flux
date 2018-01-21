import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/shared/model/user';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<User>,
              private router: Router) {

  }

  ngOnInit() {
  }

  addUser(user: User) {
    this.store.dispatch({ type: 'ADD_USER', payload: user });
    this.router.navigate(['users']);
  }

}
