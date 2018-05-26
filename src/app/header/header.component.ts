import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    @Output('on_section_select') selection = new EventEmitter<string>();
    active_tab = 'recipe-book';

    on_select_section(section_name: string) {
        this.active_tab = section_name;
        this.selection.emit(this.active_tab);
    }

}
