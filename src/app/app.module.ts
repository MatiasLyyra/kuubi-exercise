import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AvatarSelectorComponent } from './landing-page/avatar-selector/avatar-selector.component';
import { AvatarImageComponent } from './landing-page/avatar-selector/avatar-image.component';
import { TextareaAutosizeDirective } from './textarea-autosize.directive';
import { SubmittedComponent } from './submitted/submitted.component';
import { FormService } from './form.service';
const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'submitted',
    component: SubmittedComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AvatarSelectorComponent,
    AvatarImageComponent,
    TextareaAutosizeDirective,
    SubmittedComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
