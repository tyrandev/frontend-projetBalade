import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Dog, Dogs} from "../../../../core/models/dog";
import {Observable, Subscription, tap} from "rxjs";
import {DogApiService} from "../../../../core/services/dog-api.service";
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DogFormComponent} from "../../components/dog-form/dog-form.component";

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit, OnDestroy {

  doglist$: Observable<Dog[]>;
  subscriptions: Subscription[] = [];
  constructor(private dogRepository : DogApiService
              ,private router : Router
              ,private dialog: MatDialog,
  ) {
    this.doglist$ = dogRepository.GetAll();
  }

  ngOnInit(): void {
    this.loadDogs();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub && sub.unsubscribe());
  }

  private loadDogs() {
    this.subscriptions.push(
      this.dogRepository.Load()
        .subscribe(dogs => {})
    );
  }

  //Get by id ???

  createDog(dog: Dog) {
    this.subscriptions.push(
      this.dogRepository.Create(dog)
        .subscribe(dog => {})
    );
  }

  deleteDog(elementToDelete: ElementToDelete<Dog>) {
    this.subscriptions.push(
      this.dogRepository
        .Delete(elementToDelete.element.id)
        .subscribe(() => {})
    );
  }

  updateDog(dog: Dog) {
    this.subscriptions.push(
      this.dogRepository.Update(dog.id, dog)
        .subscribe()
    );
  }


    OnNavigate() {
      this.dialog.open(DogFormComponent, {
        height: '400px',
        width: '600px',

      });

    }
}
