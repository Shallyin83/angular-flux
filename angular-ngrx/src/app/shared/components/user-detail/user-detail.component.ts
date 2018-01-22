import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { User } from "app/shared/model/user";


@Component({
  selector: 'user-detail-container',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailContainerComponent implements OnInit {

  @Input() user: User;
  @Output() deleteUserEvent = new EventEmitter<User>();

  constructor(private router: Router) { }

  ngOnInit() {

  }

  editUser(user) {
    this.router.navigate(['/users/edit',user.id]);
  }

  deleteUser(user) {
    const r = confirm('Are you sure?');
    if (r) {
      this.deleteUserEvent.emit(user);
    }
  }
}
