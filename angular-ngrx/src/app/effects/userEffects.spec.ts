import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { UserEffects } from 'app/effects/userEffects';
import { UserService } from '../shared/services/user.service';
import { Observable } from "rxjs/Observable";
import { UserActions } from 'app/actions/userAction';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

describe('User Effect', () => {
    let runner: EffectsRunner;
    let userEffects: UserEffects;
    let userService: UserService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            userEffects, UserActions, userService,
            { "provide": Http, "useValue": null }
        ]
    }));
    it('Call LOAD_USERS_SUCCESS action after REQUEST_USERS action',
        inject([
            EffectsRunner, userEffects, userService
        ],
            (_runner, _userEffects, _userService) => {
                runner = _runner;
                userEffects = _userEffects;
                userService = _userService;
                spyOn(userService, 'loadUsers')
                    .and.returnValue(Observable.of(['User1']));
                runner.queue({ type: 'REQUEST_USERS' });
                userEffects.loadUsers$.subscribe(result => {
                    expect(result.type).toEqual(UserActions.LOAD_USERS_SUCCESS);
                    expect(result.payload[0]).toEqual('User1');
                });
            })
    );
});

