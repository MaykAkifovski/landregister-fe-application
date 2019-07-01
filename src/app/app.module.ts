import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AllLandRegistersComponent} from './components/all-land-registers/all-land-registers.component';
import {LandRegisterComponentComponent} from './components/land-register-component/land-register-component.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {CreateLandRegisterComponent} from './components/create-land-register/create-land-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreateReservationNoteComponent} from './components/create-reservation-note/create-reservation-note.component';

@NgModule({
  declarations: [
    AppComponent,
    AllLandRegistersComponent,
    LandRegisterComponentComponent,
    HeaderComponent,
    CreateLandRegisterComponent,
    CreateReservationNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
