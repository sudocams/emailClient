import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private auth: AuthService , private route: Router) { }

  ngOnInit() {
    this.auth.Signout().subscribe(
      () => {
        this.route.navigateByUrl('/')
      });

  }

}
