import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {User} from "../../../../core/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() userCreated: EventEmitter<User> = new EventEmitter<User>();
  error = '';
  constructor(private userService : UserService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email:['', Validators.required],
  });

  register(){
    this.userService.Create({
      name: this.form.value.name,
      email:this.form.value.email,
      password:this.form.value.password

    })
      .pipe(
        catchError(err => {
          if(err.error.status===5001){
            this.error = "Le nom d'utilisateur existe déjà";
          }
          else if(err.error.status===5002){
            this.error = "Cette adresse email est déja utilisée";
          }
          else{
            this.error = "Une erreur est survenue"
          }
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
