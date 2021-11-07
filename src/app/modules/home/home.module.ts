import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';



@NgModule({
  declarations: [
    HomeCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule

  ]
})
export class HomeModule { }
