import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';
import { TutorialsContainerComponent } from './containers/tutorials-container/tutorials-container.component';

const routes: Routes = [
    {
        path: 'tutorials',
        component: fromContainers.TutorialsContainerComponent,
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
    TutorialsContainerComponent
  ],
  providers: [],
  bootstrap: []
})
export class TutorialsModule{}