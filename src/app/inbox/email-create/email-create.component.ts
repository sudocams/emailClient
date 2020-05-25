import { EmailService } from './../email.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Email } from '../email';


@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  
  showModal = false;
  email:Email;

  constructor(private authservice:AuthService, private emailservice:EmailService) { 
    this.email={
      id:'',
      text:'',
      to:'',
      subject:'',
      html:'',
      from: `${authservice.username}@gmail.com`

    }
  }

  ngOnInit() {
  }
  onSubmit(email:Email){
    //send email to service
    this.emailservice.sendEmail(email).subscribe(
      ()=>{
        this.showModal=false;
      });
  }
}
