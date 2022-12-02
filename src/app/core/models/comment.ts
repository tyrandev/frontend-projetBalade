export interface Comment {

    id: number;
    content: string;
    score: number;
    difficulty: number;
    idUser: number;
    idRide: number;

}
export declare type Comments = Comment[];
