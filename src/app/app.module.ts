import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RidesModule} from "./features/rides/rides.module";
import {MessagesModule} from "./features/messages/messages.module";
import {NotificationsModule} from "./features/notifications/notifications.module";
import {ProfileModule} from "./features/profile/profile.module";
import {LoginModule} from "./features/login/login.module";
import {RegisterModule} from "./features/register/register.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from '@angular/material/input';
import {JwtInInterceptor} from "./core/interceptors/jwt-in.interceptor";
import {JwtOutInterceptor} from "./core/interceptors/jwt-out.interceptor";
import {MatCardModule} from "@angular/material/card";
import { AdminComponent } from './features/admin/pages/admin/admin.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AppRoutingModule.components,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RidesModule,
    MessagesModule,
    NotificationsModule,
    ProfileModule,
    LoginModule,
    RegisterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: JwtInInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,multi: true, useClass: JwtOutInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
