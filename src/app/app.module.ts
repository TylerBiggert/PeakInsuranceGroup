import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProvidersService } from './providers.service';
import { PeakHeaderComponent } from './peak-header/peak-header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ //registers component in this module
	AppComponent,
	ProvidersComponent,
	PeakHeaderComponent,
	HomeComponent,
	NotFoundComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot([// define root route for app
		{	path: '', 
			component: HomeComponent
		},
		{
			path: 'providers', 
			component: ProvidersComponent
		},
		{
			path: '**', //wild card catches any URL
			component: NotFoundComponent
		}
	]
	) 
  ],
  providers: [
	  ProvidersService //dependencies
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
