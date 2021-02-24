import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegisterUserComponent} from '../../user/register-user/register-user.component';

const routes: Routes = [
{path:'registerUser',component: RegisterUserComponent},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidemenuRoutingModule { }
