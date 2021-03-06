import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users;

  @Output()
  deleteUserEvent = new EventEmitter();

  ngOnInit() {
  }

  deleteUser(user) {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      this.deleteUserEvent.emit(user);
    }
  }
}
