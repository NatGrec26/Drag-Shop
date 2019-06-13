import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionProductContainerComponent } from './containers/description-product-container/description-product-container.component';

// import { components } from './components';
// import * as fromContainers from './containers';

const routes: Routes = [
    {
        //path: 'description-product:value',
        path: 'description-product',
        component: DescriptionProductContainerComponent,
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
 //   ...fromContainers.containers,
   // ...components
  DescriptionProductContainerComponent],
  providers: [],
  bootstrap: []
})
export class DescriptionProductModule { }
