import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dog} from "../../../../core/models/dog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";
import {DogApiService} from "../../../../core/services/dog-api.service";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {

  @Output() dogCreated: EventEmitter<Dog> = new EventEmitter<Dog>();
  error = '';
  form: FormGroup = this.fb.group({
    nameDog: ['', Validators.required],
    raceDog:['', Validators.required],
    dateOfBirth:['', Validators.required]

  });

  constructor(private fb: FormBuilder,
              private dogRepository : DogApiService,
              public dialogRef: MatDialogRef<DogFormComponent>) { }

  ngOnInit(): void {
  }

  submit() {

    this.dogRepository.Create({
      nameDog : this.form.value.nameDog,
      raceDog : this.form.value.raceDog,
      dateOfBirth : this.form.value.dateOfBirth
    }).pipe(
      catchError(err => {
        this.error = "Une erreur est survenue"
        return throwError(err);
      })
    ).subscribe(value => {
      this.closeDialog();
    })
  }

  closeDialog() {
    this.dialogRef.close('merci pour votre ajout');
  }

}
