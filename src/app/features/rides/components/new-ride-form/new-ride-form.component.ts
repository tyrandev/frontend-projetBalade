import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ride} from "../../../../core/models/ride";
import {MatDialogRef} from "@angular/material/dialog";
import {RideService} from "../../../../core/services/ride.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-new-ride-form',
  templateUrl: './new-ride-form.component.html',
  styleUrls: ['./new-ride-form.component.scss']
})
export class NewRideFormComponent implements OnInit {
  @Output() rideCreated: EventEmitter<Ride> = new EventEmitter<Ride>();
  error = '';

  form: FormGroup = this.fb.group({
    nameRide: ['', Validators.required],
    place:['', Validators.required],
    description:['', Validators.required],
    website: ['', Validators.required],
    difficulty:['', Validators.required],
    schedule:['', Validators.required],
    score:['', Validators.required],
  });
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NewRideFormComponent>,
              private rideService : RideService) { }

  ngOnInit(): void {
  }

  submit() {
    this.rideService.Create({
      nameRide:this.form.value.nameRide,
      place: this.form.value.place,
      description: this.form.value.description,
      website: this.form.value.website,
      difficulty: this.form.value.difficulty,
      schedule: this.form.value.schedule,
      score: this.form.value.score
    }).pipe(
      catchError(err => {

        this.error = "Une erreur est survenue"
        return throwError(() => err);
      })
    )
      .subscribe(value => {
        this.closeDialog();
      });

  }

  closeDialog() {
    this.dialogRef.close('merci pour votre ajout');
  }

}
