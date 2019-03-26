import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityImageComponent } from './city-image/city-image.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    CityImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
