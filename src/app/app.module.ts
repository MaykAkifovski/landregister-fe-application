import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllLandRegistersComponent } from './components/all-land-registers/all-land-registers.component';
import { LandRegisterComponentComponent } from './components/land-register-component/land-register-component.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CreateLandRegisterComponent } from './components/create-land-register/create-land-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AllLandRegistersComponent,
    LandRegisterComponentComponent,
    HeaderComponent,
    CreateLandRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
