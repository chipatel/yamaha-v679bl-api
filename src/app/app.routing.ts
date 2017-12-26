import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';


const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
  path:'about',
    component:AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
