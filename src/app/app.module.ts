import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { GlobalServiceService } from './services/global-service.service';
import { SiteInterceptor } from './site.interceptor';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatBadgeModule,
    LazyLoadImageModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (globalService: GlobalServiceService) => () =>
        globalService.loadInBootstrap(),
      deps: [GlobalServiceService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: SiteInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
