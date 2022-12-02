import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDetailsComponent } from './pages/message-details/message-details.component';
import {MessagesListComponent} from "./pages/messages-list/messages-list.component";
import {MessagesListViewComponent} from "./components/messages-list-view/messages-list-view.component";
import {MessageFormComponent} from "./components/message-form/message-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        MessagesListComponent,
        MessageDetailsComponent,
        MessagesListViewComponent,
        MessageFormComponent
    ],
    exports: [
        MessagesListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatGridListModule,
        MatListModule,
        MatSnackBarModule
    ]
})
export class MessagesModule { }
