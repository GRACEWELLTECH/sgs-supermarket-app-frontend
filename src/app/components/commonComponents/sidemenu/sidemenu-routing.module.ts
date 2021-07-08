import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegisterUserComponent} from '../../user/register-user/register-user.component';
import {CreateRoleComponent} from '../../user/create-role/create-role.component';
import {CreatePermissionComponent} from '../../user/create-permission/create-permission.component';

import {ItemMasterComponent} from '../../InventoryModule/item-master/item-master.component';

const routes: Routes = [
{path:'registerUser',component: RegisterUserComponent},
{path:'createRole',component: CreateRoleComponent},
{path:'createPermission',component: CreatePermissionComponent},
{path:'itemmaster',component: ItemMasterComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidemenuRoutingModule { }
