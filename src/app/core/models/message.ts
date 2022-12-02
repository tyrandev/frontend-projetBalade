export interface Message {
    id: number;
    content : string;
    idRecipient : number;
    idSender : number;
    object : string;
}

export declare type Messages = Message[];
