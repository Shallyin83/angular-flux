import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailContainerComponent } from './user-detail.component';

describe('ContactDetailsComponent', () => {
  let component: UserDetailContainerComponent;
  let fixture: ComponentFixture<UserDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
