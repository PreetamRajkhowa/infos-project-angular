import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Dialogdata {
  name:string,
  description: string;
}

@Component({
  selector: 'infos-item-details-dialog',
  templateUrl: './item-details-dialog.component.html',
  styleUrls: ['./item-details-dialog.component.scss']
})
export class ItemDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Dialogdata) { }

  ngOnInit(): void {
  }

}
