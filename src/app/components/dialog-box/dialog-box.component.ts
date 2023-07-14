import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { StoreService } from 'src/app/shared/store.service';

// ...


export class AppModule { }

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatNativeDateModule],
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
 
  constructor(  public dialogRef: MatDialogRef<DialogBoxComponent>,public store:StoreService) {
    console.log(store.data)
    
  }
 
  onClick(){
    
    console.log(this.store.data)
    this.dialogRef.close();

  }
}
