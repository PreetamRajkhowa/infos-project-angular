import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartIndexComponent } from './components/cart-index/cart-index.component';
import { CartRightPanelComponent } from './components/cart-right-panel/cart-right-panel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartIndexComponent,
    CartRightPanelComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    FormsModule
  ]
})
export class CartModule { }
