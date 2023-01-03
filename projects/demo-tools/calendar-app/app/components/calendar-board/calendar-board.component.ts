import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { IconLoadService } from '../../services/icon-load.service';

@Component({
  standalone: true,
  selector: 'app-calendar-board',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
  providers: [MatIconRegistry, IconLoadService],
  imports: [RouterModule, HttpClientModule],
})
export class CalendarBoardComponent {
  constructor(iconLoadService: IconLoadService) {
    iconLoadService.load();
  }
}
