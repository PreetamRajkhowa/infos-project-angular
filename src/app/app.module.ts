import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { GlobalServiceService } from './services/global-service.service';


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
    MatBadgeModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (globalService: GlobalServiceService) => () =>
        globalService.loadInBootstrap(),
      deps: [GlobalServiceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
