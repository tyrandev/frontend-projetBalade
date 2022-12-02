import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Message, Messages} from "../models/message";
import {Observable, ReplaySubject, tap} from "rxjs";
import {MessageRepository} from "../repositories/message-repository";
import {CreateMessageRequest} from '../dto/CreateMessageRequest';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService implements MessageRepository {

  static readonly URL: string = environment.serverAddress + 'api/message';

  private lastRetrievedMessage: Message[];
  private readonly messages: ReplaySubject<Message[]>;

  constructor(private http: HttpClient) {
    this.messages = new ReplaySubject<Message[]>();
    this.lastRetrievedMessage = [];
  }

  GetById(id: number) : Observable<Message> {
    return this.http.get<Message>(MessageApiService.URL + '/' +id);
  }

  GetAll() : Observable<Messages> {
    return this.messages;
  }

  Create(message: CreateMessageRequest): Observable<Message> {
    return this.http.post<Message>(MessageApiService.URL + '/create', message);
  }


  Delete(id: number): Observable<any> {
    return this.http.delete(MessageApiService.URL + '/' + id)
        .pipe(tap(mes => {
          this.lastRetrievedMessage = this.lastRetrievedMessage.filter(d => d.id != id);
          this.messages.next(this.lastRetrievedMessage);
        }));
  }

  Query() : Observable<Messages> {
    return this.http.get<Messages>(MessageApiService.URL + '/getall')
        .pipe(tap(mes => {
          this.lastRetrievedMessage = mes;
          this.messages.next(this.lastRetrievedMessage);
        }));
  }

  Update(id: number, message: Message): Observable<any> {
    return this.http.put(MessageApiService.URL + '/' + id, message);
  }

}
