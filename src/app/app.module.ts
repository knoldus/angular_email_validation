import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivienFormComponent } from './template-drivien-form/template-drivien-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import{ReactiveFormsModule} from "@angular/forms";
import{FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivienFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
