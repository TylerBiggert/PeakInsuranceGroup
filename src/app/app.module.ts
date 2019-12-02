import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportInjuryComponent } from './report-injury/report-injury.component';
import { QuoteComponent } from './quote/quote.component';
import { ProvidersComponent } from './providers/providers.component';

@NgModule({
  declarations: [
	AppComponent,
	ReportInjuryComponent,
	QuoteComponent,
	ProvidersComponent //registers component in this module
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
