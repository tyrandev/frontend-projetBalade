import {Observable} from "rxjs";
import {Dog, Dogs} from "../models/dog";
import {CreateDogRequest} from "../dto/CreateDogRequest";

export interface DogRepository {

    Load(): Observable<Dogs>;

    GetById(id : number) : Observable<Dog>;

    Create(dog: CreateDogRequest): Observable<Dog>;

    Update(id: number, dog: Dog): Observable<any>;

    Delete(id: number): Observable<any>;
}
