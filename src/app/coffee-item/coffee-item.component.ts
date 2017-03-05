import { Component, OnInit } from '@angular/core';
import {CoffeeItem} from './coffee.item';
import {COFFEES} from './coffees';

@Component({
  selector: 'coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.css',]
})
export class CoffeeItemComponent implements OnInit {

      coffees = COFFEES;
    
  constructor() { }

  ngOnInit() {
  }

}
