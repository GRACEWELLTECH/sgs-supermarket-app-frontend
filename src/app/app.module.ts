import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { SidemenuRoutingModule } from './components/commonComponents/sidemenu/sidemenu-routing.module';
import { SidemenuComponent } from './components/commonComponents/sidemenu/sidemenu.component';
import { TopNavigationComponent } from './components/commonComponents/top-navigation/top-navigation.component';
import { MainLayoutComponent } from './components/commonComponents/main-layout/main-layout.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    TopNavigationComponent,
    MainLayoutComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidemenuRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
