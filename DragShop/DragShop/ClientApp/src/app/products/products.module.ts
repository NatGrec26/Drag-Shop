import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';

const routes: Routes = [
    {
        path: 'products',
        component: fromContainers.ProductsContainerComponent,
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...fromContainers.containers,
    ProductsContainerComponent
  ],
  providers: [],
  bootstrap: []
})
export class ProductsModule {}
