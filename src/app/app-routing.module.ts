import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {RidesMapComponent} from "./features/rides/pages/rides-map/rides-map.component";
import {
  NotificationsListComponent
} from "./features/notifications/pages/notifications-list/notifications-list.component";
import {ProfileDetailsComponent} from "./features/profile/pages/profile-details/profile-details.component";
import {LoginComponent} from "./features/login/pages/login/login.component";
import {RegisterComponent} from "./features/register/pages/register/register.component";
import {MessageDetailsComponent} from "./features/messages/pages/message-details/message-details.component";
import {AuthenticatedGuard} from "./core/guards/authenticated.guard";
import {NewRideFormComponent} from "./features/rides/components/new-ride-form/new-ride-form.component"
import {AdminComponent} from "./features/admin/pages/admin/admin.component";
import {AdministratorGuard} from "./core/guards/administrator.guard";
import {NotAuthenticatedGuard} from "./core/guards/not-authenticated.guard";
import {DogFormComponent} from "./features/profile/components/dog-form/dog-form.component";
import {DogsListComponent} from "./features/profile/pages/dogs-list/dogs-list.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    canActivate: [NotAuthenticatedGuard],
    path: 'login', component: LoginComponent
  },
  {
    canActivate: [NotAuthenticatedGuard],
    path: 'register', component: RegisterComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'rides', component: RidesMapComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'messages', component: MessageDetailsComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'notifications', component: NotificationsListComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'profile', component: ProfileDetailsComponent
  },
  {
    canActivate: [AuthenticatedGuard,AdministratorGuard],
    path: 'admin', component: AdminComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [AppComponent];
}
