import { Component, OnInit } from '@angular/core';
import {catchError, first, throwError} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../core/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';

  constructor(
    private userService : UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit() {

  }


  login(){
    this.userService.Authenticate(this.form.value.username,this.form.value.password)
      .pipe(
        catchError(err => {
          this.error = "Mauvais login/mot de passe";
          return throwError(() => err);
        })
      )
      .subscribe(value => {
        this.goToMainMenu();
      });

  }

  goToMainMenu(){
    this.router.navigate(['/','rides']);
  }
}
