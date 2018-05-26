import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') toggler = false;

    @HostListener('click') toggleThetoggler() {
        this.toggler = !this.toggler;
    }
}