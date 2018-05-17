import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_section = 'recipe-book';

  change_section(section_name) {
    this.show_section = section_name;
  }

}
