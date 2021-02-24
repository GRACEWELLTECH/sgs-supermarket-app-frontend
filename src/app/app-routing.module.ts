import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidemenuComponent } from './components/commonComponents/sidemenu/sidemenu.component';
const routes: Routes = [
  //  { path: '', component: SidemenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
