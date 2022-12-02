export interface Ride {
    id: number;
    nameRide: string;
    place:string;
    description:string;
    website: string;
    difficulty:number;
    schedule:string;
    score:number;
    idUser: number;
    longitude: number;
    latitude: number;
}

export declare type Rides= Ride[];

