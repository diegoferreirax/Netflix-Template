import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './ui/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowseModule } from './ui/pages/browse/browse.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
