import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-calendar-dropdown',
  templateUrl: './calendar-dropdown.component.html',
  styleUrls: ['./calendar-dropdown.component.css'],
  imports: [CommonModule, MatIconModule],
})
export class CalendarDropdownComponent {
  @ViewChild('firstButton')
  firstDropdownButton?: ElementRef<HTMLElement>;

  @Output()
  changed = new EventEmitter<string>();

  showDropdown = false;

  dropdownStyle() {
    return { open: this.showDropdown };
  }

  toggleDropdown(open: boolean, event: MouseEvent | null = null) {
    this.showDropdown = open;
    if (open) {
      setTimeout(() => this.firstDropdownButton?.nativeElement.focus());
      event?.stopPropagation();
    }
  }
}
