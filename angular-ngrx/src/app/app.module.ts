import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { user } from './reducers/user';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'app/shared/shared.module';
import { UserEffects } from "app/effects/userEffects";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,    
    HttpModule,
    AppRoutes,
    StoreModule.provideStore({ user }),
    EffectsModule.run(UserEffects),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
