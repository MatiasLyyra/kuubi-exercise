import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AvatarSelectorComponent } from './landing-page/avatar-selector/avatar-selector.component';
import { AvatarImageComponent } from './landing-page/avatar-selector/avatar-image.component';
import { TextareaAutosizeDirective } from './textarea-autosize.directive';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AvatarSelectorComponent,
    AvatarImageComponent,
    TextareaAutosizeDirective,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
