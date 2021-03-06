import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';
import { CheckoutComponent } from './containers/checkout/checkout.component';

const routes: Routes = [
    {
      path: 'checkout',
      component: CheckoutComponent,
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
  ],
  providers: [],
})
export class CheckoutModule { }
