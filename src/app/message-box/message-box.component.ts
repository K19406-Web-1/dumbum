import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionDelegate } from '../../models/action-table';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styles: [
  ]
})
export class MessageBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getClassByType(prefix: 'bg' | 'text' | 'hr' | 'btn') {
    let type: string;
    switch (this.data.type) {
      case 'warning':
        type = 'accent';
        break;
      default:
        type = this.data.type;
    }
    switch (prefix) {
      case 'bg':
      case 'hr':
        return 'bg-' + type;
      case 'btn':
        return 'btn btn-' + type;
      default:
        return 'text-' + type;
    }
  }
}

export interface MessageData {
  title: string
  type: 'success' | 'warning' | 'danger' | 'info'
  content: string
  icon?: string
  actions?: ActionDelegate<() => void>[]
}
