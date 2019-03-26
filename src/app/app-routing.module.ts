import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityImageComponent } from './city-image/city-image.component';

const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent, 
      children: [  
      { path: 'detail/:id', component: CityDetailComponent },
      { path: 'images', component: CityImageComponent }
      ] 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
