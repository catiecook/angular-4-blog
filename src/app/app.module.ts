import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MaterialModule } from '../assets/material/material.module';
import { AppGridComponent } from './app-grid/app-grid.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
