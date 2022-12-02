import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Ride, Rides} from "../../../../core/models/ride";
import {Observable, Subscription} from "rxjs";
import {RideService} from "../../../../core/services/ride.service";
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NewRideFormComponent} from "../../components/new-ride-form/new-ride-form.component";

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit, OnDestroy {
  rides: Rides = [];
  subscriptions: Subscription[] = [];

  selectedRide?: Ride;

  constructor(
    private dialog: MatDialog,
    private rideRepository : RideService) {
  }

  ngOnInit(): void {
    this.loadRides();
    this.subscriptions.push(this.rideRepository.GetSelectedRide().subscribe(r => {
      this.selectedRide = r;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(ride => ride && ride.unsubscribe());
  }

  private loadRides() {
    this.subscriptions.push(
        this.rideRepository.Reload()
            .subscribe(rides => this.rides = rides)
    )

  }

  createRide(ride: Ride) {
    this.subscriptions.push(
        this.rideRepository.Create(ride)
            .subscribe(ride => this.rides.push(ride))
    );
  }

  deleteRide(elementToDelete: ElementToDelete<Ride>) {
    const DELETE_RIDE_FROM_LIST = () => this.rides.splice(elementToDelete.index, 1);
    this.subscriptions.push(
        this.rideRepository
            .Delete(elementToDelete.element.id)
            .subscribe(DELETE_RIDE_FROM_LIST)
    );
  }

  updateRide(ride: Ride) {
    this.subscriptions.push(
        this.rideRepository.Update(ride.id, ride)
            .subscribe()
    );
  }
  goToAddRide(){
    this.dialog.open(NewRideFormComponent, {
      height: '400px',
      width: '600px',
    });

  }

  rideClick(ride: Ride) {
    this.rideRepository.SelectRide(ride);
  }
}
