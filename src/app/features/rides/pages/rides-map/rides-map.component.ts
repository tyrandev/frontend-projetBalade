import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ride, Rides} from "../../../../core/models/ride";
import {Observable, ReplaySubject, Subscription, tap} from "rxjs";
import {RideService} from "../../../../core/services/ride.service";
import {AgmMap} from "@agm/core";

@Component({
  selector: 'app-rides-map',
  templateUrl: './rides-map.component.html',
  styleUrls: ['./rides-map.component.scss']
})
export class RidesMapComponent implements OnInit, OnDestroy {

  @ViewChild('myMap')
  private myMap: AgmMap | undefined;

  rides$: Observable<Ride[]>;

  @Input()
  currentSelectedRide: Ride | undefined;

  selectedRideSubscription? : Subscription;

  constructor(private rideService : RideService) {
    this.rides$ = rideService.GetRides()
      .pipe(tap(v => console.log("Got some rides " + v.length)));

    this.currentSelectedRide = undefined;
  }

  centerLatitude() {
    return this.currentSelectedRide ? this.currentSelectedRide.latitude : 50.85;
  }

  centerLongitude() {
    return this.currentSelectedRide ? this.currentSelectedRide.longitude : 4.35;
  }

  selectRide(ride: Ride) {
    this.rideService.SelectRide(ride);
  }

  ngOnInit(): void {
    this.selectedRideSubscription = this.rideService.GetSelectedRide()
      .subscribe(r => this.currentSelectedRide = r);
  }

  ngOnDestroy() {
    this.selectedRideSubscription?.unsubscribe();
  }

  closeRideDetails() {
    this.rideService.SelectRide(undefined);
  }
}
