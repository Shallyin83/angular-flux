import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { User } from "app/shared/model/user";

@Component({
  selector: 'add-user-container',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserContainerComponent implements OnInit {

  @Output()
  addUserEvent = new EventEmitter();

  // @Input()
  // filter;

  form: FormGroup;

  user: User = new User();
  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.user.id],
      'name': [this.user.name, Validators.required],
      'surname': [this.user.surname, Validators.required],
      'birthDate': [this.user.birthDate, Validators.required],
      'street': [this.user.street, Validators.required],
      'city': [this.user.city, Validators.required],
      'phone': [this.user.phone, Validators.required],
      'number': [this.user.number]
    })
  }

  ngOnInit() {
  }

  submitUser() {
    if (this.form.valid) {
      this.addUserEvent.emit(this.user);
      this.user = new User();
    }
  }
}
