import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ui',
    templateUrl: './ui-container.component.html'
})
export class UiContainerComponent {

    constructor(
        private router: Router,
    ) { }

}
