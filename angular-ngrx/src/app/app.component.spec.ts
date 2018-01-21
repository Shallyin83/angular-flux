import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { UserService } from './shared/services/user.service';
import { UserActions } from "app/actions/userAction";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
      providers: [UserService, UserActions], 
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));



});
