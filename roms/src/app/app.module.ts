import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { ReturnorderComponent } from './components/returnorder/returnorder.component';
import { ProcessingdetailsComponent } from './components/processingdetails/processingdetails.component';
import { ConfirmprocessingComponent } from './components/confirmprocessing/confirmprocessing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ReturnorderComponent,
    ProcessingdetailsComponent,
    ConfirmprocessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,
	FormsModule
  ],
  providers: [    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
