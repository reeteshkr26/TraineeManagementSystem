import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

import {FormsModule} from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddTraineeComponent } from './add-trainee/add-trainee.component';
import { TraineeListComponent } from './trainee-list/trainee-list.component';
import { DeleteTraineeComponent } from './delete-trainee/delete-trainee.component';
import { SearchTraineeComponent } from './search-trainee/search-trainee.component';

import {HttpClientModule} from '@angular/common/http';

import {TraineeServiceService} from './services/trainee-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddTraineeComponent,
    TraineeListComponent,
    DeleteTraineeComponent,
    SearchTraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
  
    BrowserAnimationsModule
  ],
  providers: [TraineeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
