import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getCurrentMonthAndYear } from '@demo-tools/calendar-app/utils';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="main-container">
      <div class="card-header">{{ getTitle() }}</div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  imports: [RouterModule],
})
export class AppComponent {
  getTitle() {
    return getCurrentMonthAndYear();
  }
}
