import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {DogRepository} from "../repositories/dog-repository";
import {Dog, Dogs} from "../models/dog";
import {Observable, ReplaySubject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CreateDogRequest} from "../dto/CreateDogRequest";

@Injectable({
  providedIn: 'root'
})
export class DogApiService implements DogRepository{
  static readonly URL: string = environment.serverAddress + 'api/dog';

  private lastRetrievedDog: Dog[];
  private dogs : ReplaySubject<Dog[]>;

  constructor(private http: HttpClient) {
    this.dogs= new ReplaySubject<Dog[]>();
    this.lastRetrievedDog = [];
  }

  GetAll() : Observable<Dogs> {
    return this.dogs;
  }

  Load(): Observable<Dogs> {
    return this.http.get<Dogs>(DogApiService.URL+'/getall')
      .pipe(tap(v => {
        this.lastRetrievedDog = v;
        this.dogs.next(this.lastRetrievedDog);
      }));
  }

  GetById(id: number): Observable<Dog> {
    return this.http.get<Dog>(DogApiService.URL+ '/'+id);
  }

  Create(dog: CreateDogRequest): Observable<Dog> {
    return this.http.post<Dog>(DogApiService.URL + '/create', dog)
      .pipe(tap(newDog => {
      this.lastRetrievedDog.push(newDog);
      this.dogs.next(this.lastRetrievedDog);
    }));
  }

  Update(id: number, dog: Dog): Observable<any> {
    return this.http.put(DogApiService.URL + '/' + id, dog);
  }

  Delete(id: number): Observable<any> {
    return this.http.delete(DogApiService.URL + '/' + id)
      .pipe(tap(v => {
          this.lastRetrievedDog = this.lastRetrievedDog.filter(d => d.id !== id);
          this.dogs.next(this.lastRetrievedDog);
        }));
  }


}
