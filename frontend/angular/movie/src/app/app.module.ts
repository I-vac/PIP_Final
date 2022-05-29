import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthguardService} from "./services/authguard.service";
import {ReactiveFormsModule} from "@angular/forms";
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieComponent,
    LoginComponent,
    NotFoundComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
