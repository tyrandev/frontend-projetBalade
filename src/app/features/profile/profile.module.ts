import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './pages/dogs-list/dogs-list.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import {DogFormComponent} from "./components/dog-form/dog-form.component";
import {DogsListViewComponent} from "./components/dogs-list-view/dogs-list-view.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
    declarations: [
        DogsListComponent,
        ProfileDetailsComponent,
        DogFormComponent,
        DogsListViewComponent
    ],
    exports: [
        DogsListComponent
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
        MatListModule,
        MatGridListModule
    ]
})
export class ProfileModule { }
