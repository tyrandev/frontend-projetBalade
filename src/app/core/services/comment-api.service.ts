import { Injectable } from '@angular/core';
import {CommentRepository} from "../repositories/comment-repository";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comment, Comments} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService implements CommentRepository {

 static readonly URL: string = environment.serverAddress + 'api/comments';

  constructor(private http: HttpClient) {

  }

  create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(CommentApiService.URL, comment);
  }

  delete(id: number): Observable<any> {//à controler
    return this.http.delete(CommentApiService.URL + '/' + id);
  }

  getAll(id: number | undefined): Observable<Comments> {
    return this.http.get<Comments>(CommentApiService.URL);
  }

  getById(id: number): Observable<Comment> {
      return this.http.get<Comment>(CommentApiService.URL + '/' + id);
  }

  update(id: number, comment: Comment): Observable<any> {//à controler
    return this.http.put(CommentApiService.URL + '/' + id, comment);
  }
}
