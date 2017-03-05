import { Component } from '@angular/core';
import {CoffeeItemComponent} from './coffee-item/coffee-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coffeeshop App';
}
