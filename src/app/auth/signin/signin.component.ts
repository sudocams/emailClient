import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  autrhForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4),
                                   Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4),
                                  Validators.maxLength(20)])
  });

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.autrhForm.invalid) {
      return;
    }
    this.authservice.Signin(this.autrhForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.autrhForm.setErrors({ credentials: true});
        }
      }
    });
  }

}
