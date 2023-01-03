import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarDropdownComponent } from '../calendar-dropdown/calendar-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-record',
  templateUrl: './calendar-record.component.html',
  styleUrls: ['./calendar-record.component.css'],
  standalone: true,
  imports: [CommonModule, CalendarDropdownComponent, ReactiveFormsModule],
})
export class CalendarRecordComponent implements AfterViewInit {
  @ViewChild('textArea')
  textArea?: ElementRef<HTMLElement>;

  @Input()
  control?: FormGroup;

  @Output()
  delete = new EventEmitter<void>();

  isSelected = false;

  ngAfterViewInit() {
    setTimeout(() => this.setSelected(this.control?.value.text === ''));
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.setSelected(false);
    }
  }

  setSelected(value: boolean) {
    this.isSelected = value;
    if (value) {
      setTimeout(() => this.textArea?.nativeElement.focus());
    } else if (this.control?.value.text.trim() === '') {
      this.delete.next();
    }
  }

  getControl(name: string): FormControl {
    return this.control?.get(name) as FormControl;
  }
}
