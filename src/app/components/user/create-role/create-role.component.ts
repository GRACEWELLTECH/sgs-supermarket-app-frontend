import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Admin', weight: "", symbol: 'H'},
  {position: 2, name: 'Stock manager', weight: '', symbol: 'He'},
  {position: 3, name: 'casher', weight: '', symbol: 'Li'},
  {position: 4, name: 'superviser', weight: '', symbol: 'Be'},
  {position: 5, name: 'packingpersion', weight: '', symbol: 'B'},
  
];
@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
