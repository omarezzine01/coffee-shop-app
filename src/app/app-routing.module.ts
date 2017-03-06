import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


import {CoffeeItemComponent} from './coffee-item/coffee-item.component';
import {EditCoffeeItemComponent} from './edit-coffee-item/edit-coffee-item.component';

const routes: Routes=[
    {
        path: '',
        redirectTo: '/ourCoffees',
        pathMatch: 'full'
    },
    {
        path: 'ourCoffees',
        component: CoffeeItemComponent
    },
    {
        path: 'editCoffeeItem',
        component: EditCoffeeItemComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}