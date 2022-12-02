import {Observable, ReplaySubject} from "rxjs";
import {Ride, Rides } from "../models/ride";
import {CreateRideRequest} from "../dto/CreateRideRequest";
import {Comments} from "../models/comment";
import {Users} from "../models/user";

export interface RideRepository {

    Reload(): Observable<Rides>;

    GetRides():ReplaySubject<Rides>;

    Create(ride: CreateRideRequest) : Observable<Ride>;

    Update(id: number, ride: Ride) : Observable<any>;

    Delete(id : number) : Observable<any>;

    GetById(id : number) : Observable<Ride>;

    SelectRide(ride: Ride): void;

    GetSelectedRide(): Observable<Ride|undefined>;

    GetComments(id: number | undefined): Observable<Comments>;

    GetAllPendingRide(): Observable<Rides>;

    ValidateRide(id: number): Observable<Ride>;

    RefuseRide(id: number): Observable<boolean>;
}

