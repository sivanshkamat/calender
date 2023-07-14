import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { StoreService } from 'src/app/shared/store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule,MatDialogModule,MatButtonModule,FormsModule],
})
export class CalendarComponent {
  selected: Date = new Date();
  constructor(public dialog: MatDialog,public store:StoreService) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}