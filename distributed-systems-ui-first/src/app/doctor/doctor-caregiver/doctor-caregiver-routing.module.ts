import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Authorization Guardian which allow the user to continue or not
 * if it's a valid user */
import { AuthGuard } from '../../shared/services/auth.guard.service';
import { DoctorCaregiverComponent } from './doctor-caregiver/doctor-caregiver.component';

/** Module components */

const routes: Routes = [
  { path: '', component: DoctorCaregiverComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorCaregiverRoutingModule { }
