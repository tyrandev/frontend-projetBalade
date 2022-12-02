import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {Ride, Rides} from "../../../../core/models/ride";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rides-list-view',
  templateUrl: './rides-list-view.component.html',
  styleUrls: ['./rides-list-view.component.scss']
})
export class RidesListViewComponent implements OnInit, OnChanges {
  @Input() rides: Rides = [];
  @Output() rideDeleted: EventEmitter<ElementToDelete<Ride>> =
      new EventEmitter<ElementToDelete<Ride>>();
  @Output() rideChanged: EventEmitter<Ride> =
      new EventEmitter<Ride>();
  @Output() rideClick: EventEmitter<Ride> =
    new EventEmitter<Ride>();

  @Input()
  selectedRide: Ride|undefined;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['selectedRide']) {
      console.log("Selected ride changed in listview! " + this.selectedRide?.nameRide);
      let el = document.getElementById('ride-'+this.selectedRide?.id);
      if(el) el.scrollIntoView({behavior: 'smooth'});
    }
  }

  delete(ride: Ride, index: number) {
    this.rideDeleted.emit({
      element: ride,
      index: index
    });
  }

  update(ride: Ride) {
    this.rideChanged.emit(ride);
  }

  selectRide(ride: Ride) {
    console.log("Click in listview");
    this.rideClick.emit(ride);
  }
}
