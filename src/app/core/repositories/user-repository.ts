import { Observable } from "rxjs";
import {User, Users } from "../models/user";
import {ApiAuthenticationResult} from "../dto/ApiAuthenticationResult";
import {CreateUserRequest} from "../dto/CreateUserRequest";

export interface UserRepository {
    GetAll(): Observable<Users>;

    GetById(id : number): Observable<User>;

    Create(user: CreateUserRequest) : Observable<User>;

    Delete(id : number) : Observable<any>;

    Update(id: number, user: User) : Observable<any>;

    Authenticate(name : string, password : string) : Observable<ApiAuthenticationResult>;

    isAdmin(): boolean;



}
