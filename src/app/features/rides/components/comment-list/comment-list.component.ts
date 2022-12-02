import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment, Comments} from "../../../../core/models/comment";
import {ElementToDelete} from "../../../../commons/element-to-delete";
import {Ride} from "../../../../core/models/ride";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input()
  comments: Comments = [];

  @Output()
  commentDeleted: EventEmitter<ElementToDelete<Comment>> = new EventEmitter<ElementToDelete<Comment>>();
  @Output()
  commentChanged: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(comment : Comment, index: number) {
    this.commentDeleted.emit({
      element: comment,
      index: index
    });
  }

  update(comment: Comment) {
    this.commentChanged.emit(comment);
  }

}
