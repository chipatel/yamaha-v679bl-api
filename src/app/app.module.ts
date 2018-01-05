import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
