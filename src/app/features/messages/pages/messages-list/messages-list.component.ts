import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message, Messages} from "../../../../core/models/message";
import {Observable, Subscription} from "rxjs";
import {MessageApiService} from "../../../../core/services/message-api.service";
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {MatDialog} from "@angular/material/dialog";
import {MessageFormComponent} from "../../components/message-form/message-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit, OnDestroy {

  //messages: Messages = [];
  subscriptions: Subscription[] = [];
  messagelist$: Observable<Message[]>;

  constructor(private messageService: MessageApiService,
                private router : Router,
                private dialog: MatDialog) {

    this.messagelist$ = messageService.GetAll();
  }

  ngOnInit(): void {
    this.loadsMessages();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub && sub.unsubscribe());
  }

  private loadsMessages() {
    this.subscriptions.push(
        this.messageService.Query()
            .subscribe(messages => {})
    );
  }

  postMessage(message: Message) {
    this.subscriptions.push(
        this.messageService.Create(message)
            .subscribe(message => {})
    );
  }

  deleteMessage(elementTodelete: ElementToDelete<Message>) {
    this.subscriptions.push(
        this.messageService
            .Delete(elementTodelete.element.id)
            .subscribe(() => {})
    );
  }

  updateMessage(message: Message) {
    this.subscriptions.push(
        this.messageService.Update(message.id, message)
            .subscribe()
    );
  }

  OnNavigate() {
    this.dialog.open(MessageFormComponent, {
      height: '400px',
      width: '600px',
    });
  }


}
