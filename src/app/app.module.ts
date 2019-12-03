import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProvidersService } from './providers.service';
import { PeakHeaderComponent } from './peak-header/peak-header.component';

@NgModule({
  declarations: [
	AppComponent,
	ProvidersComponent,
	PeakHeaderComponent //registers component in this module
  ],
  imports: [
    BrowserModule
  ],
  providers: [
	  ProvidersService //dependencies
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
