import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailFormComponent } from './email-form/email-form.component';


@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailReplyComponent,
    EmailShowComponent, 
    EmailCreateComponent, 
    EmailIndexComponent, 
    PlaceHolderComponent, 
    NotFoundComponent, 
    EmailFormComponent],
  imports: [
    CommonModule,
    InboxRoutingModule, 
    SharedModule, 
    ReactiveFormsModule
  ]
})
export class InboxModule { }
