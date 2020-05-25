import { Email } from './../email';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email:Email;
  constructor(
    private route:ActivatedRoute) { 
      // we got acess tot eh current email using resolver
      this.email = route.snapshot.data.email; 
      this.route.data.subscribe(
        ({email})=>{
          this.email=email;
        });
    }

  ngOnInit() { }

}
