import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { NewlyAddedComponent } from './components/newly-added/newly-added.component';
import { HomeAboutUsComponent } from './components/home-about-us/home-about-us.component';



@NgModule({
  declarations: [
    HomeCarouselComponent,
    NewlyAddedComponent,
    HomeAboutUsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LazyLoadImageModule

  ]
})
export class HomeModule { }
