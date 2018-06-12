import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Output('on_section_select') selection = new EventEmitter<string>();
    active_tab = 'recipe-book';

    constructor(private router: Router) {}

    on_select_section(section_name: string) {
        this.active_tab = section_name;
        if(this.active_tab === 'recipe-book') {
            this.router.navigate(['recipes']);
        } else {
            this.router.navigate(['shopping']);
        }
        this.selection.emit(this.active_tab);
    }

}
