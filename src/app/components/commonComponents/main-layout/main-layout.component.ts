import { Component, OnInit } from '@angular/core';
import {TopNavigationComponent} from '../top-navigation/top-navigation.component'
import {SidemenuComponent} from '../sidemenu/sidemenu.component'




@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
