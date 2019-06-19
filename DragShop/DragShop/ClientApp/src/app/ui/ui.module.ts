import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { components } from './components';
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: 'ui',
        component: fromContainers.UiContainerComponent,
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
        ...fromContainers.containers ,
        ...components
    ],
    exports: [...fromContainers.containers ,
    ...components],
    providers: [],
    bootstrap: []
})
export class UiModule { }
