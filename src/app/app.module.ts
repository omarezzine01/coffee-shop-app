import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AlertModule} from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { CoffeeItemComponent } from './coffee-item/coffee-item.component';
import { EditCoffeeItemComponent } from './edit-coffee-item/edit-coffee-item.component';
import { AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeItemComponent,
    EditCoffeeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
