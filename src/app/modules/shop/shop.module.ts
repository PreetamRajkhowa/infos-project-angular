import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopIndexComponent } from './components/shop-index/shop-index.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ItemDetailsDialogComponent } from './components/item-details-dialog/item-details-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    ShopIndexComponent,
    ItemDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    LazyLoadImageModule
  ]
})
export class ShopModule { }
