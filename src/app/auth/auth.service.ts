import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


interface UserNameAvailble {
  available: boolean;
}

interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}
interface SigninResponse {
  username: string;
  password: string;
}


interface SignUpResponse {
  username: string;
}
interface Signedinresponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signin$ = new BehaviorSubject(null);
  username = '';

  rootUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) { }

  userNameAvailable(userName: string) {
    return this.http.post<UserNameAvailble>(this.rootUrl + ' /auth/username', {
            username: userName
        });
  }

  SignUp(credentials: SignUpCredentials) {
    return this.http.post<SignUpResponse>(this.rootUrl + '/auth/signup', credentials).
    pipe(
      tap((response) => {
        this.signin$.next(true);
        this.username = response.username;
      })
    );
  }

  checkAuth() {
    return this.http.get<Signedinresponse>(this.rootUrl + '/auth/signedin').pipe(
      tap(({authenticated, username}) => {
        this.signin$.next(authenticated);
        this.username  = username;
      })
    );
  }

  // {withCredentials} for someone to maintain stay in
  Signout() {
    return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
      tap( () => {
        this.signin$.next(false);
      })
    );
  }

  Signin(newcredentials: SigninCredentials) {
    return this.http.post<SigninResponse>(this.rootUrl + '/auth/signin', newcredentials).pipe(
      tap( (response) => {
        this.signin$.next(true);
        this.username = response.username;
      })
    );
  }
}
