import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from "../../../../core/models/message";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {catchError, throwError} from "rxjs";
import {MessageApiService} from "../../../../core/services/message-api.service";
import {CreateMessageRequest} from "../../../../core/dto/CreateMessageRequest";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Output() messageCreated: EventEmitter<Message> = new EventEmitter<Message>();
  error = '';

  constructor(
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
              private messageService : MessageApiService,
              public dialogRef : MatDialogRef<MessageFormComponent>) {
  }

  form: FormGroup = this.fb.group({
    content: ['', Validators.required],
    idRecipient: [0, Validators.required],
    object: ['', Validators.required]

  });

  ngOnInit(): void {
  }

  submit() {

    this.messageService.Create({
      content : this.form.value.content,
      idRecipient : +this.form.value.idRecipient,
      object : this.form.value.object
    }).pipe(
        catchError(err => {
          this.error = "Une erreur est survenue"
          return throwError(err);
        })
    ).subscribe(value => {
      this._snackBar.open('Message envoyé', 'Ok');
      this.closeDialog();
    })
  }

  closeDialog() {
    this.dialogRef.close('message ajouté avec succès');
  }
}
