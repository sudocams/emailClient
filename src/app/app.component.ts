import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  signin$ : BehaviorSubject<boolean>;

  constructor(private authService:AuthService){
    this.signin$ = this.authService.signin$;
  } 

  ngOnInit() {
    this.authService.checkAuth().subscribe(()=>{});
    
  }

}
