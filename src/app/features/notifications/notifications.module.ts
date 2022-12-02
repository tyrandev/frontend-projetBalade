import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotificationsListComponent } from './pages/notifications-list/notifications-list.component';



@NgModule({
    declarations: [
        NotificationsListComponent
    ],
    exports: [
        NotificationsListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NotificationsModule { }
