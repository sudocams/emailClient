import { NotFoundComponent } from './not-found/not-found.component';
import { EmailResolverService } from './email-resolver.service';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      { 
        path: 'notFound',
        component: NotFoundComponent
      },
      {
        path: '',
        component: PlaceHolderComponent
      },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: { email: EmailResolverService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
