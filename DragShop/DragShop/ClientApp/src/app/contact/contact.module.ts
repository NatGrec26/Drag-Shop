import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';

const routes: Routes = [
    {
        path: 'contact',
        component: fromContainers.ContactContainerComponent,
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
    ContactContainerComponent
  ],
  providers: [],
  bootstrap: []
})
export class ContactModule { }