import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllLandRegistersComponent} from './components/all-land-registers/all-land-registers.component';
import {CreateLandRegisterComponent} from './components/create-land-register/create-land-register.component';
import {CreateReservationNoteComponent} from './components/create-reservation-note/create-reservation-note.component';


const routes: Routes = [
  {
    path: 'allLandRegisters', component: AllLandRegistersComponent
  },
  {
    path: 'createLandRegister', component: CreateLandRegisterComponent
  },
  {
    path: 'createReservationNote', component: CreateReservationNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
