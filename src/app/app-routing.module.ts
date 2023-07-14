import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'table', component: TableComponent },
  // Add a default redirect route
  { path: '**', redirectTo: '/calendar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
