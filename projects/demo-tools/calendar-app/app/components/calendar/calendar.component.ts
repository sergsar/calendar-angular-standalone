import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CalendarRecordComponent } from '../calendar-record/calendar-record.component';
import { CommonModule } from '@angular/common';
import { DAYS_IN_WEEK } from '@demo-tools/calendar-app/consts';
import {
  getCurrentMonthAndYear,
  getDates,
  pull,
  range,
} from '@demo-tools/calendar-app/utils';

@Component({
  standalone: true,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule, CalendarRecordComponent, DragDropModule],
})
export class CalendarComponent {
  recordControls: FormGroup[][][];

  dates = getDates(5);

  weeks = range(this.dates);
  days = range(DAYS_IN_WEEK);

  constructor(private fb: FormBuilder) {
    this.recordControls = this.dates.map((week) => week.map(() => []));
  }

  createNewRecord(day: number, week: number) {
    this.recordControls[week][day].push(
      this.fb.group({
        text: [''],
        color: [''],
      })
    );
  }

  deleteRecord(day: number, week: number, control: FormGroup) {
    pull(this.recordControls[week][day], control);
  }

  dropItem(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getMonthName() {
    return getCurrentMonthAndYear();
  }
}
