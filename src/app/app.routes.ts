import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'calendar-app',
    loadComponent: () =>
      import('@demo-tools/calendar-app').then((m) => m.CalendarBoardComponent),
    loadChildren: () =>
      import('@demo-tools/calendar-app').then((m) => m.routes),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'calendar-app',
  },
];
