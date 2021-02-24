import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { SidemenuComponent } from './components/commonComponents/sidemenu/sidemenu.component';
import { TopNavigationComponent } from './components/commonComponents/top-navigation/top-navigation.component';
import { MainLayoutComponent } from './components/commonComponents/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    TopNavigationComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
