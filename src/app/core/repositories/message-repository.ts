import {Observable} from "rxjs";
import {Message, Messages} from "../models/message";
import {CreateMessageRequest} from "../dto/CreateMessageRequest";

export interface MessageRepository {
    Query() : Observable<Messages>;

    GetById(id : number) : Observable<Message>;

    Create(message: CreateMessageRequest): Observable<Message>;

    Delete(id: number): Observable<any>;

    Update(id: number, message: Message): Observable<any>;
}
