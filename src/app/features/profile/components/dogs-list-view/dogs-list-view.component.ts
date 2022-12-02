import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {Dog, Dogs} from "../../../../core/models/dog";

@Component({
  selector: 'app-dogs-list-view',
  templateUrl: './dogs-list-view.component.html',
  styleUrls: ['./dogs-list-view.component.scss']
})
export class DogsListViewComponent implements OnInit {
  @Input() dogs: Dogs = [];
  @Output() dogDeleted: EventEmitter<ElementToDelete<Dog>> =
      new EventEmitter<ElementToDelete<Dog>>();
  @Output() dogChanged: EventEmitter<Dog> =
      new EventEmitter<Dog>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(dog: Dog, index: number) {
    this.dogDeleted.emit({
      element: dog,
      index: index
    });
  }

  update(dog: Dog) {
    this.dogChanged.emit(dog);
  }
}
