import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllLandRegistersComponent} from './components/all-land-registers/all-land-registers.component';
import {CreateLandRegisterComponent} from './components/create-land-register/create-land-register.component';


const routes: Routes = [
  {
    path: 'allLandRegisters', component: AllLandRegistersComponent
  },
  {
    path: 'createLandRegister', component: CreateLandRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
