import { AuthService } from './../auth.service';
import { UniqueName } from './../validators/unique-name';
import { PasswordMatch } from './../validators/password-match';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { error } from 'protractor';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3),
                                   Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)],
                                   [this.unikename.validate]),

    password: new FormControl('', [Validators.required, Validators.minLength(5),
                                  Validators.maxLength(17)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(5),
                                     Validators.maxLength(17)])
  }, 
  { validators: [this.match.validate]});

  constructor( 
    private match: PasswordMatch,
    private unikename: UniqueName,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.SignUp(this.authForm.value).subscribe({
      next: response =>{
        this.router.navigateByUrl('/inbox');
      },
      error : err => {
        if (err.status) {
          this.authForm.setErrors({ noConnection: true });
        } else if (err.status) {
          this.authForm.setErrors({  nonUserName: true });
        } else {
          this.authForm.setErrors({ unknownerror: true});
        }
      }
    });
    }
}
