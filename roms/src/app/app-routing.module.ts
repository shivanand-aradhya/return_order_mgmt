import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { ReturnorderComponent } from './components/returnorder/returnorder.component';
import { ProcessingdetailsComponent } from './components/processingdetails/processingdetails.component';
import { ConfirmprocessingComponent } from './components/confirmprocessing/confirmprocessing.component';

import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'return-order', component: ReturnorderComponent },
  { path: 'processing-details', component: ProcessingdetailsComponent },
  { path: 'confirm-processing', component: ConfirmprocessingComponent },

  { path: 'user-profile/:id', component: ProcessingdetailsComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }