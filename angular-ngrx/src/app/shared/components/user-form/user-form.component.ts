import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { User } from "app/shared/model/user";


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User = new User();
  // @Input() user: User = {
  //   name: '',
  //   surname: '',
  //   birthDate: '',
  //   street: '',
  //   city: '',
  //   phone: '',
  //   number: ''
  // };
  @Output()
  addUserEvent = new EventEmitter();

  form: FormGroup;

  //user: User = new User();
  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
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
