import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  // Add other routes as needed
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  // Add a default redirect route
  { path: '**', redirectTo: '/calendar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
