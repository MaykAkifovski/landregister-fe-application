import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllLandRegistersComponent } from './components/all-land-registers/all-land-registers.component';
import { LandRegisterComponentComponent } from './components/land-register-component/land-register-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AllLandRegistersComponent,
    LandRegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
