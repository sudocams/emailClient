import { AthInterceptor } from './auth/ath-interceptor';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
