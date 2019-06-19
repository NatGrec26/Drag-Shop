import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartContainerComponent } from './containers/shopping-cart-container/shopping-cart-container.component';
import { components } from './components';
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: 'shopping-cart',
        component: ShoppingCartContainerComponent,
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ...fromContainers.containers,
        ...components,
    ],
    providers: [],
    bootstrap: []
})
export class ShoppingCartModule { }
