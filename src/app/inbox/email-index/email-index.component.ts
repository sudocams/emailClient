import { EmailService } from '../email.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emails =[];
  constructor(private emailservice:EmailService) { }

  ngOnInit() {

    this.emailservice.getEmail().subscribe(
      (emails)=>{
       this.emails= emails;
      });
  }

}
