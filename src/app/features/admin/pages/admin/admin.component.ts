import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Ride, Rides} from "../../../../core/models/ride";
import {RideRepository} from "../../../../core/repositories/ride-repository";
import {RideService} from "../../../../core/services/ride.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  pendingRides$ : Observable<Rides>;
  constructor(private rideRepository : RideService) {
    this.pendingRides$ = rideRepository.GetAllPendingRide();

  }

  ngOnInit(): void {
  }

  validate(ride: Ride) {
    this.rideRepository.ValidateRide(ride.id)
      .pipe()
      .subscribe(
        value => {
          this.pendingRides$ = this.rideRepository.GetAllPendingRide();
        }
      )

  }

  refuse(ride: Ride) {
    this.rideRepository.RefuseRide(ride.id)
      .pipe()
      .subscribe(value => {
          this.pendingRides$ = this.rideRepository.GetAllPendingRide();
        }
      )

  }
}
