import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message, Messages} from "../../../../core/models/message";
import {ElementToDelete} from "../../../../commons/element-to-delete";

@Component({
  selector: 'app-messages-list-view',
  templateUrl: './messages-list-view.component.html',
  styleUrls: ['./messages-list-view.component.scss']
})
export class MessagesListViewComponent implements OnInit {

  @Input() messages: Messages = [];
  @Output() messageDeleted: EventEmitter<ElementToDelete<Message>> =
      new EventEmitter<ElementToDelete<Message>>();
  @Output() messageChanged: EventEmitter<Message> =
      new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(message: Message, index: number) {
    this.messageDeleted.emit({
     element: message,
      index: index
    });
  }

  update(message: Message) {
    this.messageChanged.emit(message);
  }
}
