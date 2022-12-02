import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ride, Rides} from "../../../../core/models/ride";
import {RideService} from "../../../../core/services/ride.service";
import {Observable, of} from "rxjs";
import {Comments} from "../../../../core/models/comment";
import {CommentApiService} from "../../../../core/services/comment-api.service";

@Component({
  selector: 'app-detail-ride',
  templateUrl: './detail-ride.component.html',
  styleUrls: ['./detail-ride.component.scss']
})
export class DetailRideComponent implements OnInit , OnChanges{

  @Input()
  currentSelectedRide: Ride | undefined;

  comments$: Observable<Comments>;

  constructor(private rideService : RideService,
              private commentService : CommentApiService) {
    this.currentSelectedRide = undefined;
    this.comments$ = of();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentSelectedRide']) {
      this.comments$= this.rideService.GetComments(this.currentSelectedRide?.id);
    }
  }



}
